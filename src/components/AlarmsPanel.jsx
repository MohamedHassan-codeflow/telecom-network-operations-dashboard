import { useMemo, useState } from 'react'

const ALARMS_PER_PAGE = 6

function AlarmsPanel({ alarms }) {
  const [severity, setSeverity] = useState('all')
  const [page, setPage] = useState(1)

  const filteredAlarms = useMemo(() => {
    return severity === 'all' ? alarms : alarms.filter((alarm) => alarm.severity === severity)
  }, [alarms, severity])

  const totalPages = Math.max(1, Math.ceil(filteredAlarms.length / ALARMS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const currentAlarms = filteredAlarms.slice((currentPage - 1) * ALARMS_PER_PAGE, currentPage * ALARMS_PER_PAGE)

  const handleSeverityChange = (event) => {
    setSeverity(event.target.value)
    setPage(1)
  }

  return (
    <section id="alarms" className="panel">
      <div className="panel-header responsive-header">
        <div>
          <h3>Alarms</h3>
          <p className="muted mini">Showing {currentAlarms.length} of {filteredAlarms.length} alarms</p>
        </div>
        <select className="search" value={severity} onChange={handleSeverityChange}>
          <option value="all">All severities</option>
          <option value="Critical">Critical</option>
          <option value="Major">Major</option>
          <option value="Minor">Minor</option>
          <option value="Warning">Warning</option>
        </select>
      </div>

      <div className="alarm-list">
        {currentAlarms.map((alarm, index) => (
          <div className="alarm-card" key={`${alarm.site}-${alarm.type}-${index}`}>
            <div className="alarm-card-top">
              <div>
                <strong>{alarm.type}</strong>
                <p className="muted">{alarm.site} · {alarm.time}</p>
              </div>
              <span className={`badge ${alarm.severity}`}>{alarm.severity}</span>
            </div>
            <div className="alarm-solution"><strong>Suggested action:</strong> {alarm.solution}</div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="ghost-btn" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className="ghost-btn" disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}>Next</button>
      </div>
    </section>
  )
}

export default AlarmsPanel
