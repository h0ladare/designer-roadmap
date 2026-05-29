import { useState } from 'react';

export function ParentCard({ data, onOpen, isMobile, index }) {
  const [hover, setHover] = useState(false);

  const contribCount = data.branches.reduce(
    (sum, b) => sum + (b.contributions?.length || 0),
    0
  );

  return (
    <button
      className="parent-card"
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        '--accent': data.accent,
        '--glow': data.glow,
        borderColor: hover ? `${data.accent}88` : `${data.accent}33`,
        boxShadow: hover
          ? `0 16px 50px rgba(0,0,0,0.5), inset 0 1px 0 ${data.accent}33, 0 0 30px ${data.glow}`
          : `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 ${data.accent}22`,
        transform: hover && !isMobile ? 'translateY(-2px)' : 'translateY(0)',
        minHeight: isMobile ? 'auto' : '240px',
        padding: isMobile ? '22px' : '26px',
      }}
    >
      <div
        className="parent-card__glow"
        style={{
          background: `radial-gradient(circle, ${data.glow} 0%, transparent 65%)`,
          opacity: hover ? 1 : 0.6,
        }}
      />

      <div className="parent-card__index" style={{ color: data.accent }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="parent-card__label">
        {data.label}
      </div>

      <div className="parent-card__tagline">
        {data.tagline}
      </div>

      <div className="parent-card__meta">
        <div className="parent-card__stats">
          <span>{data.branches.length} branches</span>
          {contribCount > 0 && (
            <span
              className="parent-card__contrib-badge"
              style={{
                background: `${data.accent}22`,
                borderColor: `${data.accent}44`,
                color: data.accent,
              }}
            >
              {contribCount} of mine
            </span>
          )}
        </div>
        <div className="parent-card__arrow" style={{ color: data.accent }}>→</div>
      </div>
    </button>
  );
}
