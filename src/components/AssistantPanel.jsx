import { useState } from 'react'
import { troubleshootingLibrary } from '../data/telecomData.js'

function AssistantPanel({ alarms }) {
  const types = [...new Set(alarms.map((alarm) => alarm.type))]
  const [type, setType] = useState(types[0] || '')
  const selectedAlarm = alarms.find((alarm) => alarm.type === type)
  return (
    <article className="panel assistant-panel">
      <div className="panel-header responsive-header">
        <div><h3>Troubleshooting Assistant</h3><p className="muted mini">Root cause and recommended actions</p></div>
        <select className="input-control alarm-select" value={type} onChange={(e) => setType(e.target.value)}>{types.map((alarmType) => <option key={alarmType}>{alarmType}</option>)}</select>
      </div>
      <div className="assistant-result">
        <div><strong>Root cause:</strong><p>{selectedAlarm?.rootCause || 'Select an alarm to display root cause guidance.'}</p></div>
        <div><strong>Recommended action:</strong><p>{troubleshootingLibrary[type] || selectedAlarm?.action || 'No recommendation available.'}</p></div>
        <div className="assistant-meta"><span>Severity: {selectedAlarm?.severity || '-'}</span><span>SLA: {selectedAlarm?.sla || '-'}</span><span>Owner: {selectedAlarm?.assignedTeam || '-'}</span></div>
      </div>
    </article>
  )
}
export default AssistantPanel
