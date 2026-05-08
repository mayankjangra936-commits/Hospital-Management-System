import { useState } from 'react';

function DoctorManagement() {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');

  const addDoctor = () => {
    if (!name || !specialization) {
      return;
    }

    const newDoctor = {
      id: doctors.length + 1,
      name,
      specialization
    };

    setDoctors([...doctors, newDoctor]);
    setName('');
    setSpecialization('');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Doctor Management</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
          <button onClick={addDoctor}>Add Doctor</button>
        </div>

        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              {doctor.name} - {doctor.specialization}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DoctorManagement;