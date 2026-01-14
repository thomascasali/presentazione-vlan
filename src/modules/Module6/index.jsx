import { ModuleWrapper } from '../../components/common/ModuleWrapper';
import { Slide, AnimatedContent, TwoColumns } from '../../components/common';
import { motion } from 'framer-motion';

// Slide 1: Introduzione Casi Studio
function Slide1() {
  return (
    <Slide
      title="Casi Studio Reali"
      subtitle="Applicazione pratica dei concetti"
    >
      <AnimatedContent>
        <div className="intro-content">
          <div className="big-icon">🏢</div>
          <h2>Dalla teoria alla pratica</h2>
          <p className="lead">
            In questo modulo analizzeremo <strong>scenari aziendali realistici</strong>
            per applicare tutto cio che abbiamo imparato su subnetting e VLAN.
          </p>

          <div className="cases-preview">
            <div className="case-card">
              <span className="case-icon">🏫</span>
              <h4>Caso 1: Scuola</h4>
              <p>Istituto con 4 laboratori e uffici amministrativi</p>
            </div>
            <div className="case-card">
              <span className="case-icon">🏢</span>
              <h4>Caso 2: PMI</h4>
              <p>Azienda con 3 reparti e server interni</p>
            </div>
            <div className="case-card">
              <span className="case-icon">🏥</span>
              <h4>Caso 3: Ospedale</h4>
              <p>Requisiti di sicurezza stringenti</p>
            </div>
          </div>

          <div className="method-box">
            <h4>Metodologia di progettazione</h4>
            <div className="method-steps">
              <span>1. Analisi requisiti</span>
              <span>→</span>
              <span>2. Schema VLAN</span>
              <span>→</span>
              <span>3. Piano IP</span>
              <span>→</span>
              <span>4. Configurazione</span>
            </div>
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
        .cases-preview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .case-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        .case-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 0.75rem;
        }
        .case-card h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .case-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--gray-600);
        }
        .method-box {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
        }
        .method-box h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .method-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .method-steps span:not(:nth-child(even)) {
          background: var(--primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 500;
        }
        .method-steps span:nth-child(even) {
          color: var(--gray-400);
        }
      `}</style>
    </Slide>
  );
}

// Slide 2: Caso Studio - Scuola
function Slide2() {
  return (
    <Slide
      title="Caso 1: Istituto Scolastico"
      subtitle="Segmentazione di una rete scolastica"
    >
      <AnimatedContent>
        <div className="case-content">
          <div className="scenario-box">
            <h4>Scenario</h4>
            <p>
              Un istituto tecnico ha 4 laboratori informatici (25 PC ciascuno),
              uffici amministrativi (15 PC), una sala server, WiFi studenti e WiFi docenti.
              Budget limitato, ma serve sicurezza per i dati amministrativi.
            </p>
          </div>

          <div className="requirements">
            <h4>Requisiti</h4>
            <div className="req-grid">
              <div className="req-item">
                <span className="req-name">Lab 1-4</span>
                <span className="req-detail">25 host ciascuno</span>
              </div>
              <div className="req-item">
                <span className="req-name">Segreteria</span>
                <span className="req-detail">15 host</span>
              </div>
              <div className="req-item">
                <span className="req-name">Server</span>
                <span className="req-detail">10 host</span>
              </div>
              <div className="req-item">
                <span className="req-name">WiFi Studenti</span>
                <span className="req-detail">100 host</span>
              </div>
              <div className="req-item">
                <span className="req-name">WiFi Docenti</span>
                <span className="req-detail">30 host</span>
              </div>
              <div className="req-item">
                <span className="req-name">Management</span>
                <span className="req-detail">5 host</span>
              </div>
            </div>
          </div>

          <div className="solution-section">
            <h4>Soluzione Proposta</h4>
            <div className="solution-table">
              <table>
                <thead>
                  <tr>
                    <th>VLAN</th>
                    <th>Nome</th>
                    <th>Subnet (VLSM)</th>
                    <th>Host</th>
                    <th>Gateway</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>WiFi-Studenti</td>
                    <td>10.10.10.0/25</td>
                    <td>126</td>
                    <td>10.10.10.1</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Lab1</td>
                    <td>10.10.20.0/27</td>
                    <td>30</td>
                    <td>10.10.20.1</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>Lab2</td>
                    <td>10.10.21.0/27</td>
                    <td>30</td>
                    <td>10.10.21.1</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>Lab3</td>
                    <td>10.10.22.0/27</td>
                    <td>30</td>
                    <td>10.10.22.1</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>Lab4</td>
                    <td>10.10.23.0/27</td>
                    <td>30</td>
                    <td>10.10.23.1</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>WiFi-Docenti</td>
                    <td>10.10.30.0/27</td>
                    <td>30</td>
                    <td>10.10.30.1</td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>Segreteria</td>
                    <td>10.10.50.0/28</td>
                    <td>14</td>
                    <td>10.10.50.1</td>
                  </tr>
                  <tr>
                    <td>100</td>
                    <td>Server</td>
                    <td>10.10.100.0/28</td>
                    <td>14</td>
                    <td>10.10.100.1</td>
                  </tr>
                  <tr>
                    <td>99</td>
                    <td>Management</td>
                    <td>10.10.99.0/29</td>
                    <td>6</td>
                    <td>10.10.99.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .case-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .scenario-box {
          background: #e0f2fe;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 1.5rem;
          border-left: 4px solid var(--info);
        }
        .scenario-box h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .scenario-box p {
          margin: 0;
          color: var(--gray-700);
        }
        .requirements {
          margin-bottom: 1.5rem;
        }
        .requirements h4 {
          margin-bottom: 0.75rem;
          color: var(--gray-700);
        }
        .req-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.75rem;
        }
        .req-item {
          background: var(--gray-100);
          padding: 0.75rem;
          border-radius: var(--radius-md);
          text-align: center;
        }
        .req-name {
          display: block;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--gray-700);
        }
        .req-detail {
          display: block;
          font-size: 0.8rem;
          color: var(--primary);
          font-family: 'Fira Code', monospace;
        }
        .solution-section h4 {
          margin-bottom: 0.75rem;
          color: var(--gray-700);
        }
        .solution-table {
          overflow-x: auto;
        }
        .solution-table table {
          width: 100%;
          font-size: 0.85rem;
        }
        .solution-table td {
          font-family: 'Fira Code', monospace;
        }
        @media (max-width: 900px) {
          .req-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </Slide>
  );
}

// Slide 3: Caso Scuola - Diagramma
function Slide3() {
  return (
    <Slide
      title="Caso 1: Schema di Rete"
      subtitle="Topologia e flussi di traffico"
    >
      <AnimatedContent>
        <div className="diagram-content">
          <div className="network-diagram">
            <div className="diagram-layer core-layer">
              <span className="layer-label">Core / Distribution</span>
              <div className="device core-switch">
                <span className="device-icon">🔀</span>
                <span className="device-name">Switch L3 Core</span>
                <span className="device-detail">Inter-VLAN Routing, SVI</span>
              </div>
            </div>

            <div className="trunk-connections">
              <div className="trunk-line"></div>
              <span className="trunk-label">Trunk 802.1Q (All VLANs)</span>
            </div>

            <div className="diagram-layer access-layer">
              <span className="layer-label">Access Layer</span>
              <div className="access-switches">
                <div className="device access-switch">
                  <span className="device-icon">🔀</span>
                  <span className="device-name">SW-Lab</span>
                  <span className="device-detail">VLAN 20-23</span>
                </div>
                <div className="device access-switch">
                  <span className="device-icon">🔀</span>
                  <span className="device-name">SW-Admin</span>
                  <span className="device-detail">VLAN 50, 100</span>
                </div>
                <div className="device access-switch">
                  <span className="device-icon">📶</span>
                  <span className="device-name">AP Controller</span>
                  <span className="device-detail">VLAN 10, 30</span>
                </div>
              </div>
            </div>

            <div className="diagram-layer endpoint-layer">
              <span className="layer-label">Endpoints</span>
              <div className="endpoints">
                <div className="endpoint-group">
                  <span className="group-label">Laboratori</span>
                  <div className="endpoints-row">
                    <span>💻</span><span>💻</span><span>💻</span><span>💻</span>
                  </div>
                </div>
                <div className="endpoint-group">
                  <span className="group-label">Segreteria</span>
                  <div className="endpoints-row">
                    <span>💻</span><span>🖨️</span><span>🖥️</span>
                  </div>
                </div>
                <div className="endpoint-group">
                  <span className="group-label">WiFi</span>
                  <div className="endpoints-row">
                    <span>📱</span><span>💻</span><span>📱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="security-notes">
            <h4>Note sulla Sicurezza</h4>
            <div className="notes-grid">
              <div className="note-item">
                <span className="note-icon">🔒</span>
                <p>ACL per bloccare accesso da WiFi-Studenti a Segreteria</p>
              </div>
              <div className="note-item">
                <span className="note-icon">🛡️</span>
                <p>VLAN Management accessibile solo da rete admin</p>
              </div>
              <div className="note-item">
                <span className="note-icon">📊</span>
                <p>QoS priorita al traffico didattico sui laboratori</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .diagram-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .network-diagram {
          background: var(--gray-50);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .diagram-layer {
          position: relative;
          padding: 1rem;
          margin-bottom: 1rem;
        }
        .layer-label {
          position: absolute;
          top: 0;
          left: 0;
          background: var(--gray-600);
          color: white;
          font-size: 0.7rem;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }
        .core-layer {
          display: flex;
          justify-content: center;
          padding-top: 2rem;
        }
        .device {
          background: white;
          padding: 1rem;
          border-radius: var(--radius-md);
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .device-icon {
          display: block;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .device-name {
          display: block;
          font-weight: 600;
          color: var(--gray-800);
          font-size: 0.9rem;
        }
        .device-detail {
          display: block;
          font-size: 0.75rem;
          color: var(--gray-500);
        }
        .core-switch {
          border: 2px solid var(--primary);
        }
        .trunk-connections {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem 0;
        }
        .trunk-line {
          width: 2px;
          height: 30px;
          background: var(--primary);
        }
        .trunk-label {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 500;
        }
        .access-layer {
          padding-top: 2rem;
        }
        .access-switches {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }
        .access-switch {
          border: 2px solid var(--success);
        }
        .endpoint-layer {
          padding-top: 2rem;
        }
        .endpoints {
          display: flex;
          justify-content: center;
          gap: 3rem;
        }
        .endpoint-group {
          text-align: center;
        }
        .group-label {
          display: block;
          font-size: 0.8rem;
          color: var(--gray-600);
          margin-bottom: 0.5rem;
        }
        .endpoints-row {
          display: flex;
          gap: 0.5rem;
          font-size: 1.5rem;
        }
        .security-notes h4 {
          margin-bottom: 0.75rem;
          color: var(--gray-700);
        }
        .notes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .note-item {
          display: flex;
          gap: 0.75rem;
          background: white;
          padding: 1rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }
        .note-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }
        .note-item p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--gray-600);
        }
      `}</style>
    </Slide>
  );
}

