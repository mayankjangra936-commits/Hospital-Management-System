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
    },
    {
      id: 5,
      name: 'Dr. Priya Kapoor',
      specialization: 'Dermatology',
      experience: '10 Years',
      qualification: 'MBBS, MD (Dermatology)',
      availability: 'Mon - Fri, 9:30 AM - 3:30 PM',
      phone: '+91 97654 32109',
      email: 'priya.kapoor@hospital.com',
      location: 'Skin Care Unit, Room 221',
      rating: '4.8',
      image:
        'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 6,
      name: 'Dr. Rohan Malhotra',
      specialization: 'ENT',
      experience: '11 Years',
      qualification: 'MBBS, MS (ENT)',
      availability: 'Mon - Sat, 10:00 AM - 4:00 PM',
      phone: '+91 98234 11122',
      email: 'rohan.malhotra@hospital.com',
      location: 'ENT Block, Room 145',
      rating: '4.7',
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 7,
      name: 'Dr. Sneha Iyer',
      specialization: 'Gynecology',
      experience: '13 Years',
      qualification: 'MBBS, MD (Obstetrics & Gynecology)',
      availability: 'Mon - Fri, 9:00 AM - 2:30 PM',
      phone: '+91 98111 22334',
      email: 'sneha.iyer@hospital.com',
      location: 'Women Care Wing, Room 230',
      rating: '4.9',
      image:
        'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 8,
      name: 'Dr. Kunal Desai',
      specialization: 'General Surgery',
      experience: '14 Years',
      qualification: 'MBBS, MS (General Surgery)',
      availability: 'Tue - Sun, 11:00 AM - 6:00 PM',
      phone: '+91 97979 44556',
      email: 'kunal.desai@hospital.com',
      location: 'Surgical Unit, Room 302',
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 9,
      name: 'Dr. Nidhi Bansal',
      specialization: 'Ophthalmology',
      experience: '9 Years',
      qualification: 'MBBS, MS (Ophthalmology)',
      availability: 'Mon - Sat, 8:30 AM - 1:30 PM',
      phone: '+91 97777 66778',
      email: 'nidhi.bansal@hospital.com',
      location: 'Eye Care Center, Room 119',
      rating: '4.6',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 10,
      name: 'Dr. Amit Kulkarni',
      specialization: 'Psychiatry',
      experience: '12 Years',
      qualification: 'MBBS, MD (Psychiatry)',
      availability: 'Wed - Mon, 12:00 PM - 7:00 PM',
      phone: '+91 97555 88990',
      email: 'amit.kulkarni@hospital.com',
      location: 'Mental Wellness Wing, Room 410',
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=500&auto=format&fit=crop'
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