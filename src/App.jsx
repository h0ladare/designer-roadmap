import { useState } from 'react';
import { PARENTS } from './data/parents';
import { useIsMobile } from './hooks/useIsMobile';
import { Ambient } from './components/Ambient';
import { Header } from './components/Header';
import { ParentCard } from './components/ParentCard';
import { DetailPanel } from './components/DetailPanel';
import { Footer } from './components/Footer';

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const isMobile = useIsMobile();

  const activeIndex = PARENTS.findIndex((p) => p.id === activeId);
  const active = activeIndex >= 0 ? PARENTS[activeIndex] : null;

  return (
    <div className="app">
      <Ambient />

      <div className="app__content">
        <Header isMobile={isMobile} />

        <div className="card-grid">
          {PARENTS.map((p, i) => (
            <ParentCard
              key={p.id}
              data={p}
              index={i}
              onOpen={() => setActiveId(p.id)}
              isMobile={isMobile}
            />
          ))}
        </div>

        <Footer isMobile={isMobile} />
      </div>

      {active && (
        <DetailPanel
          data={active}
          index={activeIndex}
          total={PARENTS.length}
          onClose={() => setActiveId(null)}
        />
      )}
    </div>
  );
}
