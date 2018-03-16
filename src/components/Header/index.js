import React from 'react'
import Link from 'gatsby-link'

import './style.css'

const Header = () => (
  <header
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        textAlign: 'center',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        Furufuru
      </h1>
      <div
        style={{
          margin: '4px',
        }}
        className='head'
      >
        <Link to='/'>Home</Link>
        <Link to='/about'>About me</Link>
      </div>
    </div>
  </header>
)

export default Header
