import React from 'react';
import { ArrowRight, Cpu, CheckCircle2 } from 'lucide-react';
import { ProjectDetailData, RoutePath } from '../types';
import { RFIDVisual } from './RFIDVisual';
import { LaserVisual } from './LaserVisual';

interface ProjectCardProps {
  project: ProjectDetailData;
  onNavigate: (path: RoutePath) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onNavigate }) => {
  const projectPath: RoutePath =
    project.slug === 'rfid-door-lock'
      ? '/projects/rfid-door-lock'
      : '/projects/laser-security';

  return (
    <article
      id={`project-card-${project.slug}`}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] overflow-hidden hover:border-[var(--border-accent)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Visual illustration banner */}
      <div className="p-4 sm:p-6 bg-[var(--surface)]/50 border-b border-[var(--border)] relative overflow-hidden">
        {project.slug === 'rfid-door-lock' ? <RFIDVisual /> : <LaserVisual />}
      </div>

      {/* Content body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Metadata row */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded text-xs font-mono bg-[var(--surface-hover)] text-[var(--accent)] border border-[var(--border)]">
              <Cpu className="w-3 h-3" />
              <span>{project.tag}</span>
            </span>
            <span className="text-xs font-mono font-bold text-[var(--text-muted)]">
              PROJECT #{project.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-3">
            {project.title}
          </h3>

          {/* Short description */}
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
            &ldquo;{project.shortDescription}&rdquo;
          </p>

          {/* Features list */}
          <div className="space-y-1.5 mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Key Features
            </div>
            {project.features.map((feat) => (
              <div key={feat} className="flex items-center space-x-2 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
              Technology / Components
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[var(--surface-hover)] text-[var(--text-primary)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
          <button
            id={`btn-view-${project.slug}`}
            onClick={() => onNavigate(projectPath)}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--surface-hover)] hover:bg-[var(--accent)] hover:text-[#080c14] text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-200 group-hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};
