import { ModuleWrapper } from '../../components/common/ModuleWrapper';
import { Slide, AnimatedList, AnimatedContent, TwoColumns } from '../../components/common';
import { motion } from 'framer-motion';

// Slide 1: Introduzione
function Slide1() {
  return (
    <Slide
      title="Fondamenti di Indirizzamento IP"
      subtitle="Modulo 1 - Richiami e concetti essenziali"
    >
      <AnimatedContent>
        <div className="intro-content">
          <div className="big-icon">🌐</div>
          <h2>Perche e importante?</h2>
          <p>
            Prima di affrontare il subnetting e le VLAN, dobbiamo avere solide basi
            sull'indirizzamento IP. Questi concetti sono fondamentali per comprendere
            come le reti vengono segmentate e organizzate.
          </p>
          <div className="topics-preview">
            <div className="topic">
              <span className="topic-icon">📍</span>
              <span>Struttura indirizzo IP</span>
            </div>
            <div className="topic">
              <span className="topic-icon">🎭</span>
              <span>Maschere di sottorete</span>
            </div>
            <div className="topic">
              <span className="topic-icon">🔢</span>
              <span>Notazione CIDR</span>
            </div>
            <div className="topic">
              <span className="topic-icon">📊</span>
              <span>Classi di indirizzi</span>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .intro-content {
          text-align: center;
          max-width: 700px;
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
        .intro-content p {
          font-size: 1.1rem;
          color: var(--gray-600);
          line-height: 1.8;
        }
        .topics-preview {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 2rem;
        }
        .topic {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: var(--gray-100);
          border-radius: var(--radius-md);
        }
        .topic-icon {
          font-size: 1.5rem;
        }
      `}</style>
    </Slide>
  );
}

// Slide 2: Struttura Indirizzo IPv4
function Slide2() {
  return (
    <Slide
      title="Struttura dell'Indirizzo IPv4"
      subtitle="32 bit organizzati in 4 ottetti"
    >
      <AnimatedContent>
        <div className="ip-structure">
          <div className="ip-example">
            <div className="ip-visual">
              <div className="octet">
                <span className="octet-value">192</span>
                <span className="octet-binary">11000000</span>
              </div>
              <span className="dot">.</span>
              <div className="octet">
                <span className="octet-value">168</span>
                <span className="octet-binary">10101000</span>
              </div>
              <span className="dot">.</span>
              <div className="octet">
                <span className="octet-value">1</span>
                <span className="octet-binary">00000001</span>
              </div>
              <span className="dot">.</span>
              <div className="octet">
                <span className="octet-value">100</span>
                <span className="octet-binary">01100100</span>
              </div>
            </div>
          </div>

          <div className="info-boxes">
            <div className="info-box-custom network">
              <h4>Parte di Rete (Network)</h4>
              <p>Identifica la rete a cui appartiene l'host. Tutti i dispositivi sulla stessa rete condividono questa parte.</p>
            </div>
            <div className="info-box-custom host">
              <h4>Parte di Host</h4>
              <p>Identifica univocamente il dispositivo all'interno della rete. Deve essere unica per ogni dispositivo.</p>
            </div>
          </div>

          <div className="key-points">
            <h4>Punti chiave</h4>
            <ul>
              <li>Ogni ottetto va da <strong>0 a 255</strong> (2^8 = 256 valori)</li>
              <li>L'indirizzo completo e composto da <strong>32 bit</strong></li>
              <li>La <strong>maschera di sottorete</strong> determina dove finisce la parte di rete</li>
            </ul>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .ip-structure {
          max-width: 800px;
          margin: 0 auto;
        }
        .ip-example {
          background: var(--gray-100);
          border-radius: var(--radius-lg);
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .ip-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .octet {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: white;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }
        .octet-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          font-family: 'Fira Code', monospace;
        }
        .octet-binary {
          font-size: 0.9rem;
          color: var(--gray-500);
          font-family: 'Fira Code', monospace;
          margin-top: 0.5rem;
        }
        .dot {
          font-size: 2rem;
          font-weight: bold;
          color: var(--gray-400);
        }
        .info-boxes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .info-box-custom {
          padding: 1.5rem;
          border-radius: var(--radius-md);
        }
        .info-box-custom.network {
          background: #dbeafe;
          border-left: 4px solid var(--primary);
        }
        .info-box-custom.host {
          background: #d1fae5;
          border-left: 4px solid var(--success);
        }
        .info-box-custom h4 {
          margin-bottom: 0.5rem;
        }
        .info-box-custom p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--gray-700);
        }
        .key-points {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }
        .key-points h4 {
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .key-points ul {
          list-style: none;
          padding: 0;
        }
        .key-points li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }
        .key-points li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
        }
      `}</style>
    </Slide>
  );
}

