import DataTable from '../components/DataTable.jsx'
import AssistantPanel from '../components/AssistantPanel.jsx'

const columns = [
  { key: 'id', label: 'Alarm ID' },
  { key: 'siteId', label: 'Site' },
  { key: 'type', label: 'Alarm Type' },
  { key: 'severity', label: 'Severity', render: (value) => <span className={`badge-pill ${value}`}>{value}</span> },
  { key: 'region', label: 'Region' },
  { key: 'technology', label: 'Technology' },
  { key: 'alarmAge', label: 'Alarm Age' },
  { key: 'sla', label: 'SLA', render: (value) => <span className={`sla ${String(value).replaceAll(' ', '-')}`}>{value}</span> },
  { key: 'assignedTeam', label: 'Assigned Team' }
]

function Alarms({ visibleAlarms, settings }) {
  return (
    <>
      <DataTable rows={visibleAlarms} columns={columns} title="Alarm Management" subtitle="Severity, SLA, ownership, and alarm age tracking" filterKey="severity" pageSize={settings.pageSize} />
      <AssistantPanel alarms={visibleAlarms} />
    </>
  )
}
export default Alarms
