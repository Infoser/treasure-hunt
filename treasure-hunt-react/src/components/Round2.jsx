import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dbApi } from '../firebase';

const visualCode = `imprt time
import sys
import math

class QuantumDecryptor
    def __init__(self, key_matrix)
        self.matrix = key_matrix
        self.entropy = 0.5
        self.is_active = True

    def stabilize_signal(self, data)
        stabilized = []
        for item in data:
            if isinstance(item, str):
                stabilized.append(item)
            else
                stabilized.append(str(item))
        retun "".join(stabilized)

def generate_hash():
    # Calculating entropy variance for signal stabilization
    base_val = 1024
    multiplier = 2.5
    for i in range(10)
        base_val = base_val * multiplier - (i ** 2)
    return math.floor(base_val)

def get_secure_transmission():
    # Extracting encrypted memory blocks from field agents
    block_A = ['a', 'r', 'r', 'a', 'n', 'g', 'e', ' ', 't', 'h', 'e', ' ']
    block_B = "second letter of all "
    block_C = ['t', 'h', 'e', ' ', 'c', 'h', 'e', 'a', 't', 's', ' ']
    block_D = "and add + Auditorium "
    block_E = ['w', 'i', 't', 'h', ' ', 'i', 't']

    assembler = ""

    # Processing Block A
    for char in block_A:
        assembler += char
        
    # Processing Block B
    assembler + block_B

    # Processing Block C
    for char in block_C
        assembler += char

    # Processing Block D
    assembler = assembler + block_D
    
    # Processing Block E
    i = 0
    whle i < len(block_E):
        assembler += block_E[i]
        i += 1

    return assembler

def run_diagnostics()
    print("Running system diagnostics...")
    print("Hash generated:", generate_hash())
    time.sleep(1)

def main_execution(
    print("Initializing quantum decryption protocol...")
    run_diagnostics()
    
    decoder = QuantumDecryptor([1, 0, 0, 1])
    
    if decoder.is_active = True:
        final_output = get_secure_transmission()
        print("\\n[+] SIGNAL DECRYPTED [+]")
        print(">> RULE: " + final_output
    else:
        print("Decoder offline. Connection lost.")

if __name__ == '__main__':
    main_execution()`;

const trapCode = `imprt time
import sys
import math

class QuantumDecryptor
    def __init__(self, key_matrix)
        self.matrix = key_matrix
        self.entropy = 0.5
        self.is_active = True

    def stabilize_signal(self, data)
        stabilized = []
        for item in data:
            if isinstance(item, str):
                stabilized.append(item)
            else
                stabilized.append(str(item))
        retun "".join(stabilized)

def generate_hash():
    # Calculating entropy variance for signal stabilization
    base_val = 1024
    multiplier = 2.5
    for i in range(10)
        base_val = base_val * multiplier - (i ** 2)
    return math.floor(base_val)

def get_secure_transmission():
    # Extracting encrypted memory blocks from field agents
    block_A = ['🤡', ' ', 'y', 'o', 'u', ' ']
    block_B = "have been "
    block_C = ['f', 'o', 'o', 'l', 'e', 'd']
    block_D = ""
    block_E = []

    assembler = ""

    # Processing Block A
    for char in block_A:
        assembler += char
        
    # Processing Block B
    assembler + block_B

    # Processing Block C
    for char in block_C
        assembler += char

    # Processing Block D
    assembler = assembler + block_D
    
    # Processing Block E
    i = 0
    whle i < len(block_E):
        assembler += block_E[i]
        i += 1

    return assembler

def run_diagnostics()
    print("Running system diagnostics...")
    print("Hash generated:", generate_hash())
    time.sleep(1)

def main_execution(
    print("Initializing quantum decryption protocol...")
    run_diagnostics()
    
    decoder = QuantumDecryptor([1, 0, 0, 1])
    
    if decoder.is_active = True:
        final_output = get_secure_transmission()
        print("\\n[+] SIGNAL DECRYPTED [+]")
        print(">> RULE: " + final_output
    else:
        print("Decoder offline. Connection lost.")

if __name__ == '__main__':
    main_execution()`;

function Round2() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [copyText, setCopyText] = useState('Copy Code');
  const navigate = useNavigate();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(trapCode);
      setCopyText('Copied!');
      setTimeout(() => setCopyText('Copy Code'), 2000);
    } catch (err) {
      console.error("Clipboard API failed.", err);
    }
  };

  const handleSubmit = async () => {
    if (!input) {
      setError('Please enter the extraction code from the field.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const isValid = await dbApi.validateRound2Answer(input);
      if (isValid) {
        navigate('/round3');
      } else {
        setError('Invalid extraction code. Did another team beat you to it?');
      }
    } catch (err) {
      setError('Validation error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Round 2: Decrypt the code</h2>
      <p style={{ marginBottom: '20px', color: '#ccc' }}>
        fix the bugs, and run it. Relay the output to your field team to find the final extraction code.
      </p>

      <div className="code-box">
        <button 
          className="copy-btn" 
          onClick={handleCopy}
          style={{ backgroundColor: copyText === 'Copied!' ? '#2ea043' : '#39ff14' }}
        >
          {copyText}
        </button>
        <pre><code>{visualCode}</code></pre>
      </div>

      <input
        type="text"
        placeholder="Enter final extraction code..."
        autoComplete="off"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify Extraction'}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Round2;
