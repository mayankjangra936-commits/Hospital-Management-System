function DoctorManagement() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Aisha Sharma',
      specialization: 'Cardiology',
      experience: '12 Years',
      qualification: 'MBBS, MD (Cardiology)',
      availability: 'Mon - Sat, 9:00 AM - 2:00 PM',
      phone: '+91 98765 43210',
      email: 'aisha.sharma@hospital.com',
      location: 'Cardiac Wing, Room 204',
      rating: '4.9',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/047/883/550/small/young-indian-female-doctor-isolated-photo.jpg'
    },
    {
      id: 2,
      name: 'Dr. Rahul Verma',
      specialization: 'Orthopedics',
      experience: '9 Years',
      qualification: 'MBBS, MS (Ortho)',
      availability: 'Mon - Fri, 10:00 AM - 5:00 PM',
      phone: '+91 91234 56789',
      email: 'rahul.verma@hospital.com',
      location: 'Ortho Block, Room 115',
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Dr. Meera Nair',
      specialization: 'Neurology',
      experience: '15 Years',
      qualification: 'MBBS, DM (Neurology)',
      availability: 'Tue - Sun, 11:00 AM - 4:00 PM',
      phone: '+91 99887 77665',
      email: 'meera.nair@hospital.com',
      location: 'Neuro Center, Room 310',
      rating: '4.9',
      image:
        'https://www.drsoumyarathi.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-5.36.00-PM-e1721631842753.jpeg'
    },
    {
      id: 4,
      name: 'Dr. Arjun Singh',
      specialization: 'Pediatrics',
      experience: '8 Years',
      qualification: 'MBBS, DCH',
      availability: 'Mon - Sat, 8:00 AM - 1:00 PM',
      phone: '+91 98989 76767',
      email: 'arjun.singh@hospital.com',
      location: 'Child Care Unit, Room 128',
      rating: '4.7',
      image:
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=500&auto=format&fit=crop'
    }
  ];

  return (
    <section className="doctor-page">
      <div className="doctor-page-header">
        <h2>Doctor Information</h2>
        <p>Find specialist details, experience, availability and contact information.</p>
      </div>

      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <article key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-body">
              <div className="doctor-top">
                <h3>{doctor.name}</h3>
                <span className="doctor-rating">{doctor.rating} / 5</span>
              </div>
              <p className="doctor-specialization">{doctor.specialization}</p>
              <div className="doctor-meta">
                <span>{doctor.experience} Experience</span>
                <span>{doctor.qualification}</span>
              </div>
              <div className="doctor-details">
                <p><strong>Availability:</strong> {doctor.availability}</p>
                <p><strong>Location:</strong> {doctor.location}</p>
                <p><strong>Phone:</strong> {doctor.phone}</p>
                <p><strong>Email:</strong> {doctor.email}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DoctorManagement;