import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1>Hospital Management System</h1>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/doctors">Doctors</NavLink>
          <NavLink to="/patients">Patients</NavLink>
          <NavLink to="/appointments">Appointments</NavLink>
          <NavLink to="/billing">Billing</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;