// Slide 4: Caso PMI
function Slide4() {
  return (
    <Slide
      title="Caso 2: PMI Manifatturiera"
      subtitle="Azienda con produzione, uffici e ospiti"
    >
      <AnimatedContent>
        <div className="case-content">
          <div className="scenario-box">
            <h4>Scenario</h4>
            <p>
              Una PMI con 50 dipendenti su 2 piani. Piano terra: produzione con PLC e sensori IoT.
              Primo piano: uffici amministrativi, commerciali e IT. Sala riunioni con WiFi ospiti.
              Necessita di separare completamente la rete OT (produzione) dalla rete IT.
            </p>
          </div>

          <TwoColumns
            left={
              <div className="requirements-section">
                <h4>Requisiti</h4>
                <div className="req-list">
                  <div className="req-row">
                    <span className="req-label">Produzione (OT)</span>
                    <span className="req-value">30 dispositivi</span>
                  </div>
                  <div className="req-row">
                    <span className="req-label">Ufficio Admin</span>
                    <span className="req-value">15 host</span>
                  </div>
                  <div className="req-row">
                    <span className="req-label">Commerciale</span>
                    <span className="req-value">20 host</span>
                  </div>
                  <div className="req-row">
                    <span className="req-label">IT</span>
                    <span className="req-value">10 host</span>
                  </div>
                  <div className="req-row">
                    <span className="req-label">Server</span>
                    <span className="req-value">8 host</span>
                  </div>
                  <div className="req-row">
                    <span className="req-label">WiFi Ospiti</span>
                    <span className="req-value">50 host</span>
                  </div>
                  <div className="req-row">
                    <span className="req-label">VoIP</span>
                    <span className="req-value">40 telefoni</span>
                  </div>
                </div>
              </div>
            }
            right={
              <div className="solution-section">
                <h4>Piano VLAN + Subnet</h4>
                <div className="solution-mini">
                  <div className="vlan-row ot">
                    <span className="vlan-id">VLAN 5</span>
                    <span className="vlan-name">OT/Produzione</span>
                    <span className="vlan-subnet">172.16.5.0/27</span>
                  </div>
                  <div className="vlan-row">
                    <span className="vlan-id">VLAN 10</span>
                    <span className="vlan-name">Admin</span>
                    <span className="vlan-subnet">192.168.10.0/28</span>
                  </div>
                  <div className="vlan-row">
                    <span className="vlan-id">VLAN 20</span>
                    <span className="vlan-name">Commerciale</span>
                    <span className="vlan-subnet">192.168.20.0/27</span>
                  </div>
                  <div className="vlan-row">
                    <span className="vlan-id">VLAN 30</span>
                    <span className="vlan-name">IT</span>
                    <span className="vlan-subnet">192.168.30.0/28</span>
                  </div>
                  <div className="vlan-row">
                    <span className="vlan-id">VLAN 50</span>
                    <span className="vlan-name">WiFi Ospiti</span>
                    <span className="vlan-subnet">10.0.50.0/26</span>
                  </div>
                  <div className="vlan-row voice">
                    <span className="vlan-id">VLAN 100</span>
                    <span className="vlan-name">Voice</span>
                    <span className="vlan-subnet">192.168.100.0/26</span>
                  </div>
                  <div className="vlan-row">
                    <span className="vlan-id">VLAN 200</span>
                    <span className="vlan-name">Server</span>
                    <span className="vlan-subnet">192.168.200.0/28</span>
                  </div>
                </div>
              </div>
            }
          />

          <div className="key-decision">
            <h4>Decisione Chiave: Isolamento OT</h4>
            <p>
              La rete OT (produzione) usa un <strong>range IP completamente diverso</strong> (172.16.x.x)
              e un <strong>firewall dedicato</strong> per l'accesso. Nessun routing diretto tra OT e IT.
              Solo il server SCADA puo comunicare con entrambe le reti.
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .case-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .scenario-box {
          background: #d1fae5;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 1.5rem;
          border-left: 4px solid var(--success);
        }
        .scenario-box h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .scenario-box p {
          margin: 0;
          color: var(--gray-700);
        }
        .requirements-section, .solution-section {
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          height: 100%;
        }
        .requirements-section h4, .solution-section h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .req-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .req-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0.75rem;
          background: var(--gray-100);
          border-radius: var(--radius-sm);
        }
        .req-label {
          color: var(--gray-700);
        }
        .req-value {
          font-family: 'Fira Code', monospace;
          color: var(--primary);
          font-size: 0.9rem;
        }
        .solution-mini {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .vlan-row {
          display: grid;
          grid-template-columns: 70px 1fr 1fr;
          gap: 0.5rem;
          padding: 0.5rem;
          background: var(--gray-100);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          align-items: center;
        }
        .vlan-row.ot {
          background: #fef3c7;
          border: 1px solid var(--warning);
        }
        .vlan-row.voice {
          background: #d1fae5;
          border: 1px solid var(--success);
        }
        .vlan-id {
          font-weight: 600;
          color: var(--gray-800);
        }
        .vlan-name {
          color: var(--gray-600);
        }
        .vlan-subnet {
          font-family: 'Fira Code', monospace;
          color: var(--primary);
          font-size: 0.8rem;
        }
        .key-decision {
          margin-top: 1.5rem;
          background: #fee2e2;
          border-left: 4px solid var(--error);
          padding: 1rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }
        .key-decision h4 {
          margin-bottom: 0.5rem;
          color: var(--error);
        }
        .key-decision p {
          margin: 0;
          color: var(--gray-700);
        }
      `}</style>
    </Slide>
  );
}

// Slide 5: Caso Ospedale
function Slide5() {
  return (
    <Slide
      title="Caso 3: Struttura Sanitaria"
      subtitle="Requisiti di sicurezza e conformita"
    >
      <AnimatedContent>
        <div className="case-content">
          <div className="scenario-box hospital">
            <h4>Scenario</h4>
            <p>
              Un poliambulatorio con dispositivi medici, cartelle cliniche elettroniche,
              rete WiFi pazienti e personale. Deve rispettare normative sulla privacy
              dei dati sanitari (GDPR, regolamenti sanitari).
            </p>
          </div>

          <div className="critical-requirements">
            <h4>Requisiti Critici</h4>
            <div className="critical-grid">
              <div className="critical-item">
                <span className="critical-icon">🔐</span>
                <strong>Isolamento dati paziente</strong>
                <p>I dispositivi medici non devono essere accessibili dalla rete ospiti</p>
              </div>
              <div className="critical-item">
                <span className="critical-icon">📊</span>
                <strong>Logging completo</strong>
                <p>Tracciabilita di ogni accesso ai sistemi clinici</p>
              </div>
              <div className="critical-item">
                <span className="critical-icon">⚡</span>
                <strong>Alta disponibilita</strong>
                <p>I dispositivi medici critici devono avere ridondanza</p>
              </div>
              <div className="critical-item">
                <span className="critical-icon">🛡️</span>
                <strong>Segmentazione rigorosa</strong>
                <p>Ogni reparto e una VLAN separata</p>
              </div>
            </div>
          </div>

          <div className="hospital-solution">
            <h4>Architettura di Sicurezza</h4>
            <table>
              <thead>
                <tr>
                  <th>VLAN</th>
                  <th>Segmento</th>
                  <th>Subnet</th>
                  <th>Accesso</th>
                </tr>
              </thead>
              <tbody>
                <tr className="critical-row">
                  <td>10</td>
                  <td>Dispositivi Medici</td>
                  <td>10.10.10.0/24</td>
                  <td>Solo personale medico autorizzato</td>
                </tr>
                <tr className="critical-row">
                  <td>20</td>
                  <td>Cartelle Cliniche</td>
                  <td>10.10.20.0/24</td>
                  <td>802.1X + certificati</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Amministrazione</td>
                  <td>10.10.30.0/24</td>
                  <td>Rete uffici</td>
                </tr>
                <tr className="guest-row">
                  <td>100</td>
                  <td>WiFi Pazienti</td>
                  <td>192.168.100.0/23</td>
                  <td>Solo Internet, no LAN</td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>IoT/Building</td>
                  <td>172.16.200.0/24</td>
                  <td>Isolato, no routing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .case-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .scenario-box.hospital {
          background: #fce7f3;
          border-left: 4px solid #ec4899;
        }
        .scenario-box h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .scenario-box p {
          margin: 0;
          color: var(--gray-700);
        }
        .critical-requirements {
          margin: 1.5rem 0;
        }
        .critical-requirements h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .critical-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .critical-item {
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        .critical-icon {
          font-size: 1.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .critical-item strong {
          display: block;
          color: var(--gray-800);
          margin-bottom: 0.25rem;
        }
        .critical-item p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--gray-600);
        }
        .hospital-solution h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .hospital-solution table {
          width: 100%;
          font-size: 0.9rem;
        }
        .hospital-solution td {
          font-family: 'Fira Code', monospace;
        }
        .critical-row {
          background: #fee2e2;
        }
        .guest-row {
          background: #d1fae5;
        }
      `}</style>
    </Slide>
  );
}

