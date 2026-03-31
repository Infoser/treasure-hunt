import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dbApi } from '../firebase';

function Login() {
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const isValid = await dbApi.loginTeam(teamName, password);
      if (isValid) {
        navigate('/round1');
      } else {
        setError('Invalid Team ID or Password.');
      }
    } catch (err) {
      setError('Connection error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <p style={{ marginBottom: '20px', color: '#888' }}>
        Enter your team credentials to initialize the hunt.
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Team ID"
          autoComplete="off"
          required
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'AUTHENTICATING...' : 'Continue'}
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
