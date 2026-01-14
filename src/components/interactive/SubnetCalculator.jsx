import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

function ipToBinary(ip) {
  return ip.split('.').map(octet =>
    parseInt(octet).toString(2).padStart(8, '0')
  );
}

function binaryToIp(binary) {
  return binary.map(octet => parseInt(octet, 2)).join('.');
}

function calculateSubnet(ip, cidr) {
  const octets = ip.split('.').map(Number);
  const maskBits = cidr;

  // Crea la maschera di sottorete
  let mask = [];
  for (let i = 0; i < 4; i++) {
    const bits = Math.min(8, Math.max(0, maskBits - i * 8));
    mask.push(256 - Math.pow(2, 8 - bits));
  }

  // Calcola network address
  const network = octets.map((octet, i) => octet & mask[i]);

  // Calcola broadcast address
  const broadcast = octets.map((octet, i) => octet | (255 - mask[i]));

  // Calcola range host
  const firstHost = [...network];
  firstHost[3] += 1;

  const lastHost = [...broadcast];
  lastHost[3] -= 1;

  // Numero di host
  const hostBits = 32 - maskBits;
  const totalHosts = Math.pow(2, hostBits);
  const usableHosts = totalHosts > 2 ? totalHosts - 2 : 0;

  return {
    ip: octets.join('.'),
    mask: mask.join('.'),
    cidr: maskBits,
    network: network.join('.'),
    broadcast: broadcast.join('.'),
    firstHost: firstHost.join('.'),
    lastHost: lastHost.join('.'),
    totalHosts,
    usableHosts,
    hostBits,
    networkBits: maskBits
  };
}

export function SubnetCalculator() {
  const [ip, setIp] = useState('192.168.1.100');
  const [cidr, setCidr] = useState(24);

  const result = useMemo(() => {
    const octets = ip.split('.');
    if (octets.length !== 4 || octets.some(o => isNaN(parseInt(o)) || parseInt(o) < 0 || parseInt(o) > 255)) {
      return null;
    }
    return calculateSubnet(ip, cidr);
  }, [ip, cidr]);

  const ipBinary = useMemo(() => {
    if (!result) return null;
    return ipToBinary(result.ip);
  }, [result]);

  return (
    <div className="subnet-calculator">
      <div className="calculator-header">
        <h3>Calcolatore Subnet</h3>
        <p>Inserisci un indirizzo IP e la maschera CIDR per calcolare le informazioni della sottorete</p>
      </div>

      <div className="input-section">
        <div className="input-group">
          <label>Indirizzo IP</label>
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="192.168.1.100"
            className="ip-input"
          />
        </div>

        <div className="input-group">
          <label>CIDR (/{cidr})</label>
          <input
            type="range"
            min="1"
            max="32"
            value={cidr}
            onChange={(e) => setCidr(parseInt(e.target.value))}
            className="cidr-slider"
          />
        </div>
      </div>

      {result && (
        <motion.div
          className="results-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={`${ip}-${cidr}`}
        >
          <div className="binary-visualization">
            <h4>Rappresentazione Binaria</h4>
            <div className="binary-display">
              {ipBinary && ipBinary.map((octet, i) => (
                <div key={i} className="binary-octet-group">
                  <div className="binary-octet">
                    {octet.split('').map((bit, j) => {
                      const bitPosition = i * 8 + j;
                      const isNetwork = bitPosition < cidr;
                      return (
                        <span
                          key={j}
                          className={`binary-bit ${isNetwork ? 'network' : 'host'}`}
                        >
                          {bit}
                        </span>
                      );
                    })}
                  </div>
                  <span className="octet-decimal">{result.ip.split('.')[i]}</span>
                </div>
              ))}
            </div>
            <div className="legend">
              <span className="legend-item">
                <span className="legend-color network"></span>
                Bit di rete ({result.networkBits})
              </span>
              <span className="legend-item">
                <span className="legend-color host"></span>
                Bit di host ({result.hostBits})
              </span>
            </div>
          </div>

          <div className="results-grid">
            <div className="result-card">
              <span className="result-label">Indirizzo di rete</span>
              <span className="result-value">{result.network}</span>
            </div>

            <div className="result-card">
              <span className="result-label">Maschera di sottorete</span>
              <span className="result-value">{result.mask}</span>
            </div>

            <div className="result-card">
              <span className="result-label">Broadcast</span>
              <span className="result-value">{result.broadcast}</span>
            </div>

            <div className="result-card">
              <span className="result-label">Primo host</span>
              <span className="result-value">{result.firstHost}</span>
            </div>

            <div className="result-card">
              <span className="result-label">Ultimo host</span>
              <span className="result-value">{result.lastHost}</span>
            </div>

            <div className="result-card highlight">
              <span className="result-label">Host utilizzabili</span>
              <span className="result-value">{result.usableHosts.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>
      )}

      <style>{`
        .subnet-calculator {
          background: white;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .calculator-header {
          margin-bottom: 1.5rem;
        }

        .calculator-header h3 {
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .calculator-header p {
          color: var(--gray-500);
          font-size: 0.9rem;
          margin: 0;
        }

        .input-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-group label {
          font-weight: 500;
          color: var(--gray-700);
        }

        .ip-input {
          padding: 0.75rem 1rem;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: 1.1rem;
          font-family: 'Fira Code', monospace;
          transition: border-color var(--transition-fast);
        }

        .ip-input:focus {
          outline: none;
          border-color: var(--primary);
        }

        .cidr-slider {
          height: 8px;
          -webkit-appearance: none;
          background: var(--gray-200);
          border-radius: 4px;
          cursor: pointer;
        }

        .cidr-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          background: var(--primary);
          border-radius: 50%;
          cursor: pointer;
        }

        .binary-visualization {
          background: var(--gray-50);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .binary-visualization h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }

        .binary-display {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .binary-octet-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .binary-octet {
          display: flex;
          gap: 2px;
        }

        .binary-bit {
          width: 24px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 3px;
        }

        .binary-bit.network {
          background: var(--primary);
          color: white;
        }

        .binary-bit.host {
          background: var(--success);
          color: white;
        }

        .octet-decimal {
          font-size: 0.85rem;
          color: var(--gray-500);
          font-family: 'Fira Code', monospace;
        }

        .legend {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 1rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--gray-600);
        }

        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 3px;
        }

        .legend-color.network {
          background: var(--primary);
        }

        .legend-color.host {
          background: var(--success);
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .result-card {
          background: var(--gray-50);
          padding: 1rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .result-card.highlight {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
        }

        .result-label {
          font-size: 0.8rem;
          color: var(--gray-500);
        }

        .result-card.highlight .result-label {
          color: rgba(255,255,255,0.8);
        }

        .result-value {
          font-family: 'Fira Code', monospace;
          font-size: 1rem;
          font-weight: 600;
          color: var(--gray-800);
        }

        .result-card.highlight .result-value {
          color: white;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .input-section {
            grid-template-columns: 1fr;
          }

          .results-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

export default SubnetCalculator;
