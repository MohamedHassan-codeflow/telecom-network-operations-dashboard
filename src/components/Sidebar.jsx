import { useState } from 'react'
import { FaBars, FaBell, FaChartLine, FaMoon, FaRobot, FaSun, FaTowerCell, FaXmark } from 'react-icons/fa6'

function Sidebar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand">
          <div className="brand-mark">5G</div>
          <div>
            <h1>Telecom Ops</h1>
            <p>Network Operations Dashboard</p>
          </div>
        </div>

        <button className="icon-btn menu-btn" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle navigation menu">
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <nav>
          <a href="#overview" className="active" onClick={closeMenu}><FaChartLine /> Overview</a>
          <a href="#sites" onClick={closeMenu}><FaTowerCell /> Sites</a>
          <a href="#alarms" onClick={closeMenu}><FaBell /> Alarms</a>
          <a href="#assistant" onClick={closeMenu}><FaRobot /> AI Assistant</a>
        </nav>

        <button className="ghost-btn theme-btn" onClick={onToggleTheme}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
