const ICONS = {
  article: '○',
  site: '◇',
  video: '▷',
  book: '□',
};

export function ResourceIcon({ type }) {
  return (
    <span className="resource-icon">
      {ICONS[type] || '·'}
    </span>
  );
}
