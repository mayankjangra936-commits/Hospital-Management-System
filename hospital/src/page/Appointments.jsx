import { useState } from 'react';

function AppointmentSystem() {
  const [appointments, setAppointments] = useState([]);
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');

  const bookAppointment = () => {
    if (!patient || !doctor) {
      return;
    }

    const newAppointment = {
      id: appointments.length + 1,
      patient,
      doctor
    };

    setAppointments([...appointments, newAppointment]);
    setPatient('');
    setDoctor('');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Appointment System</h2>
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
              {app.patient} appointed with {app.doctor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppointmentSystem;