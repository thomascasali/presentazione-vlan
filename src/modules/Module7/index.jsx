import { ModuleWrapper } from '../../components/common/ModuleWrapper';
import { Slide, AnimatedContent } from '../../components/common';
import { Quiz, FlashcardDeck, MatchingGame, SubnetCalculator } from '../../components/interactive';

// Dati Quiz
const quizQuestions = [
  {
    question: "A quale layer del modello OSI operano le VLAN?",
    answers: ["Layer 1 - Fisico", "Layer 2 - Data Link", "Layer 3 - Network", "Layer 4 - Transport"],
    correct: 1,
    explanation: "Le VLAN operano a Layer 2, utilizzando tag 802.1Q sui frame Ethernet."
  },
  {
    question: "Qual e la formula per calcolare gli host utilizzabili in una subnet?",
    answers: ["2^n", "2^n - 1", "2^n - 2", "2^n + 2"],
    correct: 2,
    explanation: "Si sottrae 2 per l'indirizzo di rete e l'indirizzo di broadcast."
  },
  {
    question: "Cosa significa VLSM?",
    answers: ["Virtual LAN Subnet Mask", "Variable Length Subnet Mask", "VLAN Local Segment Management", "Variable Local Subnet Method"],
    correct: 1,
    explanation: "VLSM sta per Variable Length Subnet Mask, permette subnet di dimensioni diverse."
  },
  {
    question: "Quanti bit ha il campo VLAN ID nello standard 802.1Q?",
    answers: ["8 bit", "10 bit", "12 bit", "16 bit"],
    correct: 2,
    explanation: "Il VID (VLAN ID) usa 12 bit, permettendo valori da 0 a 4095."
  },
  {
    question: "Qual e la differenza principale tra porta Access e Trunk?",
    answers: [
      "Access e piu veloce",
      "Trunk trasporta una sola VLAN",
      "Access appartiene a una VLAN, Trunk ne trasporta multiple",
      "Non c'e differenza"
    ],
    correct: 2,
    explanation: "Le porte Access servono i dispositivi finali (1 VLAN), le Trunk collegano switch (multiple VLAN)."
  },
  {
    question: "Con una maschera /26, quanti host utilizzabili hai?",
    answers: ["64", "62", "30", "126"],
    correct: 1,
    explanation: "/26 lascia 6 bit per gli host: 2^6 - 2 = 62 host utilizzabili."
  },
  {
    question: "Cosa serve per far comunicare due VLAN diverse?",
    answers: [
      "Un cavo crossover",
      "Un router o switch L3",
      "Una porta trunk",
      "Non possono comunicare"
    ],
    correct: 1,
    explanation: "Serve inter-VLAN routing tramite un dispositivo L3 (router o switch multilayer)."
  },
  {
    question: "Qual e il problema principale del subnetting FLSM?",
    answers: [
      "E' troppo complesso",
      "Non supporta le VLAN",
      "Tutte le subnet hanno la stessa dimensione, causando spreco",
      "Richiede hardware speciale"
    ],
    correct: 2,
    explanation: "FLSM usa una maschera fissa per tutte le subnet, sprecando indirizzi quando le esigenze sono diverse."
  },
  {
    question: "Quale di questi e un indirizzo privato valido?",
    answers: ["8.8.8.8", "192.168.1.1", "224.0.0.1", "169.254.1.1"],
    correct: 1,
    explanation: "192.168.x.x e nel range privato RFC 1918. 224.x e multicast, 169.254.x e APIPA."
  },
  {
    question: "Cosa identifica il campo TPID nel tag 802.1Q?",
    answers: [
      "Il numero della VLAN",
      "La priorita del frame",
      "Che il frame e taggato 802.1Q (0x8100)",
      "L'indirizzo MAC"
    ],
    correct: 2,
    explanation: "TPID (Tag Protocol Identifier) vale 0x8100 e indica che il frame contiene un tag 802.1Q."
  }
];

