import { useState } from 'react';
import { BranchItem } from './BranchItem';

export function DetailPanel({ data, index, total, onClose }) {
  const [openBranch, setOpenBranch] = useState(0);

  return (
    <div className="detail-panel" onClick={onClose}>
      <div className="detail-panel__inner" onClick={(e) => e.stopPropagation()}>
        <button className="detail-panel__back" onClick={onClose}>
          ← back
        </button>

        <div className="detail-panel__position" style={{ color: data.accent }}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>

        <h1 className="detail-panel__title">{data.label}</h1>

        <p className="detail-panel__blurb">{data.blurb}</p>

        <div className="detail-panel__branches">
          <div className="detail-panel__branches-label">
            Branches · {data.branches.length}
          </div>

          {data.branches.map((branch, i) => (
            <BranchItem
              key={branch.title}
              branch={branch}
              index={i}
              isOpen={openBranch === i}
              onToggle={() => setOpenBranch(openBranch === i ? -1 : i)}
              accent={data.accent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
