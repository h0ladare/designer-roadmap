export function Footer({ isMobile }) {
  return (
    <footer
      className="footer"
      style={{ marginTop: isMobile ? '48px' : '72px' }}
    >
      Inspired by{' '}
      <a
        href="https://product-design-roadmap.com"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        Anastasia Prokhorova's product design roadmap
      </a>
      . Extended for 2026.
    </footer>
  );
}
