
import {
  ShieldCheck,
  BriefcaseBusiness,
  Layers3,
} from "lucide-react";

import "./HeroSection.css";

function HeroSection() {
  return (
    <main className="hero-section" id="home">
      

      <div className="hero-layout">
        <div className="hero-content">

          {/* Availability card */}
          <div className="availability-card">
            <span className="availability-dot" />
            <span className="availability-line">—</span>
            <span>AVAILABLE FOR NEW ROLES</span>
          </div>

          {/* Main headline */}
          <section className="hero-heading-card">
            <h1>
              Building Digital
              <br />
              <span>Experiences</span>
              <br />
              With Code & Curiosity.
            </h1>
          </section>

          {/* Introduction */}
          <section className="hero-description-card">
            <p>
              Hey, I'm Nandagopal — a Full Stack Developer building
              digital products across cybersecurity and insurance
              technology. I love solving problems, exploring new
              technologies and turning ideas into meaningful experiences.
            </p>
          </section>

          {/* Action buttons */}
          <section className="hero-action-card">
            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Get in touch ↗
              </a>

              <a href="#work" className="secondary-button">
                View my work ↗
              </a>
            </div>
          </section>

          {/* Personal highlights */}
          <section className="hero-highlights-card">
            <div className="highlight-item">
              <div className="highlight-icon">
                <BriefcaseBusiness size={19} />
              </div>
              <div>
                <h2>Real-world products</h2>
                <p>Building software for real business needs</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Layers3 size={19} />
              </div>
              <div>
                <h2>End-to-end development</h2>
                <p>From interfaces to APIs and databases</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <ShieldCheck size={19} />
              </div>
              <div>
                <h2>Cybersecurity & insurance</h2>
                <p>Experience across specialised SaaS products</p>
              </div>
            </div>
          </section>

          {/* Personal interests */}
          <div className="hero-interests">
            <span>DEVELOP</span>
            <span>EXPLORE</span>
            <span>LEARN</span>
            <span>CREATE</span>
          </div>

        </div>
      </div>

      <div className="hero-bottom-note">
        CODE. CREATE. REPEAT.
      </div>
    </main>
  );
}

export default HeroSection;
