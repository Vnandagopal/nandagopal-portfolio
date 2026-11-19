
import {
    BriefcaseBusiness,
    Code2,
    ShieldCheck,
    Layers3,
    Database,
    ArrowUpRight,
} from "lucide-react";

import "./ExperienceSection.css";

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Risknox.ai",
        period: "November 2024 – Present",
        type: "Professional Experience",
        description:
            "Building and enhancing SaaS products across cybersecurity, risk management and insurance technology.",
        products: [
            {
                name: "Resolute Fortress",
                description: "Cybersecurity audit and risk management platform",
            },
            {
                name: "Resolute Compass",
                description: "Insurance technology and provider portal",
            },
        ],
        contributions: [
            {
                icon: Code2,
                title: "Frontend Development",
                description: "React, TypeScript, interactive dashboards and user workflows",
            },
            {
                icon: Layers3,
                title: "Backend Development",
                description: "Node.js, Express, Python, Django and REST APIs",
            },
            {
                icon: Database,
                title: "Architecture & Databases",
                description: "PostgreSQL, multi-tenancy and database integrations",
            },
            {
                icon: ShieldCheck,
                title: "Product Features",
                description: "Audit workflows, evidence management, vulnerability tracking and reporting",
            },
        ],
        technologies: [
            "React",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Express",
            "Python",
            "Django",
            "PostgreSQL",
        ],
    },
    {
        id: 2,
        role: "Full Stack Developer Intern",
        company: "7 Crore Technologies",
        period: "August 2023 – January 2024",
        type: "Internship",
        description:
            "Started my professional development journey by working on practical web application development.",
        contributions: [
            "Developed frontend features using HTML, CSS and JavaScript.",
            "Worked on backend development using Python and Django.",
            "Gained practical experience with SQL databases and application workflows.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Python", "Django", "SQL"],
    },
];

function ExperienceSection() {
    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">
                <div className="experience-heading">
                    <span className="section-eyebrow">WHERE I'VE WORKED</span>
                    <h2>
                        My professional <span>journey.</span>
                    </h2>
                    <p>
                        The experiences that have shaped my journey as a developer.
                    </p>
                </div>

                <div className="experience-timeline">
                    {experiences.map((experience, index) => (
                        <article
                            className={`experience-entry ${index === 0 ? "featured-experience" : "internship-experience"
                                }`}
                            key={experience.id}
                        >
                            <div className="experience-marker">
                                <div className="experience-marker-icon">
                                    {index === 0 ? (
                                        <BriefcaseBusiness size={19} />
                                    ) : (
                                        <Code2 size={19} />
                                    )}
                                </div>
                            </div>

                            <div className="experience-card">
                                <div className="experience-card-top">
                                    <span className="experience-type">{experience.type}</span>
                                    <span className="experience-period">{experience.period}</span>
                                </div>

                                <h3>{experience.role}</h3>

                                <div className="experience-company">
                                    {experience.company}
                                    {index === 0 && (
                                        <span className="current-role-dot" />
                                    )}
                                </div>

                                <p className="experience-description">
                                    {experience.description}
                                </p>

                                {index === 0 && experience.products && (
                                    <div className="experience-products">
                                        <h4>PRODUCTS</h4>
                                        <div className="experience-product-grid">
                                            {experience.products.map((product) => (
                                                <div className="experience-product" key={product.name}>
                                                    <div className="experience-product-heading">
                                                        <ShieldCheck size={16} />
                                                        <strong>{product.name}</strong>
                                                        <ArrowUpRight size={14} />
                                                    </div>
                                                    <p>{product.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}


                                <div className="experience-contributions">
                                    <h4>KEY CONTRIBUTIONS</h4>

                                    {index === 0 ? (
                                        <div className="experience-contribution-grid">
                                            {experience.contributions.map((item) => {
                                                if (typeof item === "string") {
                                                    return null;
                                                }

                                                const Icon = item.icon;

                                                return (
                                                    <div
                                                        className="experience-contribution"
                                                        key={item.title}
                                                    >
                                                        <Icon size={17} />
                                                        <div>
                                                            <strong>{item.title}</strong>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <ul>
                                            {experience.contributions.map((item) =>
                                                typeof item === "string" ? (
                                                    <li key={item}>{item}</li>
                                                ) : null
                                            )}
                                        </ul>
                                    )}
                                </div>

                                <div className="experience-technologies">
                                    {experience.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
