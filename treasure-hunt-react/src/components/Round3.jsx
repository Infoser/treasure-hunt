import { useState } from 'react';
import { dbApi } from '../firebase';

function Round3() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [victory, setVictory] = useState(false);

  const handleSubmit = async () => {
    if (!input) {
      setError('Please enter the decoded payload.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const isValid = await dbApi.validateRound3Answer(input);
      if (isValid) {
        setVictory(true);
      } else {
        setError('Invalid payload. The signal translation is incorrect.');
      }
    } catch (err) {
      setError('Validation error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Round 3: Signal Intercept</h2>

      {!victory && (
        <>
          <div className="clue-box">
            <p style={{ marginBottom: '15px', color: '#c9d1d9' }}>
              Unknown audio transmission received. Decode it.
            </p>

            <audio controls style={{ width: '100%', marginBottom: '15px', borderRadius: '4px' }}>
              <source src="/assets/code.mp3.aac" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <a href="/assets/code.mp3.aac" download="intercepted_signal.mp3" style={{ textDecoration: 'none' }}>
              <button type="button" className="download-btn">
                ⬇ Download Audio File
              </button>
            </a>
          </div>
          <button  disabled={loading}>
            {'This is Your Final Clue! Decode the audio and finish the hunt.'}
          </button>

          {error && <p className="error">{error}</p>}
        </>
      )}

    </div>
  );
}

export default Round3;