// Slide 6: Checklist di Progettazione
function Slide6() {
  return (
    <Slide
      title="Checklist di Progettazione"
      subtitle="Passi da seguire per ogni progetto"
    >
      <AnimatedContent>
        <div className="checklist-content">
          <div className="checklist-grid">
            <div className="checklist-section">
              <h4>1. Analisi Requisiti</h4>
              <div className="checklist-items">
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Numero di host per segmento</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Requisiti di sicurezza</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Flussi di traffico previsti</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Crescita futura stimata</span>
                </label>
              </div>
            </div>

            <div className="checklist-section">
              <h4>2. Progettazione VLAN</h4>
              <div className="checklist-items">
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Schema di numerazione VLAN</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Naming convention</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>VLAN per voice separata</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Management VLAN dedicata</span>
                </label>
              </div>
            </div>

            <div className="checklist-section">
              <h4>3. Piano IP (VLSM)</h4>
              <div className="checklist-items">
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Maschera appropriata per ogni segmento</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Gateway per ogni VLAN</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Server DHCP configurato</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Documentazione indirizzi</span>
                </label>
              </div>
            </div>

            <div className="checklist-section">
              <h4>4. Sicurezza</h4>
              <div className="checklist-items">
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>ACL inter-VLAN definite</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Porte non usate disabilitate</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>VLAN 1 non utilizzata</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" disabled />
                  <span>Native VLAN cambiata</span>
                </label>
              </div>
            </div>
          </div>

          <div className="pro-tip">
            <h4>Pro Tip</h4>
            <p>
              Documenta tutto in un foglio Excel o wiki aziendale: VLAN, subnet, gateway,
              DHCP scope, ACL. Una buona documentazione risparmia ore di troubleshooting!
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .checklist-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .checklist-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .checklist-section {
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        .checklist-section h4 {
          margin-bottom: 1rem;
          color: var(--primary);
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--gray-200);
        }
        .checklist-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .check-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem;
          background: var(--gray-50);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .check-item:hover {
          background: var(--gray-100);
        }
        .check-item input {
          width: 18px;
          height: 18px;
          accent-color: var(--primary);
        }
        .check-item span {
          color: var(--gray-700);
          font-size: 0.9rem;
        }
        .pro-tip {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
        }
        .pro-tip h4 {
          color: white;
          margin-bottom: 0.5rem;
        }
        .pro-tip p {
          margin: 0;
          color: rgba(255,255,255,0.9);
        }
      `}</style>
    </Slide>
  );
}

// Slide 7: Riepilogo
function Slide7() {
  return (
    <Slide
      title="Riepilogo Casi Studio"
      subtitle="Lezioni apprese"
    >
      <AnimatedContent>
        <div className="recap-content">
          <div className="lessons-learned">
            <h4>Lezioni Chiave</h4>
            <div className="lessons-grid">
              <motion.div
                className="lesson-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="lesson-num">1</span>
                <p>Ogni contesto ha requisiti diversi: analizza prima di progettare</p>
              </motion.div>
              <motion.div
                className="lesson-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="lesson-num">2</span>
                <p>VLSM permette di ottimizzare gli indirizzi in base alle reali esigenze</p>
              </motion.div>
              <motion.div
                className="lesson-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="lesson-num">3</span>
                <p>La sicurezza richiede isolamento a piu livelli (L2 + L3)</p>
              </motion.div>
              <motion.div
                className="lesson-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="lesson-num">4</span>
                <p>Voice e IoT/OT richiedono sempre VLAN dedicate</p>
              </motion.div>
              <motion.div
                className="lesson-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="lesson-num">5</span>
                <p>Documenta tutto: la documentazione e parte della soluzione</p>
              </motion.div>
              <motion.div
                className="lesson-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="lesson-num">6</span>
                <p>Prevedi sempre margine di crescita (20-30%)</p>
              </motion.div>
            </div>
          </div>

          <div className="next-module">
            <h4>Prossimo modulo: Attivita Interattive!</h4>
            <p>
              Metti alla prova le tue conoscenze con quiz, flashcard,
              esercizi di matching e il calcolatore di subnet.
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .recap-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .lessons-learned h4 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: var(--gray-700);
        }
        .lessons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .lesson-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        .lesson-num {
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
        .lesson-card p {
          margin: 0;
          color: var(--gray-700);
          line-height: 1.5;
        }
        .next-module {
          background: linear-gradient(135deg, #ec4899, #be185d);
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

export default function Module6() {
  return <ModuleWrapper slides={slides} moduleName="Modulo 6: Casi Studio" />;
}
