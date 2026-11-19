
import { useState } from "react";

import type { Project } from "../../types/project";
import { projects } from "../../data/projects";

import ProjectCard from "../projects/ProjectCard";
import ProjectDetails from "../projects/ProjectDetails";

import "./ProjectsSection.css";
import { createPortal } from "react-dom";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="projects-section" id="work">
      <div className="projects-container">

        <div className="projects-heading">
          <span className="section-eyebrow">SELECTED WORK</span>

          <h2>
            Products I've <span>worked on.</span>
          </h2>

          <p>
            Real-world products, engineering challenges and solutions
            I've contributed to along the way.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

        <div className="projects-future-note">
          <div className="projects-future-icon">+</div>

          <div>
            <h3>More things are in the works.</h3>
            <p>
              Personal projects, experiments and new ideas will find
              their place here as I continue building.
            </p>
          </div>

          <span className="projects-future-label">COMING NEXT</span>
        </div>

      </div>

      {selectedProject &&
  createPortal(
    <ProjectDetails
      project={selectedProject}
      onClose={() => setSelectedProject(null)}
    />,
    document.body
  )}
    </section>
  );
}

export default ProjectsSection;
