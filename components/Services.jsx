import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Grow your brand online with creative marketing strategies, social media and SEO.",
    image: "/images/digital.jpg",
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "Build a unique brand identity with creative logos, packaging and visual designs.",
    image: "/images/branding.webp",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Create modern, responsive and user-friendly websites for your business.",
    image: "/images/web-development.jpg",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Design beautiful and easy-to-use digital experiences for your customers.",
    image: "/images/ui-ux-img.avif",
  },
];

export default function Service() {
  return (
    <section className="services" id="services">
      <div className="services-heading">
        <p className="section-tag">✦ WHAT WE DO</p>

        <h2>
          Our Creative <span>Services.</span>
        </h2>

        <p>We bring your ideas to life with creativity and technology</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>

            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={350}
              sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
              className="service-image"
            />

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact">Learn More ↗</a>
          </div>
        ))}
      </div>
    </section>
  );
}