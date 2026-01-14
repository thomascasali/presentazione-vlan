import { useState, useCallback } from 'react';
import { motion, Reorder } from 'framer-motion';

export function MatchingGame({ pairs, title = 'Abbina i concetti' }) {
  const [leftItems, setLeftItems] = useState(
    pairs.map((p, i) => ({ id: `left-${i}`, text: p.left, matched: false }))
  );
  const [rightItems, setRightItems] = useState(
    () => {
      const items = pairs.map((p, i) => ({ id: `right-${i}`, text: p.right, correctIndex: i }));
      return items.sort(() => Math.random() - 0.5);
    }
  );
  const [selected, setSelected] = useState({ left: null, right: null });
  const [matches, setMatches] = useState([]);
  const [wrongMatch, setWrongMatch] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleLeftClick = (index) => {
    if (leftItems[index].matched) return;
    setSelected(prev => ({ ...prev, left: index }));
  };

  const handleRightClick = (index) => {
    const rightItem = rightItems[index];
    if (matches.some(m => m.rightId === rightItem.id)) return;
    setSelected(prev => ({ ...prev, right: index }));
  };

  // Verifica match quando entrambi sono selezionati
  useState(() => {
    if (selected.left !== null && selected.right !== null) {
      const leftIndex = selected.left;
      const rightItem = rightItems[selected.right];

      if (rightItem.correctIndex === leftIndex) {
        // Match corretto
        const newMatches = [...matches, {
          leftIndex,
          rightId: rightItem.id,
          leftText: leftItems[leftIndex].text,
          rightText: rightItem.text
        }];
        setMatches(newMatches);

        setLeftItems(prev => prev.map((item, i) =>
          i === leftIndex ? { ...item, matched: true } : item
        ));

        if (newMatches.length === pairs.length) {
          setCompleted(true);
        }
      } else {
        // Match sbagliato
        setWrongMatch({ left: leftIndex, right: selected.right });
        setTimeout(() => setWrongMatch(null), 800);
      }

      setSelected({ left: null, right: null });
    }
  }, [selected]);

  const checkMatch = useCallback(() => {
    if (selected.left !== null && selected.right !== null) {
      const leftIndex = selected.left;
      const rightItem = rightItems[selected.right];

      if (rightItem.correctIndex === leftIndex) {
        const newMatches = [...matches, {
          leftIndex,
          rightId: rightItem.id,
          leftText: leftItems[leftIndex].text,
          rightText: rightItem.text
        }];
        setMatches(newMatches);

        setLeftItems(prev => prev.map((item, i) =>
          i === leftIndex ? { ...item, matched: true } : item
        ));

        if (newMatches.length === pairs.length) {
          setTimeout(() => setCompleted(true), 300);
        }
      } else {
        setWrongMatch({ left: leftIndex, right: selected.right });
        setTimeout(() => setWrongMatch(null), 800);
      }

      setSelected({ left: null, right: null });
    }
  }, [selected, rightItems, matches, leftItems, pairs.length]);

  const handleClick = (side, index) => {
    if (side === 'left') {
      if (leftItems[index].matched) return;
      const newSelected = { ...selected, left: index };
      setSelected(newSelected);
      if (newSelected.left !== null && newSelected.right !== null) {
        setTimeout(() => {
          const leftIdx = newSelected.left;
          const rightItem = rightItems[newSelected.right];

          if (rightItem.correctIndex === leftIdx) {
            const newMatches = [...matches, {
              leftIndex: leftIdx,
              rightId: rightItem.id,
            }];
            setMatches(newMatches);
            setLeftItems(prev => prev.map((item, i) =>
              i === leftIdx ? { ...item, matched: true } : item
            ));
            if (newMatches.length === pairs.length) {
              setTimeout(() => setCompleted(true), 300);
            }
          } else {
            setWrongMatch({ left: leftIdx, right: newSelected.right });
            setTimeout(() => setWrongMatch(null), 800);
          }
          setSelected({ left: null, right: null });
        }, 100);
      }
    } else {
      const rightItem = rightItems[index];
      if (matches.some(m => m.rightId === rightItem.id)) return;
      const newSelected = { ...selected, right: index };
      setSelected(newSelected);
      if (newSelected.left !== null && newSelected.right !== null) {
        setTimeout(() => {
          const leftIdx = newSelected.left;
          const rItem = rightItems[newSelected.right];

          if (rItem.correctIndex === leftIdx) {
            const newMatches = [...matches, {
              leftIndex: leftIdx,
              rightId: rItem.id,
            }];
            setMatches(newMatches);
            setLeftItems(prev => prev.map((item, i) =>
              i === leftIdx ? { ...item, matched: true } : item
            ));
            if (newMatches.length === pairs.length) {
              setTimeout(() => setCompleted(true), 300);
            }
          } else {
            setWrongMatch({ left: leftIdx, right: newSelected.right });
            setTimeout(() => setWrongMatch(null), 800);
          }
          setSelected({ left: null, right: null });
        }, 100);
      }
    }
  };

  const reset = () => {
    setLeftItems(pairs.map((p, i) => ({ id: `left-${i}`, text: p.left, matched: false })));
    setRightItems(
      pairs.map((p, i) => ({ id: `right-${i}`, text: p.right, correctIndex: i }))
        .sort(() => Math.random() - 0.5)
    );
    setSelected({ left: null, right: null });
    setMatches([]);
    setWrongMatch(null);
    setCompleted(false);
  };

  if (completed) {
    return (
      <motion.div
        className="matching-complete"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="success-icon">✓</div>
        <h3>Ottimo lavoro!</h3>
        <p>Hai abbinato correttamente tutti i concetti.</p>
        <button className="btn btn-primary" onClick={reset}>
          Gioca ancora
        </button>
        <style>{`
          .matching-complete {
            text-align: center;
            padding: 3rem 2rem;
            background: white;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
          }
          .success-icon {
            width: 80px;
            height: 80px;
            background: var(--success);
            color: white;
            font-size: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
          }
          .matching-complete h3 {
            margin-bottom: 0.5rem;
          }
          .matching-complete p {
            color: var(--gray-600);
            margin-bottom: 1.5rem;
          }
        `}</style>
      </motion.div>
    );
  }

  return (
    <div className="matching-game">
      <div className="matching-header">
        <h3>{title}</h3>
        <span className="matching-progress">
          {matches.length} / {pairs.length} abbinati
        </span>
      </div>

      <p className="matching-instruction">
        Clicca su un elemento a sinistra, poi sull'elemento corrispondente a destra
      </p>

      <div className="matching-columns">
        <div className="matching-column">
          {leftItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`matching-item left ${
                item.matched ? 'matched' : ''
              } ${selected.left === index ? 'selected' : ''} ${
                wrongMatch?.left === index ? 'wrong' : ''
              }`}
              onClick={() => handleClick('left', index)}
              whileHover={!item.matched ? { scale: 1.02 } : {}}
              whileTap={!item.matched ? { scale: 0.98 } : {}}
            >
              {item.text}
            </motion.div>
          ))}
        </div>

        <div className="matching-column">
          {rightItems.map((item, index) => {
            const isMatched = matches.some(m => m.rightId === item.id);
            return (
              <motion.div
                key={item.id}
                className={`matching-item right ${
                  isMatched ? 'matched' : ''
                } ${selected.right === index ? 'selected' : ''} ${
                  wrongMatch?.right === index ? 'wrong' : ''
                }`}
                onClick={() => handleClick('right', index)}
                whileHover={!isMatched ? { scale: 1.02 } : {}}
                whileTap={!isMatched ? { scale: 0.98 } : {}}
              >
                {item.text}
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .matching-game {
          background: white;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .matching-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .matching-header h3 {
          color: var(--primary);
          margin: 0;
        }

        .matching-progress {
          font-size: 0.9rem;
          color: var(--gray-500);
          background: var(--gray-100);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-md);
        }

        .matching-instruction {
          color: var(--gray-500);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .matching-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .matching-column {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .matching-item {
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 0.95rem;
        }

        .matching-item.left {
          background: var(--gray-100);
          border: 2px solid var(--gray-200);
        }

        .matching-item.right {
          background: #e0f2fe;
          border: 2px solid #7dd3fc;
        }

        .matching-item:hover:not(.matched) {
          box-shadow: var(--shadow-md);
        }

        .matching-item.selected {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        }

        .matching-item.matched {
          background: #d1fae5;
          border-color: var(--success);
          cursor: default;
          opacity: 0.7;
        }

        .matching-item.wrong {
          background: #fee2e2;
          border-color: var(--error);
          animation: shake 0.5s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @media (max-width: 768px) {
          .matching-columns {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export function OrderingGame({ items: initialItems, title = 'Metti in ordine', correctOrder }) {
  const [items, setItems] = useState(
    () => [...initialItems].sort(() => Math.random() - 0.5)
  );
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkOrder = () => {
    const correct = items.every((item, index) => item === correctOrder[index]);
    setIsCorrect(correct);
    setChecked(true);
  };

  const reset = () => {
    setItems([...initialItems].sort(() => Math.random() - 0.5));
    setChecked(false);
    setIsCorrect(false);
  };

  return (
    <div className="ordering-game">
      <div className="ordering-header">
        <h3>{title}</h3>
      </div>

      <p className="ordering-instruction">
        Trascina gli elementi per metterli nell'ordine corretto
      </p>

      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="ordering-list"
      >
        {items.map((item, index) => (
          <Reorder.Item
            key={item}
            value={item}
            className={`ordering-item ${
              checked ? (item === correctOrder[index] ? 'correct' : 'wrong') : ''
            }`}
          >
            <span className="item-number">{index + 1}</span>
            <span className="item-text">{item}</span>
            <span className="drag-handle">⋮⋮</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="ordering-actions">
        {!checked ? (
          <button className="btn btn-primary" onClick={checkOrder}>
            Verifica ordine
          </button>
        ) : (
          <>
            <div className={`result-message ${isCorrect ? 'correct' : 'wrong'}`}>
              {isCorrect ? 'Ordine corretto!' : 'Ordine non corretto, riprova!'}
            </div>
            <button className="btn btn-secondary" onClick={reset}>
              Riprova
            </button>
          </>
        )}
      </div>

      <style>{`
        .ordering-game {
          background: white;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .ordering-header h3 {
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .ordering-instruction {
          color: var(--gray-500);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .ordering-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ordering-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--gray-50);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          margin-bottom: 0.5rem;
          cursor: grab;
          user-select: none;
        }

        .ordering-item:active {
          cursor: grabbing;
          box-shadow: var(--shadow-lg);
        }

        .ordering-item.correct {
          background: #d1fae5;
          border-color: var(--success);
        }

        .ordering-item.wrong {
          background: #fee2e2;
          border-color: var(--error);
        }

        .item-number {
          width: 28px;
          height: 28px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .item-text {
          flex: 1;
        }

        .drag-handle {
          color: var(--gray-400);
          font-size: 1.2rem;
        }

        .ordering-actions {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .result-message {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 500;
        }

        .result-message.correct {
          background: #d1fae5;
          color: #065f46;
        }

        .result-message.wrong {
          background: #fee2e2;
          color: #991b1b;
        }
      `}</style>
    </div>
  );
}

export default MatchingGame;
