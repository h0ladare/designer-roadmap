import { ResourceIcon } from './ResourceIcon';
import { ContributionCard } from './ContributionCard';

export function BranchItem({ branch, index, isOpen, onToggle, accent }) {
  return (
    <div className="branch-item">
      <div className="branch-item__header" onClick={onToggle}>
        <div className="branch-item__info">
          <div className="branch-item__title-row">
            <span className="branch-item__index" style={{ color: accent }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="branch-item__title">{branch.title}</h3>
          </div>
          <p className="branch-item__description">{branch.description}</p>
        </div>
        <div
          className="branch-item__toggle"
          style={{
            color: accent,
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
          }}
        >
          +
        </div>
      </div>

      {isOpen && (
        <div className="branch-item__content">
          {branch.resources.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="branch-item__resource"
              data-accent={accent}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = accent;
                e.currentTarget.style.paddingLeft = '8px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '';
                e.currentTarget.style.paddingLeft = '';
              }}
            >
              <ResourceIcon type={r.type} />
              <span className="branch-item__resource-title">{r.title}</span>
              <span className="branch-item__resource-type">{r.type}</span>
            </a>
          ))}

          {branch.contributions?.length > 0 && (
            <div className="branch-item__contributions">
              <div className="branch-item__contributions-label" style={{ color: accent }}>
                ◆ Where I've worked here
              </div>
              {branch.contributions.map((c, ci) => (
                <ContributionCard key={ci} contribution={c} accent={accent} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
