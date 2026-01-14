import { ModuleWrapper } from '../../components/common/ModuleWrapper';
import { Slide, AnimatedContent, TwoColumns } from '../../components/common';
import { SubnetCalculator } from '../../components/interactive';
import { motion } from 'framer-motion';

// Slide 1: Introduzione al Subnetting
function Slide1() {
  return (
    <Slide
      title="Subnetting a Maschera Fissa (FLSM)"
      subtitle="Fixed Length Subnet Mask"
    >
      <AnimatedContent>
        <div className="intro-content">
          <div className="big-icon">📐</div>
          <h2>Cos'e il Subnetting?</h2>
          <p className="lead">
            Il <strong>subnetting</strong> e il processo di divisione di una rete IP in
            sottoreti piu piccole. Questo permette di organizzare meglio la rete,
            migliorare la sicurezza e ottimizzare il traffico.
          </p>

          <div className="concept-boxes">
            <div className="concept-box">
              <span className="concept-icon">🎯</span>
              <h4>FLSM</h4>
              <p>Tutte le sottoreti hanno la <strong>stessa dimensione</strong></p>
            </div>
            <div className="concept-box">
              <span className="concept-icon">📊</span>
              <h4>Maschera Fissa</h4>
              <p>Una sola maschera per tutte le sottoreti</p>
            </div>
            <div className="concept-box">
              <span className="concept-icon">✨</span>
              <h4>Semplicita</h4>
              <p>Facile da calcolare e implementare</p>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .intro-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .big-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        .intro-content h2 {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        .lead {
          font-size: 1.15rem;
          color: var(--gray-600);
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .concept-boxes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .concept-box {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
        }
        .concept-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.75rem;
        }
        .concept-box h4 {
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .concept-box p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--gray-600);
        }
      `}</style>
    </Slide>
  );
}

// Slide 2: Perché fare Subnetting
function Slide2() {
  return (
    <Slide
      title="Perche fare Subnetting?"
      subtitle="Motivazioni e benefici"
    >
      <AnimatedContent>
        <div className="reasons-content">
          <div className="reasons-grid">
            <motion.div
              className="reason-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="reason-icon security">🔒</div>
              <h4>Sicurezza</h4>
              <p>
                Isola gruppi di dispositivi. Il traffico tra sottoreti deve passare
                per un router, dove possono essere applicate ACL e firewall.
              </p>
            </motion.div>

            <motion.div
              className="reason-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="reason-icon performance">⚡</div>
              <h4>Performance</h4>
              <p>
                Riduce il dominio di broadcast. Meno traffico broadcast significa
                migliori prestazioni della rete.
              </p>
            </motion.div>

            <motion.div
              className="reason-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="reason-icon organization">📁</div>
              <h4>Organizzazione</h4>
              <p>
                Struttura logica della rete. Reparti, piani, sedi possono avere
                sottoreti dedicate.
              </p>
            </motion.div>

            <motion.div
              className="reason-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="reason-icon efficiency">💰</div>
              <h4>Efficienza</h4>
              <p>
                Utilizzo ottimale degli indirizzi IP. Evita sprechi assegnando
                sottoreti adeguate alle esigenze.
              </p>
            </motion.div>
          </div>

          <div className="example-scenario">
            <h4>Scenario Esempio</h4>
            <p>
              Un'azienda con rete <code>192.168.0.0/24</code> (254 host) ha 4 reparti
              con circa 50 dipendenti ciascuno. Senza subnetting, tutti sarebbero
              sulla stessa rete con problemi di sicurezza e performance.
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .reasons-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .reason-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        .reason-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .reason-icon.security { background: #fee2e2; }
        .reason-icon.performance { background: #fef3c7; }
        .reason-icon.organization { background: #dbeafe; }
        .reason-icon.efficiency { background: #d1fae5; }
        .reason-card h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .reason-card p {
          margin: 0;
          color: var(--gray-600);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .example-scenario {
          background: linear-gradient(135deg, var(--secondary), #0e7490);
          color: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
        }
        .example-scenario h4 {
          color: white;
          margin-bottom: 0.75rem;
        }
        .example-scenario p {
          margin: 0;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
        }
        .example-scenario code {
          background: rgba(255,255,255,0.2);
          color: white;
        }
      `}</style>
    </Slide>
  );
}

