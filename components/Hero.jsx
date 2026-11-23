import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-tag">✦ CREATIVE DIGITAL AGENCY</p>

        <h1>
          Crafting
          <br />
          <span>Exceptional</span>
          <br />
          Digital Experiences.
        </h1>

        <p className="hero-description">
          We transform bold ideas into timeless digital experiences
          through creative strategy, innovative design and technology.
        </p>

        <div className="hero-buttons">

          <a href="#portfolio" className="primary-btn">
            Discover Our Work ↗
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Talk
          </a>

        </div>

        <div className="hero-bottom-text">
          <span>STRATEGY</span>
          <span>CREATIVITY</span>
          <span>INNOVATION</span>
        </div>

      </div>

      <div className="hero-image">

        <Image
          src="/images/hero1.avif"
          alt="Premium laptop workspace"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="image-label">
          <span>CREATIVE EXCELLENCE</span>
          <p>Designed to Inspire.</p>
        </div>

        <div className="floating-card">
          <h2>50+</h2>
          <p>Projects Delivered</p>
        </div>

      </div>

    </section>
  );
}