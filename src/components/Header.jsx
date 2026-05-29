export function Header({ isMobile }) {
  return (
    <header className="header" style={{ marginBottom: isMobile ? '40px' : '72px' }}>
      <h1
        className="header__title"
        style={{ fontSize: isMobile ? '40px' : undefined }}
      >
        Product design and what comes next.
      </h1>
      <p
        className="header__subtitle"
        style={{ fontSize: isMobile ? '16px' : '19px' }}
      >
        A working map of the skills, frameworks, and resources I lean on. Five
        disciplines that have anchored product design for a decade, plus two
        the role is becoming: Design Engineer and AI Designer.
      </p>
    </header>
  );
}
