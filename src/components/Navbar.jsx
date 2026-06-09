import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Maryam Amir</Link>
      <div className="navbar-links">
        <Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>Work</Link>
        <a href="mailto:meriyumaamer0101@gmail.com" className="navbar-contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar