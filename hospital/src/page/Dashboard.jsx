import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="home-hero-content">
          <span className="hero-badge">24/7 Care Platform</span>
          <h2>Welcome to the Hospital Management Portal</h2>
          <p>Manage doctors, patients, appointments and billing in one place.</p>
          <div className="hero-actions">
            <Link to="/appointments" className="solid-link primary-link">Book Appointment</Link>
            <Link to="/billing" className="solid-link ghost-link">Open Billing</Link>
          </div>
        </div>
        <div className="home-hero-media">
          <img
            src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop"
            alt="Doctors standing in a hospital corridor"
          />
        </div>
      </div>

      <div className="dashboard">
        <div className="dashboard-card">
          <h3>10+</h3>
          <p>Doctors</p>
        </div>
        <div className="dashboard-card">
          <h3>120+</h3>
          <p>Patients</p>
        </div>
        <div className="dashboard-card">
          <h3>45+</h3>
          <p>Appointments</p>
        </div>
        <div className="dashboard-card">
          <h3>50000</h3>
          <p>Revenue</p>
        </div>
      </div>

      <div className="quick-links">
        <Link to="/doctors" className="solid-link">Manage Doctors</Link>
        <Link to="/patients" className="solid-link">Manage Patients</Link>
        <Link to="/appointments" className="solid-link">View Appointments</Link>
        <Link to="/billing" className="solid-link">Open Billing</Link>
      </div>
    </section>
  );
}

export default Dashboard;