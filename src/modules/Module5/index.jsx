import { ModuleWrapper } from '../../components/common/ModuleWrapper';
import { Slide, AnimatedContent, TwoColumns } from '../../components/common';
import { motion } from 'framer-motion';

// Slide 1: Introduzione al Confronto
function Slide1() {
  return (
    <Slide
      title="VLAN vs Subnetting"
      subtitle="Due approcci alla segmentazione di rete"
    >
      <AnimatedContent>
        <div className="intro-content">
          <div className="big-icon">⚖️</div>
          <h2>La domanda chiave</h2>
          <p className="lead">
            Quando usare le <strong>VLAN</strong> e quando il <strong>subnetting</strong>?
            Sono alternative o complementari? Operano sullo stesso livello?
          </p>

          <div className="comparison-preview">
            <div className="preview-card vlan">
              <div className="card-layer">Layer 2</div>
              <h4>VLAN</h4>
              <p>Segmentazione <strong>logica</strong></p>
              <p>Opera a livello Data Link</p>
              <p>Usa MAC address e tag</p>
            </div>
            <div className="vs-divider">
              <span>VS</span>
            </div>
            <div className="preview-card subnet">
              <div className="card-layer">Layer 3</div>
              <h4>Subnetting</h4>
              <p>Segmentazione <strong>IP</strong></p>
              <p>Opera a livello Network</p>
              <p>Usa indirizzi IP e maschere</p>
            </div>
          </div>

          <div className="spoiler-box">
            <strong>Spoiler:</strong> Non sono alternative, ma <strong>complementari</strong>!
            Spesso vengono usate insieme per una segmentazione completa.
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .intro-content {
          text-align: center;
          max-width: 900px;
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
        .comparison-preview {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .preview-card {
          flex: 1;
          max-width: 280px;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          text-align: center;
          position: relative;
        }
        .preview-card.vlan {
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          border: 2px solid var(--primary);
        }
        .preview-card.subnet {
          background: linear-gradient(135deg, #d1fae5, #a7f3d0);
          border: 2px solid var(--success);
        }
        .card-layer {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gray-800);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
        }
        .preview-card h4 {
          margin: 0.5rem 0;
          font-size: 1.25rem;
        }
        .preview-card.vlan h4 { color: var(--primary); }
        .preview-card.subnet h4 { color: var(--success); }
        .preview-card p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          color: var(--gray-700);
        }
        .vs-divider {
          display: flex;
          align-items: center;
        }
        .vs-divider span {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gray-400);
        }
        .spoiler-box {
          background: #fef3c7;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-lg);
          border-left: 4px solid var(--warning);
          text-align: left;
        }
      `}</style>
    </Slide>
  );
}

// Slide 2: Layer 2 vs Layer 3
function Slide2() {
  return (
    <Slide
      title="Layer 2 vs Layer 3"
      subtitle="Differenze fondamentali"
    >
      <AnimatedContent>
        <div className="layers-content">
          <div className="osi-visualization">
            <div className="osi-stack">
              <div className="osi-layer l7">7 - Application</div>
              <div className="osi-layer l6">6 - Presentation</div>
              <div className="osi-layer l5">5 - Session</div>
              <div className="osi-layer l4">4 - Transport</div>
              <div className="osi-layer l3 highlight-subnet">
                <span>3 - Network</span>
                <span className="layer-tag subnet">SUBNETTING</span>
              </div>
              <div className="osi-layer l2 highlight-vlan">
                <span>2 - Data Link</span>
                <span className="layer-tag vlan">VLAN</span>
              </div>
              <div className="osi-layer l1">1 - Physical</div>
            </div>
          </div>

          <div className="differences-table">
            <table>
              <thead>
                <tr>
                  <th>Aspetto</th>
                  <th>VLAN (Layer 2)</th>
                  <th>Subnetting (Layer 3)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Identificatore</strong></td>
                  <td>MAC Address + VLAN ID</td>
                  <td>Indirizzo IP</td>
                </tr>
                <tr>
                  <td><strong>Dispositivo chiave</strong></td>
                  <td>Switch (managed)</td>
                  <td>Router / Switch L3</td>
                </tr>
                <tr>
                  <td><strong>Tipo di traffico</strong></td>
                  <td>Frame Ethernet</td>
                  <td>Pacchetti IP</td>
                </tr>
                <tr>
                  <td><strong>Broadcast domain</strong></td>
                  <td>Definito dalla VLAN</td>
                  <td>Definito dalla subnet</td>
                </tr>
                <tr>
                  <td><strong>Comunicazione tra segmenti</strong></td>
                  <td>Richiede L3 (routing)</td>
                  <td>Richiede routing</td>
                </tr>
                <tr>
                  <td><strong>Configurazione</strong></td>
                  <td>Sullo switch</td>
                  <td>Su host e router</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .layers-content {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          align-items: start;
        }
        .osi-visualization {
          position: sticky;
          top: 1rem;
        }
        .osi-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .osi-layer {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .osi-layer.l7, .osi-layer.l6, .osi-layer.l5, .osi-layer.l4, .osi-layer.l1 {
          background: var(--gray-100);
          color: var(--gray-500);
        }
        .osi-layer.highlight-subnet {
          background: linear-gradient(90deg, #d1fae5, #a7f3d0);
          color: #065f46;
          font-weight: 600;
        }
        .osi-layer.highlight-vlan {
          background: linear-gradient(90deg, #dbeafe, #bfdbfe);
          color: #1e40af;
          font-weight: 600;
        }
        .layer-tag {
          font-size: 0.7rem;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          color: white;
        }
        .layer-tag.subnet { background: var(--success); }
        .layer-tag.vlan { background: var(--primary); }
        .differences-table table {
          width: 100%;
          font-size: 0.9rem;
        }
        .differences-table td:nth-child(2) {
          background: rgba(59, 130, 246, 0.05);
        }
        .differences-table td:nth-child(3) {
          background: rgba(16, 185, 129, 0.05);
        }
        @media (max-width: 900px) {
          .layers-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Slide>
  );
}

// Slide 3: Uso Combinato
function Slide3() {
  return (
    <Slide
      title="Uso Combinato: Best Practice"
      subtitle="VLAN + Subnetting insieme"
    >
      <AnimatedContent>
        <div className="combined-content">
          <div className="concept-box">
            <h4>La pratica comune</h4>
            <p>
              Nelle reti aziendali moderne, ogni VLAN ha tipicamente associata
              una propria <strong>subnet IP</strong>. Questo permette di sfruttare
              i benefici di entrambe le tecnologie.
            </p>
          </div>

          <div className="mapping-example">
            <h4>Esempio di Mapping VLAN-Subnet</h4>
            <div className="mapping-grid">
              <div className="mapping-row header">
                <span>VLAN</span>
                <span>Nome</span>
                <span>Subnet</span>
                <span>Gateway</span>
              </div>
              <div className="mapping-row v10">
                <span className="vlan-badge">10</span>
                <span>Amministrazione</span>
                <span className="subnet-value">192.168.10.0/24</span>
                <span>192.168.10.1</span>
              </div>
              <div className="mapping-row v20">
                <span className="vlan-badge">20</span>
                <span>Sviluppo</span>
                <span className="subnet-value">192.168.20.0/24</span>
                <span>192.168.20.1</span>
              </div>
              <div className="mapping-row v30">
                <span className="vlan-badge">30</span>
                <span>Vendite</span>
                <span className="subnet-value">192.168.30.0/24</span>
                <span>192.168.30.1</span>
              </div>
              <div className="mapping-row v99">
                <span className="vlan-badge">99</span>
                <span>Management</span>
                <span className="subnet-value">192.168.99.0/24</span>
                <span>192.168.99.1</span>
              </div>
            </div>
          </div>

          <div className="benefits-combined">
            <h4>Perche combinarli?</h4>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">🔒</span>
                <div>
                  <strong>Doppia sicurezza</strong>
                  <p>Isolamento sia a L2 che a L3</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">📍</span>
                <div>
                  <strong>Identificazione chiara</strong>
                  <p>L'IP rivela subito la VLAN</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🛠️</span>
                <div>
                  <strong>Gestione semplificata</strong>
                  <p>Schema logico coerente</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🔀</span>
                <div>
                  <strong>Routing efficiente</strong>
                  <p>Ogni VLAN ha il suo gateway SVI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .combined-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .concept-box {
          background: #e0f2fe;
          border-left: 4px solid var(--info);
          padding: 1rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 1.5rem;
        }
        .concept-box h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .concept-box p {
          margin: 0;
          color: var(--gray-700);
        }
        .mapping-example {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          margin-bottom: 1.5rem;
        }
        .mapping-example h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .mapping-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mapping-row {
          display: grid;
          grid-template-columns: 80px 1fr 1fr 1fr;
          gap: 1rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          align-items: center;
        }
        .mapping-row.header {
          background: var(--gray-100);
          font-weight: 600;
          color: var(--gray-600);
          font-size: 0.85rem;
        }
        .mapping-row.v10 { background: rgba(59, 130, 246, 0.1); }
        .mapping-row.v20 { background: rgba(16, 185, 129, 0.1); }
        .mapping-row.v30 { background: rgba(245, 158, 11, 0.1); }
        .mapping-row.v99 { background: rgba(139, 92, 246, 0.1); }
        .vlan-badge {
          background: var(--gray-800);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-family: 'Fira Code', monospace;
          font-weight: 600;
          text-align: center;
        }
        .subnet-value {
          font-family: 'Fira Code', monospace;
          color: var(--primary);
        }
        .benefits-combined h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .benefit-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: var(--gray-100);
          border-radius: var(--radius-md);
        }
        .benefit-icon {
          font-size: 1.5rem;
        }
        .benefit-item strong {
          display: block;
          color: var(--gray-800);
          margin-bottom: 0.25rem;
        }
        .benefit-item p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--gray-600);
        }
      `}</style>
    </Slide>
  );
}

