import { useMemo, useState } from 'react'

const ROWS_PER_PAGE = 10

function SitesTable({ sites }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)

  const filteredSites = useMemo(() => {
    const value = searchTerm.toLowerCase()
    return sites.filter((site) => Object.values(site).join(' ').toLowerCase().includes(value))
  }, [searchTerm, sites])

  const totalPages = Math.max(1, Math.ceil(filteredSites.length / ROWS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const currentSites = filteredSites.slice((currentPage - 1) * ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    setPage(1)
  }

  return (
    <section id="sites" className="panel">
      <div className="panel-header responsive-header">
        <div>
          <h3>Sites</h3>
          <p className="muted mini">Showing {currentSites.length} of {filteredSites.length} sites</p>
        </div>
        <input className="search" placeholder="Search sites..." value={searchTerm} onChange={handleSearch} />
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Site ID</th>
              <th>City</th>
              <th>Vendor</th>
              <th>Status</th>
              <th>Availability</th>
              <th>Ticket</th>
            </tr>
          </thead>
          <tbody>
            {currentSites.map((site) => (
              <tr key={site.id}>
                <td data-label="Site ID">{site.id}</td>
                <td data-label="City">{site.city}</td>
                <td data-label="Vendor">{site.vendor}</td>
                <td data-label="Status"><span className={`badge ${site.status}`}>{site.status}</span></td>
                <td data-label="Availability">{site.availability}%</td>
                <td data-label="Ticket">{site.ticket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="ghost-btn" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className="ghost-btn" disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}>Next</button>
      </div>
    </section>
  )
}

export default SitesTable
