import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Quiz({ questions, title = 'Quiz' }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (answerIndex) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === question.correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <motion.div
        className="quiz-complete"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="score-circle">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="var(--gray-200)"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={percentage >= 70 ? 'var(--success)' : percentage >= 50 ? 'var(--warning)' : 'var(--error)'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${percentage * 2.83} 283`}
              transform="rotate(-90 50 50)"
              initial={{ strokeDasharray: '0 283' }}
              animate={{ strokeDasharray: `${percentage * 2.83} 283` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </svg>
          <div className="score-text">
            <span className="score-number">{percentage}%</span>
            <span className="score-label">{score}/{questions.length}</span>
          </div>
        </div>

        <h3>
          {percentage >= 70 ? 'Ottimo lavoro!' : percentage >= 50 ? 'Buon risultato!' : 'Riprova!'}
        </h3>
        <p>
          {percentage >= 70
            ? 'Hai dimostrato una buona comprensione degli argomenti.'
            : percentage >= 50
            ? 'Hai delle buone basi, ma puoi migliorare.'
            : 'Ti consiglio di ripassare gli argomenti e riprovare.'}
        </p>

        <button className="btn btn-primary" onClick={restart}>
          Riprova
        </button>

        <style>{`
          .quiz-complete {
            text-align: center;
            padding: 2rem;
          }

          .score-circle {
            width: 180px;
            height: 180px;
            margin: 0 auto 2rem;
            position: relative;
          }

          .score-circle svg {
            width: 100%;
            height: 100%;
          }

          .score-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }

          .score-number {
            display: block;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--gray-800);
          }

          .score-label {
            font-size: 1rem;
            color: var(--gray-500);
          }

          .quiz-complete h3 {
            margin-bottom: 0.5rem;
          }

          .quiz-complete p {
            margin-bottom: 1.5rem;
            color: var(--gray-600);
          }
        `}</style>
      </motion.div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h3>{title}</h3>
        <span className="quiz-progress">
          Domanda {currentQuestion + 1} di {questions.length}
        </span>
      </div>

      <div className="quiz-progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="quiz-question"
        >
          <p className="question-text">{question.question}</p>

          <div className="answers">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                className={`answer-btn ${
                  selectedAnswer === index
                    ? index === question.correct
                      ? 'correct'
                      : 'wrong'
                    : showResult && index === question.correct
                    ? 'correct'
                    : ''
                }`}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
              >
                <span className="answer-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="answer-text">{answer}</span>
              </button>
            ))}
          </div>

          {showResult && (
            <motion.div
              className={`feedback ${selectedAnswer === question.correct ? 'correct' : 'wrong'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {selectedAnswer === question.correct ? (
                <p>Corretto! {question.explanation}</p>
              ) : (
                <p>
                  Sbagliato. La risposta corretta era: {question.answers[question.correct]}.
                  {question.explanation && ` ${question.explanation}`}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {showResult && (
        <motion.button
          className="btn btn-primary next-btn"
          onClick={nextQuestion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {currentQuestion < questions.length - 1 ? 'Prossima domanda' : 'Vedi risultato'}
        </motion.button>
      )}

      <style>{`
        .quiz-container {
          background: white;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .quiz-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .quiz-header h3 {
          margin: 0;
          color: var(--primary);
        }

        .quiz-progress {
          font-size: 0.9rem;
          color: var(--gray-500);
        }

        .quiz-progress-bar {
          height: 4px;
          background: var(--gray-200);
          border-radius: 2px;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .question-text {
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--gray-800);
          margin-bottom: 1.5rem;
        }

        .answers {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .answer-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--gray-50);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .answer-btn:hover:not(:disabled) {
          border-color: var(--primary);
          background: var(--gray-100);
        }

        .answer-btn:disabled {
          cursor: default;
        }

        .answer-btn.correct {
          background: #d1fae5;
          border-color: var(--success);
        }

        .answer-btn.wrong {
          background: #fee2e2;
          border-color: var(--error);
        }

        .answer-letter {
          width: 32px;
          height: 32px;
          background: var(--gray-200);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .answer-btn.correct .answer-letter {
          background: var(--success);
          color: white;
        }

        .answer-btn.wrong .answer-letter {
          background: var(--error);
          color: white;
        }

        .answer-text {
          flex: 1;
          color: var(--gray-700);
        }

        .feedback {
          margin-top: 1.5rem;
          padding: 1rem;
          border-radius: var(--radius-md);
        }

        .feedback.correct {
          background: #d1fae5;
          color: #065f46;
        }

        .feedback.wrong {
          background: #fee2e2;
          color: #991b1b;
        }

        .feedback p {
          margin: 0;
        }

        .next-btn {
          margin-top: 1.5rem;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Quiz;
