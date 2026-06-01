function SiteMap({ sites }) {
  return (
    <article className="panel">
      <div className="panel-header">
        <h3>Site Map</h3>
        <span>Sample topology view</span>
      </div>

      <div className="map">
        {sites.slice(0, 45).map((site) => (
          <span
            key={site.id}
            className={`site-dot ${site.status}`}
            title={`${site.id} - ${site.status}`}
            style={{ left: `${site.x}%`, top: `${site.y}%` }}
          />
        ))}
      </div>
    </article>
  )
}

export default SiteMap
