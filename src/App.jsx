import { useState, useCallback, useEffect } from 'react';
import { PARENTS } from './data/parents';
import { useIsMobile } from './hooks/useIsMobile';
import { Ambient } from './components/Ambient';
import { Header } from './components/Header';
import { ParentCard } from './components/ParentCard';
import { DetailPanel } from './components/DetailPanel';
import { Footer } from './components/Footer';

function getIdFromHash() {
  const hash = window.location.hash.slice(1);
  return PARENTS.find((p) => p.id === hash) ? hash : null;
}

const BASE_TITLE = 'Product design, end to end.';

export default function App() {
  const [activeId, setActiveId] = useState(getIdFromHash);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onHashChange = () => setActiveId(getIdFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const active = PARENTS.find((p) => p.id === activeId);
    document.title = active ? `${active.label} — ${BASE_TITLE}` : BASE_TITLE;
    const desc = active?.blurb;
    if (desc) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', desc);
    }
    window.scrollTo(0, 0);
  }, [activeId]);

  const navigate = useCallback((id) => {
    if (id) {
      window.location.hash = id;
    } else {
      history.pushState(null, '', window.location.pathname);
      setActiveId(null);
    }
  }, []);

  const activeIndex = PARENTS.findIndex((p) => p.id === activeId);
  const active = activeIndex >= 0 ? PARENTS[activeIndex] : null;

  const handlePrev = useCallback(() => {
    const prev = (activeIndex - 1 + PARENTS.length) % PARENTS.length;
    navigate(PARENTS[prev].id);
  }, [activeIndex, navigate]);

  const handleNext = useCallback(() => {
    const next = (activeIndex + 1) % PARENTS.length;
    navigate(PARENTS[next].id);
  }, [activeIndex, navigate]);

  return (
    <div className="app">
      <Ambient />

      {active ? (
        <DetailPanel
          data={active}
          index={activeIndex}
          total={PARENTS.length}
          onClose={() => navigate(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      ) : (
        <div className="app__content">
          <Header isMobile={isMobile} />

          <div className="card-grid">
            {PARENTS.map((p, i) => (
              <ParentCard
                key={p.id}
                data={p}
                index={i}
                onOpen={() => navigate(p.id)}
                isMobile={isMobile}
              />
            ))}
          </div>

          <Footer isMobile={isMobile} />
        </div>
      )}
    </div>
  );
}
