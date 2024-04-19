import React from 'react'
import './global.css'

const Header = () => {
  return (
    <>
    <header>
        <div className="header-content">
            <div className="search">
              <div className="logo">
                  IMDB
              </div>
                <input type="text" className='search' placeholder='Search IMDB'/>
            </div>
                <nav className="navbar">
                <a href="#" className="nav-links">imDB <span className='pro'>Pro</span></a>
                <a href="#" className="nav-links left">watchList</a>
                <a href="#" className="nav-links">SignIn</a>
                <a href="#" className="nav-links">En</a>
                </nav>
        </div>
    </header>
    </>
  )
}

export default Header
