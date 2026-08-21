import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand">
          <span className="nav-hex" aria-hidden="true" />
          The Reaction Quiz
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/quiz" className={({ isActive }) => (isActive ? 'active' : '')}>
            Quiz
          </NavLink>
          <NavLink to="/sources" className={({ isActive }) => (isActive ? 'active' : '')}>
            Sources
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