// Slide 3: Il Processo di Subnetting
function Slide3() {
  return (
    <Slide
      title="Il Processo di Subnetting FLSM"
      subtitle="Step by step"
    >
      <AnimatedContent>
        <div className="process-content">
          <div className="steps">
            <motion.div
              className="step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>Determina il numero di sottoreti necessarie</h4>
                <p>Quante sottoreti devi creare? (es. 4 reparti = 4 sottoreti)</p>
              </div>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>Calcola i bit da "prendere in prestito"</h4>
                <p>Usa la formula: 2<sup>n</sup> ≥ numero sottoreti</p>
                <div className="formula-example">
                  Per 4 sottoreti: 2<sup>2</sup> = 4 → servono 2 bit
                </div>
              </div>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="step-number">3</span>
              <div className="step-content">
                <h4>Calcola la nuova maschera</h4>
                <p>Aggiungi i bit presi in prestito alla maschera originale</p>
                <div className="formula-example">
                  /24 + 2 bit = /26 (255.255.255.192)
                </div>
              </div>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="step-number">4</span>
              <div className="step-content">
                <h4>Calcola il "salto" tra le sottoreti</h4>
                <p>256 - valore dell'ultimo ottetto della maschera</p>
                <div className="formula-example">
                  256 - 192 = 64 (salto di 64 indirizzi)
                </div>
              </div>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="step-number">5</span>
              <div className="step-content">
                <h4>Elenca le sottoreti</h4>
                <p>Parti dall'indirizzo di rete e aggiungi il salto</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .process-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .steps {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .step {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }
        .step-number {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .step-content {
          flex: 1;
        }
        .step-content h4 {
          margin-bottom: 0.25rem;
          color: var(--gray-800);
        }
        .step-content p {
          margin: 0;
          color: var(--gray-600);
          font-size: 0.95rem;
        }
        .formula-example {
          margin-top: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: var(--gray-100);
          border-radius: var(--radius-sm);
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          color: var(--primary);
        }
      `}</style>
    </Slide>
  );
}

// Slide 4: Esempio Pratico Completo
function Slide4() {
  return (
    <Slide
      title="Esempio Pratico Completo"
      subtitle="Subnetting di 192.168.1.0/24 in 4 sottoreti"
    >
      <AnimatedContent>
        <div className="example-content">
          <div className="problem-box">
            <h4>Problema</h4>
            <p>Dividere la rete <code>192.168.1.0/24</code> in <strong>4 sottoreti</strong> uguali</p>
          </div>

          <div className="solution-steps">
            <div className="sol-step">
              <span className="sol-label">Bit necessari:</span>
              <span className="sol-value">2<sup>2</sup> = 4 → 2 bit</span>
            </div>
            <div className="sol-step">
              <span className="sol-label">Nuova maschera:</span>
              <span className="sol-value">/24 + 2 = /26 (255.255.255.192)</span>
            </div>
            <div className="sol-step">
              <span className="sol-label">Salto:</span>
              <span className="sol-value">256 - 192 = 64</span>
            </div>
            <div className="sol-step">
              <span className="sol-label">Host per subnet:</span>
              <span className="sol-value">2<sup>6</sup> - 2 = 62 host</span>
            </div>
          </div>

          <div className="subnets-table">
            <table>
              <thead>
                <tr>
                  <th>Subnet</th>
                  <th>Indirizzo di Rete</th>
                  <th>Range Host</th>
                  <th>Broadcast</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1</strong></td>
                  <td>192.168.1.0/26</td>
                  <td>192.168.1.1 - 192.168.1.62</td>
                  <td>192.168.1.63</td>
                </tr>
                <tr>
                  <td><strong>2</strong></td>
                  <td>192.168.1.64/26</td>
                  <td>192.168.1.65 - 192.168.1.126</td>
                  <td>192.168.1.127</td>
                </tr>
                <tr>
                  <td><strong>3</strong></td>
                  <td>192.168.1.128/26</td>
                  <td>192.168.1.129 - 192.168.1.190</td>
                  <td>192.168.1.191</td>
                </tr>
                <tr>
                  <td><strong>4</strong></td>
                  <td>192.168.1.192/26</td>
                  <td>192.168.1.193 - 192.168.1.254</td>
                  <td>192.168.1.255</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="visual-representation">
            <h4>Rappresentazione Visiva</h4>
            <div className="subnet-blocks">
              <div className="subnet-block" style={{background: '#3b82f6'}}>
                <span>Subnet 1</span>
                <span>.0 - .63</span>
              </div>
              <div className="subnet-block" style={{background: '#10b981'}}>
                <span>Subnet 2</span>
                <span>.64 - .127</span>
              </div>
              <div className="subnet-block" style={{background: '#f59e0b'}}>
                <span>Subnet 3</span>
                <span>.128 - .191</span>
              </div>
              <div className="subnet-block" style={{background: '#ef4444'}}>
                <span>Subnet 4</span>
                <span>.192 - .255</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .example-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .problem-box {
          background: #e0f2fe;
          border-left: 4px solid var(--info);
          padding: 1rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 1.5rem;
        }
        .problem-box h4 {
          margin-bottom: 0.25rem;
          color: var(--gray-800);
        }
        .problem-box p {
          margin: 0;
        }
        .solution-steps {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .sol-step {
          background: var(--gray-100);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sol-label {
          font-weight: 500;
          color: var(--gray-600);
        }
        .sol-value {
          font-family: 'Fira Code', monospace;
          color: var(--primary);
          font-weight: 600;
        }
        .subnets-table {
          margin-bottom: 1.5rem;
        }
        .subnets-table table {
          width: 100%;
        }
        .subnets-table td {
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
        }
        .visual-representation h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .subnet-blocks {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }
        .subnet-block {
          color: white;
          padding: 1rem;
          border-radius: var(--radius-md);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .subnet-block span:first-child {
          font-weight: 600;
        }
        .subnet-block span:last-child {
          font-size: 0.85rem;
          opacity: 0.9;
        }
      `}</style>
    </Slide>
  );
}

