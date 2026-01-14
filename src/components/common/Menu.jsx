import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const modules = [
  {
    id: 1,
    title: 'Fondamenti IP',
    path: '/module/1',
    icon: '🌐',
    color: '#2563eb',
    description: 'Indirizzamento IP e maschere'
  },
  {
    id: 2,
    title: 'Subnetting FLSM',
    path: '/module/2',
    icon: '📐',
    color: '#0891b2',
    description: 'Maschera fissa'
  },
  {
    id: 3,
    title: 'Subnetting VLSM',
    path: '/module/3',
    icon: '🎯',
    color: '#8b5cf6',
    description: 'Maschera variabile'
  },
  {
    id: 4,
    title: 'Introduzione VLAN',
    path: '/module/4',
    icon: '🔀',
    color: '#10b981',
    description: 'Virtual LAN'
  },
  {
    id: 5,
    title: 'VLAN vs Subnetting',
    path: '/module/5',
    icon: '⚖️',
    color: '#f59e0b',
    description: 'Confronto e analisi'
  },
  {
    id: 6,
    title: 'Casi Studio',
    path: '/module/6',
    icon: '🏢',
    color: '#ef4444',
    description: 'Scenari reali'
  },
  {
    id: 7,
    title: 'Attivita Interattive',
    path: '/module/7',
    icon: '🎮',
    color: '#ec4899',
    description: 'Quiz e esercizi'
  }
];

export function Sidebar({ isOpen, onToggle }) {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="sidebar"
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="sidebar-header">
              <Link to="/" className="logo">
                <span className="logo-icon">🌐</span>
                <span className="logo-text">VLAN & Subnetting</span>
              </Link>
            </div>

            <nav className="sidebar-nav">
              <div className="nav-section">
                <span className="nav-section-title">Moduli</span>
                {modules.map((module) => (
                  <Link
                    key={module.id}
                    to={module.path}
                    className={`nav-item ${location.pathname.startsWith(module.path) ? 'active' : ''}`}
                  >
                    <span className="nav-icon" style={{ background: module.color }}>
                      {module.icon}
                    </span>
                    <div className="nav-text">
                      <span className="nav-title">{module.title}</span>
                      <span className="nav-desc">{module.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </nav>

            <div className="sidebar-footer">
              <span>Sistemi e Reti - ITTS</span>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <button
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <style>{`
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          width: 280px;
          background: white;
          box-shadow: var(--shadow-xl);
          z-index: 100;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--gray-200);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--gray-900);
        }

        .logo-icon {
          font-size: 1.75rem;
        }

        .logo-text {
          font-weight: 700;
          font-size: 1.1rem;
        }

        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
        }

        .nav-section {
          margin-bottom: 1.5rem;
        }

        .nav-section-title {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--gray-400);
          padding: 0.5rem 0.75rem;
          letter-spacing: 0.05em;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          text-decoration: none;
          color: var(--gray-700);
          transition: all var(--transition-fast);
          margin-bottom: 0.25rem;
        }

        .nav-item:hover {
          background: var(--gray-100);
        }

        .nav-item.active {
          background: var(--primary);
          color: white;
        }

        .nav-item.active .nav-desc {
          color: rgba(255, 255, 255, 0.8);
        }

        .nav-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .nav-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .nav-title {
          font-weight: 500;
          font-size: 0.95rem;
        }

        .nav-desc {
          font-size: 0.75rem;
          color: var(--gray-500);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sidebar-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--gray-200);
          font-size: 0.8rem;
          color: var(--gray-500);
          text-align: center;
        }

        .menu-toggle {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 101;
          width: 44px;
          height: 44px;
          background: white;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-fast);
        }

        .menu-toggle:hover {
          box-shadow: var(--shadow-lg);
        }

        .menu-toggle span {
          width: 20px;
          height: 2px;
          background: var(--gray-700);
          border-radius: 1px;
          transition: all var(--transition-fast);
        }

        .menu-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export function ModuleNav({ currentSlide, totalSlides, onPrev, onNext, moduleName }) {
  return (
    <div className="module-nav">
      <div className="nav-info">
        <span className="module-name">{moduleName}</span>
        <span className="slide-counter">{currentSlide} / {totalSlides}</span>
      </div>

      <div className="nav-progress">
        <div
          className="progress-bar"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>

      <div className="nav-buttons">
        <button
          className="btn btn-secondary btn-icon"
          onClick={onPrev}
          disabled={currentSlide === 1}
          aria-label="Slide precedente"
        >
          ←
        </button>
        <button
          className="btn btn-primary btn-icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          aria-label="Slide successiva"
        >
          →
        </button>
      </div>

      <style>{`
        .module-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: white;
          border-top: 1px solid var(--gray-200);
          gap: 1rem;
        }

        .nav-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .module-name {
          font-weight: 600;
          color: var(--gray-800);
        }

        .slide-counter {
          font-size: 0.85rem;
          color: var(--gray-500);
        }

        .nav-progress {
          flex: 1;
          height: 4px;
          background: var(--gray-200);
          border-radius: 2px;
          overflow: hidden;
          max-width: 300px;
        }

        .progress-bar {
          height: 100%;
          background: var(--primary);
          border-radius: 2px;
          transition: width var(--transition-normal);
        }

        .nav-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .nav-buttons .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

export { modules };
export default Sidebar;
