import { ModuleWrapper } from '../../components/common/ModuleWrapper';
import { Slide, AnimatedContent, TwoColumns } from '../../components/common';
import { motion } from 'framer-motion';

// Slide 1: Introduzione VLSM
function Slide1() {
  return (
    <Slide
      title="Subnetting a Maschera Variabile (VLSM)"
      subtitle="Variable Length Subnet Mask"
    >
      <AnimatedContent>
        <div className="intro-content">
          <div className="big-icon">🎯</div>
          <h2>Ottimizzare l'uso degli indirizzi IP</h2>
          <p className="lead">
            Il <strong>VLSM</strong> permette di creare sottoreti di dimensioni diverse
            all'interno della stessa rete, assegnando a ciascuna esattamente gli indirizzi
            necessari. Questo risolve il problema dello spreco tipico del FLSM.
          </p>

          <div className="comparison-cards">
            <div className="comp-card flsm">
              <h4>FLSM</h4>
              <div className="comp-visual">
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
              </div>
              <p>Tutte uguali</p>
            </div>
            <div className="comp-arrow">→</div>
            <div className="comp-card vlsm">
              <h4>VLSM</h4>
              <div className="comp-visual">
                <div className="block large"></div>
                <div className="block medium"></div>
                <div className="block small"></div>
                <div className="block tiny"></div>
              </div>
              <p>Dimensioni variabili</p>
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
        .comparison-cards {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }
        .comp-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          width: 200px;
        }
        .comp-card h4 {
          margin-bottom: 1rem;
        }
        .comp-card.flsm h4 { color: var(--gray-500); }
        .comp-card.vlsm h4 { color: var(--primary); }
        .comp-visual {
          height: 100px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 1rem;
        }
        .comp-card.flsm .block {
          flex: 1;
          background: var(--gray-300);
          border-radius: 4px;
        }
        .comp-card.vlsm .block {
          background: var(--primary);
          border-radius: 4px;
        }
        .comp-card.vlsm .block.large { height: 40%; }
        .comp-card.vlsm .block.medium { height: 25%; }
        .comp-card.vlsm .block.small { height: 20%; }
        .comp-card.vlsm .block.tiny { height: 15%; }
        .comp-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--gray-500);
        }
        .comp-arrow {
          font-size: 2rem;
          color: var(--gray-400);
        }
      `}</style>
    </Slide>
  );
}

// Slide 2: Principi del VLSM
function Slide2() {
  return (
    <Slide
      title="Principi del VLSM"
      subtitle="Come funziona la maschera variabile"
    >
      <AnimatedContent>
        <div className="principles-content">
          <div className="principle-cards">
            <motion.div
              className="principle-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="principle-icon">📊</span>
              <h4>Analisi dei requisiti</h4>
              <p>
                Prima di subnettare, analizza le esigenze di ogni segmento di rete
                in termini di numero di host necessari.
              </p>
            </motion.div>

            <motion.div
              className="principle-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="principle-icon">📐</span>
              <h4>Ordina per dimensione</h4>
              <p>
                Ordina le sottoreti dalla piu grande alla piu piccola.
                Assegna prima quelle che richiedono piu host.
              </p>
            </motion.div>

            <motion.div
              className="principle-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="principle-icon">🔢</span>
              <h4>Calcola la maschera</h4>
              <p>
                Per ogni sottorete, calcola la maschera minima che soddisfa
                il requisito di host: 2<sup>h</sup> - 2 ≥ host richiesti
              </p>
            </motion.div>

            <motion.div
              className="principle-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="principle-icon">🧩</span>
              <h4>Allocazione contigua</h4>
              <p>
                Le sottoreti devono essere allocate in modo contiguo,
                senza sovrapposizioni ne "buchi" nello spazio di indirizzamento.
              </p>
            </motion.div>
          </div>

          <div className="key-rule">
            <h4>Regola Fondamentale</h4>
            <p>
              Ogni indirizzo di rete di una sottorete VLSM deve essere
              <strong> un multiplo valido</strong> della dimensione del suo blocco.
            </p>
            <div className="rule-example">
              Una /26 (64 indirizzi) puo iniziare a .0, .64, .128, .192<br/>
              Una /27 (32 indirizzi) puo iniziare a .0, .32, .64, .96, .128, ...
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .principles-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .principle-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .principle-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        .principle-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.75rem;
        }
        .principle-card h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .principle-card p {
          margin: 0;
          color: var(--gray-600);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .key-rule {
          background: linear-gradient(135deg, var(--accent), #7c3aed);
          color: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
        }
        .key-rule h4 {
          color: white;
          margin-bottom: 0.75rem;
        }
        .key-rule p {
          color: rgba(255,255,255,0.9);
          margin-bottom: 1rem;
        }
        .rule-example {
          background: rgba(255,255,255,0.2);
          padding: 1rem;
          border-radius: var(--radius-md);
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
        }
      `}</style>
    </Slide>
  );
}