// Dati Flashcard
const flashcards = [
  {
    front: "Cos'e una VLAN?",
    back: "Una Virtual LAN e una rete logica che segmenta una LAN fisica in piu reti separate a Layer 2, isolando il traffico broadcast.",
    color: "#3b82f6"
  },
  {
    front: "Formula host utilizzabili",
    back: "2^n - 2\n\nDove n = bit della parte host.\nSi sottraggono 2 per indirizzo di rete e broadcast.",
    color: "#10b981"
  },
  {
    front: "Differenza FLSM vs VLSM",
    back: "FLSM: tutte le subnet hanno la stessa maschera (stesso numero di host).\n\nVLSM: ogni subnet puo avere maschera diversa (ottimizza l'uso degli IP).",
    color: "#8b5cf6"
  },
  {
    front: "Porta Access vs Trunk",
    back: "ACCESS: collegata a un dispositivo finale, appartiene a una sola VLAN, traffico non taggato.\n\nTRUNK: collega switch, trasporta piu VLAN, traffico taggato 802.1Q.",
    color: "#f59e0b"
  },
  {
    front: "Cosa serve per Inter-VLAN routing?",
    back: "Un dispositivo Layer 3:\n- Router con subinterface (Router-on-a-stick)\n- Switch Layer 3 con SVI (Switch Virtual Interface)",
    color: "#ef4444"
  },
  {
    front: "Range VLAN ID",
    back: "1-4094 (12 bit)\n\nVLAN 1: Default\nVLAN 2-1001: Normal range\nVLAN 1002-1005: Riservate\nVLAN 1006-4094: Extended",
    color: "#ec4899"
  },
  {
    front: "Best Practice: VLAN + Subnet",
    back: "1 VLAN = 1 Subnet\n\nOgni VLAN ha una propria subnet IP dedicata.\nIl gateway e' l'indirizzo della SVI sullo switch L3.",
    color: "#0891b2"
  },
  {
    front: "Calcolo salto subnet",
    back: "Salto = 256 - valore ultimo ottetto maschera\n\nEs: /26 = 255.255.255.192\nSalto = 256 - 192 = 64",
    color: "#7c3aed"
  }
];

// Dati Matching Game
const matchingPairs = [
  { left: "Layer 2", right: "VLAN, MAC Address, Switch" },
  { left: "Layer 3", right: "Subnet, IP Address, Router" },
  { left: "/24", right: "254 host utilizzabili" },
  { left: "/30", right: "2 host (link punto-punto)" },
  { left: "802.1Q", right: "Standard VLAN tagging" },
  { left: "SVI", right: "Switch Virtual Interface" },
  { left: "TPID 0x8100", right: "Identifica frame taggato" },
  { left: "Native VLAN", right: "Traffico non taggato su trunk" }
];

