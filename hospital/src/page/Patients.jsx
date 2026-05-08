import { useState } from 'react';

function PatientManagement() {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Rohan Gupta', age: 34, gender: 'Male', bloodGroup: 'B+', condition: 'Hypertension', ward: 'General 12' },
    { id: 2, name: 'Sneha Iyer', age: 28, gender: 'Female', bloodGroup: 'O+', condition: 'Migraine', ward: 'OPD' },
    { id: 3, name: 'Amit Kulkarni', age: 46, gender: 'Male', bloodGroup: 'A-', condition: 'Diabetes', ward: 'General 08' },
    { id: 4, name: 'Priya Nanda', age: 61, gender: 'Female', bloodGroup: 'AB+', condition: 'Cardiac Follow-up', ward: 'Cardiac 03' }
  ]);
  const [patientName, setPatientName] = useState('');

  const addPatient = () => {
    if (!patientName) {
      return;
    }

    const newPatient = {
      id: patients.length + 1,
      name: patientName,
      age: 30,
      gender: 'Not Set',
      bloodGroup: 'Not Set',
      condition: 'General Checkup',
      ward: 'OPD'
    };

    setPatients([...patients, newPatient]);
    setPatientName('');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Patient Management</h2>
        <div className="mini-stats">
          <div className="mini-stat-card">
            <h3>{patients.length}</h3>
            <p>Total Patients</p>
          </div>
          <div className="mini-stat-card">
            <h3>18</h3>
            <p>Admitted Today</p>
          </div>
          <div className="mini-stat-card">
            <h3>6</h3>
            <p>Critical Care</p>
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
          <button onClick={addPatient}>Add Patient</button>
        </div>

        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              <div className="list-title">{patient.name}</div>
              <div className="list-subtitle">
                Age {patient.age} | {patient.gender} | Blood {patient.bloodGroup} | {patient.condition} | {patient.ward}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PatientManagement;