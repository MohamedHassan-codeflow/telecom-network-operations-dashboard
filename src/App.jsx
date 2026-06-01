import { useMemo, useState } from 'react'
import Swal from 'sweetalert2'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar.jsx'
import StatCard from './components/StatCard.jsx'
import KpiChart from './components/KpiChart.jsx'
import SiteMap from './components/SiteMap.jsx'
import SitesTable from './components/SitesTable.jsx'
import AlarmsPanel from './components/AlarmsPanel.jsx'
import AssistantPanel from './components/AssistantPanel.jsx'
import { alarmData, siteData } from './data/telecomData.js'

function App() {
  const [theme, setTheme] = useState('dark')

  const stats = useMemo(() => {
    const activeSites = siteData.filter((site) => site.status === 'Active').length
    const criticalAlarms = alarmData.filter((alarm) => alarm.severity === 'Critical').length
    const avgAvailability = siteData.reduce((sum, site) => sum + site.availability, 0) / siteData.length

    return {
      totalSites: siteData.length,
      activeSites,
      criticalAlarms,
      avgAvailability: `${avgAvailability.toFixed(1)}%`
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
  }

  const handleCsvUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    Swal.fire({
      title: 'CSV uploaded',
      text: `${file.name} uploaded successfully. CSV parsing can be connected later to update sites, alarms, and KPIs.`,
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  return (
    <>
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />

      <main className="main">
        <motion.section
          id="overview"
          className="hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <p className="eyebrow">RAN / 4G / 5G Monitoring</p>
            <h2>Telecom Network Operations Dashboard</h2>
            <p className="muted">
              Track sites, alarms, KPIs, utilization, and suggested troubleshooting actions from one clean React interface.
            </p>
          </div>

          <div className="hero-actions">
            <label className="primary-btn" htmlFor="csvInput">Upload CSV</label>
            <input id="csvInput" type="file" accept=".csv" hidden onChange={handleCsvUpload} />
          </div>
        </motion.section>

        <section className="stats-grid">
          <StatCard title="Total Sites" value={stats.totalSites} caption="Across all regions" />
          <StatCard title="Active" value={stats.activeSites} caption="Healthy network cells" />
          <StatCard title="Critical Alarms" value={stats.criticalAlarms} caption="Needs immediate action" variant="danger" />
          <StatCard title="Avg Availability" value={stats.avgAvailability} caption="Last 24 hours" variant="warning" />
        </section>

        <section className="content-grid">
          <KpiChart />
          <SiteMap sites={siteData} />
        </section>

        <SitesTable sites={siteData} />
        <AlarmsPanel alarms={alarmData} />
        <AssistantPanel alarms={alarmData} />
      </main>
    </>
  )
}

export default App
