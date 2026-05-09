import { Link } from 'react-router-dom';

function Home() {
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

  const trustStats = [
    { id: 1, value: '24x7', label: 'Emergency Care' },
    { id: 2, value: '50+', label: 'Specialist Doctors' },
    { id: 3, value: '99%', label: 'Patient Satisfaction' }
  ];

  const highlights = [
    'NABH Standard Protocols',
    'Advanced Modular OT Complex',
    'Cashless Insurance Support',
    'Ambulance Network in 15 mins'
  ];

  return (
    <section className="home-page">
      <div className="emergency-strip">
        <p>Emergency & Trauma Unit is active 24/7.</p>
        <a href="tel:+911024567890">Helpline: +91 10245 67890</a>
      </div>

      <div className="home-hero">
        <div className="home-hero-content">
          <span className="hero-badge">Park Style Multi-Speciality Care</span>
          <h2>Advanced Healthcare With Compassionate Treatment</h2>
          <p>
            Integrated hospital management for OPD, IPD, diagnostics, emergency care and
            specialist consultation under one digital dashboard.
          </p>
          <div className="hero-actions">
            <Link to="/appointments" className="solid-link primary-link">Book Consultation</Link>
            <Link to="/doctors" className="solid-link ghost-link">Find Specialists</Link>
          </div>
          <div className="hero-mini-points">
            <span>Same-day specialist appointments</span>
            <span>Digital reports & billing</span>
          </div>
          <div className="hero-trust-row">
            {trustStats.map((item) => (
              <div className="hero-trust-item" key={item.id}>
                <h4>{item.value}</h4>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="home-hero-media">
          <img
            src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop"
            alt="Doctors standing in a hospital corridor"
          />
        </div>
      </div>

      <div className="highlight-ticker">
        {highlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="home-stats">
        <div className="home-card">
          <h3>1200+</h3>
          <p>Monthly OPD Visits</p>
        </div>
        <div className="home-card">
          <h3>350+</h3>
          <p>In-patient Beds</p>
        </div>
        <div className="home-card">
          <h3>40+</h3>
          <p>Departments</p>
        </div>
        <div className="home-card">
          <h3>15+</h3>
          <p>Years of Service</p>
        </div>
      </div>

      <div className="quick-links">
        <Link to="/doctors" className="solid-link">Doctors Directory</Link>
        <Link to="/patients" className="solid-link">Patient Desk</Link>
        <Link to="/appointments" className="solid-link">Appointment Queue</Link>
        <Link to="/billing" className="solid-link">Billing Counter</Link>
      </div>

      <div className="home-section">
        <div className="section-heading">
          <h3>Core Clinical Services</h3>
          <p>Patient-first services inspired by modern multi-speciality hospital standards.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <h4>Critical Care & ICU</h4>
            <p>Round-the-clock intensivist supervision with high-end life support systems.</p>
          </article>
          <article className="feature-card">
            <h4>Cardiac Sciences</h4>
            <p>Comprehensive heart care from diagnostics to intervention and rehabilitation.</p>
          </article>
          <article className="feature-card">
            <h4>Mother & Child Care</h4>
            <p>Dedicated women and pediatric units focused on safe and complete care.</p>
          </article>
          <article className="feature-card">
            <h4>Diagnostics & Imaging</h4>
            <p>Fast radiology and pathology support for accurate and timely clinical decisions.</p>
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
            <p>Interventional cardiology, heart failure clinic and post-procedure monitoring.</p>
          </div>
          <div className="department-item">
            <h4>Neurology</h4>
            <p>Neuro consultation for stroke pathways, seizure care and movement disorders.</p>
          </div>
          <div className="department-item">
            <h4>Orthopedics</h4>
            <p>Joint replacement, trauma management and physiotherapy-backed recovery plans.</p>
          </div>
          <div className="department-item">
            <h4>Oncology</h4>
            <p>Integrated cancer screening, treatment coordination and personalized follow-up.</p>
          </div>
        </div>
      </div>

      <div className="home-section updates-section">
        <div className="section-heading">
          <h3>Live Hospital Updates</h3>
          <p>Track key operations and upcoming hospital initiatives in one glance.</p>
        </div>
        <div className="updates-grid">
          <div className="updates-card">
            <h4>Recent Activities</h4>
            <ul>
              {recentActivities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="updates-card">
            <h4>Upcoming Schedule</h4>
            <ul>
              {upcomingItems.map((item) => (
                <li key={item.id}>
                  <strong>{item.title}:</strong> {item.value}
                </li>
              ))}
            </ul>
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

    </section>
  );
}

export default Home;