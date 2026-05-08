import { useState } from 'react';

function AppointmentSystem() {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'Karan Mehta', doctor: 'Dr. Aisha Sharma', time: '09:30 AM', status: 'Confirmed' },
    { id: 2, patient: 'Nikita Rao', doctor: 'Dr. Rahul Verma', time: '10:15 AM', status: 'Waiting' },
    { id: 3, patient: 'Arvind Bansal', doctor: 'Dr. Meera Nair', time: '11:00 AM', status: 'Completed' },
    { id: 4, patient: 'Mitali Das', doctor: 'Dr. Arjun Singh', time: '12:30 PM', status: 'Confirmed' }
  ]);
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');

  const bookAppointment = () => {
    if (!patient || !doctor) {
      return;
    }

    const newAppointment = {
      id: appointments.length + 1,
      patient,
      doctor,
      time: '04:00 PM',
      status: 'Confirmed'
    };

    setAppointments([...appointments, newAppointment]);
    setPatient('');
    setDoctor('');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Appointment System</h2>
        <div className="mini-stats">
          <div className="mini-stat-card">
            <h3>{appointments.length}</h3>
            <p>Total Appointments</p>
          </div>
          <div className="mini-stat-card">
            <h3>14</h3>
            <p>Scheduled Today</p>
          </div>
          <div className="mini-stat-card">
            <h3>3</h3>
            <p>Pending Queue</p>
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Patient Name"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
          <input
            type="text"
            placeholder="Doctor Name"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
          <button onClick={bookAppointment}>Book Appointment</button>
        </div>

        <ul>
          {appointments.map((app) => (
            <li key={app.id}>
              <div className="list-title">{app.patient} with {app.doctor}</div>
              <div className="list-subtitle">{app.time} | {app.status}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppointmentSystem;