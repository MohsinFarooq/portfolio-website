"use client";
import { projects } from "@/utils/project-info";

const ExternalLinkIcon = () => (
  <svg
    width="13"
    height="13"
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
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2.2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

type ProjectListProps = {
  /** Show only the first N projects (most recent first). Omit to show all. */
  limit?: number;
};

export default function ProjectList({ limit }: ProjectListProps) {
  const items = limit ? projects.slice(0, limit) : projects;

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-white/5 bg-dark-cards_200 p-6 text-center text-sm text-gray-400">
        More projects on the way.
      </div>
    );
  }

  return (
    <ul className="divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 bg-dark-cards_200">
      {items.map(({ id, name, description, tech, liveUrl, githubUrl, status }) => (
        <li key={id} className="group relative">
          <span className="absolute inset-y-0 left-0 w-[2px] bg-green-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="flex flex-col gap-2 p-5 transition-colors duration-200 hover:bg-white/[0.025]">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white transition-colors duration-200 group-hover:text-green-400">
                {name}
              </h3>
              <div className="flex shrink-0 items-center gap-3">
                {status && (
                  <span className="font-mono text-[10px] tracking-widest text-green-400">
                    {status}
                  </span>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} live site`}
                    className="text-gray-500 transition-colors hover:text-green-400"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} source on GitHub`}
                    className="text-gray-500 transition-colors hover:text-white"
                  >
                    <GitHubIcon />
                  </a>
                )}
              </div>
            </div>
            <p className="line-clamp-1 text-sm leading-relaxed text-gray-400">
              {description}
            </p>
            <p className="font-mono text-[11px] tracking-wide text-gray-500">
              {tech.slice(0, 4).join("  ·  ")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
