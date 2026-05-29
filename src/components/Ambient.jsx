import { useMemo } from 'react';

export function Ambient() {
  const dots = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.35 + 0.1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    })),
  []);

  return (
    <div className="ambient">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="ambient__dot"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
