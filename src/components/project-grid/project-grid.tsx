"use client";
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
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-dark-cards_200 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/10 overflow-hidden">
      {/* green top line on hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-green-400 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      {/* Name + status */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-white leading-snug">
          {name}
        </h3>
        {status && (
          <span className="shrink-0 rounded-full border border-green-900 bg-green-950 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-green-400">
            {status}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="flex-1 text-sm leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/5 bg-dark-200 px-2 py-0.5 font-mono text-[10.5px] tracking-wide text-gray-400"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 border-t border-white/5 pt-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-400 px-3 py-1.5 text-xs font-medium text-black transition-colors hover:bg-green-300"
          >
            <ExternalLinkIcon />
            Live
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/5 bg-dark-200 px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

// ─── Grid ─────────────────────────────────────────────────────────────────────
const ProjectsGrid = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectsGrid;
