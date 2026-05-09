import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '/src/component/Navbar.jsx';
import Home from '/src/page/Home.jsx';
import DoctorManagement from '/src/page/Doctors.jsx';
import PatientManagement from '/src/page/Patients.jsx';
import AppointmentSystem from '/src/page/Appointments.jsx';
import BillingSystem from '/src/page/Biling.jsx';
import Login from '/src/page/Login.jsx';

function MainLayout({ children, isDarkMode, onToggleTheme }) {
  return (
    <div className="app-shell">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
      <main className="page-wrap">{children}</main>
      <footer className="footer">2026 Hospital Management System</footer>
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('hms-theme') === 'dark');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('hms-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <MainLayout isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)}>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/doctors"
        element={
          <MainLayout isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)}>
            <DoctorManagement />
          </MainLayout>
        }
      />
      <Route
        path="/patients"
        element={
          <MainLayout isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)}>
            <PatientManagement />
          </MainLayout>
        }
      />
      <Route
        path="/appointments"
        element={
          <MainLayout isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)}>
            <AppointmentSystem />
          </MainLayout>
        }
      />
      <Route
        path="/billing"
        element={
          <MainLayout isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)}>
            <BillingSystem />
          </MainLayout>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;