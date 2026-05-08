import { Link } from 'react-router-dom';

function Dashboard() {
  const recentActivities = [
    'Dr. Aisha completed 8 consultations in Cardiology.',
    '4 new patients admitted in General Ward.',
    'Lab reports uploaded for 12 scheduled appointments.',
    'Insurance claims processed for 6 discharged patients.'
  ];

  const upcomingItems = [
    { id: 1, title: 'Health Camp', value: '14 May, Community Hall' },
    { id: 2, title: 'MRI Maintenance', value: '16 May, 11:00 PM' },
    { id: 3, title: 'Staff Training', value: '18 May, Conference Room' }
  ];

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

      <div className="home-section">
        <div className="section-heading">
          <h3>Core Services</h3>
          <p>Everything needed for a modern hospital workflow in one platform.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <h4>Outpatient Management</h4>
            <p>Register, monitor and update OPD patient records in real time.</p>
          </article>
          <article className="feature-card">
            <h4>IPD Monitoring</h4>
            <p>Track admissions, assigned doctors, room details and discharge flow.</p>
          </article>
          <article className="feature-card">
            <h4>Digital Billing</h4>
            <p>Generate transparent bills with consultation, pharmacy and service charges.</p>
          </article>
          <article className="feature-card">
            <h4>Appointment Queue</h4>
            <p>Handle daily schedules and reduce waiting time with slot-based booking.</p>
          </article>
        </div>
      </div>

      <div className="home-section split-section">
        <div className="section-heading">
          <h3>Hospital Departments</h3>
          <p>Key specialties available for comprehensive patient care.</p>
        </div>
        <div className="department-list">
          <div className="department-item">
            <h4>Cardiology</h4>
            <p>Advanced diagnostics, ECG monitoring and cardiac follow-up care.</p>
          </div>
          <div className="department-item">
            <h4>Neurology</h4>
            <p>Specialist consultations for stroke, epilepsy and neuro disorders.</p>
          </div>
          <div className="department-item">
            <h4>Pediatrics</h4>
            <p>Dedicated child care unit with vaccination and growth monitoring.</p>
          </div>
          <div className="department-item">
            <h4>Orthopedics</h4>
            <p>Bone and joint treatments with post-surgery rehabilitation support.</p>
          </div>
        </div>
      </div>

      <div className="home-section">
        <div className="section-heading">
          <h3>How It Works</h3>
          <p>Simple process for patients and staff across all visits.</p>
        </div>
        <div className="process-grid">
          <div className="process-step">
            <span>01</span>
            <h4>Patient Registration</h4>
            <p>Capture demographics, case details and prior visit history quickly.</p>
          </div>
          <div className="process-step">
            <span>02</span>
            <h4>Consultation & Tests</h4>
            <p>Assign doctor, record findings and manage prescriptions digitally.</p>
          </div>
          <div className="process-step">
            <span>03</span>
            <h4>Billing & Follow-up</h4>
            <p>Generate bill, payment receipt and schedule next consultation.</p>
          </div>
        </div>
      </div>

      <div className="support-banner">
        <div>
          <h3>Need Immediate Assistance?</h3>
          <p>Our support and emergency desk is available 24/7 for urgent requests.</p>
        </div>
        <div className="support-actions">
          <a className="solid-link primary-link" href="tel:+911024567890">Call Emergency</a>
          <Link className="solid-link ghost-link" to="/appointments">Request Appointment</Link>
        </div>
      </div>

      <div className="home-section split-section">
        <div className="section-heading">
          <h3>Recent Activity</h3>
          <p>Live updates from hospital operations and patient flow.</p>
        </div>
        <ul>
          {recentActivities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>

      <div className="home-section">
        <div className="section-heading">
          <h3>Upcoming Schedule</h3>
          <p>Important hospital events and operational reminders.</p>
        </div>
        <div className="feature-grid">
          {upcomingItems.map((item) => (
            <article key={item.id} className="feature-card">
              <h4>{item.title}</h4>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;