import React from 'react'
import { navItems } from '../data/content'

export default function Nav({ currentPage, onNavigate, searchQuery, setSearchQuery }) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => onNavigate('home')}>
        voicom<span>ai</span>.com
      </div>
      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.page} onClick={() => onNavigate(item.page)}>
            {item.label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <div className="search-bar">
          <i className="ti ti-search" style={{ color: '#404060', fontSize: '15px' }} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onFocus={() => onNavigate('search')}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <button className="nav-cta" onClick={() => onNavigate('newsletter')}>
          Subscribe Free
        </button>
      </div>
    </nav>
  )
}
