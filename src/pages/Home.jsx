import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { modules } from '../components/common/Menu';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Home() {
  return (
    <div className="home-page">
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <h1>VLAN e Subnetting</h1>
          <p className="hero-subtitle">
            Comprendere la segmentazione delle reti: dalla teoria alla pratica
          </p>
          <div className="hero-badges">
            <span className="badge">Layer 2</span>
            <span className="badge">Layer 3</span>
            <span className="badge">FLSM</span>
            <span className="badge">VLSM</span>
            <span className="badge">802.1Q</span>
          </div>
        </div>
      </motion.header>

      <main className="home-main">
        <section className="intro-section">
          <h2>Obiettivi del corso</h2>
          <div className="objectives-grid">
            <div className="objective-card">
              <span className="objective-icon">🎯</span>
              <h3>Comprendere</h3>
              <p>La differenza tra subnetting a maschera fissa e variabile</p>
            </div>
            <div className="objective-card">
              <span className="objective-icon">🔀</span>
              <h3>Analizzare</h3>
              <p>Il funzionamento delle VLAN e il loro ruolo nelle reti moderne</p>
            </div>
            <div className="objective-card">
              <span className="objective-icon">⚖️</span>
              <h3>Confrontare</h3>
              <p>VLAN vs Subnetting: quando e perche usare ciascuna soluzione</p>
            </div>
            <div className="objective-card">
              <span className="objective-icon">🛠️</span>
              <h3>Applicare</h3>
              <p>Le conoscenze acquisite in scenari aziendali reali</p>
            </div>
          </div>
        </section>

        <section className="modules-section">
          <h2>Moduli del corso</h2>
          <motion.div
            className="modules-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {modules.map((module) => (
              <motion.div key={module.id} variants={itemVariants}>
                <Link to={module.path} className="module-card">
                  <div
                    className="module-icon"
                    style={{ backgroundColor: module.color }}
                  >
                    {module.icon}
                  </div>
                  <div className="module-content">
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                  </div>
                  <span className="module-arrow">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <h3>Come navigare</h3>
            <ul>
              <li>Usa il menu laterale per accedere ai moduli</li>
              <li>All'interno di ogni modulo, usa le frecce per navigare tra le slide</li>
              <li>Completa le attivita interattive per consolidare l'apprendimento</li>
              <li>Il menu e sempre accessibile cliccando sull'icona in alto a sinistra</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>Sistemi e Reti - ITTS - Anno Scolastico 2024/2025</p>
      </footer>

      <style>{`
        .home-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .hero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: white;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .hero-badges {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .home-main {
          flex: 1;
          padding: 3rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .intro-section {
          margin-bottom: 3rem;
        }

        .intro-section h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--gray-800);
        }

        .objectives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .objective-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: transform var(--transition-fast);
        }

        .objective-card:hover {
          transform: translateY(-4px);
        }

        .objective-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }

        .objective-card h3 {
          margin-bottom: 0.5rem;
          color: var(--primary);
        }

        .objective-card p {
          font-size: 0.9rem;
          color: var(--gray-600);
          margin: 0;
        }

        .modules-section h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--gray-800);
        }

        .modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .module-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .module-card:hover {
          transform: translateX(8px);
          box-shadow: var(--shadow-lg);
        }

        .module-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .module-content {
          flex: 1;
          min-width: 0;
        }

        .module-content h3 {
          font-size: 1rem;
          color: var(--gray-800);
          margin-bottom: 0.25rem;
        }

        .module-content p {
          font-size: 0.85rem;
          color: var(--gray-500);
          margin: 0;
        }

        .module-arrow {
          font-size: 1.25rem;
          color: var(--gray-400);
          transition: transform var(--transition-fast);
        }

        .module-card:hover .module-arrow {
          transform: translateX(4px);
          color: var(--primary);
        }

        .info-section {
          margin-top: 3rem;
        }

        .info-card {
          background: var(--gray-100);
          padding: 1.5rem 2rem;
          border-radius: var(--radius-lg);
          max-width: 600px;
          margin: 0 auto;
        }

        .info-card h3 {
          margin-bottom: 1rem;
          color: var(--gray-700);
        }

        .info-card ul {
          list-style: none;
          padding: 0;
        }

        .info-card li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--gray-600);
        }

        .info-card li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
          font-weight: bold;
        }

        .home-footer {
          background: var(--gray-100);
          padding: 1.5rem;
          text-align: center;
          color: var(--gray-500);
          font-size: 0.9rem;
        }

        .home-footer p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .home-main {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
