export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__brand" href="#top">
          <span className="footer__name">ELEKTRO</span>
          <span className="footer__subtitle">USŁUGI ELEKTRYCZNE</span>
        </a>

        <nav className="footer__nav" aria-label="Nawigacja w stopce">
          <a href="#uslugi">Usługi</a>
          <a href="#realizacje">Realizacje</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <p className="footer__copyright">
          © {new Date().getFullYear()} ELEKTRO
        </p>
      </div>
    </footer>
  );
}
