import { useEffect, useMemo, useState } from 'react'

function DataTable({ rows, columns, title, subtitle, filterKey, pageSize = 10 }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [page, setPage] = useState(1)

  const filterValues = useMemo(() => {
    if (!filterKey) return []
    return ['all', ...new Set(rows.map((row) => row[filterKey]).filter(Boolean))]
  }, [rows, filterKey])

  const filteredRows = useMemo(() => {
    const q = query.toLowerCase()
    return rows.filter((row) => {
      const searchMatch = Object.values(row).join(' ').toLowerCase().includes(q)
      const filterMatch = filter === 'all' || row[filterKey] === filter
      return searchMatch && filterMatch
    })
  }, [rows, query, filter, filterKey])

  const effectivePageSize = Number(pageSize) || 10
  const totalPages = Math.max(Math.ceil(filteredRows.length / effectivePageSize), 1)
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * effectivePageSize
  const pagedRows = filteredRows.slice(startIndex, startIndex + effectivePageSize)

  useEffect(() => {
    setPage(1)
  }, [query, filter, rows, pageSize])

  const goToPage = (nextPage) => setPage(Math.min(Math.max(nextPage, 1), totalPages))

  return (
    <section className="panel full-panel">
      <div className="panel-header responsive-header">
        <div>
          <h3>{title}</h3>
          <p className="muted mini">{subtitle} · {filteredRows.length} records · Page {safePage} of {totalPages}</p>
        </div>
        <div className="table-tools">
          {filterKey && <select className="input-control" value={filter} onChange={(e) => setFilter(e.target.value)}>{filterValues.map((v) => <option key={v} value={v}>{v === 'all' ? 'All' : v}</option>)}</select>}
          <input className="input-control" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr></thead>
          <tbody>
            {pagedRows.map((row, index) => (
              <tr key={row.id || `${title}-${index}`}>
                {columns.map((column) => <td key={column.key} data-label={column.label}>{column.render ? column.render(row[column.key], row) : row[column.key]}</td>)}
              </tr>
            ))}
            {!pagedRows.length && (
              <tr><td colSpan={columns.length} className="empty-cell">No matching records found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination-bar">
        <span className="muted mini">Showing {filteredRows.length ? startIndex + 1 : 0}-{Math.min(startIndex + effectivePageSize, filteredRows.length)} of {filteredRows.length}</span>
        <div className="pagination-controls">
          <button className="ghost-btn" disabled={safePage === 1} onClick={() => goToPage(1)}>First</button>
          <button className="ghost-btn" disabled={safePage === 1} onClick={() => goToPage(safePage - 1)}>Previous</button>
          <span className="page-indicator">{safePage}</span>
          <button className="ghost-btn" disabled={safePage === totalPages} onClick={() => goToPage(safePage + 1)}>Next</button>
          <button className="ghost-btn" disabled={safePage === totalPages} onClick={() => goToPage(totalPages)}>Last</button>
        </div>
      </div>
    </section>
  )
}
export default DataTable
