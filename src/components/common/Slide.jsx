import { motion } from 'framer-motion';

const slideVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

export function Slide({ children, title, subtitle, className = '' }) {
  return (
    <motion.div
      className={`slide-container ${className}`}
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {title && (
        <motion.div
          className="slide-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1>{title}</h1>
          {subtitle && <p className="slide-subtitle">{subtitle}</p>}
        </motion.div>
      )}
      <div className="slide-content">
        {children}
      </div>
      <style>{`
        .slide-header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--gray-200);
        }
        .slide-header h1 {
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        .slide-subtitle {
          color: var(--gray-500);
          font-size: 1.1rem;
          margin: 0;
        }
        .slide-content {
          flex: 1;
        }
      `}</style>
    </motion.div>
  );
}

export function AnimatedList({ children, className = '' }) {
  return (
    <motion.ul
      className={`animated-list ${className}`}
      initial="hidden"
      animate="visible"
    >
      {Array.isArray(children) ? children.map((child, i) => (
        <motion.li
          key={i}
          custom={i}
          variants={itemVariants}
        >
          {child}
        </motion.li>
      )) : children}
      <style>{`
        .animated-list {
          list-style: none;
          padding: 0;
        }
        .animated-list li {
          padding: 0.75rem 0;
          padding-left: 1.5rem;
          position: relative;
          font-size: 1.1rem;
          color: var(--gray-700);
        }
        .animated-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
        }
      `}</style>
    </motion.ul>
  );
}

export function AnimatedContent({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export function TwoColumns({ left, right, ratio = '1:1' }) {
  const [leftRatio, rightRatio] = ratio.split(':').map(Number);

  return (
    <div className="two-columns" style={{
      display: 'grid',
      gridTemplateColumns: `${leftRatio}fr ${rightRatio}fr`,
      gap: '2rem',
      alignItems: 'start'
    }}>
      <div className="column-left">{left}</div>
      <div className="column-right">{right}</div>
    </div>
  );
}

export default Slide;