// Slide 1: Menu Attivita
function Slide1() {
  return (
    <Slide
      title="Attivita Interattive"
      subtitle="Metti alla prova le tue conoscenze"
    >
      <AnimatedContent>
        <div className="activities-menu">
          <div className="big-icon">🎮</div>
          <p className="lead">
            In questo modulo trovi diverse attivita per consolidare
            l'apprendimento. Naviga tra le slide per accedere a ciascuna.
          </p>

          <div className="activities-grid">
            <div className="activity-card">
              <span className="activity-icon">📝</span>
              <h4>Quiz</h4>
              <p>10 domande a risposta multipla su VLAN e Subnetting</p>
              <span className="slide-ref">Slide 2</span>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🎴</span>
              <h4>Flashcard</h4>
              <p>Ripassa i concetti chiave con carte interattive</p>
              <span className="slide-ref">Slide 3</span>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🔗</span>
              <h4>Matching</h4>
              <p>Abbina concetti correlati</p>
              <span className="slide-ref">Slide 4</span>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🧮</span>
              <h4>Calcolatore</h4>
              <p>Strumento interattivo per calcolo subnet</p>
              <span className="slide-ref">Slide 5</span>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .activities-menu {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .big-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        .lead {
          font-size: 1.15rem;
          color: var(--gray-600);
          margin-bottom: 2rem;
        }
        .activities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .activity-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          transition: transform var(--transition-fast);
          position: relative;
        }
        .activity-card:hover {
          transform: translateY(-4px);
        }
        .activity-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 0.75rem;
        }
        .activity-card h4 {
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .activity-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--gray-600);
        }
        .slide-ref {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.75rem;
          background: var(--gray-100);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          color: var(--gray-500);
        }
      `}</style>
    </Slide>
  );
}

// Slide 2: Quiz
function Slide2() {
  return (
    <Slide
      title="Quiz - VLAN e Subnetting"
      subtitle="Rispondi alle domande per testare la tua preparazione"
    >
      <AnimatedContent>
        <Quiz questions={quizQuestions} title="Quiz Finale" />
      </AnimatedContent>
    </Slide>
  );
}

// Slide 3: Flashcard
function Slide3() {
  return (
    <Slide
      title="Flashcard"
      subtitle="Clicca sulle carte per vedere la risposta"
    >
      <AnimatedContent>
        <FlashcardDeck cards={flashcards} title="Concetti Chiave" />
      </AnimatedContent>
    </Slide>
  );
}

// Slide 4: Matching Game
function Slide4() {
  return (
    <Slide
      title="Abbina i Concetti"
      subtitle="Collega ogni elemento con il suo corrispondente"
    >
      <AnimatedContent>
        <MatchingGame
          pairs={matchingPairs}
          title="Layer, Maschere e Tecnologie"
        />
      </AnimatedContent>
    </Slide>
  );
}

// Slide 5: Calcolatore Subnet
function Slide5() {
  return (
    <Slide
      title="Calcolatore Subnet"
      subtitle="Strumento interattivo per il calcolo delle sottoreti"
    >
      <AnimatedContent>
        <SubnetCalculator />
      </AnimatedContent>
    </Slide>
  );
}

// Slide 6: Esercizio Pratico
function Slide6() {
  return (
    <Slide
      title="Esercizio Pratico"
      subtitle="Progetta tu la segmentazione"
    >
      <AnimatedContent>
        <div className="exercise-content">
          <div className="exercise-scenario">
            <h4>Scenario</h4>
            <p>
              Un'azienda ti assegna la rete <code>172.20.0.0/16</code> e ti chiede di progettare
              la segmentazione per i seguenti reparti:
            </p>
          </div>

          <div className="exercise-requirements">
            <div className="req-item"><span>Produzione</span><strong>500 host</strong></div>
            <div className="req-item"><span>Uffici</span><strong>200 host</strong></div>
            <div className="req-item"><span>Magazzino</span><strong>100 host</strong></div>
            <div className="req-item"><span>IT</span><strong>50 host</strong></div>
            <div className="req-item"><span>Server</span><strong>20 host</strong></div>
            <div className="req-item"><span>WiFi Ospiti</span><strong>100 host</strong></div>
          </div>

          <div className="exercise-task">
            <h4>Il tuo compito</h4>
            <ol>
              <li>Determina la maschera appropriata per ogni reparto (VLSM)</li>
              <li>Assegna le subnet partendo dalla piu grande</li>
              <li>Definisci uno schema VLAN coerente</li>
              <li>Calcola gli indirizzi di rete, broadcast e gateway</li>
            </ol>
          </div>

          <div className="exercise-solution">
            <h4>Soluzione guidata</h4>
            <div className="solution-table">
              <table>
                <thead>
                  <tr>
                    <th>Reparto</th>
                    <th>Host</th>
                    <th>Maschera</th>
                    <th>Subnet suggerita</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Produzione</td>
                    <td>500</td>
                    <td>/23 (510 host)</td>
                    <td>172.20.0.0/23</td>
                  </tr>
                  <tr>
                    <td>Uffici</td>
                    <td>200</td>
                    <td>/24 (254 host)</td>
                    <td>172.20.2.0/24</td>
                  </tr>
                  <tr>
                    <td>Magazzino</td>
                    <td>100</td>
                    <td>/25 (126 host)</td>
                    <td>172.20.3.0/25</td>
                  </tr>
                  <tr>
                    <td>WiFi Ospiti</td>
                    <td>100</td>
                    <td>/25 (126 host)</td>
                    <td>172.20.3.128/25</td>
                  </tr>
                  <tr>
                    <td>IT</td>
                    <td>50</td>
                    <td>/26 (62 host)</td>
                    <td>172.20.4.0/26</td>
                  </tr>
                  <tr>
                    <td>Server</td>
                    <td>20</td>
                    <td>/27 (30 host)</td>
                    <td>172.20.4.64/27</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .exercise-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .exercise-scenario {
          background: #e0f2fe;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 1.5rem;
        }
        .exercise-scenario h4 {
          margin-bottom: 0.5rem;
          color: var(--gray-800);
        }
        .exercise-scenario p {
          margin: 0;
          color: var(--gray-700);
        }
        .exercise-scenario code {
          font-size: 1rem;
        }
        .exercise-requirements {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .req-item {
          background: var(--gray-100);
          padding: 0.75rem;
          border-radius: var(--radius-md);
          text-align: center;
        }
        .req-item span {
          display: block;
          font-size: 0.85rem;
          color: var(--gray-600);
          margin-bottom: 0.25rem;
        }
        .req-item strong {
          color: var(--primary);
          font-family: 'Fira Code', monospace;
        }
        .exercise-task {
          background: white;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.5rem;
        }
        .exercise-task h4 {
          margin-bottom: 0.75rem;
          color: var(--gray-700);
        }
        .exercise-task ol {
          margin: 0;
          padding-left: 1.25rem;
          color: var(--gray-600);
        }
        .exercise-task li {
          margin-bottom: 0.5rem;
        }
        .exercise-solution h4 {
          margin-bottom: 0.75rem;
          color: var(--success);
        }
        .solution-table table {
          width: 100%;
          font-size: 0.9rem;
        }
        .solution-table td {
          font-family: 'Fira Code', monospace;
        }
        @media (max-width: 768px) {
          .exercise-requirements {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </Slide>
  );
}

// Slide 7: Conclusione
function Slide7() {
  return (
    <Slide
      title="Congratulazioni!"
      subtitle="Hai completato il corso"
    >
      <AnimatedContent>
        <div className="conclusion-content">
          <div className="trophy">🏆</div>
          <h2>Hai completato tutti i moduli!</h2>
          <p className="conclusion-text">
            Ora hai le conoscenze per progettare e implementare
            la segmentazione di rete usando sia VLAN che Subnetting.
          </p>

          <div className="skills-acquired">
            <h4>Competenze acquisite</h4>
            <div className="skills-grid">
              <div className="skill-item">✓ Calcolo subnet FLSM e VLSM</div>
              <div className="skill-item">✓ Configurazione VLAN</div>
              <div className="skill-item">✓ Inter-VLAN routing</div>
              <div className="skill-item">✓ Best practice di sicurezza</div>
              <div className="skill-item">✓ Progettazione reti aziendali</div>
              <div className="skill-item">✓ Documentazione di rete</div>
            </div>
          </div>

          <div className="next-steps">
            <h4>Prossimi passi consigliati</h4>
            <ul>
              <li>Pratica con simulatori (Packet Tracer, GNS3)</li>
              <li>Approfondisci i protocolli di routing (OSPF, EIGRP)</li>
              <li>Studia la sicurezza di rete (ACL, Firewall)</li>
              <li>Esplora le VLAN avanzate (Private VLAN, Q-in-Q)</li>
            </ul>
          </div>

          <div className="back-to-home">
            <p>Usa il menu per rivedere qualsiasi modulo</p>
          </div>
        </div>
      </AnimatedContent>

      <style>{`
        .conclusion-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        .trophy {
          font-size: 5rem;
          margin-bottom: 1rem;
        }
        .conclusion-content h2 {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        .conclusion-text {
          font-size: 1.15rem;
          color: var(--gray-600);
          margin-bottom: 2rem;
        }
        .skills-acquired {
          background: linear-gradient(135deg, #d1fae5, #a7f3d0);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 1.5rem;
        }
        .skills-acquired h4 {
          margin-bottom: 1rem;
          color: #065f46;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          text-align: left;
        }
        .skill-item {
          background: white;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          color: var(--gray-700);
        }
        .next-steps {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          text-align: left;
          margin-bottom: 1.5rem;
        }
        .next-steps h4 {
          margin-bottom: 0.75rem;
          color: var(--gray-700);
        }
        .next-steps ul {
          margin: 0;
          padding-left: 1.25rem;
          color: var(--gray-600);
        }
        .next-steps li {
          margin-bottom: 0.5rem;
        }
        .back-to-home {
          color: var(--gray-500);
          font-size: 0.9rem;
        }
        .back-to-home p {
          margin: 0;
        }
      `}</style>
    </Slide>
  );
}

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

export default function Module7() {
  return <ModuleWrapper slides={slides} moduleName="Modulo 7: Attivita" />;
}
