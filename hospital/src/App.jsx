import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '/src/component/Navbar.jsx';
import Home from '/src/page/Home.jsx';
import DoctorManagement from '/src/page/Doctors.jsx';
import PatientManagement from '/src/page/Patients.jsx';
import AppointmentSystem from '/src/page/Appointments.jsx';
import BillingSystem from '/src/page/Biling.jsx';
import Login from '/src/page/Login.jsx';

function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-wrap">{children}</main>
      <footer className="footer">2026 Hospital Management System</footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/doctors"
        element={
          <MainLayout>
            <DoctorManagement />
          </MainLayout>
        }
      />
      <Route
        path="/patients"
        element={
          <MainLayout>
            <PatientManagement />
          </MainLayout>
        }
      />
      <Route
        path="/appointments"
        element={
          <MainLayout>
            <AppointmentSystem />
          </MainLayout>
        }
      />
      <Route
        path="/billing"
        element={
          <MainLayout>
            <BillingSystem />
          </MainLayout>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;