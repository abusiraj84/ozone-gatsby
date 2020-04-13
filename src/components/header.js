import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
      <Link to="/courses">الدورات</Link>
      <Link to="/downloads">التحميل</Link>
      <Link to="/workshops">الورشات</Link>
      <Link to="/buy"><button>الشراء</button></Link>
    </div>
  </div>
)

export default Header