// Slide 5: Calcolatore Interattivo
function Slide5() {
  return (
    <Slide
      title="Calcolatore Subnet Interattivo"
      subtitle="Prova tu stesso!"
    >
      <AnimatedContent>
        <SubnetCalculator />
      </AnimatedContent>
    </Slide>
  );
}

// Slide 6: Limiti del FLSM
function Slide6() {
  return (
    <Slide
      title="Limiti del Subnetting FLSM"
      subtitle="Quando FLSM non e la scelta migliore"
    >
      <AnimatedContent>
        <div className="limits-content">
          <div className="warning-box">
            <strong>Il problema principale:</strong> Con FLSM tutte le sottoreti hanno
            la stessa dimensione, causando potenzialmente uno spreco significativo di indirizzi IP.
          </div>

          <div className="scenario-problem">
            <h4>Scenario Problematico</h4>
            <p>Un'azienda ha bisogno di:</p>
            <div className="needs-grid">
              <div className="need-item">
                <span className="need-dept">Amministrazione</span>
                <span className="need-hosts">100 host</span>
              </div>
              <div className="need-item">
                <span className="need-dept">Sviluppo</span>
                <span className="need-hosts">50 host</span>
              </div>
              <div className="need-item">
                <span className="need-dept">Vendite</span>
                <span className="need-hosts">25 host</span>
              </div>
              <div className="need-item">
                <span className="need-dept">Link WAN</span>
                <span className="need-hosts">2 host</span>
              </div>
            </div>
          </div>

          <TwoColumns
            left={
              <div className="flsm-solution">
                <h4>Soluzione FLSM</h4>
                <p>Per 100 host serve una /25 (126 host)</p>
                <p>Con FLSM tutte le subnet sono /25</p>
                <div className="waste-calc">
                  <div className="waste-row">
                    <span>Amministrazione:</span>
                    <span>126 - 100 = <strong>26 sprecati</strong></span>
                  </div>
                  <div className="waste-row">
                    <span>Sviluppo:</span>
                    <span>126 - 50 = <strong>76 sprecati</strong></span>
                  </div>
                  <div className="waste-row">
                    <span>Vendite:</span>
                    <span>126 - 25 = <strong>101 sprecati</strong></span>
                  </div>
                  <div className="waste-row">
                    <span>Link WAN:</span>
                    <span>126 - 2 = <strong>124 sprecati</strong></span>
                  </div>
                  <div className="waste-total">
                    Totale sprecato: <strong>327 indirizzi!</strong>
                  </div>
                </div>
              </div>
            }
            right={
              <div className="flsm-visual">
                <h4>Visualizzazione Spreco</h4>
                <div className="waste-bars">
                  <div className="waste-bar">
                    <span className="bar-label">Amm.</span>
                    <div className="bar-container">
                      <div className="bar-used" style={{width: '79%'}}></div>
                      <div className="bar-waste" style={{width: '21%'}}></div>
                    </div>
                    <span className="bar-percent">79%</span>
                  </div>
                  <div className="waste-bar">
                    <span className="bar-label">Svil.</span>
                    <div className="bar-container">
                      <div className="bar-used" style={{width: '40%'}}></div>
                      <div className="bar-waste" style={{width: '60%'}}></div>
                    </div>
                    <span className="bar-percent">40%</span>
                  </div>
                  <div className="waste-bar">
                    <span className="bar-label">Vend.</span>
                    <div className="bar-container">
                      <div className="bar-used" style={{width: '20%'}}></div>
                      <div className="bar-waste" style={{width: '80%'}}></div>
                    </div>
                    <span className="bar-percent">20%</span>
                  </div>
                  <div className="waste-bar">
                    <span className="bar-label">WAN</span>
                    <div className="bar-container">
                      <div className="bar-used" style={{width: '2%'}}></div>
                      <div className="bar-waste" style={{width: '98%'}}></div>
                    </div>
                    <span className="bar-percent">2%</span>
                  </div>
                </div>
                <div className="legend">
                  <span><span className="used-dot"></span> Utilizzato</span>
                  <span><span className="waste-dot"></span> Sprecato</span>
                </div>
              </div>
            }
          />
        </div>
      </AnimatedContent>

      <style>{`
        .limits-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .scenario-problem {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          margin: 1.5rem 0;
        }
        .scenario-problem h4 {
          margin-bottom: 0.75rem;
        }
        .scenario-problem > p {
          margin-bottom: 1rem;
          color: var(--gray-600);
        }
        .needs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .need-item {
          background: white;
          padding: 1rem;
          border-radius: var(--radius-md);
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .need-dept {
          display: block;
          font-weight: 600;
          color: var(--gray-700);
          margin-bottom: 0.25rem;
        }
        .need-hosts {
          font-family: 'Fira Code', monospace;
          color: var(--primary);
        }
        .flsm-solution, .flsm-visual {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          height: 100%;
        }
        .flsm-solution h4, .flsm-visual h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .flsm-solution p {
          color: var(--gray-600);
          margin-bottom: 0.5rem;
        }
        .waste-calc {
          margin-top: 1rem;
        }
        .waste-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--gray-100);
          font-size: 0.9rem;
        }
        .waste-row strong {
          color: var(--error);
        }
        .waste-total {
          margin-top: 1rem;
          padding: 0.75rem;
          background: #fee2e2;
          border-radius: var(--radius-md);
          text-align: center;
        }
        .waste-total strong {
          color: var(--error);
        }
        .waste-bars {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .waste-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .bar-label {
          width: 50px;
          font-size: 0.85rem;
          color: var(--gray-600);
        }
        .bar-container {
          flex: 1;
          height: 24px;
          display: flex;
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        .bar-used {
          background: var(--success);
        }
        .bar-waste {
          background: var(--error);
          opacity: 0.3;
        }
        .bar-percent {
          width: 40px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--gray-600);
          text-align: right;
        }
        .legend {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 1rem;
          font-size: 0.85rem;
          color: var(--gray-600);
        }
        .legend span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .used-dot, .waste-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .used-dot { background: var(--success); }
        .waste-dot { background: var(--error); opacity: 0.3; }
      `}</style>
    </Slide>
  );
}

