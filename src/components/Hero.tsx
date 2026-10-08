const Hero = () => {
  return (
    <main id="home" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span></span>
            BEZPIECZNIE • PROFESJONALNIE • NA CZAS
            <span></span>
          </p>

          <h1 className="hero__title">
            Profesjonalne
            <strong> usługi elektryczne</strong>
          </h1>

          <p className="hero__subtitle">Dla domu, mieszkań i firm</p>

          <p className="hero__area">
            Na terenie całego województwa zachodniopomorskiego i okolic.
          </p>

          <div className="hero__benefits">
            <div className="hero__benefit">
              <span className="hero__benefit-icon">✓</span>
              <div>
                <strong>Bezpieczeństwo</strong>
                <p>Zgodnie z normami</p>
              </div>
            </div>

            <div className="hero__benefit">
              <span className="hero__benefit-icon">⚡</span>
              <div>
                <strong>Terminowość</strong>
                <p>Szybki dojazd</p>
              </div>
            </div>

            <div className="hero__benefit">
              <span className="hero__benefit-icon">●</span>
              <div>
                <strong>Indywidualne podejście</strong>
                <p>Doradztwo i najlepsze rozwiązania</p>
              </div>
            </div>
          </div>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Bezpłatna wycena
              <span>→</span>
            </a>

            <a href="#services" className="btn btn--secondary">
              Zobacz usługi
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-placeholder">
            <span>⚡</span>
            <p>Zdjęcie elektryka</p>
          </div>

          <div className="hero__location">
            <span className="hero__location-icon">●</span>

            <div>
              <strong>Obszar działania</strong>
              <p>
                Szczecin • Kołobrzeg • Koszalin • Gryfice • Kamień Pomorski •
                Wolin i okolice
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
