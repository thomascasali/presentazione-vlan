import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Flashcard({ front, back, color = 'var(--primary)' }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flashcard-wrapper" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="flashcard"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ '--card-color': color }}
      >
        <div className="flashcard-face flashcard-front">
          <div className="flashcard-content">
            {front}
          </div>
          <span className="flip-hint">Clicca per girare</span>
        </div>
        <div className="flashcard-face flashcard-back">
          <div className="flashcard-content">
            {back}
          </div>
        </div>
      </motion.div>

      <style>{`
        .flashcard-wrapper {
          perspective: 1000px;
          cursor: pointer;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }

        .flashcard {
          position: relative;
          width: 100%;
          height: 250px;
          transform-style: preserve-3d;
        }

        .flashcard-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          box-shadow: var(--shadow-lg);
        }

        .flashcard-front {
          background: linear-gradient(135deg, var(--card-color), color-mix(in srgb, var(--card-color) 80%, black));
          color: white;
        }

        .flashcard-back {
          background: white;
          color: var(--gray-800);
          transform: rotateY(180deg);
          border: 2px solid var(--gray-200);
        }

        .flashcard-content {
          text-align: center;
          font-size: 1.2rem;
          line-height: 1.6;
        }

        .flashcard-front .flashcard-content {
          font-weight: 600;
        }

        .flip-hint {
          position: absolute;
          bottom: 1rem;
          font-size: 0.8rem;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}

export function FlashcardDeck({ cards, title = 'Flashcard' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev < cards.length - 1 ? prev + 1 : prev;
      } else {
        return prev > 0 ? prev - 1 : prev;
      }
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="flashcard-deck">
      <div className="deck-header">
        <h3>{title}</h3>
        <span className="deck-counter">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      <div className="deck-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Flashcard
              front={cards[currentIndex].front}
              back={cards[currentIndex].back}
              color={cards[currentIndex].color || 'var(--primary)'}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="deck-nav">
        <button
          className="btn btn-secondary"
          onClick={() => navigate(-1)}
          disabled={currentIndex === 0}
        >
          ← Precedente
        </button>
        <div className="deck-dots">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate(1)}
          disabled={currentIndex === cards.length - 1}
        >
          Successiva →
        </button>
      </div>

      <style>{`
        .flashcard-deck {
          padding: 1rem;
        }

        .deck-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .deck-header h3 {
          margin: 0;
          color: var(--primary);
        }

        .deck-counter {
          font-size: 0.9rem;
          color: var(--gray-500);
          background: var(--gray-100);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-md);
        }

        .deck-container {
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .deck-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.5rem;
          gap: 1rem;
        }

        .deck-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--gray-300);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .dot:hover {
          background: var(--gray-400);
        }

        .dot.active {
          background: var(--primary);
          transform: scale(1.2);
        }

        .deck-nav .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

export default Flashcard;
