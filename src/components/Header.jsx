export function Header({ isMobile }) {
  return (
    <header className="header" style={{ marginBottom: isMobile ? '40px' : '64px' }}>
      <div className="header__version">Personal reference · v0.1</div>
      <h1
        className="header__title"
        style={{ fontSize: isMobile ? '40px' : undefined }}
      >
        Product design, end to end.
      </h1>
      <p
        className="header__subtitle"
        style={{ fontSize: isMobile ? '15px' : '17px' }}
      >
        A working map of the skills, frameworks, and resources I lean on. Five
        disciplines that have anchored product design for a decade, plus two —
        Design Engineer and AI Designer — that the role is becoming.
      </p>
    </header>
  );
}
