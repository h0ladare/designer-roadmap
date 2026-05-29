export function ContributionCard({ contribution, accent }) {
  return (
    <div
      className="contribution-card"
      style={{
        background: `${accent}0a`,
        borderColor: `${accent}22`,
      }}
    >
      <div className="contribution-card__header">
        <div className="contribution-card__title">
          {contribution.title}
        </div>
        <div className="contribution-card__context" style={{ color: accent }}>
          {contribution.context} · {contribution.year}
        </div>
      </div>
      <div className="contribution-card__summary">
        {contribution.summary}
      </div>
    </div>
  );
}
