
import {
  Code2,
  Lightbulb,
  Rocket,
  Compass,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

import "./AboutSection.css";

const highlights = [
  {
    icon: Code2,
    title: "What I build",
    description: "Full-stack applications, dashboards, APIs and digital products.",
  },
  {
    icon: Rocket,
    title: "What I enjoy",
    description: "Taking ideas from an initial concept to a working product.",
  },
  {
    icon: Compass,
    title: "Beyond development",
    description: "Travel, photography, sports, cooking and discovering new things.",
  },
];

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="section-heading">
          <p className="section-eyebrow">
            <span className="section-eyebrow-line" />
            ABOUT
          </p>

          <h2>
            A little more about <span>who I am</span>
          </h2>

          <p className="section-subtitle">
            The journey, the mindset and the things that keep me curious.
          </p>
        </div>

        <div className="about-main-card building-card">
          <div className="about-story">
            <h3>My journey so far</h3>

            <p>
              My journey into technology started with an engineering
              background in Electronics and Communication. Over time,
              my curiosity about software and how digital products work
              led me towards full-stack development.
            </p>

            <p>
              I started building my foundation in frontend and backend
              technologies, learning to work with React, JavaScript,
              Python, Django and databases. What began as an interest
              gradually became a career focused on building real-world
              applications.
            </p>

            <p>
              Today, I work on products in the cybersecurity and
              insurance technology space, contributing to applications
              that bring together user experiences, APIs, data and
              complex business workflows. I enjoy understanding the
              bigger picture, solving problems and seeing an idea
              become something people can actually use.
            </p>

            <p>
              I believe there is always something new to learn. Whether
              it is exploring a technology, improving an existing
              feature or experimenting with a new idea, I like staying
              curious and keeping myself challenged.
            </p>
          </div>

          <div className="about-details">

            <div className="about-detail-item">
              <div className="about-detail-icon">
                <MapPin size={19} />
              </div>

              <div>
                <h4>Based in</h4>
                <p>Kochi, Kerala, India</p>
              </div>
            </div>

            <div className="about-detail-item">
              <div className="about-detail-icon">
                <GraduationCap size={19} />
              </div>

              <div>
                <h4>Education</h4>
                <p>B.Tech in Electronics and Communication Engineering</p>
              </div>
            </div>

            <div className="about-detail-item">
              <div className="about-detail-icon">
                <BriefcaseBusiness size={19} />
              </div>

              <div>
                <h4>Professional focus</h4>
                <p>Full-stack development · Cybersecurity · SaaS products</p>
              </div>
            </div>

            <div className="about-detail-item">
              <div className="about-detail-icon">
                <Lightbulb size={19} />
              </div>

              <div>
                <h4>My mindset</h4>
                <p>Stay curious. Keep learning. Build meaningful things.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="about-highlight-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`about-highlight-card tilt-card tilt-card-${index + 1}`}
                key={item.title}
              >
                <div className="about-highlight-icon">
                  <Icon size={21} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="about-bottom-note">
          <span>ALWAYS BUILDING. ALWAYS EXPLORING.</span>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
