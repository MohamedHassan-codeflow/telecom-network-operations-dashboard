import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Swal from 'sweetalert2'
import Login from './pages/Login.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Sites from './pages/Sites.jsx'
import Alarms from './pages/Alarms.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'
import { initialAlarms, initialSites } from './data/telecomData.js'
import { parseCsv } from './utils/csv.js'

const defaultSettings = {
  defaultRegion: 'All Regions',
  slaMode: 'Operational SLA',
  pageSize: 10,
  compactView: false,
  showMap: true
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('telecomAuth') === 'true')
  const [theme, setTheme] = useState(() => localStorage.getItem('telecomTheme') || 'dark')
  const [settings, setSettings] = useState(() => {
    try {
      return { ...defaultSettings, ...JSON.parse(localStorage.getItem('telecomSettings') || '{}') }
    } catch {
      return defaultSettings
    }
  })
  const [sites, setSites] = useState(initialSites)
  const [alarms, setAlarms] = useState(initialAlarms)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('telecomTheme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('telecomSettings', JSON.stringify(settings))
    document.documentElement.dataset.compact = settings.compactView ? 'true' : 'false'
  }, [settings])

  const availableRegions = useMemo(() => ['All Regions', ...new Set(sites.map((site) => site.region).filter(Boolean))], [sites])

  const visibleSites = useMemo(() => {
    if (settings.defaultRegion === 'All Regions') return sites
    return sites.filter((site) => site.region === settings.defaultRegion)
  }, [sites, settings.defaultRegion])

  const visibleAlarms = useMemo(() => {
    if (settings.defaultRegion === 'All Regions') return alarms
    return alarms.filter((alarm) => alarm.region === settings.defaultRegion)
  }, [alarms, settings.defaultRegion])

  const stats = useMemo(() => {
    const active = visibleSites.filter((site) => site.status === 'Active').length
    const critical = visibleAlarms.filter((alarm) => alarm.severity === 'Critical').length
    const breached = visibleAlarms.filter((alarm) => alarm.sla === 'Breached').length
    const availability = visibleSites.reduce((sum, site) => sum + Number(site.availability || 0), 0) / Math.max(visibleSites.length, 1)
    return { total: visibleSites.length, active, critical, breached, availability: availability.toFixed(2) }
  }, [visibleSites, visibleAlarms])

  const login = () => {
    localStorage.setItem('telecomAuth', 'true')
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('telecomAuth')
    setIsAuthenticated(false)
  }

  const updateSettings = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const resetSettings = () => {
    setTheme('dark')
    setSettings(defaultSettings)
    Swal.fire('Settings reset', 'Dashboard preferences returned to default values.', 'success')
  }

  const handleCsvUpload = async (event, type) => {
    const file = event.target.files?.[0]
    if (!file) return
    const text = await file.text()
    const rows = parseCsv(text)

    if (!rows.length) {
      Swal.fire('Invalid CSV', 'No valid rows were found in this file.', 'error')
      return
    }

    if (type === 'sites') {
      const formatted = rows.map((row, index) => ({
        id: row.id || row.siteId || `CSV-SITE-${index + 1}`,
        region: row.region || 'Imported',
        city: row.city || row.region || 'Imported',
        vendor: row.vendor || 'Unknown',
        technology: row.technology || 'LTE',
        status: row.status || 'Active',
        availability: Number(row.availability || 98),
        sla: row.sla || 'Within SLA',
        assignedTeam: row.assignedTeam || row.team || 'NOC Team',
        ticket: row.ticket || 'N/A',
        x: Number(row.x || 20 + ((index * 13) % 70)),
        y: Number(row.y || 20 + ((index * 17) % 65))
      }))
      setSites(formatted)
      Swal.fire('Sites updated', `${formatted.length} site records imported successfully.`, 'success')
    } else {
      const formatted = rows.map((row, index) => ({
        id: row.id || `A-CSV-${index + 1}`,
        siteId: row.siteId || row.site || 'Unknown Site',
        type: row.type || row.alarmType || 'Generic Alarm',
        severity: row.severity || 'Major',
        region: row.region || 'Imported',
        technology: row.technology || 'LTE',
        alarmAge: row.alarmAge || row.age || '0h 00m',
        assignedTeam: row.assignedTeam || row.team || 'NOC Team',
        sla: row.sla || 'Within SLA',
        rootCause: row.rootCause || 'Imported alarm requires analysis.',
        action: row.action || 'Review alarm details and assign proper troubleshooting owner.'
      }))
      setAlarms(formatted)
      Swal.fire('Alarms updated', `${formatted.length} alarm records imported successfully.`, 'success')
    }
    event.target.value = ''
  }

  const context = {
    sites,
    alarms,
    visibleSites,
    visibleAlarms,
    stats,
    theme,
    setTheme,
    settings,
    updateSettings,
    resetSettings,
    availableRegions,
    logout,
    handleCsvUpload
  }

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={login} />} />
      <Route path="/" element={isAuthenticated ? <DashboardLayout {...context} /> : <Navigate to="/login" replace />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard {...context} />} />
        <Route path="sites" element={<Sites {...context} />} />
        <Route path="alarms" element={<Alarms {...context} />} />
        <Route path="reports" element={<Reports {...context} />} />
        <Route path="settings" element={<Settings {...context} />} />
      </Route>
      <Route path="*" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />} />
    </Routes>
  )
}

export default App
