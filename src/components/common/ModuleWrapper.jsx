import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ModuleNav } from './Menu';

export function ModuleWrapper({ slides, moduleName }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, slides.length]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  // Gestione tastiera
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  const CurrentSlideComponent = slides[currentSlide - 1];

  return (
    <div className="module-wrapper">
      <div className="module-content">
        <AnimatePresence mode="wait">
          <CurrentSlideComponent key={currentSlide} />
        </AnimatePresence>
      </div>

      <ModuleNav
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={goToPrev}
        onNext={goToNext}
        moduleName={moduleName}
      />

      <style>{`
        .module-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--gray-100);
        }

        .module-content {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}

export default ModuleWrapper;
