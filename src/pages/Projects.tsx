import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import { RoutePath } from '../types';
import { portfolioData } from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsProps {
  onNavigate: (path: RoutePath) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  return (
    <div id="projects-page-container" className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-[var(--accent)] border border-[var(--border)] bg-[var(--surface-hover)] mb-4">
          <Cpu className="w-4 h-4" />
          <span>PORTFOLIO EXHIBITS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
          PROJECTS
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-[var(--accent)] leading-relaxed">
          Hands-on technical projects that demonstrate practical problem solving.
        </p>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-4 max-w-3xl leading-relaxed">
          These projects showcase the practical implementation of hardware-software logic, optical sensing, embedded microcontrollers, and state validation.
        </p>
      </div>

      {/* 2. PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        {portfolioData.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onNavigate={onNavigate}
          />
        ))}
      </div>

      {/* 3. FUTURE EXPANSION NOTE (FUTURE-READY ARCHITECTURE) */}
      <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-md text-xs font-mono bg-[var(--surface-hover)] text-[var(--text-muted)] border border-[var(--border)]">
          FUTURE WORK &amp; DATA ANALYTICS CASE STUDIES
        </div>
        <h3 className="text-xl font-bold text-[var(--text-primary)]">
          More Projects Coming Soon
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          Future projects covering exploratory data analysis, statistical modeling, and machine learning experiments will be added as academic work and coursework research progress.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center space-x-2 text-xs font-mono text-[var(--accent)] hover:underline"
          >
            <span>Interested in collaborating or discussing technical work? Contact me</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
