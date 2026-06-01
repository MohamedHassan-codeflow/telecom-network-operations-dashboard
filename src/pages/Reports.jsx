import ImportExportBar from '../components/ImportExportBar.jsx'

function Reports({ visibleSites, visibleAlarms, handleCsvUpload, stats, settings }) {
  const breachedSites = visibleSites.filter((site) => site.sla === 'Breached' || site.sla === 'At Risk')
  const criticalAlarms = visibleAlarms.filter((alarm) => alarm.severity === 'Critical' || alarm.severity === 'Major')
  return (
    <>
      <ImportExportBar sites={visibleSites} alarms={visibleAlarms} onCsvUpload={handleCsvUpload} />
      <section className="print-report panel">
        <div className="panel-header"><div><h3>{settings.slaMode} Report</h3><p className="muted mini">Ready for CSV export or browser PDF printing · Region: {settings.defaultRegion}</p></div></div>
        <div className="report-grid">
          <div><span>Total Sites</span><strong>{stats.total}</strong></div>
          <div><span>Average Availability</span><strong>{stats.availability}%</strong></div>
          <div><span>Critical/Major Alarms</span><strong>{criticalAlarms.length}</strong></div>
          <div><span>SLA Risk/Breach</span><strong>{breachedSites.length}</strong></div>
        </div>
        <h4>Executive Summary</h4>
        <p>The current {settings.slaMode.toLowerCase()} view contains {visibleSites.length} sites and {visibleAlarms.length} active alarms. Critical and major alarms should be prioritized based on SLA status, alarm age, and assigned team ownership.</p>
        <h4>Recommended Focus</h4>
        <ul>
          <li>Prioritize breached SLA alarms and site down cases.</li>
          <li>Review degraded 5G NSA/SA sites with high alarm age.</li>
          <li>Validate assigned team ownership and escalation route.</li>
        </ul>
      </section>
    </>
  )
}
export default Reports
