const services = [
  {
    title: "Instalacje elektryczne",
    description: "Nowe instalacje, modernizacje i rozbudowa.",
    icon: "M13 2 3 14h8l-1 8 11-12h-8l1-8Z",
  },
  {
    title: "Montaż i wymiana gniazdek",
    description: "Bezpieczne i estetyczne rozwiązania.",
    icon: "M7 3v5m10-5v5M5 8h14v3a7 7 0 0 1-14 0V8Zm7 10v4",
  },
  {
    title: "Oświetlenie",
    description: "Montaż, wymiana, oświetlenie LED i doradztwo.",
    icon: "M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 4H9c0-2 0-3-1-4Z",
  },
  {
    title: "Rozdzielnice elektryczne",
    description: "Montaż i modernizacja rozdzielnic.",
    icon: "M4 3h16v18H4V3Zm4 4h2v4H8V7Zm6 0h2v4h-2V7ZM8 15h2m4 0h2M8 18h2m4 0h2",
  },
  {
    title: "Naprawy usterek",
    description: "Diagnostyka i usuwanie awarii.",
    icon: "M14 6a5 5 0 0 0-6 6l-5 5a2 2 0 0 0 4 4l5-5a5 5 0 0 0 6-6l-3 3-4-4 3-3Z",
  },
  {
    title: "Inteligentny dom",
    description: "Nowoczesne rozwiązania i automatyzacja.",
    icon: "M3 10 12 3l9 7M5 9v12h14V9M9 21v-7h6v7M9 10a5 5 0 0 1 6 0m-4 2a2 2 0 0 1 2 0",
  },
  {
    title: "Pomiary elektryczne",
    description: "Pomiary instalacji i okresowe przeglądy.",
    icon: "M6 3h12v18H6V3Zm3 3h6v5H9V6Zm0 9h1m4 0h1m-6 3h1m4 0h1",
  },
];

export default function Services() {
  return (
    <section className="services" id="uslugi" aria-labelledby="services-title">
      <div className="services__container">
        <div className="services__heading">
          <div>
            <p className="services__eyebrow">USŁUGI ELEKTRYCZNE</p>
            <h2 id="services-title">Zakres usług</h2>
          </div>

          <p className="services__intro">
            Kompleksowe usługi elektryczne dla domów, mieszkań i firm.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="services__card" key={service.title}>
              <span className="services__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={service.icon} />
                </svg>
              </span>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
