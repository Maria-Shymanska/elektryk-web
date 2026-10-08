type Realization = {
  id: number;
  title: string;
  before: string;
  after: string;
};

const realizations: Realization[] = [
  {
    id: 1,
    title: "Realizacja 01",
    before: "",
    after: "",
  },
  {
    id: 2,
    title: "Realizacja 02",
    before: "",
    after: "",
  },
];

function ProjectPhoto({
  src,
  label,
  title,
}: {
  src: string;
  label: string;
  title: string;
}) {
  return (
    <div className="realizations__photo">
      {src ? (
        <img
          src={src}
          alt={`${title} — ${label.toLowerCase()}`}
          loading="lazy"
          width={800}
          height={600}
        />
      ) : (
        <div className="realizations__placeholder">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span>Zdjęcie wkrótce</span>
        </div>
      )}

      <span
        className={`realizations__label ${
          label === "Po" ? "realizations__label--after" : ""
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function Realizations() {
  return (
    <section
      className="realizations"
      id="realizacje"
      aria-labelledby="realizations-title"
    >
      <div className="realizations__container">
        <div className="realizations__heading">
          <p className="realizations__eyebrow">EFEKTY PRACY</p>
          <h2 id="realizations-title">Realizacje — przed i po</h2>
          <p className="realizations__intro">
            Zobacz zmiany i efekt wykonanych prac elektrycznych.
          </p>
        </div>

        <div className="realizations__grid">
          {realizations.map((project) => (
            <article className="realizations__card" key={project.id}>
              <h3>{project.title}</h3>

              <div className="realizations__comparison">
                <ProjectPhoto
                  src={project.before}
                  label="Przed"
                  title={project.title}
                />
                <ProjectPhoto
                  src={project.after}
                  label="Po"
                  title={project.title}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
