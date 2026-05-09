import { useState } from 'react';

function PatientManagement() {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Rohan Gupta', age: 34, gender: 'Male', bloodGroup: 'B+', condition: 'Hypertension', ward: 'General 12' },
    { id: 2, name: 'Sneha Iyer', age: 28, gender: 'Female', bloodGroup: 'O+', condition: 'Migraine', ward: 'OPD' },
    { id: 3, name: 'Amit Kulkarni', age: 46, gender: 'Male', bloodGroup: 'A-', condition: 'Diabetes', ward: 'General 08' },
    { id: 4, name: 'Priya Nanda', age: 61, gender: 'Female', bloodGroup: 'AB+', condition: 'Cardiac Follow-up', ward: 'Cardiac 03' },
    { id: 5, name: 'Neha Sharma', age: 25, gender: 'Female', bloodGroup: 'O-', condition: 'Viral Fever', ward: 'General 10' },
    { id: 6, name: 'Rahul Verma', age: 39, gender: 'Male', bloodGroup: 'B-', condition: 'Fracture Recovery', ward: 'Ortho 05' },
    { id: 7, name: 'Kavita Singh', age: 52, gender: 'Female', bloodGroup: 'A+', condition: 'Thyroid Evaluation', ward: 'OPD' },
    { id: 8, name: 'Imran Ali', age: 31, gender: 'Male', bloodGroup: 'AB-', condition: 'Asthma Observation', ward: 'Respiratory 02' },
    { id: 9, name: 'Pooja Mehta', age: 44, gender: 'Female', bloodGroup: 'B+', condition: 'Post Surgery Care', ward: 'Surgical 04' },
    { id: 10, name: 'Suresh Patil', age: 58, gender: 'Male', bloodGroup: 'A-', condition: 'Kidney Stone', ward: 'Urology 07' }
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
    <div className="container patients-page">
      <div className="card">
        <div className="page-hero page-hero-patient">
          <p className="page-hero-tag">Patient Care Desk</p>
          <h2>Patient Management</h2>
          <span>IPD + OPD Records</span>
        </div>
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
              <div className="list-row">
                <div className="list-title">{patient.name}</div>
                <span className="list-chip">Ward: {patient.ward}</span>
              </div>
              <div className="list-subtitle list-info-line">
                <span>Age {patient.age}</span>
                <span>{patient.gender}</span>
                <span>Blood {patient.bloodGroup}</span>
                <span>{patient.condition}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PatientManagement;