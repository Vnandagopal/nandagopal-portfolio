
import "./SkillSection.css";

const coreSkills = [
  { name: "React", category: "Frontend", rotation: "-4deg" },
  { name: "JavaScript", category: "Language", rotation: "3deg" },
  { name: "TypeScript", category: "Language", rotation: "-2deg" },
  { name: "Python", category: "Language", rotation: "4deg" },
  { name: "Node.js", category: "Backend", rotation: "-3deg" },
  { name: "Django", category: "Backend", rotation: "2deg" },
  { name: "Express.js", category: "Backend", rotation: "-4deg" },
  { name: "PostgreSQL", category: "Database", rotation: "3deg" },
  { name: "Figma", category: "UI Design", rotation: "-3deg" },
  { name: "Framer", category: "Design & Prototyping", rotation: "2deg" },
  
  
];

const additionalSkills = [
  "HTML5",
  "CSS3",
  "REST APIs",
  
  "GitHub",
  "Vite",
  "SQL",
  "Django REST Framework",
  "React Hooks",
  "Multi-tenant Architecture",
  "Authentication",
  "JWT",
];

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Section heading */}
        <div className="skills-heading">
          <span className="section-eyebrow">MY TOOLKIT</span>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p>
            A collection of tools and technologies I use to build,
            develop and bring ideas to life.
          </p>
        </div>

        {/* Floating technology blocks */}
        <div className="skills-cloud">

          <div className="skills-core">
            {coreSkills.map((skill, index) => (
              <div
                className={`skill-block skill-block-${index + 1}`}
                key={skill.name}
                style={
                  {
                    "--skill-rotation": skill.rotation,
                  } as React.CSSProperties
                }
              >
                <span className="skill-block-category">
                  {skill.category}
                </span>

                <strong>{skill.name}</strong>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div className="additional-skills">

            <span className="additional-skills-label">
              ALSO WORKED WITH
            </span>

            <div className="additional-skills-list">
              {additionalSkills.map((skill) => (
                <span
                  className="additional-skill-tag"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Closing note */}
        <div className="skills-bottom-note">
          <span className="skills-note-dot" />
          Always learning. Always building.
        </div>

      </div>
    </section>
  );
}

export default SkillsSection;
