function Settings({ theme, setTheme, settings, updateSettings, resetSettings, availableRegions }) {
  return (
    <section className="panel settings-panel">
      <div className="panel-header responsive-header">
        <div>
          <h3>Settings</h3>
          <p className="muted mini">These preferences now control the dashboard, tables, reports, and layout behavior.</p>
        </div>
        <button className="ghost-btn" onClick={resetSettings}>Reset Settings</button>
      </div>
      <div className="settings-grid">
        <label>Theme</label>
        <select className="input-control" value={theme} onChange={(e) => setTheme(e.target.value)}><option value="dark">Dark</option><option value="light">Light</option></select>

        <label>Default Region</label>
        <select className="input-control" value={settings.defaultRegion} onChange={(e) => updateSettings('defaultRegion', e.target.value)}>{availableRegions.map((region) => <option key={region}>{region}</option>)}</select>

        <label>SLA Mode</label>
        <select className="input-control" value={settings.slaMode} onChange={(e) => updateSettings('slaMode', e.target.value)}><option>Operational SLA</option><option>Customer SLA</option><option>Internal SLA</option></select>

        <label>Records Per Page</label>
        <select className="input-control" value={settings.pageSize} onChange={(e) => updateSettings('pageSize', Number(e.target.value))}><option value="10">10</option><option value="15">15</option><option value="25">25</option><option value="50">50</option></select>

        <label>Compact View</label>
        <select className="input-control" value={settings.compactView ? 'true' : 'false'} onChange={(e) => updateSettings('compactView', e.target.value === 'true')}><option value="false">Comfortable</option><option value="true">Compact</option></select>

        <label>Dashboard Map</label>
        <select className="input-control" value={settings.showMap ? 'true' : 'false'} onChange={(e) => updateSettings('showMap', e.target.value === 'true')}><option value="true">Show</option><option value="false">Hide</option></select>
      </div>
      <div className="settings-preview">
        <h4>Active Preferences</h4>
        <p><strong>Region filter:</strong> {settings.defaultRegion}</p>
        <p><strong>SLA mode:</strong> {settings.slaMode}</p>
        <p><strong>Table pagination:</strong> {settings.pageSize} records per page</p>
        <p><strong>Compact view:</strong> {settings.compactView ? 'Enabled' : 'Disabled'}</p>
      </div>
    </section>
  )
}
export default Settings
