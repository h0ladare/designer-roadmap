import { useState, useEffect, useCallback, useRef } from 'react';
import { BranchItem } from './BranchItem';

const EXIT_DURATION = 320;
const PAGE_TRANSITION = 260;

export function DetailPanel({ data, index, total, onClose, onPrev, onNext }) {
  const [openBranch, setOpenBranch] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [displayData, setDisplayData] = useState(data);
  const [displayIndex, setDisplayIndex] = useState(index);
  const [contentPhase, setContentPhase] = useState('in');
  const swapTimer = useRef(null);

  useEffect(() => {
    if (data.id === displayData.id) return;
    setContentPhase('out');
    clearTimeout(swapTimer.current);
    swapTimer.current = setTimeout(() => {
      setDisplayData(data);
      setDisplayIndex(index);
      setOpenBranch(0);
      setContentPhase('in');
    }, PAGE_TRANSITION);
    return () => clearTimeout(swapTimer.current);
  }, [data, index, displayData.id]);

  const handleClose = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => onClose(), EXIT_DURATION);
  }, [isExiting, onClose]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleClose, onPrev, onNext]);

  const panelClass = `detail-panel${isExiting ? ' detail-panel--exit' : ''}`;
  const contentClass = `detail-panel__content detail-panel__content--${contentPhase}`;

  return (
    <div className={panelClass}>
      <div className="detail-panel__inner">
        <button className="detail-panel__back" onClick={handleClose}>
          ← back
        </button>

        <div className={contentClass}>
          <div className="detail-panel__position" style={{ color: displayData.accent }}>
            {String(displayIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>

          <h1 className="detail-panel__title">{displayData.label}</h1>

          <p className="detail-panel__blurb">{displayData.blurb}</p>

          <div className="detail-panel__nav-arrows">
            {onPrev && (
              <button className="detail-panel__nav-btn" onClick={onPrev} title="Previous (←)">
                ‹
              </button>
            )}
            {onNext && (
              <button className="detail-panel__nav-btn" onClick={onNext} title="Next (→)">
                ›
              </button>
            )}
          </div>

          <div className="detail-panel__branches">
            <div className="detail-panel__branches-label">
              Branches · {displayData.branches.length}
            </div>

            {displayData.branches.map((branch, i) => (
              <BranchItem
                key={branch.title}
                branch={branch}
                index={i}
                isOpen={openBranch === i}
                onToggle={() => setOpenBranch(openBranch === i ? -1 : i)}
                accent={displayData.accent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
