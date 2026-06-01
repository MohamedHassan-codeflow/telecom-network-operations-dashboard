import ImportExportBar from '../components/ImportExportBar.jsx'
import KpiTrend from '../components/KpiTrend.jsx'
import SiteMap from '../components/SiteMap.jsx'
import StatCard from '../components/StatCard.jsx'
import AssistantPanel from '../components/AssistantPanel.jsx'

function Dashboard({ sites, alarms, visibleSites, visibleAlarms, stats, handleCsvUpload, settings }) {
  return (
    <>
      <ImportExportBar sites={visibleSites} alarms={visibleAlarms} onCsvUpload={handleCsvUpload} />
      {settings.defaultRegion !== 'All Regions' && <p className="filter-note">Dashboard filtered by region: <strong>{settings.defaultRegion}</strong></p>}
      <section className="stats-grid">
        <StatCard title="Total Sites" value={stats.total} caption="Filtered operational records" />
        <StatCard title="Active Sites" value={stats.active} caption="Currently available sites" />
        <StatCard title="Critical Alarms" value={stats.critical} caption="Immediate action required" type="danger" />
        <StatCard title="Avg Availability" value={`${stats.availability}%`} caption="Current data average" type="warning" />
      </section>
      <section className="content-grid">
        <KpiTrend />
        {settings.showMap ? <SiteMap sites={visibleSites} /> : <section className="panel"><h3>Site Map Hidden</h3><p className="muted">Enable the map again from Settings.</p></section>}
      </section>
      <AssistantPanel alarms={visibleAlarms} />
    </>
  )
}
export default Dashboard
