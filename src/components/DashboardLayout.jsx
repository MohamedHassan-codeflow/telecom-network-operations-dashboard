import { NavLink, Outlet } from 'react-router-dom'
import { FaBars, FaBell, FaChartLine, FaFileCsv, FaGear, FaMoon, FaRightFromBracket, FaSun, FaTableCells, FaTowerCell, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

function DashboardLayout({ theme, setTheme, logout }) {
  const [open, setOpen] = useState(false)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const close = () => setOpen(false)

  return (
    <div className="app-shell">
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="brand">
          <div className="brand-mark">5G</div>
          <div>
            <h1>Telecom Ops</h1>
            <p>NOC / RAN Dashboard</p>
          </div>
          <button className="icon-btn mobile-only" onClick={() => setOpen(false)}><FaXmark /></button>
        </div>
        <nav className="nav-menu">
          <NavLink onClick={close} to="/dashboard"><FaChartLine /> Dashboard</NavLink>
          <NavLink onClick={close} to="/sites"><FaTowerCell /> Sites</NavLink>
          <NavLink onClick={close} to="/alarms"><FaBell /> Alarms</NavLink>
          <NavLink onClick={close} to="/reports"><FaFileCsv /> Reports</NavLink>
          <NavLink onClick={close} to="/settings"><FaGear /> Settings</NavLink>
        </nav>
        <div className="sidebar-actions">
          <button className="ghost-btn" onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />} {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
          <button className="ghost-btn danger-text" onClick={logout}><FaRightFromBracket /> Logout</button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="icon-btn mobile-only" onClick={() => setOpen(true)}><FaBars /></button>
          <div>
            <p className="eyebrow">Ericsson / Huawei / Multi-vendor operations</p>
            <h2>Telecom Network Operations Dashboard</h2>
          </div>
          <div className="topbar-chip"><FaTableCells /> React + Vite</div>
        </header>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