// Slide 4: Quando usare cosa
function Slide4() {
  return (
    <Slide
      title="Quando Usare Cosa?"
      subtitle="Guida pratica alla scelta"
    >
      <AnimatedContent>
        <div className="decision-content">
          <TwoColumns
            left={
              <div className="use-case-section vlan-use">
                <h3>Usa le VLAN quando...</h3>
                <div className="use-cases">
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Vuoi <strong>isolare traffico</strong> sullo stesso switch fisico</p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Devi <strong>raggruppare utenti</strong> per funzione, non per posizione</p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Vuoi <strong>ridurre i broadcast</strong> in una LAN</p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Hai bisogno di <strong>flessibilita</strong> nel riassegnare porte</p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Devi separare traffico <strong>voce e dati</strong></p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Vuoi <strong>evitare costi</strong> di switch aggiuntivi</p>
                  </div>
                </div>
              </div>
            }
            right={
              <div className="use-case-section subnet-use">
                <h3>Usa il Subnetting quando...</h3>
                <div className="use-cases">
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Devi <strong>strutturare l'indirizzamento IP</strong> gerarchicamente</p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Vuoi <strong>ottimizzare le tabelle di routing</strong></p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Hai <strong>sedi geografiche diverse</strong> da collegare</p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Devi definire <strong>policy di routing</strong> specifiche</p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Vuoi <strong>aggregare route</strong> (summarization)</p>
                  </div>
                  <div className="use-case">
                    <span className="case-icon">✓</span>
                    <p>Devi gestire <strong>comunicazione tra reti</strong> diverse</p>
                  </div>
                </div>
              </div>
            }
          />

          <div className="combined-recommendation">
            <h4>Nella maggior parte dei casi: USA ENTRAMBI!</h4>
            <p>
              Crea una VLAN per ogni gruppo logico, assegna una subnet a ogni VLAN,
              e usa uno switch L3 o router per l'inter-VLAN routing.
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .decision-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .use-case-section {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          height: 100%;
        }
        .use-case-section h3 {
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--gray-200);
          text-align: center;
        }
        .vlan-use h3 { color: var(--primary); }
        .subnet-use h3 { color: var(--success); }
        .use-cases {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .use-case {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .case-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
        }
        .vlan-use .case-icon {
          background: var(--primary);
          color: white;
        }
        .subnet-use .case-icon {
          background: var(--success);
          color: white;
        }
        .use-case p {
          margin: 0;
          color: var(--gray-600);
          font-size: 0.9rem;
          line-height: 1.4;
        }
        .combined-recommendation {
          margin-top: 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--success));
          color: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          text-align: center;
        }
        .combined-recommendation h4 {
          color: white;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .combined-recommendation p {
          margin: 0;
          color: rgba(255,255,255,0.9);
        }
      `}</style>
    </Slide>
  );
}

// Slide 5: Differenze nella Sicurezza
function Slide5() {
  return (
    <Slide
      title="Sicurezza a Confronto"
      subtitle="Come ogni approccio protegge la rete"
    >
      <AnimatedContent>
        <div className="security-content">
          <div className="security-comparison">
            <div className="security-card vlan-security">
              <h4>Sicurezza VLAN</h4>
              <div className="security-features">
                <div className="feature">
                  <span className="feature-icon">🔒</span>
                  <div>
                    <strong>Isolamento L2</strong>
                    <p>I frame non possono uscire dalla VLAN senza routing</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">🚫</span>
                  <div>
                    <strong>Blocco ARP</strong>
                    <p>Gli attacchi ARP sono confinati alla VLAN</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">📡</span>
                  <div>
                    <strong>Broadcast isolato</strong>
                    <p>Sniffing limitato al segmento</p>
                  </div>
                </div>
              </div>
              <div className="security-warning">
                <strong>Attenzione:</strong> VLAN Hopping, Double Tagging attacks
              </div>
            </div>

            <div className="security-card subnet-security">
              <h4>Sicurezza Subnetting</h4>
              <div className="security-features">
                <div className="feature">
                  <span className="feature-icon">🛡️</span>
                  <div>
                    <strong>ACL e Firewall</strong>
                    <p>Controllo granulare del traffico inter-subnet</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">📋</span>
                  <div>
                    <strong>Policy routing</strong>
                    <p>Routing selettivo basato su source/destination</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">📊</span>
                  <div>
                    <strong>Logging centralizzato</strong>
                    <p>Il router puo loggare tutto il traffico</p>
                  </div>
                </div>
              </div>
              <div className="security-warning">
                <strong>Attenzione:</strong> Richiede corretta configurazione ACL
              </div>
            </div>
          </div>

          <div className="best-practice">
            <h4>Best Practice Sicurezza</h4>
            <div className="bp-grid">
              <div className="bp-item">
                <span className="bp-num">1</span>
                <p>Combina VLAN + ACL per difesa in profondita</p>
              </div>
              <div className="bp-item">
                <span className="bp-num">2</span>
                <p>Non usare VLAN 1 per il traffico utente</p>
              </div>
              <div className="bp-item">
                <span className="bp-num">3</span>
                <p>Configura porte come access di default</p>
              </div>
              <div className="bp-item">
                <span className="bp-num">4</span>
                <p>Usa VLAN pruning sui trunk</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .security-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .security-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .security-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        .security-card h4 {
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--gray-200);
          text-align: center;
        }
        .vlan-security h4 { color: var(--primary); }
        .subnet-security h4 { color: var(--success); }
        .security-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .feature {
          display: flex;
          gap: 1rem;
        }
        .feature-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        .feature strong {
          display: block;
          color: var(--gray-800);
          margin-bottom: 0.25rem;
        }
        .feature p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--gray-600);
        }
        .security-warning {
          background: #fef3c7;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          color: var(--gray-700);
        }
        .best-practice {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
        }
        .best-practice h4 {
          margin-bottom: 1rem;
          text-align: center;
          color: var(--gray-700);
        }
        .bp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .bp-item {
          display: flex;
          gap: 0.75rem;
          background: white;
          padding: 1rem;
          border-radius: var(--radius-md);
          align-items: center;
        }
        .bp-num {
          width: 28px;
          height: 28px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
        .bp-item p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--gray-700);
        }
        @media (max-width: 768px) {
          .security-comparison {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Slide>
  );
}

// Slide 6: Tabella Riepilogativa
function Slide6() {
  return (
    <Slide
      title="Tabella Riepilogativa"
      subtitle="VLAN vs Subnetting a colpo d'occhio"
    >
      <AnimatedContent>
        <div className="summary-table-content">
          <div className="table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Caratteristica</th>
                  <th className="vlan-col">VLAN</th>
                  <th className="subnet-col">Subnetting</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Layer OSI</td>
                  <td className="vlan-col">2 (Data Link)</td>
                  <td className="subnet-col">3 (Network)</td>
                </tr>
                <tr>
                  <td>Identificatore</td>
                  <td className="vlan-col">VLAN ID (1-4094)</td>
                  <td className="subnet-col">Indirizzo IP + Maschera</td>
                </tr>
                <tr>
                  <td>Configurazione</td>
                  <td className="vlan-col">Switch</td>
                  <td className="subnet-col">Host, Router</td>
                </tr>
                <tr>
                  <td>Broadcast domain</td>
                  <td className="vlan-col">Per VLAN</td>
                  <td className="subnet-col">Per Subnet</td>
                </tr>
                <tr>
                  <td>Comunicazione tra segmenti</td>
                  <td className="vlan-col">Inter-VLAN routing</td>
                  <td className="subnet-col">Routing IP</td>
                </tr>
                <tr>
                  <td>Flessibilita</td>
                  <td className="vlan-col">Alta (assegnazione porta)</td>
                  <td className="subnet-col">Media (config IP)</td>
                </tr>
                <tr>
                  <td>Costo hardware</td>
                  <td className="vlan-col">Switch managed</td>
                  <td className="subnet-col">Router o L3 switch</td>
                </tr>
                <tr>
                  <td>Scalabilita</td>
                  <td className="vlan-col">Max 4094 VLAN</td>
                  <td className="subnet-col">Illimitata</td>
                </tr>
                <tr>
                  <td>Uso tipico</td>
                  <td className="vlan-col">LAN locale, campus</td>
                  <td className="subnet-col">WAN, Internet, routing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="key-insight">
            <div className="insight-icon">💡</div>
            <div className="insight-text">
              <strong>Insight chiave:</strong> VLAN e Subnetting non sono in competizione.
              Le VLAN organizzano il traffico a livello switch, il subnetting lo organizza
              a livello IP. Insieme creano una rete ben strutturata e sicura.
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .summary-table-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .table-container {
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }
        .comparison-table {
          width: 100%;
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .comparison-table th, .comparison-table td {
          padding: 1rem;
          text-align: left;
        }
        .comparison-table th {
          background: var(--gray-100);
          font-weight: 600;
        }
        .comparison-table th.vlan-col {
          background: var(--primary);
          color: white;
        }
        .comparison-table th.subnet-col {
          background: var(--success);
          color: white;
        }
        .comparison-table td.vlan-col {
          background: rgba(59, 130, 246, 0.05);
        }
        .comparison-table td.subnet-col {
          background: rgba(16, 185, 129, 0.05);
        }
        .comparison-table tbody tr:hover {
          background: var(--gray-50);
        }
        .comparison-table tbody tr:hover td.vlan-col {
          background: rgba(59, 130, 246, 0.1);
        }
        .comparison-table tbody tr:hover td.subnet-col {
          background: rgba(16, 185, 129, 0.1);
        }
        .key-insight {
          display: flex;
          gap: 1rem;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          border-left: 4px solid var(--warning);
        }
        .insight-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        .insight-text {
          color: var(--gray-700);
        }
        .insight-text strong {
          display: block;
          margin-bottom: 0.25rem;
          color: var(--gray-800);
        }
      `}</style>
    </Slide>
  );
}