// Slide 3: La Maschera di Sottorete
function Slide3() {
  return (
    <Slide
      title="La Maschera di Sottorete"
      subtitle="Come distinguere la parte di rete dalla parte host"
    >
      <AnimatedContent>
        <div className="mask-content">
          <div className="mask-explanation">
            <p className="lead">
              La maschera di sottorete e una sequenza di <strong>32 bit</strong> che indica
              quali bit dell'indirizzo IP appartengono alla <strong>parte di rete</strong> (1)
              e quali alla <strong>parte host</strong> (0).
            </p>
          </div>

          <div className="mask-example">
            <h4>Esempio: Maschera /24</h4>
            <div className="binary-mask">
              <div className="mask-part network">
                <span className="bits">11111111.11111111.11111111</span>
                <span className="decimal">255.255.255</span>
                <span className="label">24 bit di rete</span>
              </div>
              <span className="separator">.</span>
              <div className="mask-part host">
                <span className="bits">00000000</span>
                <span className="decimal">.0</span>
                <span className="label">8 bit host</span>
              </div>
            </div>
          </div>

          <div className="common-masks">
            <h4>Maschere piu comuni</h4>
            <table>
              <thead>
                <tr>
                  <th>CIDR</th>
                  <th>Maschera</th>
                  <th>Host disponibili</th>
                  <th>Uso tipico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>/8</code></td>
                  <td>255.0.0.0</td>
                  <td>16.777.214</td>
                  <td>Reti di classe A</td>
                </tr>
                <tr>
                  <td><code>/16</code></td>
                  <td>255.255.0.0</td>
                  <td>65.534</td>
                  <td>Reti di classe B</td>
                </tr>
                <tr>
                  <td><code>/24</code></td>
                  <td>255.255.255.0</td>
                  <td>254</td>
                  <td>Reti di classe C / LAN</td>
                </tr>
                <tr>
                  <td><code>/30</code></td>
                  <td>255.255.255.252</td>
                  <td>2</td>
                  <td>Link punto-punto</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="formula-box">
            <h4>Formula per calcolare gli host</h4>
            <div className="formula">
              Host utilizzabili = 2<sup>n</sup> - 2
            </div>
            <p>dove <strong>n</strong> = numero di bit per la parte host</p>
            <p className="note">Si sottrae 2 per: indirizzo di rete e broadcast</p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .mask-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .lead {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--gray-700);
          margin-bottom: 2rem;
        }
        .mask-example {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 2rem;
        }
        .mask-example h4 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .binary-mask {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Fira Code', monospace;
        }
        .mask-part {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          border-radius: var(--radius-md);
        }
        .mask-part.network {
          background: var(--primary);
          color: white;
        }
        .mask-part.host {
          background: var(--success);
          color: white;
        }
        .mask-part .bits {
          font-size: 1.1rem;
          font-weight: 600;
        }
        .mask-part .decimal {
          font-size: 0.9rem;
          opacity: 0.9;
          margin-top: 0.25rem;
        }
        .mask-part .label {
          font-size: 0.75rem;
          margin-top: 0.5rem;
          opacity: 0.8;
        }
        .separator {
          font-size: 1.5rem;
          color: var(--gray-400);
          margin: 0 0.25rem;
        }
        .common-masks {
          margin-bottom: 2rem;
        }
        .common-masks h4 {
          margin-bottom: 1rem;
        }
        .common-masks table {
          width: 100%;
        }
        .formula-box {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          text-align: center;
        }
        .formula-box h4 {
          color: white;
          margin-bottom: 1rem;
        }
        .formula {
          font-size: 1.5rem;
          font-family: 'Fira Code', monospace;
          margin-bottom: 1rem;
        }
        .formula-box p {
          margin: 0.25rem 0;
          opacity: 0.9;
        }
        .formula-box .note {
          font-size: 0.85rem;
          opacity: 0.8;
        }
      `}</style>
    </Slide>
  );
}

// Slide 4: Notazione CIDR
function Slide4() {
  return (
    <Slide
      title="Notazione CIDR"
      subtitle="Classless Inter-Domain Routing"
    >
      <AnimatedContent>
        <TwoColumns
          left={
            <div className="cidr-left">
              <div className="info-box">
                <h4>Cos'e il CIDR?</h4>
                <p>
                  La notazione CIDR (Classless Inter-Domain Routing) e un modo compatto
                  per rappresentare un indirizzo IP insieme alla sua maschera di sottorete.
                </p>
              </div>

              <div className="cidr-example">
                <h4>Esempio</h4>
                <div className="cidr-notation">
                  <span className="ip-part">192.168.1.0</span>
                  <span className="slash">/</span>
                  <span className="prefix">24</span>
                </div>
                <div className="cidr-meaning">
                  <p><strong>/24</strong> significa che i primi 24 bit sono la parte di rete</p>
                </div>
              </div>

              <div className="advantages">
                <h4>Vantaggi del CIDR</h4>
                <ul>
                  <li>Notazione compatta e leggibile</li>
                  <li>Supera i limiti delle classi tradizionali</li>
                  <li>Permette maschere di qualsiasi lunghezza</li>
                  <li>Migliore utilizzo dello spazio di indirizzamento</li>
                </ul>
              </div>
            </div>
          }
          right={
            <div className="cidr-right">
              <h4>Tabella di riferimento CIDR</h4>
              <div className="cidr-table-container">
                <table className="cidr-table">
                  <thead>
                    <tr>
                      <th>CIDR</th>
                      <th>Maschera</th>
                      <th>Host</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>/32</td><td>255.255.255.255</td><td>1</td></tr>
                    <tr><td>/31</td><td>255.255.255.254</td><td>2*</td></tr>
                    <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>
                    <tr><td>/29</td><td>255.255.255.248</td><td>6</td></tr>
                    <tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
                    <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
                    <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
                    <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
                    <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
                    <tr><td>/23</td><td>255.255.254.0</td><td>510</td></tr>
                    <tr><td>/22</td><td>255.255.252.0</td><td>1022</td></tr>
                    <tr><td>/21</td><td>255.255.248.0</td><td>2046</td></tr>
                    <tr><td>/20</td><td>255.255.240.0</td><td>4094</td></tr>
                    <tr><td>/16</td><td>255.255.0.0</td><td>65534</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="table-note">* /31 e usato per link punto-punto (RFC 3021)</p>
            </div>
          }
          ratio="1:1"
        />
      </AnimatedContent>

      <style>{`
        .cidr-left .info-box {
          background: #e0f2fe;
          border-left: 4px solid var(--info);
          padding: 1rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 1.5rem;
        }
        .cidr-left .info-box h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .cidr-left .info-box p {
          margin: 0;
          color: var(--gray-700);
        }
        .cidr-example {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
        }
        .cidr-example h4 {
          margin-bottom: 1rem;
        }
        .cidr-notation {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Fira Code', monospace;
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }
        .ip-part {
          color: var(--gray-700);
        }
        .slash {
          color: var(--gray-400);
          margin: 0 0.25rem;
        }
        .prefix {
          color: var(--primary);
          font-weight: 700;
        }
        .cidr-meaning p {
          text-align: center;
          margin: 0;
          color: var(--gray-600);
        }
        .advantages h4 {
          margin-bottom: 0.75rem;
        }
        .advantages ul {
          list-style: none;
          padding: 0;
        }
        .advantages li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--gray-700);
        }
        .advantages li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
        }
        .cidr-right h4 {
          margin-bottom: 1rem;
        }
        .cidr-table-container {
          max-height: 400px;
          overflow-y: auto;
          border-radius: var(--radius-md);
          border: 1px solid var(--gray-200);
        }
        .cidr-table {
          width: 100%;
          font-size: 0.9rem;
        }
        .cidr-table th {
          position: sticky;
          top: 0;
          background: var(--gray-100);
        }
        .cidr-table td {
          font-family: 'Fira Code', monospace;
        }
        .table-note {
          font-size: 0.8rem;
          color: var(--gray-500);
          margin-top: 0.5rem;
        }
      `}</style>
    </Slide>
  );
}

// Slide 5: Classi di Indirizzi (Storico)
function Slide5() {
  return (
    <Slide
      title="Classi di Indirizzi IP"
      subtitle="Il sistema classful (storico ma importante)"
    >
      <AnimatedContent>
        <div className="classes-content">
          <div className="warning-box">
            <strong>Nota storica:</strong> Il sistema a classi e stato sostituito dal CIDR,
            ma e ancora importante conoscerlo per comprendere le reti esistenti e gli indirizzi privati.
          </div>

          <div className="classes-table">
            <table>
              <thead>
                <tr>
                  <th>Classe</th>
                  <th>Primo ottetto</th>
                  <th>Maschera default</th>
                  <th>Range</th>
                  <th>Uso</th>
                </tr>
              </thead>
              <tbody>
                <tr className="class-a">
                  <td><strong>A</strong></td>
                  <td>1-126</td>
                  <td>/8 (255.0.0.0)</td>
                  <td>1.0.0.0 - 126.255.255.255</td>
                  <td>Grandi organizzazioni</td>
                </tr>
                <tr className="class-b">
                  <td><strong>B</strong></td>
                  <td>128-191</td>
                  <td>/16 (255.255.0.0)</td>
                  <td>128.0.0.0 - 191.255.255.255</td>
                  <td>Medie organizzazioni</td>
                </tr>
                <tr className="class-c">
                  <td><strong>C</strong></td>
                  <td>192-223</td>
                  <td>/24 (255.255.255.0)</td>
                  <td>192.0.0.0 - 223.255.255.255</td>
                  <td>Piccole reti</td>
                </tr>
                <tr className="class-d">
                  <td><strong>D</strong></td>
                  <td>224-239</td>
                  <td>N/A</td>
                  <td>224.0.0.0 - 239.255.255.255</td>
                  <td>Multicast</td>
                </tr>
                <tr className="class-e">
                  <td><strong>E</strong></td>
                  <td>240-255</td>
                  <td>N/A</td>
                  <td>240.0.0.0 - 255.255.255.255</td>
                  <td>Riservato/Sperimentale</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="private-addresses">
            <h4>Indirizzi Privati (RFC 1918)</h4>
            <div className="private-grid">
              <div className="private-range">
                <span className="range-class">Classe A</span>
                <span className="range-value">10.0.0.0/8</span>
                <span className="range-desc">10.0.0.0 - 10.255.255.255</span>
              </div>
              <div className="private-range">
                <span className="range-class">Classe B</span>
                <span className="range-value">172.16.0.0/12</span>
                <span className="range-desc">172.16.0.0 - 172.31.255.255</span>
              </div>
              <div className="private-range">
                <span className="range-class">Classe C</span>
                <span className="range-value">192.168.0.0/16</span>
                <span className="range-desc">192.168.0.0 - 192.168.255.255</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .classes-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .classes-table {
          margin: 1.5rem 0;
          overflow-x: auto;
        }
        .classes-table table {
          width: 100%;
          font-size: 0.95rem;
        }
        .classes-table td {
          font-family: 'Fira Code', monospace;
        }
        .class-a td:first-child { color: #dc2626; }
        .class-b td:first-child { color: #2563eb; }
        .class-c td:first-child { color: #16a34a; }
        .class-d td:first-child { color: #9333ea; }
        .class-e td:first-child { color: #64748b; }
        .private-addresses {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
        }
        .private-addresses h4 {
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .private-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .private-range {
          background: white;
          padding: 1rem;
          border-radius: var(--radius-md);
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .range-class {
          display: block;
          font-size: 0.8rem;
          color: var(--gray-500);
          margin-bottom: 0.25rem;
        }
        .range-value {
          display: block;
          font-family: 'Fira Code', monospace;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }
        .range-desc {
          display: block;
          font-size: 0.75rem;
          color: var(--gray-500);
          font-family: 'Fira Code', monospace;
        }
        @media (max-width: 768px) {
          .private-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Slide>
  );
}

// Slide 6: Indirizzi Speciali
function Slide6() {
  return (
    <Slide
      title="Indirizzi Speciali"
      subtitle="Indirizzi riservati con funzioni specifiche"
    >
      <AnimatedContent>
        <div className="special-addresses">
          <div className="address-cards">
            <motion.div
              className="address-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="card-icon network-icon">🔌</div>
              <h4>Indirizzo di Rete</h4>
              <code>192.168.1.0/24</code>
              <p>
                Tutti i bit della parte host sono a <strong>0</strong>.
                Identifica la rete stessa, non assegnabile a dispositivi.
              </p>
            </motion.div>

            <motion.div
              className="address-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-icon broadcast-icon">📢</div>
              <h4>Broadcast</h4>
              <code>192.168.1.255/24</code>
              <p>
                Tutti i bit della parte host sono a <strong>1</strong>.
                Usato per inviare pacchetti a tutti gli host della rete.
              </p>
            </motion.div>

            <motion.div
              className="address-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="card-icon loopback-icon">🔄</div>
              <h4>Loopback</h4>
              <code>127.0.0.1</code>
              <p>
                Indirizzo di "ritorno". Usato per testare lo stack TCP/IP
                locale senza generare traffico di rete.
              </p>
            </motion.div>

            <motion.div
              className="address-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="card-icon apipa-icon">⚠️</div>
              <h4>APIPA</h4>
              <code>169.254.x.x/16</code>
              <p>
                Automatic Private IP Addressing. Assegnato automaticamente
                quando il DHCP non e disponibile.
              </p>
            </motion.div>

            <motion.div
              className="address-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="card-icon default-icon">🌐</div>
              <h4>Default Gateway</h4>
              <code>0.0.0.0/0</code>
              <p>
                Rappresenta "tutte le reti". Usato nelle tabelle di routing
                per indicare la route di default.
              </p>
            </motion.div>

            <motion.div
              className="address-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="card-icon limited-icon">📡</div>
              <h4>Limited Broadcast</h4>
              <code>255.255.255.255</code>
              <p>
                Broadcast limitato alla rete locale. Non viene inoltrato
                dai router.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .special-addresses {
          max-width: 1000px;
          margin: 0 auto;
        }
        .address-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .address-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          text-align: center;
        }
        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin: 0 auto 1rem;
        }
        .network-icon { background: #dbeafe; }
        .broadcast-icon { background: #fef3c7; }
        .loopback-icon { background: #d1fae5; }
        .apipa-icon { background: #fee2e2; }
        .default-icon { background: #e0e7ff; }
        .limited-icon { background: #fce7f3; }
        .address-card h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .address-card code {
          display: block;
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }
        .address-card p {
          font-size: 0.9rem;
          color: var(--gray-600);
          margin: 0;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .address-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .address-cards {
            grid-template-columns: 1fr;
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
      title="Riepilogo Modulo 1"
      subtitle="Concetti chiave da ricordare"
    >
      <AnimatedContent>
        <div className="summary-content">
          <div className="summary-grid">
            <div className="summary-card">
              <span className="summary-number">1</span>
              <h4>Struttura IP</h4>
              <p>L'indirizzo IPv4 e composto da 32 bit divisi in 4 ottetti, con una parte di rete e una parte host.</p>
            </div>

            <div className="summary-card">
              <span className="summary-number">2</span>
              <h4>Maschera</h4>
              <p>La maschera di sottorete determina il confine tra parte di rete e parte host.</p>
            </div>

            <div className="summary-card">
              <span className="summary-number">3</span>
              <h4>CIDR</h4>
              <p>La notazione /n indica quanti bit sono dedicati alla parte di rete.</p>
            </div>

            <div className="summary-card">
              <span className="summary-number">4</span>
              <h4>Host = 2^n - 2</h4>
              <p>Il numero di host utilizzabili si calcola con questa formula, dove n sono i bit host.</p>
            </div>
          </div>

          <div className="next-module">
            <h4>Nel prossimo modulo...</h4>
            <p>
              Vedremo come applicare questi concetti per dividere una rete in sottoreti
              usando il <strong>Subnetting a Maschera Fissa (FLSM)</strong>.
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
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .summary-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          position: relative;
          padding-left: 4rem;
        }
        .summary-number {
          position: absolute;
          left: 1rem;
          top: 1.5rem;
          width: 36px;
          height: 36px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
        }
        .summary-card h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .summary-card p {
          margin: 0;
          color: var(--gray-600);
          font-size: 0.95rem;
        }
        .next-module {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          padding: 1.5rem 2rem;
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
        @media (max-width: 768px) {
          .summary-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Slide>
  );
}

// Array delle slide
const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

// Componente principale del modulo
export default function Module1() {
  return <ModuleWrapper slides={slides} moduleName="Modulo 1: Fondamenti IP" />;
}
