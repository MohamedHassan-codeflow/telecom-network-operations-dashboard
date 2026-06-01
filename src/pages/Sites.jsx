import DataTable from '../components/DataTable.jsx'

const columns = [
  { key: 'id', label: 'Site ID' },
  { key: 'region', label: 'Region' },
  { key: 'city', label: 'City' },
  { key: 'vendor', label: 'Vendor' },
  { key: 'technology', label: 'Technology' },
  { key: 'status', label: 'Status', render: (value) => <span className={`badge-pill ${value}`}>{value}</span> },
  { key: 'availability', label: 'Availability', render: (value) => `${value}%` },
  { key: 'sla', label: 'SLA', render: (value) => <span className={`sla ${String(value).replaceAll(' ', '-')}`}>{value}</span> },
  { key: 'assignedTeam', label: 'Assigned Team' }
]

function Sites({ visibleSites, settings }) {
  return <DataTable rows={visibleSites} columns={columns} title="Sites Inventory" subtitle="Region, technology, SLA, and ownership overview" filterKey="region" pageSize={settings.pageSize} />
}
export default Sites
