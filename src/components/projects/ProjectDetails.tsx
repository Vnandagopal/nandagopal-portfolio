
import { X, ArrowUpRight, Layers3, Code2, Database } from "lucide-react";

import type { Project } from "../../types/project";
import "./ProjectDetails.css";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <div className="project-details-overlay" onClick={onClose}>
      <div
        className="project-details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-details-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={21} />
        </button>

        <div className="project-details-header">
          <span className="project-details-category">
            {project.category}
          </span>

          <h2 id="project-details-title">{project.name}</h2>

          <h3>{project.subtitle}</h3>

          <p>{project.description}</p>
        </div>

        <div className="project-details-body">
          <section className="project-details-section">
            <div className="project-details-section-heading">
              <Layers3 size={19} />
              <h4>Product modules</h4>
            </div>

            <div className="project-module-grid">
              {project.modules.map((module, index) => (
                <article className="project-module" key={module.title}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h5>{module.title}</h5>
                  <p>{module.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="project-details-section">
            <div className="project-details-section-heading">
              <Code2 size={19} />
              <h4>My contributions</h4>
            </div>

            <ul className="project-contributions">
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </section>

          <section className="project-details-section">
            <div className="project-details-section-heading">
              <Database size={19} />
              <h4>Architecture & engineering</h4>
            </div>

            <p className="project-architecture">
              {project.architecture}
            </p>
          </section>

          <section className="project-details-section">
            <div className="project-details-section-heading">
              <Code2 size={19} />
              <h4>Technology stack</h4>
            </div>

            <div className="project-details-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </section>
        </div>

        <div className="project-details-footer">
          <span>Professional experience · Risknox.ai</span>
          <span>
            <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
