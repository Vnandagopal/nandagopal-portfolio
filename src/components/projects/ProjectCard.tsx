
import type { Project } from "../../types/project";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

function FortressPreview() {
  return (
    <div className="dashboard-preview fortress-preview">
      <div className="dashboard-window-bar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>fortress.risknox.ai / admin</span>
        <b>FORTRESS</b>
      </div>

      <div className="fortress-layout">
        <aside className="fortress-sidebar">
          <div className="fortress-brand">
            <span>F</span>
            <strong>Fortress</strong>
          </div>

          <small>PLATFORM</small>

          <div className="fortress-nav active">
            <i>⌂</i>
            <span>Home</span>
          </div>
          <div className="fortress-nav">
            <i>◇</i>
            <span>Risk Management</span>
          </div>
          <div className="fortress-nav">
            <i>◈</i>
            <span>Controls & Compliance</span>
          </div>
          <div className="fortress-nav">
            <i>▤</i>
            <span>Audits & Assessments</span>
          </div>
          <div className="fortress-nav">
            <i>⌁</i>
            <span>Reporting & Analytics</span>
          </div>
        </aside>

        <main className="fortress-main">
          <div className="fortress-topbar">
            <span>ADMIN HOME</span>
            <div>
              <i>⌕</i>
              <i>♧</i>
              <b>A</b>
            </div>
          </div>

          <div className="fortress-welcome">
            <div>
              <small>OVERVIEW / ADMIN HOME</small>
              <h4>Welcome back, RiskNox <span>✦</span></h4>
              <p>Your security workspace at a glance</p>
            </div>
            <span className="fortress-invite">+ Invite User</span>
          </div>

          <div className="fortress-metrics">
            <div className="fortress-metric">
              <span>TEAM MEMBERS</span>
              <strong>4</strong>
              <i>♙</i>
              <small>4 seats remaining</small>
            </div>
            <div className="fortress-metric">
              <span>ACTIVE ROLES</span>
              <strong>0</strong>
              <i>◇</i>
              <small>Role assignments</small>
            </div>
            <div className="fortress-metric">
              <span>FRAMEWORKS</span>
              <strong>3</strong>
              <i>▣</i>
              <small>Frameworks active</small>
            </div>
            <div className="fortress-metric">
              <span>SETUP PROGRESS</span>
              <strong>67%</strong>
              <i>⌁</i>
              <small>2 of 3 steps done</small>
            </div>
          </div>

          <div className="fortress-bottom-panels">
            <div className="fortress-panel">
              <div className="fortress-panel-heading">
                <strong>Setup checklist</strong>
                <span>2/3 COMPLETE</span>
              </div>
              <div className="fortress-progress">
                <span />
              </div>
              <div className="fortress-check-row">
                <i>✓</i>
                <span>Set up your workspace</span>
                <b>DONE</b>
              </div>
              <div className="fortress-check-row">
                <i>✓</i>
                <span>Invite your team</span>
                <b>DONE</b>
              </div>
              <div className="fortress-check-row">
                <i>○</i>
                <span>Activate compliance frameworks</span>
                <b>SET UP</b>
              </div>
            </div>

            <div className="fortress-panel fortress-team-panel">
              <div className="fortress-panel-heading">
                <strong>Team members</strong>
                <span>MANAGE ALL ↗</span>
              </div>
              <div className="fortress-team-member">
                <i>A</i>
                <div>
                  <strong>RiskNox Testing User</strong>
                  <small>admin@risknox.ai</small>
                </div>
                <b>ADMIN</b>
              </div>
              <div className="fortress-team-member">
                <i>U</i>
                <div>
                  <strong>Workspace member</strong>
                  <small>team@risknox.ai</small>
                </div>
                <b>MEMBER</b>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function CompassPreview() {
  return (
    <div className="dashboard-preview compass-preview">
      <div className="dashboard-window-bar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>compass.risknox.ai / dashboard</span>
        <b>COMPASS</b>
      </div>

      <div className="compass-dashboard">
        <div className="compass-topbar">
          <div>
            <small>PROVIDER WORKSPACE</small>
            <strong>Cyber Insurance Dashboard</strong>
          </div>
          <span className="compass-profile">A</span>
        </div>

        <div className="compass-metrics">
          <div className="compass-metric">
            <span>NEW LEADS</span>
            <strong>13</strong>
            <i className="compass-orange">↗</i>
          </div>
          <div className="compass-metric">
            <span>IN PROGRESS</span>
            <strong>04</strong>
            <i className="compass-yellow">◷</i>
          </div>
          <div className="compass-metric">
            <span>TOTAL VALUE</span>
            <strong>₹1454k</strong>
            <i className="compass-red">₹</i>
          </div>
        </div>

        <div className="compass-analytics">
          <div className="compass-chart-panel compass-status-panel">
            <div className="compass-panel-title">
              <strong>Lead status</strong>
              <span>OVERVIEW</span>
            </div>

            <div className="compass-donut-area">
              <div className="compass-donut">
                <div>
                  <strong>21</strong>
                  <small>Total leads</small>
                </div>
              </div>
              <div className="compass-legend">
                <span><i className="legend-new" /> New <b>62%</b></span>
                <span><i className="legend-review" /> Review <b>19%</b></span>
                <span><i className="legend-approved" /> Approved <b>14%</b></span>
                <span><i className="legend-other" /> Other <b>5%</b></span>
              </div>
            </div>
          </div>

          <div className="compass-chart-panel compass-trend-panel">
            <div className="compass-panel-title">
              <strong>Premium trend</strong>
              <span>LAST 7 DAYS</span>
            </div>

            <div className="compass-chart-legend">
              <span><i className="trend-orange" /> Premium</span>
              <span><i className="trend-green" /> Leads</span>
            </div>

            <div className="compass-line-chart">
              <div className="chart-grid-lines">
                <i />
                <i />
                <i />
                <i />
              </div>
              <svg viewBox="0 0 420 150" preserveAspectRatio="none" aria-label="Illustrative premium and lead trend">
                <defs>
                  <linearGradient id="premiumFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff5a1f" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 112 C45 108 65 110 100 108 S165 115 205 107 S270 110 305 102 S350 18 380 36 S400 93 420 106 L420 150 L0 150 Z"
                  fill="url(#premiumFill)"
                />
                <path
                  d="M0 112 C45 108 65 110 100 108 S165 115 205 107 S270 110 305 102 S350 18 380 36 S400 93 420 106"
                  fill="none"
                  stroke="#ff5a1f"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 124 C60 121 90 122 135 120 S220 123 270 118 S345 75 375 84 S400 117 420 121"
                  fill="none"
                  stroke="#00bd91"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="380" cy="36" r="4" fill="#ff5a1f" />
                <circle cx="375" cy="84" r="4" fill="#00bd91" />
              </svg>
            </div>

            <div className="compass-chart-labels">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>
          </div>
        </div>

        <div className="compass-lead-strip">
          <div>
            <strong>Recent lead activity</strong>
            <span>RECENT APPLICATIONS</span>
          </div>
          <div className="compass-lead-pills">
            <span>New <b>08</b></span>
            <span>In review <b>04</b></span>
            <span>Approved <b>09</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <div className={`project-preview project-preview-${project.preview}`}>
        {project.preview === "fortress" ? (
          <FortressPreview />
        ) : (
          <CompassPreview />
        )}
      </div>

      <div className="project-card-content">
        <div className="project-card-meta">
          <span className="project-category">{project.category}</span>
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3>{project.name}</h3>
        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
          {project.technologies.length > 5 && (
            <span>+{project.technologies.length - 5}</span>
          )}
        </div>

        <button
          className="project-details-button"
          onClick={() => onViewDetails(project)}
          type="button"
        >
          Explore project <span>↗</span>
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