// Slide 7: Riepilogo
function Slide7() {
  return (
    <Slide
      title="Riepilogo Modulo 2"
      subtitle="Concetti chiave del Subnetting FLSM"
    >
      <AnimatedContent>
        <div className="summary-content">
          <div className="key-formulas">
            <h4>Formule Chiave</h4>
            <div className="formula-cards">
              <div className="formula-card">
                <span className="formula-label">Sottoreti</span>
                <span className="formula-eq">2<sup>n</sup></span>
                <span className="formula-desc">n = bit presi in prestito</span>
              </div>
              <div className="formula-card">
                <span className="formula-label">Host</span>
                <span className="formula-eq">2<sup>h</sup> - 2</span>
                <span className="formula-desc">h = bit rimanenti per host</span>
              </div>
              <div className="formula-card">
                <span className="formula-label">Salto</span>
                <span className="formula-eq">256 - maschera</span>
                <span className="formula-desc">Intervallo tra subnet</span>
              </div>
            </div>
          </div>

          <div className="summary-points">
            <div className="point">
              <span className="point-icon">✓</span>
              <p><strong>FLSM</strong> usa la stessa maschera per tutte le sottoreti</p>
            </div>
            <div className="point">
              <span className="point-icon">✓</span>
              <p>E' <strong>semplice</strong> da calcolare e implementare</p>
            </div>
            <div className="point">
              <span className="point-icon">✓</span>
              <p>Puo causare <strong>spreco di indirizzi</strong> se le esigenze sono diverse</p>
            </div>
          </div>

          <div className="next-module">
            <h4>Nel prossimo modulo...</h4>
            <p>
              Vedremo come risolvere il problema dello spreco con il
              <strong> Subnetting a Maschera Variabile (VLSM)</strong>, che permette
              di assegnare sottoreti di dimensioni diverse in base alle reali esigenze.
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .summary-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .key-formulas {
          margin-bottom: 2rem;
        }
        .key-formulas h4 {
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .formula-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .formula-card {
          background: var(--gray-100);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          text-align: center;
        }
        .formula-label {
          display: block;
          font-size: 0.85rem;
          color: var(--gray-500);
          margin-bottom: 0.5rem;
        }
        .formula-eq {
          display: block;
          font-size: 1.5rem;
          font-family: 'Fira Code', monospace;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        .formula-desc {
          display: block;
          font-size: 0.8rem;
          color: var(--gray-500);
        }
        .summary-points {
          margin-bottom: 2rem;
        }
        .point {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          margin-bottom: 0.75rem;
        }
        .point-icon {
          width: 32px;
          height: 32px;
          background: var(--success);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }
        .point p {
          margin: 0;
          color: var(--gray-700);
        }
        .next-module {
          background: linear-gradient(135deg, var(--accent), #7c3aed);
          color: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          text-align: center;
        }
        .next-module h4 {
          color: white;
          margin-bottom: 0.5rem;
        }
        .next-module p {
          color: rgba(255,255,255,0.9);
          margin: 0;
        }
      `}</style>
    </Slide>
  );
}

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

export default function Module2() {
  return <ModuleWrapper slides={slides} moduleName="Modulo 2: Subnetting FLSM" />;
}
