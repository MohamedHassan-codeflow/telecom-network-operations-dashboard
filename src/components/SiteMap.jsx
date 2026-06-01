function SiteMap({ sites }) {
  return (
    <article className="panel">
      <div className="panel-header">
        <div><h3>Site Map</h3><p className="muted mini">Sample geo-distribution view</p></div>
      </div>
      <div className="map-box">
        {sites.map((site) => <span key={site.id} title={`${site.id} - ${site.status}`} className={`site-dot ${site.status}`} style={{ left: `${site.x}%`, top: `${site.y}%` }} />)}
      </div>
    </article>
  )
}
export default SiteMap
