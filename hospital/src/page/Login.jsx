import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const demoUsers = [
    { role: 'Admin', username: 'admin_hms' },
    { role: 'Doctor', username: 'dr_aisha' },
    { role: 'Reception', username: 'frontdesk_01' }
  ];

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      setError('');
      navigate('/');
    } else {
      setError('Please enter username and password.');
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Hospital Login</h2>
        <p>Sign in to continue to the home page.</p>
        <div className="login-info-grid">
          <div className="login-info-card">
            <h4>Today Snapshot</h4>
            <p>127 Appointments</p>
            <p>34 Admissions</p>
          </div>
          <div className="login-info-card">
            <h4>Support</h4>
            <p>Emergency: +91 10245 67890</p>
            <p>Desk: +91 98765 00011</p>
          </div>
        </div>
        <div className="form-group column">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group column">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;