import React from "react";
import { projects, Project } from "@/utils/project-info";
// ─── Icons ───────────────────────────────────────────────────────────────────
const ExternalLinkIcon = () => (
  <svg
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2.2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// ─── Single Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project }: { project: Project }) => {
  const { name, description, tech, liveUrl, githubUrl, status } = project;

  return (
    <div className="project-card">
      <div className="card-top">
        <h3 className="project-name">{name}</h3>
        {status && <span className="project-status">{status}</span>}
      </div>

      <p className="project-desc">{description}</p>

      <div className="tech-stack">
        {tech.map((t) => (
          <span key={t} className="tech-chip">
            {t}
          </span>
        ))}
      </div>

      <div className="card-actions">
        {liveUrl && (
          <a
            className="btn btn-live"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon />
            Live
          </a>
        )}
        {githubUrl && (
          <a
            className="btn btn-github"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────
const Projects = () => (
  <>
    <style>{`
      .projects-section {
        padding: 2rem 0;
        font-family: 'Outfit', 'Segoe UI', sans-serif;
      }

      .section-label {
        font-family: 'DM Mono', 'Courier New', monospace;
        font-size: 11px;
        letter-spacing: 0.2em;
        color: #4ade80;
        text-transform: uppercase;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .section-label::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 1px;
        background: #4ade80;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.25rem;
      }

      /* ── Card ── */
      .project-card {
        background: #181818;
        border: 1px solid #2a2a2a;
        border-radius: 14px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: relative;
        overflow: hidden;
        transition: border-color 0.2s ease, transform 0.2s ease;
      }
      .project-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, #4ade80, transparent);
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      .project-card:hover {
        border-color: #3a3a3a;
        transform: translateY(-3px);
      }
      .project-card:hover::before {
        opacity: 1;
      }

      /* ── Card top row ── */
      .card-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .project-status {
        font-family: 'DM Mono', monospace;
        font-size: 10px;
        letter-spacing: 0.1em;
        padding: 3px 9px;
        border-radius: 20px;
        background: #1a2e1a;
        color: #4ade80;
        border: 1px solid #2a4a2a;
      }

      /* ── Text ── */
      .project-name {
        font-size: 17px;
        font-weight: 600;
        color: #f0f0f0;
        line-height: 1.3;
        margin: 0;
      }
      .project-desc {
        font-size: 13.5px;
        color: #888;
        line-height: 1.65;
        flex: 1;
        margin: 0;
      }

      /* ── Tech chips ── */
      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .tech-chip {
        font-family: 'DM Mono', monospace;
        font-size: 10.5px;
        color: #aaa;
        background: #222;
        border: 1px solid #2e2e2e;
        border-radius: 6px;
        padding: 3px 8px;
        letter-spacing: 0.03em;
      }

      /* ── Action buttons ── */
      .card-actions {
        display: flex;
        gap: 8px;
        padding-top: 0.75rem;
        border-top: 1px solid #222;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        font-family: 'Outfit', sans-serif;
        font-size: 12.5px;
        font-weight: 500;
        border-radius: 8px;
        padding: 7px 13px;
        cursor: pointer;
        text-decoration: none;
        transition: background 0.15s, color 0.15s;
        flex: 1;
        border: none;
      }
      .btn-live {
        background: #4ade80;
        color: #0a1a0a;
      }
      .btn-live:hover {
        background: #6aed93;
      }
      .btn-github {
        background: #222;
        color: #bbb;
        border: 1px solid #2e2e2e;
      }
      .btn-github:hover {
        background: #2a2a2a;
        color: #eee;
      }
    `}</style>

    <section className="projects-section">
      <div className="section-label">Projects</div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  </>
);

export default Projects;
