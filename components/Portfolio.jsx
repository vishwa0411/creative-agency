import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Luxury Brand Identity",
    category: "Branding & Design",
    image: "/images/brand-identity.jpg",
  },
  {
    number: "02",
    title: "Modern Web Experience",
    category: "Web Design",
    image: "/images/Modern Web Experience.avif",
  },
  {
    number: "03",
    title: "Creative Campaign",
    category: "Digital Marketing",
    image: "/images/Creative Campaign.png",
  },
  {
    number: "04",
    title: "Digital Product Design",
    category: "UI / UX Design",
    image: "/images/Digital Product Design.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-heading">
        <p className="section-tag">✦ SELECTED PROJECTS</p>

        <h2>
          Our Creative
          <br />
          <span>Portfolio.</span>
        </h2>

        <p>
          A collection of creative ideas transformed into
          meaningful digital experiences.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.number}>
            <div className="portfolio-image">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                sizes="(max-width: 600px) 100vw, 50vw"
              />

              <span>{project.number}</span>
            </div>

            <div className="portfolio-info">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>

              <span className="portfolio-arrow">↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}