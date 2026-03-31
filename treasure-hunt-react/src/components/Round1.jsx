import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dbApi } from '../firebase';

function Round1() {
  const [clueData, setClueData] = useState(null);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const teamId = dbApi.getTeamId();

  useEffect(() => {
    const loadClue = async () => {
      try {
        const data = await dbApi.getRound1Clue();
        setClueData(data);

        console.log(
          "%c🚨 SYSTEM DIAGNOSTICS: MESSAGE INTERCEPTED 🚨",
          "color: #ff4d4d; font-size: 20px; font-weight: bold; background: #0d1117; padding: 10px; border: 1px solid #ff4d4d;"
        );
        console.log(
          `%cTo the dev reading this: The data packet on the screen is secured using a Bitwise XOR cipher. The decryption key is 64`,
          "color: #7ee787; font-size: 14px; background: #0d1117; padding: 5px; border: 1px solid #30363d;"
        );
      } catch (err) {
        setError('Error establishing secure connection. Try reloading.');
      }
    };

    loadClue();
  }, []);

  const handleSubmit = async () => {
    if (!input) {
      setError('Please enter a code.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const isValid = await dbApi.validateRound1Code(input, teamId);
      if (isValid) {
        await dbApi.saveRound1Time(teamId);
        navigate('/round2');
      } else {
        setError('Invalid code. The physical link is missing.');
      }
    } catch (err) {
      setError('Database error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Round 1: Encrypt the Data</h2>

      <div className="clue-box">
        <p>Intercepted Data Packet:</p>

        <code className="encrypted-data">
          {clueData ? `[ ${clueData.join(", ")} ]` : '[ Establishing secure connection... ]'}
        </code>

        <p style={{ fontSize: '0.8em', marginTop: '15px', color: '#888' }}>
          (The data seems corrupted. Check the system diagnostics.)
        </p>
      </div>

      <input
        type="text"
        placeholder="Enter verified code..."
        autoComplete="off"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify Code'}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Round1;