// Slide 3: Procedura VLSM Step by Step
function Slide3() {
  return (
    <Slide
      title="Procedura VLSM"
      subtitle="Passaggi dettagliati"
    >
      <AnimatedContent>
        <div className="procedure-content">
          <div className="steps">
            <div className="step">
              <div className="step-header">
                <span className="step-num">1</span>
                <h4>Elenca i requisiti</h4>
              </div>
              <p>Raccogli il numero di host necessari per ogni segmento di rete.</p>
              <div className="step-example">
                Reparto A: 100 host | Reparto B: 50 host | Link WAN: 2 host
              </div>
            </div>

            <div className="step">
              <div className="step-header">
                <span className="step-num">2</span>
                <h4>Ordina in modo decrescente</h4>
              </div>
              <p>Metti in ordine dalla sottorete piu grande alla piu piccola.</p>
              <div className="step-example">
                1. Reparto A (100) → 2. Reparto B (50) → 3. Link WAN (2)
              </div>
            </div>

            <div className="step">
              <div className="step-header">
                <span className="step-num">3</span>
                <h4>Calcola la maschera per ciascuna</h4>
              </div>
              <p>Trova la maschera piu piccola che soddisfa i requisiti.</p>
              <div className="step-example">
                100 host → /25 (126 host) | 50 host → /26 (62 host) | 2 host → /30 (2 host)
              </div>
            </div>

            <div className="step">
              <div className="step-header">
                <span className="step-num">4</span>
                <h4>Assegna gli indirizzi</h4>
              </div>
              <p>Partendo dalla prima, assegna gli indirizzi in sequenza.</p>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .procedure-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .steps {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .step {
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--primary);
        }
        .step-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .step-num {
          width: 32px;
          height: 32px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }
        .step h4 {
          margin: 0;
          color: var(--gray-800);
        }
        .step p {
          margin: 0 0 0.75rem 0;
          color: var(--gray-600);
          padding-left: 44px;
        }
        .step-example {
          background: var(--gray-100);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-family: 'Fira Code', monospace;
          font-size: 0.85rem;
          color: var(--primary);
          margin-left: 44px;
        }
      `}</style>
    </Slide>
  );
}

// Slide 4: Esempio Pratico VLSM
function Slide4() {
  return (
    <Slide
      title="Esempio Pratico VLSM"
      subtitle="Rete 192.168.1.0/24"
    >
      <AnimatedContent>
        <div className="example-content">
          <div className="requirements-box">
            <h4>Requisiti</h4>
            <div className="req-grid">
              <div className="req-item">
                <span className="req-name">Amministrazione</span>
                <span className="req-hosts">100 host</span>
              </div>
              <div className="req-item">
                <span className="req-name">Sviluppo</span>
                <span className="req-hosts">50 host</span>
              </div>
              <div className="req-item">
                <span className="req-name">Vendite</span>
                <span className="req-hosts">25 host</span>
              </div>
              <div className="req-item">
                <span className="req-name">Link WAN</span>
                <span className="req-hosts">2 host</span>
              </div>
            </div>
          </div>

          <div className="solution-table">
            <table>
              <thead>
                <tr>
                  <th>Sottorete</th>
                  <th>Host richiesti</th>
                  <th>Maschera</th>
                  <th>Indirizzo rete</th>
                  <th>Range host</th>
                  <th>Broadcast</th>
                </tr>
              </thead>
              <tbody>
                <tr className="subnet-1">
                  <td>Amministrazione</td>
                  <td>100</td>
                  <td>/25 (126)</td>
                  <td>192.168.1.0</td>
                  <td>.1 - .126</td>
                  <td>.127</td>
                </tr>
                <tr className="subnet-2">
                  <td>Sviluppo</td>
                  <td>50</td>
                  <td>/26 (62)</td>
                  <td>192.168.1.128</td>
                  <td>.129 - .190</td>
                  <td>.191</td>
                </tr>
                <tr className="subnet-3">
                  <td>Vendite</td>
                  <td>25</td>
                  <td>/27 (30)</td>
                  <td>192.168.1.192</td>
                  <td>.193 - .222</td>
                  <td>.223</td>
                </tr>
                <tr className="subnet-4">
                  <td>Link WAN</td>
                  <td>2</td>
                  <td>/30 (2)</td>
                  <td>192.168.1.224</td>
                  <td>.225 - .226</td>
                  <td>.227</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="visual-allocation">
            <h4>Allocazione Visiva (192.168.1.x)</h4>
            <div className="allocation-bar">
              <div className="alloc-segment seg-1" style={{width: '50%'}}>
                <span>Amm. /25</span>
                <span>.0 - .127</span>
              </div>
              <div className="alloc-segment seg-2" style={{width: '25%'}}>
                <span>Svil. /26</span>
                <span>.128 - .191</span>
              </div>
              <div className="alloc-segment seg-3" style={{width: '12.5%'}}>
                <span>Vend.</span>
                <span>/27</span>
              </div>
              <div className="alloc-segment seg-4" style={{width: '1.5%'}}>
              </div>
              <div className="alloc-segment free" style={{width: '11%'}}>
                <span>Libero</span>
              </div>
            </div>
            <div className="address-scale">
              <span>0</span>
              <span>64</span>
              <span>128</span>
              <span>192</span>
              <span>255</span>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .example-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .requirements-box {
          background: #e0f2fe;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 1.5rem;
        }
        .requirements-box h4 {
          margin-bottom: 0.75rem;
          color: var(--gray-700);
        }
        .req-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .req-item {
          background: white;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          text-align: center;
        }
        .req-name {
          display: block;
          font-weight: 600;
          color: var(--gray-700);
          font-size: 0.9rem;
        }
        .req-hosts {
          font-family: 'Fira Code', monospace;
          color: var(--primary);
        }
        .solution-table {
          margin-bottom: 1.5rem;
          overflow-x: auto;
        }
        .solution-table table {
          width: 100%;
          font-size: 0.9rem;
        }
        .solution-table td {
          font-family: 'Fira Code', monospace;
        }
        .subnet-1 { background: rgba(59, 130, 246, 0.1); }
        .subnet-2 { background: rgba(16, 185, 129, 0.1); }
        .subnet-3 { background: rgba(245, 158, 11, 0.1); }
        .subnet-4 { background: rgba(239, 68, 68, 0.1); }
        .visual-allocation h4 {
          margin-bottom: 0.75rem;
          color: var(--gray-700);
        }
        .allocation-bar {
          display: flex;
          height: 60px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 0.5rem;
        }
        .alloc-segment {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.75rem;
          padding: 0.25rem;
        }
        .seg-1 { background: #3b82f6; }
        .seg-2 { background: #10b981; }
        .seg-3 { background: #f59e0b; }
        .seg-4 { background: #ef4444; }
        .free { background: var(--gray-300); color: var(--gray-600); }
        .address-scale {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--gray-500);
          font-family: 'Fira Code', monospace;
        }
      `}</style>
    </Slide>
  );
}

