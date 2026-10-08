const contact = {
  phone: "",
  email: "",
};

const cities = [
  "Kamień Pomorski",
  "Wolin",
  "Gryfice",
  "Szczecin",
  "Kołobrzeg",
  "Koszalin",
  "Pobierowo",
];

export default function Contact() {
  const phoneHref = contact.phone.replace(/[^\d+]/g, "");

  return (
    <section className="contact" id="kontakt" aria-labelledby="contact-title">
      <div className="contact__container">
        <div className="contact__details">
          <p className="contact__eyebrow">KONTAKT</p>

          <h2 id="contact-title">
            Porozmawiajmy
            <br />o Twojej instalacji
          </h2>

          <p className="contact__intro">
            Potrzebujesz nowej instalacji, montażu oświetlenia lub pomocy z
            usterką? Skontaktuj się, aby ustalić zakres prac i termin.
          </p>

          <div className="contact__links">
            {contact.phone && (
              <a className="contact__link" href={`tel:${phoneHref}`}>
                <span className="contact__link-label">Telefon</span>
                <span className="contact__link-value">{contact.phone}</span>
              </a>
            )}

            {contact.email && (
              <a className="contact__link" href={`mailto:${contact.email}`}>
                <span className="contact__link-label">E-mail</span>
                <span className="contact__link-value">{contact.email}</span>
              </a>
            )}
          </div>

          <div className="contact__area">
            <h3>Obszar działania</h3>

            <p>
              Województwo zachodniopomorskie i okolice. Dojazd oraz termin
              ustalamy indywidualnie.
            </p>

            <ul className="contact__cities">
              {cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="contact__map">
          <iframe
            title="Mapa województwa zachodniopomorskiego — obszar działania"
            src="https://maps.google.com/maps?q=wojew%C3%B3dztwo%20zachodniopomorskie%2C%20Polska&hl=pl&z=8&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="contact__map-caption">
            <span className="contact__map-dot" aria-hidden="true" />
            Zachodniopomorskie i okolice
          </div>
        </div>
      </div>
    </section>
  );
}
