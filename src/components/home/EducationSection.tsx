
import {
  GraduationCap,
  Code2,
} from "lucide-react";

import "./EducationSection.css";

const education = [
  {
    id: 1,
    title: "B.Tech — Electronics & Communication Engineering",
    institution: "Christ College of Engineering, Irinjalakuda",
    category: "UNDERGRADUATE DEGREE",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Full Stack Developer Program",
    institution: "IT Vedant, Bangalore",
    category: "PROFESSIONAL TRAINING",
    duration: "8-month program",
    icon: Code2,
  },
];

function EducationSection() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <div className="education-heading">
          <span className="section-eyebrow">MY BACKGROUND</span>

          <h2>
            Learning <span>foundations.</span>
          </h2>

          <p>
            The academic journey and learning experiences that
            helped shape my path into software development.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article className="education-card" key={item.id}>
                <div className="education-icon">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div className="education-content">
                  <span className="education-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.institution}</p>

                  {item.duration && (
                    <span className="education-duration">
                      {item.duration}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default EducationSection;