// Slide 5: Confronto Efficienza FLSM vs VLSM
function Slide5() {
  return (
    <Slide
      title="Confronto Efficienza"
      subtitle="FLSM vs VLSM sullo stesso scenario"
    >
      <AnimatedContent>
        <TwoColumns
          left={
            <div className="comparison-section flsm-section">
              <h3>FLSM</h3>
              <div className="stats">
                <div className="stat">
                  <span className="stat-label">Maschera unica</span>
                  <span className="stat-value">/25</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Host per subnet</span>
                  <span className="stat-value">126</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Subnet necessarie</span>
                  <span className="stat-value">4</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Indirizzi totali</span>
                  <span className="stat-value">504</span>
                </div>
              </div>

              <div className="usage-calc">
                <h4>Utilizzo</h4>
                <div className="usage-row">
                  <span>Amministrazione:</span>
                  <span>100/126 = 79%</span>
                </div>
                <div className="usage-row">
                  <span>Sviluppo:</span>
                  <span>50/126 = 40%</span>
                </div>
                <div className="usage-row">
                  <span>Vendite:</span>
                  <span>25/126 = 20%</span>
                </div>
                <div className="usage-row">
                  <span>Link WAN:</span>
                  <span>2/126 = 2%</span>
                </div>
                <div className="usage-total bad">
                  Efficienza media: <strong>35%</strong>
                </div>
              </div>
            </div>
          }
          right={
            <div className="comparison-section vlsm-section">
              <h3>VLSM</h3>
              <div className="stats">
                <div className="stat">
                  <span className="stat-label">Maschere usate</span>
                  <span className="stat-value">/25, /26, /27, /30</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Host allocati</span>
                  <span className="stat-value">126+62+30+2 = 220</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Spazio usato</span>
                  <span className="stat-value">228/256</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Spazio libero</span>
                  <span className="stat-value">28 indirizzi</span>
                </div>
              </div>

              <div className="usage-calc">
                <h4>Utilizzo</h4>
                <div className="usage-row">
                  <span>Amministrazione:</span>
                  <span>100/126 = 79%</span>
                </div>
                <div className="usage-row">
                  <span>Sviluppo:</span>
                  <span>50/62 = 81%</span>
                </div>
                <div className="usage-row">
                  <span>Vendite:</span>
                  <span>25/30 = 83%</span>
                </div>
                <div className="usage-row">
                  <span>Link WAN:</span>
                  <span>2/2 = 100%</span>
                </div>
                <div className="usage-total good">
                  Efficienza media: <strong>86%</strong>
                </div>
              </div>
            </div>
          }
        />

        <div className="comparison-summary">
          <div className="summary-stat">
            <span className="summary-label">Risparmio con VLSM</span>
            <span className="summary-value">284 indirizzi</span>
          </div>
          <div className="summary-stat">
            <span className="summary-label">Miglioramento efficienza</span>
            <span className="summary-value">+51%</span>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .comparison-section {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          height: 100%;
        }
        .comparison-section h3 {
          text-align: center;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--gray-200);
        }
        .flsm-section h3 { color: var(--gray-500); }
        .vlsm-section h3 { color: var(--primary); }
        .stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .stat {
          background: var(--gray-100);
          padding: 0.75rem;
          border-radius: var(--radius-md);
          text-align: center;
        }
        .stat-label {
          display: block;
          font-size: 0.75rem;
          color: var(--gray-500);
          margin-bottom: 0.25rem;
        }
        .stat-value {
          font-family: 'Fira Code', monospace;
          font-weight: 600;
          color: var(--gray-800);
          font-size: 0.9rem;
        }
        .usage-calc h4 {
          margin-bottom: 0.75rem;
          color: var(--gray-700);
          font-size: 0.95rem;
        }
        .usage-row {
          display: flex;
          justify-content: space-between;
          padding: 0.4rem 0;
          font-size: 0.85rem;
          border-bottom: 1px solid var(--gray-100);
        }
        .usage-total {
          margin-top: 0.75rem;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          text-align: center;
          font-size: 0.95rem;
        }
        .usage-total.bad {
          background: #fee2e2;
          color: var(--error);
        }
        .usage-total.good {
          background: #d1fae5;
          color: #065f46;
        }
        .comparison-summary {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          border-radius: var(--radius-lg);
        }
        .summary-stat {
          text-align: center;
          color: white;
        }
        .summary-label {
          display: block;
          font-size: 0.9rem;
          opacity: 0.9;
          margin-bottom: 0.25rem;
        }
        .summary-value {
          font-size: 1.5rem;
          font-weight: 700;
        }
      `}</style>
    </Slide>
  );
}

// Slide 6: Best Practices VLSM
function Slide6() {
  return (
    <Slide
      title="Best Practices VLSM"
      subtitle="Consigli per un subnetting efficace"
    >
      <AnimatedContent>
        <div className="practices-content">
          <div className="practices-grid">
            <motion.div
              className="practice-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="practice-num">1</span>
              <h4>Ordina sempre dal piu grande</h4>
              <p>
                Inizia sempre dalla sottorete con piu host. Questo evita
                frammentazione e semplifica l'allocazione.
              </p>
            </motion.div>

            <motion.div
              className="practice-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="practice-num">2</span>
              <h4>Prevedi crescita futura</h4>
              <p>
                Aggiungi un margine del 20-30% agli host richiesti per
                permettere espansioni senza re-subnetting.
              </p>
            </motion.div>

            <motion.div
              className="practice-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="practice-num">3</span>
              <h4>Documenta tutto</h4>
              <p>
                Mantieni una documentazione precisa di ogni allocazione.
                Con VLSM la complessita aumenta.
              </p>
            </motion.div>

            <motion.div
              className="practice-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="practice-num">4</span>
              <h4>Verifica allineamento</h4>
              <p>
                Gli indirizzi di rete devono essere multipli validi.
                Una /26 inizia solo a .0, .64, .128, .192
              </p>
            </motion.div>

            <motion.div
              className="practice-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="practice-num">5</span>
              <h4>Lascia spazio libero</h4>
              <p>
                Non allocare tutto lo spazio disponibile. Mantieni
                blocchi liberi per esigenze future.
              </p>
            </motion.div>

            <motion.div
              className="practice-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="practice-num">6</span>
              <h4>Usa strumenti</h4>
              <p>
                Utilizza calcolatori di subnet e fogli di calcolo
                per minimizzare errori.
              </p>
            </motion.div>
          </div>

          <div className="warning-section">
            <h4>⚠️ Attenzione</h4>
            <p>
              VLSM richiede che tutti i router della rete supportino protocolli di
              routing <strong>classless</strong> come OSPF, EIGRP o RIPv2.
              RIPv1 NON supporta VLSM!
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .practices-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .practices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .practice-card {
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          position: relative;
          padding-top: 2.5rem;
        }
        .practice-num {
          position: absolute;
          top: -12px;
          left: 1rem;
          width: 32px;
          height: 32px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .practice-card h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
          font-size: 0.95rem;
        }
        .practice-card p {
          margin: 0;
          color: var(--gray-600);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .warning-section {
          background: #fef3c7;
          border-left: 4px solid var(--warning);
          padding: 1.25rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }
        .warning-section h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .warning-section p {
          margin: 0;
          color: var(--gray-700);
        }
        @media (max-width: 900px) {
          .practices-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </Slide>
  );
}

// Slide 7: Riepilogo
function Slide7() {
  return (
    <Slide
      title="Riepilogo Modulo 3"
      subtitle="VLSM - Punti chiave"
    >
      <AnimatedContent>
        <div className="summary-content">
          <div className="comparison-final">
            <div className="comp-col">
              <h4>FLSM</h4>
              <ul>
                <li>Una sola maschera</li>
                <li>Tutte subnet uguali</li>
                <li>Semplice da calcolare</li>
                <li>Possibile spreco indirizzi</li>
                <li>Funziona con tutti i protocolli</li>
              </ul>
            </div>
            <div className="comp-vs">VS</div>
            <div className="comp-col highlight">
              <h4>VLSM</h4>
              <ul>
                <li>Maschere multiple</li>
                <li>Subnet di dimensioni diverse</li>
                <li>Piu complesso</li>
                <li>Ottimizza l'uso degli IP</li>
                <li>Richiede routing classless</li>
              </ul>
            </div>
          </div>

          <div className="key-takeaway">
            <h4>Da ricordare</h4>
            <p>
              <strong>VLSM</strong> e la scelta migliore quando le sottoreti hanno
              esigenze molto diverse in termini di host. Permette di risparmiare
              indirizzi IP e scalare meglio la rete.
            </p>
          </div>

          <div className="next-module">
            <h4>Nel prossimo modulo...</h4>
            <p>
              Esploreremo le <strong>VLAN</strong>: un approccio completamente diverso
              alla segmentazione delle reti che opera al Layer 2 (Data Link).
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .summary-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .comparison-final {
          display: flex;
          align-items: stretch;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .comp-col {
          flex: 1;
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        .comp-col.highlight {
          border: 2px solid var(--primary);
        }
        .comp-col h4 {
          text-align: center;
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .comp-col.highlight h4 {
          color: var(--primary);
        }
        .comp-col ul {
          list-style: none;
          padding: 0;
        }
        .comp-col li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--gray-600);
          border-bottom: 1px solid var(--gray-100);
        }
        .comp-col li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
        }
        .comp-vs {
          display: flex;
          align-items: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-400);
        }
        .key-takeaway {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 1.5rem;
        }
        .key-takeaway h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-700);
        }
        .key-takeaway p {
          margin: 0;
          color: var(--gray-600);
        }
        .next-module {
          background: linear-gradient(135deg, var(--success), #059669);
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

export default function Module3() {
  return <ModuleWrapper slides={slides} moduleName="Modulo 3: Subnetting VLSM" />;
}
