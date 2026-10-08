const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="logo">
          <img
            src="/logo-elektro-header.svg"
            alt="Elektro"
            className="logo__icon"
          />

          <div className="logo__text">
            <strong>ELEKTRO</strong>
            <span>USŁUGI ELEKTRYCZNE</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#home">Strona główna</a>
          <a href="#services">Usługi</a>
          <a href="#projects">Realizacje</a>
          <a href="#about">O mnie</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <a href="tel:+48XXXXXXXXX" className="header__phone">
          <span>☎</span>
          Zadzwoń
        </a>
      </div>
    </header>
  );
};

export default Header;
