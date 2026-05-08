import { useState } from 'react';

function PatientManagement() {
  const [patients, setPatients] = useState([]);
  const [patientName, setPatientName] = useState('');

  const addPatient = () => {
    if (!patientName) {
      return;
    }

    const newPatient = {
      id: patients.length + 1,
      name: patientName
    };

    setPatients([...patients, newPatient]);
    setPatientName('');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Patient Management</h2>
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
            <li key={patient.id}>{patient.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PatientManagement;