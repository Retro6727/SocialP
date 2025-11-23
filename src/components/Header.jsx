import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaBars, FaHome, FaUsers, FaChartLine, FaBell, FaEnvelope, FaDollarSign, FaPhone } from 'react-icons/fa'

const navItems = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/groups', label: 'Groups', icon: <FaUsers /> },
  { to: '/trending', label: 'Trending', icon: <FaChartLine /> },
  { to: '/updates', label: 'Updates', icon: <FaBell /> },
  { to: '/messages', label: 'Messages', icon: <FaEnvelope /> },
  { to: '/contact', label: 'Contact', icon: <FaPhone /> },
  { to: '/pricing', label: 'Pricing', icon: <FaDollarSign /> },
]

const Header = () => {
  const [collapsed, setCollapsed] = useState(false)

  // Start collapsed on small screens
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 840) setCollapsed(true)
  }, [])

  return (
    <aside aria-label="Main navigation" style={{ width: collapsed ? 112 : 220, transition: 'width 0.2s', flexShrink: 0 }} className="bg-white h-screen border-r">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-blue-600">TT</div>
          {!collapsed && <div className="text-lg font-semibold">TwixTalks</div>}
        </div>
        <button aria-expanded={!collapsed} onClick={() => setCollapsed(c => !c)} className="p-2 rounded hover:bg-gray-100">
          <FaBars />
        </button>
      </div>

      <div className="px-2">
        <div className="mb-3 px-2">
          {!collapsed ? (
            <div className="text-sm text-gray-600">Connecting People, One Tweet at a Time</div>
          ) : (
            <div className="text-xs text-gray-500 text-center">Welcome</div>
          )}
        </div>

        <nav>
          <ul className="space-y-1">
            {navItems.map(item => (
              <li key={item.to}>
                <Link to={item.to} className={`flex items-center gap-3 p-2 rounded hover:bg-gray-100 ${collapsed ? 'justify-center' : ''}`} title={item.label}>
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span className="text-sm">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 px-2">
          {!collapsed ? (
            <div className="flex gap-2">
              <Link to="/login" className="px-3 py-1 rounded bg-gray-100">Login</Link>
              <Link to="/registration" className="px-3 py-1 rounded bg-blue-600 text-white">Register</Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Link to="/login" className="text-xs">Login</Link>
              <Link to="/registration" className="text-xs">Reg</Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Header