// Slide 7: Riepilogo
function Slide7() {
  return (
    <Slide
      title="Riepilogo Modulo 5"
      subtitle="Punti chiave del confronto"
    >
      <AnimatedContent>
        <div className="recap-content">
          <div className="recap-points">
            <motion.div
              className="recap-point"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="point-num">1</span>
              <p><strong>Layer diversi:</strong> VLAN opera a L2 (switch), Subnetting a L3 (router)</p>
            </motion.div>

            <motion.div
              className="recap-point"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="point-num">2</span>
              <p><strong>Non sono alternative:</strong> Si usano insieme per una segmentazione completa</p>
            </motion.div>

            <motion.div
              className="recap-point"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="point-num">3</span>
              <p><strong>Best practice:</strong> 1 VLAN = 1 Subnet (mapping diretto)</p>
            </motion.div>

            <motion.div
              className="recap-point"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="point-num">4</span>
              <p><strong>Sicurezza:</strong> Combinare entrambi per difesa in profondita</p>
            </motion.div>

            <motion.div
              className="recap-point"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="point-num">5</span>
              <p><strong>Inter-VLAN routing:</strong> Necessario per far comunicare VLAN diverse</p>
            </motion.div>
          </div>

          <div className="final-schema">
            <h4>Schema tipico rete aziendale</h4>
            <div className="schema-visual">
              <div className="schema-row">
                <div className="schema-item user">
                  <span>💻 PC</span>
                  <span className="item-detail">192.168.10.50</span>
                </div>
                <div className="arrow-right">→</div>
                <div className="schema-item switch">
                  <span>🔀 Switch</span>
                  <span className="item-detail">VLAN 10, Access</span>
                </div>
                <div className="arrow-right">→</div>
                <div className="schema-item core">
                  <span>🔀 Core L3</span>
                  <span className="item-detail">SVI, Routing</span>
                </div>
                <div className="arrow-right">→</div>
                <div className="schema-item internet">
                  <span>🌐 Internet</span>
                </div>
              </div>
            </div>
          </div>

          <div className="next-module">
            <h4>Nel prossimo modulo...</h4>
            <p>
              Applicheremo tutti questi concetti in <strong>casi studio reali</strong>:
              scenari aziendali con requisiti concreti di segmentazione.
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .recap-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .recap-points {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .recap-point {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }
        .point-num {
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
        .recap-point p {
          margin: 0;
          color: var(--gray-700);
        }
        .final-schema {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 1.5rem;
        }
        .final-schema h4 {
          text-align: center;
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .schema-visual {
          overflow-x: auto;
        }
        .schema-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .schema-item {
          background: white;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          text-align: center;
          box-shadow: var(--shadow-sm);
          min-width: 100px;
        }
        .schema-item span:first-child {
          display: block;
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        .item-detail {
          font-size: 0.75rem;
          color: var(--gray-500);
        }
        .arrow-right {
          color: var(--gray-400);
          font-size: 1.25rem;
        }
        .next-module {
          background: linear-gradient(135deg, var(--error), #dc2626);
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

export default function Module5() {
  return <ModuleWrapper slides={slides} moduleName="Modulo 5: VLAN vs Subnetting" />;
}
