import { ModuleWrapper } from '../../components/common/ModuleWrapper';
import { Slide, AnimatedContent, TwoColumns } from '../../components/common';
import { motion } from 'framer-motion';

// Slide 1: Introduzione VLAN
function Slide1() {
  return (
    <Slide
      title="Virtual LAN (VLAN)"
      subtitle="Segmentazione logica a Layer 2"
    >
      <AnimatedContent>
        <div className="intro-content">
          <div className="big-icon">🔀</div>
          <h2>Cos'e una VLAN?</h2>
          <p className="lead">
            Una <strong>VLAN</strong> (Virtual Local Area Network) e una rete locale virtuale
            che permette di <strong>segmentare logicamente</strong> una rete fisica in
            piu reti indipendenti, senza dover modificare il cablaggio fisico.
          </p>

          <div className="key-concept">
            <div className="concept-visual">
              <div className="physical-switch">
                <span className="switch-label">1 Switch Fisico</span>
                <div className="ports-row">
                  <span className="port v1"></span>
                  <span className="port v1"></span>
                  <span className="port v2"></span>
                  <span className="port v2"></span>
                  <span className="port v3"></span>
                  <span className="port v3"></span>
                </div>
              </div>
              <div className="arrow">→</div>
              <div className="virtual-switches">
                <div className="vswitch v1"><span>VLAN 10</span></div>
                <div className="vswitch v2"><span>VLAN 20</span></div>
                <div className="vswitch v3"><span>VLAN 30</span></div>
                <span className="vs-label">3 Switch "Virtuali"</span>
              </div>
            </div>
          </div>

          <div className="layer-badge">
            <span>Opera al</span>
            <strong>Layer 2</strong>
            <span>del modello OSI</span>
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
        .key-concept {
          background: var(--gray-100);
          padding: 2rem;
          border-radius: var(--radius-lg);
          margin-bottom: 1.5rem;
        }
        .concept-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }
        .physical-switch {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
        }
        .switch-label {
          display: block;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .ports-row {
          display: flex;
          gap: 0.5rem;
        }
        .port {
          width: 30px;
          height: 20px;
          border-radius: 3px;
        }
        .port.v1 { background: #3b82f6; }
        .port.v2 { background: #10b981; }
        .port.v3 { background: #f59e0b; }
        .arrow {
          font-size: 2rem;
          color: var(--gray-400);
        }
        .virtual-switches {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .vswitch {
          padding: 0.5rem 1.5rem;
          border-radius: var(--radius-md);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .vswitch.v1 { background: #3b82f6; }
        .vswitch.v2 { background: #10b981; }
        .vswitch.v3 { background: #f59e0b; }
        .vs-label {
          font-size: 0.85rem;
          color: var(--gray-500);
          margin-top: 0.5rem;
        }
        .layer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-lg);
        }
        .layer-badge strong {
          font-size: 1.25rem;
        }
      `}</style>
    </Slide>
  );
}

// Slide 2: Perché usare le VLAN
function Slide2() {
  return (
    <Slide
      title="Perche usare le VLAN?"
      subtitle="Vantaggi della segmentazione logica"
    >
      <AnimatedContent>
        <div className="benefits-content">
          <div className="benefits-grid">
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="benefit-icon">🔒</div>
              <h4>Sicurezza</h4>
              <p>
                Il traffico tra VLAN diverse e isolato. Un host in VLAN 10
                non puo comunicare direttamente con VLAN 20 senza passare
                da un router/firewall.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="benefit-icon">📡</div>
              <h4>Riduzione Broadcast</h4>
              <p>
                I frame broadcast sono confinati alla propria VLAN.
                Reti piu piccole = meno traffico broadcast = migliori performance.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="benefit-icon">🔧</div>
              <h4>Flessibilita</h4>
              <p>
                Puoi riorganizzare la rete senza spostare cavi.
                Un utente puo cambiare VLAN semplicemente riconfigurando la porta.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="benefit-icon">💰</div>
              <h4>Risparmio</h4>
              <p>
                Un solo switch fisico puo ospitare piu reti logiche.
                Meno hardware, meno costi, meno complessita fisica.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="benefit-icon">🏢</div>
              <h4>Organizzazione</h4>
              <p>
                Puoi raggruppare utenti per funzione (HR, IT, Finance)
                indipendentemente dalla loro posizione fisica nell'edificio.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="benefit-icon">⚡</div>
              <h4>Performance</h4>
              <p>
                Segmentando il traffico, si riducono le collisioni e
                si migliora la banda disponibile per ogni segmento.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .benefits-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .benefit-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          transition: transform var(--transition-fast);
        }
        .benefit-card:hover {
          transform: translateY(-4px);
        }
        .benefit-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        .benefit-card h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .benefit-card p {
          margin: 0;
          color: var(--gray-600);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </Slide>
  );
}

// Slide 3: Tipi di VLAN
function Slide3() {
  return (
    <Slide
      title="Tipi di VLAN"
      subtitle="Classificazione e utilizzi"
    >
      <AnimatedContent>
        <div className="types-content">
          <div className="vlan-types">
            <div className="vlan-type">
              <div className="type-header data">
                <span className="type-icon">📦</span>
                <h4>Data VLAN</h4>
              </div>
              <div className="type-body">
                <p>
                  Trasporta il traffico generato dagli utenti (navigazione web,
                  email, file sharing). E' la VLAN piu comune.
                </p>
                <div className="type-example">
                  Es: VLAN 10 - Ufficio Vendite
                </div>
              </div>
            </div>

            <div className="vlan-type">
              <div className="type-header voice">
                <span className="type-icon">📞</span>
                <h4>Voice VLAN</h4>
              </div>
              <div className="type-body">
                <p>
                  Dedicata al traffico VoIP. Ha priorita QoS elevata per
                  garantire qualita delle chiamate.
                </p>
                <div className="type-example">
                  Es: VLAN 100 - Telefonia IP
                </div>
              </div>
            </div>

            <div className="vlan-type">
              <div className="type-header mgmt">
                <span className="type-icon">⚙️</span>
                <h4>Management VLAN</h4>
              </div>
              <div className="type-body">
                <p>
                  Usata per la gestione degli switch (SSH, SNMP, telnet).
                  Isolata dal traffico utente per sicurezza.
                </p>
                <div className="type-example">
                  Es: VLAN 99 - Management
                </div>
              </div>
            </div>

            <div className="vlan-type">
              <div className="type-header native">
                <span className="type-icon">🏷️</span>
                <h4>Native VLAN</h4>
              </div>
              <div className="type-body">
                <p>
                  VLAN di default per il traffico non taggato sui trunk.
                  Default: VLAN 1 (consigliato cambiarla).
                </p>
                <div className="type-example">
                  Es: VLAN 999 - Native
                </div>
              </div>
            </div>
          </div>

          <div className="special-vlans">
            <h4>VLAN Speciali</h4>
            <div className="special-grid">
              <div className="special-item">
                <span className="special-num">VLAN 1</span>
                <span className="special-desc">Default VLAN (tutte le porte all'avvio)</span>
              </div>
              <div className="special-item">
                <span className="special-num">VLAN 1002-1005</span>
                <span className="special-desc">Riservate per FDDI e Token Ring</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .types-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .vlan-types {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .vlan-type {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .type-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          color: white;
        }
        .type-header.data { background: #3b82f6; }
        .type-header.voice { background: #10b981; }
        .type-header.mgmt { background: #f59e0b; }
        .type-header.native { background: #8b5cf6; }
        .type-icon {
          font-size: 1.5rem;
        }
        .type-header h4 {
          margin: 0;
          color: white;
        }
        .type-body {
          padding: 1.25rem;
        }
        .type-body p {
          margin: 0 0 0.75rem 0;
          color: var(--gray-600);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .type-example {
          background: var(--gray-100);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-family: 'Fira Code', monospace;
          color: var(--gray-600);
        }
        .special-vlans {
          background: var(--gray-100);
          padding: 1.25rem;
          border-radius: var(--radius-lg);
        }
        .special-vlans h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .special-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .special-item {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .special-num {
          background: var(--gray-800);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-family: 'Fira Code', monospace;
          font-size: 0.85rem;
        }
        .special-desc {
          color: var(--gray-600);
          font-size: 0.9rem;
        }
      `}</style>
    </Slide>
  );
}

// Slide 4: Porte Access e Trunk
function Slide4() {
  return (
    <Slide
      title="Porte Access e Trunk"
      subtitle="Come funziona il tagging VLAN"
    >
      <AnimatedContent>
        <div className="ports-content">
          <TwoColumns
            left={
              <div className="port-type access-type">
                <h3>Porta Access</h3>
                <div className="port-visual">
                  <div className="device-box">💻 PC</div>
                  <div className="connection">
                    <div className="frame untagged">Frame</div>
                  </div>
                  <div className="switch-port access">
                    <span>Porta 1</span>
                    <span className="port-vlan">VLAN 10</span>
                  </div>
                </div>
                <ul>
                  <li>Collegata a <strong>un singolo dispositivo</strong></li>
                  <li>Appartiene a <strong>una sola VLAN</strong></li>
                  <li>Il traffico <strong>non ha tag</strong></li>
                  <li>Lo switch aggiunge il tag internamente</li>
                </ul>
                <div className="config-example">
                  <code>
                    interface Fa0/1<br/>
                    &nbsp;&nbsp;switchport mode access<br/>
                    &nbsp;&nbsp;switchport access vlan 10
                  </code>
                </div>
              </div>
            }
            right={
              <div className="port-type trunk-type">
                <h3>Porta Trunk</h3>
                <div className="port-visual">
                  <div className="device-box">🔀 Switch 2</div>
                  <div className="connection">
                    <div className="frame tagged v1">10</div>
                    <div className="frame tagged v2">20</div>
                    <div className="frame tagged v3">30</div>
                  </div>
                  <div className="switch-port trunk">
                    <span>Porta 24</span>
                    <span className="port-vlan">Trunk</span>
                  </div>
                </div>
                <ul>
                  <li>Collega <strong>switch tra loro</strong></li>
                  <li>Trasporta <strong>piu VLAN</strong></li>
                  <li>Il traffico ha <strong>tag 802.1Q</strong></li>
                  <li>Ogni frame indica la sua VLAN</li>
                </ul>
                <div className="config-example">
                  <code>
                    interface Gi0/1<br/>
                    &nbsp;&nbsp;switchport mode trunk<br/>
                    &nbsp;&nbsp;switchport trunk allowed vlan 10,20,30
                  </code>
                </div>
              </div>
            }
          />
        </div>
      </AnimatedContent>

      <style>{`
        .ports-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .port-type {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          height: 100%;
        }
        .port-type h3 {
          text-align: center;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--gray-200);
        }
        .access-type h3 { color: #3b82f6; }
        .trunk-type h3 { color: #10b981; }
        .port-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: var(--gray-50);
          border-radius: var(--radius-md);
        }
        .device-box {
          background: white;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          border: 2px solid var(--gray-300);
          font-size: 0.9rem;
        }
        .connection {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0;
          position: relative;
        }
        .connection::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gray-300);
        }
        .frame {
          position: relative;
          z-index: 1;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
        }
        .frame.untagged {
          background: var(--gray-200);
          color: var(--gray-600);
        }
        .frame.tagged {
          color: white;
        }
        .frame.tagged.v1 { background: #3b82f6; }
        .frame.tagged.v2 { background: #10b981; }
        .frame.tagged.v3 { background: #f59e0b; }
        .switch-port {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          color: white;
        }
        .switch-port.access { background: #3b82f6; }
        .switch-port.trunk { background: #10b981; }
        .port-vlan {
          font-size: 0.75rem;
          opacity: 0.9;
        }
        .port-type ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1rem;
        }
        .port-type li {
          padding: 0.4rem 0;
          padding-left: 1.25rem;
          position: relative;
          font-size: 0.9rem;
          color: var(--gray-600);
        }
        .port-type li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
        }
        .config-example {
          background: var(--gray-800);
          padding: 1rem;
          border-radius: var(--radius-md);
        }
        .config-example code {
          color: #a5f3fc;
          font-size: 0.8rem;
          background: none;
          padding: 0;
        }
      `}</style>
    </Slide>
  );
}

// Slide 5: 802.1Q Tagging
function Slide5() {
  return (
    <Slide
      title="IEEE 802.1Q"
      subtitle="Standard per il VLAN Tagging"
    >
      <AnimatedContent>
        <div className="tagging-content">
          <div className="info-box">
            Lo standard <strong>IEEE 802.1Q</strong> definisce come i frame Ethernet
            vengono "taggati" per indicare a quale VLAN appartengono.
          </div>

          <div className="frame-structure">
            <h4>Struttura del Frame 802.1Q</h4>
            <div className="frame-diagram">
              <div className="frame-part dest">
                <span className="part-name">Dest MAC</span>
                <span className="part-size">6 bytes</span>
              </div>
              <div className="frame-part src">
                <span className="part-name">Src MAC</span>
                <span className="part-size">6 bytes</span>
              </div>
              <div className="frame-part tag">
                <span className="part-name">802.1Q Tag</span>
                <span className="part-size">4 bytes</span>
              </div>
              <div className="frame-part type">
                <span className="part-name">Type</span>
                <span className="part-size">2 bytes</span>
              </div>
              <div className="frame-part data">
                <span className="part-name">Data</span>
                <span className="part-size">46-1500</span>
              </div>
              <div className="frame-part fcs">
                <span className="part-name">FCS</span>
                <span className="part-size">4 bytes</span>
              </div>
            </div>
          </div>

          <div className="tag-detail">
            <h4>Dettaglio del Tag 802.1Q (4 bytes)</h4>
            <div className="tag-structure">
              <div className="tag-field tpid">
                <span className="field-name">TPID</span>
                <span className="field-bits">16 bit</span>
                <span className="field-desc">0x8100 (identifica 802.1Q)</span>
              </div>
              <div className="tag-field pcp">
                <span className="field-name">PCP</span>
                <span className="field-bits">3 bit</span>
                <span className="field-desc">Priority Code Point (QoS)</span>
              </div>
              <div className="tag-field dei">
                <span className="field-name">DEI</span>
                <span className="field-bits">1 bit</span>
                <span className="field-desc">Drop Eligible Indicator</span>
              </div>
              <div className="tag-field vid">
                <span className="field-name">VID</span>
                <span className="field-bits">12 bit</span>
                <span className="field-desc">VLAN ID (1-4094)</span>
              </div>
            </div>
          </div>

          <div className="vlan-range">
            <h4>Range VLAN ID</h4>
            <div className="range-items">
              <div className="range-item">
                <span className="range-label">VLAN 0</span>
                <span className="range-desc">Riservata (priority tag)</span>
              </div>
              <div className="range-item">
                <span className="range-label">VLAN 1</span>
                <span className="range-desc">Default VLAN</span>
              </div>
              <div className="range-item highlight">
                <span className="range-label">VLAN 2-1001</span>
                <span className="range-desc">Normal range (standard)</span>
              </div>
              <div className="range-item">
                <span className="range-label">VLAN 1002-1005</span>
                <span className="range-desc">Riservate (legacy)</span>
              </div>
              <div className="range-item">
                <span className="range-label">VLAN 1006-4094</span>
                <span className="range-desc">Extended range</span>
              </div>
              <div className="range-item">
                <span className="range-label">VLAN 4095</span>
                <span className="range-desc">Riservata</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .tagging-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .frame-structure, .tag-detail, .vlan-range {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.5rem;
        }
        .frame-structure h4, .tag-detail h4, .vlan-range h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .frame-diagram {
          display: flex;
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .frame-part {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 0.5rem;
          color: white;
          min-width: 80px;
        }
        .frame-part.dest { background: #64748b; }
        .frame-part.src { background: #64748b; }
        .frame-part.tag { background: var(--primary); flex: 0 0 100px; }
        .frame-part.type { background: #64748b; flex: 0 0 60px; }
        .frame-part.data { background: #94a3b8; flex: 1; }
        .frame-part.fcs { background: #64748b; flex: 0 0 60px; }
        .part-name {
          font-weight: 600;
          font-size: 0.85rem;
        }
        .part-size {
          font-size: 0.7rem;
          opacity: 0.8;
        }
        .tag-structure {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .tag-field {
          text-align: center;
          padding: 1rem;
          border-radius: var(--radius-md);
        }
        .tag-field.tpid { background: #dbeafe; }
        .tag-field.pcp { background: #d1fae5; }
        .tag-field.dei { background: #fef3c7; }
        .tag-field.vid { background: #fce7f3; }
        .field-name {
          display: block;
          font-weight: 700;
          color: var(--gray-800);
          margin-bottom: 0.25rem;
        }
        .field-bits {
          display: block;
          font-size: 0.85rem;
          color: var(--gray-600);
          margin-bottom: 0.25rem;
        }
        .field-desc {
          display: block;
          font-size: 0.75rem;
          color: var(--gray-500);
        }
        .range-items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        .range-item {
          display: flex;
          flex-direction: column;
          padding: 0.75rem;
          background: var(--gray-100);
          border-radius: var(--radius-md);
        }
        .range-item.highlight {
          background: #dbeafe;
          border: 2px solid var(--primary);
        }
        .range-label {
          font-family: 'Fira Code', monospace;
          font-weight: 600;
          color: var(--gray-800);
          font-size: 0.9rem;
        }
        .range-desc {
          font-size: 0.8rem;
          color: var(--gray-500);
        }
      `}</style>
    </Slide>
  );
}

// Slide 6: Inter-VLAN Routing
function Slide6() {
  return (
    <Slide
      title="Inter-VLAN Routing"
      subtitle="Come far comunicare le VLAN"
    >
      <AnimatedContent>
        <div className="routing-content">
          <div className="warning-box">
            Le VLAN sono <strong>isolate</strong> tra loro a Layer 2. Per far comunicare
            dispositivi su VLAN diverse serve un dispositivo di <strong>Layer 3</strong>
            (router o switch L3).
          </div>

          <div className="methods-grid">
            <div className="method-card">
              <div className="method-header legacy">
                <h4>Router on a Stick</h4>
                <span className="method-badge">Tradizionale</span>
              </div>
              <div className="method-body">
                <div className="method-diagram">
                  <div className="router-icon">🌐</div>
                  <div className="subinterfaces">
                    <span>Gi0/0.10</span>
                    <span>Gi0/0.20</span>
                    <span>Gi0/0.30</span>
                  </div>
                  <div className="trunk-link">Trunk</div>
                  <div className="switch-icon">🔀</div>
                </div>
                <p>
                  Un'unica interfaccia fisica con <strong>subinterface</strong>
                  per ogni VLAN. Economico ma il link puo diventare un bottleneck.
                </p>
              </div>
            </div>

            <div className="method-card">
              <div className="method-header modern">
                <h4>Switch Layer 3</h4>
                <span className="method-badge">Consigliato</span>
              </div>
              <div className="method-body">
                <div className="method-diagram">
                  <div className="l3-switch">
                    <span>🔀 L3</span>
                    <div className="svi-list">
                      <span>SVI 10</span>
                      <span>SVI 20</span>
                      <span>SVI 30</span>
                    </div>
                  </div>
                </div>
                <p>
                  Lo switch ha capacita di routing integrate.
                  Usa <strong>SVI</strong> (Switch Virtual Interface).
                  Migliori performance, routing "wire-speed".
                </p>
              </div>
            </div>
          </div>

          <div className="config-section">
            <h4>Esempio Configurazione SVI (Switch L3)</h4>
            <div className="config-block">
              <code>
                ! Abilita routing<br/>
                ip routing<br/>
                <br/>
                ! Crea SVI per VLAN 10<br/>
                interface vlan 10<br/>
                &nbsp;&nbsp;ip address 192.168.10.1 255.255.255.0<br/>
                &nbsp;&nbsp;no shutdown<br/>
                <br/>
                ! Crea SVI per VLAN 20<br/>
                interface vlan 20<br/>
                &nbsp;&nbsp;ip address 192.168.20.1 255.255.255.0<br/>
                &nbsp;&nbsp;no shutdown
              </code>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .routing-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .methods-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin: 1.5rem 0;
        }
        .method-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .method-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          color: white;
        }
        .method-header.legacy { background: var(--gray-600); }
        .method-header.modern { background: var(--success); }
        .method-header h4 {
          margin: 0;
          color: white;
        }
        .method-badge {
          font-size: 0.75rem;
          background: rgba(255,255,255,0.2);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }
        .method-body {
          padding: 1.25rem;
        }
        .method-diagram {
          background: var(--gray-100);
          padding: 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
          text-align: center;
        }
        .router-icon, .switch-icon {
          font-size: 2rem;
        }
        .subinterfaces {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin: 0.5rem 0;
        }
        .subinterfaces span {
          background: var(--primary);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
        }
        .trunk-link {
          background: var(--gray-400);
          color: white;
          display: inline-block;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          margin: 0.5rem 0;
        }
        .l3-switch {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .l3-switch > span {
          font-size: 2rem;
        }
        .svi-list {
          display: flex;
          gap: 0.5rem;
        }
        .svi-list span {
          background: var(--success);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
        }
        .method-body p {
          margin: 0;
          color: var(--gray-600);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .config-section h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .config-block {
          background: var(--gray-800);
          padding: 1.5rem;
          border-radius: var(--radius-md);
        }
        .config-block code {
          color: #a5f3fc;
          font-size: 0.85rem;
          background: none;
          padding: 0;
          line-height: 1.6;
        }
      `}</style>
    </Slide>
  );
}

// Slide 7: Riepilogo
function Slide7() {
  return (
    <Slide
      title="Riepilogo Modulo 4"
      subtitle="Concetti chiave sulle VLAN"
    >
      <AnimatedContent>
        <div className="summary-content">
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-icon">🎯</span>
              <h4>Definizione</h4>
              <p>Le VLAN segmentano <strong>logicamente</strong> una rete fisica in piu reti virtuali a Layer 2.</p>
            </div>
            <div className="summary-item">
              <span className="summary-icon">🏷️</span>
              <h4>802.1Q</h4>
              <p>Standard per il tagging che aggiunge 4 byte al frame con <strong>VLAN ID</strong> (1-4094).</p>
            </div>
            <div className="summary-item">
              <span className="summary-icon">🔌</span>
              <h4>Access Port</h4>
              <p>Porte per dispositivi finali. Appartengono a <strong>una sola VLAN</strong>, traffico non taggato.</p>
            </div>
            <div className="summary-item">
              <span className="summary-icon">🔗</span>
              <h4>Trunk Port</h4>
              <p>Collegano switch tra loro. Trasportano <strong>multiple VLAN</strong> con traffico taggato.</p>
            </div>
          </div>

          <div className="key-benefits">
            <h4>Benefici Principali</h4>
            <div className="benefits-row">
              <span className="benefit-tag">Sicurezza</span>
              <span className="benefit-tag">Performance</span>
              <span className="benefit-tag">Flessibilita</span>
              <span className="benefit-tag">Risparmio</span>
            </div>
          </div>

          <div className="next-module">
            <h4>Nel prossimo modulo...</h4>
            <p>
              Confronteremo <strong>VLAN vs Subnetting</strong>: due approcci complementari
              alla segmentazione delle reti, operanti su layer diversi.
            </p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .summary-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .summary-item {
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        .summary-icon {
          font-size: 1.75rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .summary-item h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .summary-item p {
          margin: 0;
          color: var(--gray-600);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .key-benefits {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .key-benefits h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .benefits-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .benefit-tag {
          background: var(--primary);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-lg);
          font-weight: 500;
        }
        .next-module {
          background: linear-gradient(135deg, var(--warning), #d97706);
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

export default function Module4() {
  return <ModuleWrapper slides={slides} moduleName="Modulo 4: Introduzione VLAN" />;
}
