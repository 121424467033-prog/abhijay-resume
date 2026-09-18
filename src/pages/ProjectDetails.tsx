import React from 'react';
import { ArrowLeft, CheckCircle2, Cpu, AlertTriangle, ShieldCheck, ListChecks, Play, Layers } from 'lucide-react';
import { ProjectDetailData, RoutePath } from '../types';
import { RFIDVisual } from '../components/RFIDVisual';
import { LaserVisual } from '../components/LaserVisual';

interface ProjectDetailsProps {
  project: ProjectDetailData;
  onNavigate: (path: RoutePath) => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onNavigate }) => {
  const isRFID = project.slug === 'rfid-door-lock';

  return (
    <div id={`project-detail-${project.slug}`} className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Back button */}
      <div>
        <button
          id="back-to-projects-btn"
          onClick={() => onNavigate('/projects')}
          className="inline-flex items-center space-x-2 text-sm font-mono text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded p-1"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO PROJECTS</span>
        </button>
      </div>

      {/* 1. PROJECT HERO */}
      <section id="project-hero" className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--surface-hover)] text-[var(--accent)] border border-[var(--border)]">
            {project.tag}
          </span>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            PROJECT #{project.number}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          &ldquo;{project.shortDescription}&rdquo;
        </p>

        {/* Custom Abstract Illustration Canvas */}
        <div className="pt-4">
          {isRFID ? <RFIDVisual /> : <LaserVisual />}
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section id="project-overview" className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-4 shadow-lg">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
          <Layers className="w-4 h-4" />
          <span>PROJECT OVERVIEW</span>
        </div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          System Summary
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          {project.overview}
        </p>
      </section>

      {/* 3 & 4. THE PROBLEM & THE SOLUTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem Card */}
        <section id="project-problem" className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-4">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            The Problem
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* Solution Card */}
        <section id="project-solution" className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-4">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            The Solution
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.solution}
          </p>
        </section>
      </div>

      {/* 5. HOW IT WORKS (FLOWCHART WORKFLOW) */}
      <section id="project-how-it-works" className="p-8 sm:p-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
            <Play className="w-4 h-4" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Operational Logic Flow
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            Sequential stages executed during system verification and monitoring:
          </p>
        </div>

        {/* Flowchart Steps */}
        <div className="space-y-4">
          {project.workflowSteps.map((step, idx) => (
            <div
              key={step.label}
              className="p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between transition-colors hover:border-[var(--accent)]"
            >
              <div className="flex items-center space-x-4">
                <span className="w-7 h-7 rounded-md font-mono text-xs bg-[var(--surface-hover)] text-[var(--accent)] border border-[var(--border)] flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    {step.label}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">
                    {step.subtext}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[var(--accent)]">
                Step {idx + 1} of {project.workflowSteps.length}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COMPONENTS */}
      <section id="project-components" className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
            <Cpu className="w-4 h-4" />
            <span>COMPONENTS</span>
          </div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Hardware &amp; Circuit Elements
          </h2>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            Note: Listed strictly as documented in the source resume without fabricating unverified part specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.components.map((comp) => (
            <div
              key={comp}
              className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm font-semibold text-[var(--text-primary)] flex items-center space-x-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
              <span>{comp}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. KEY FEATURES */}
      <section id="project-key-features" className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
            <ListChecks className="w-4 h-4" />
            <span>KEY FEATURES</span>
          </div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Functional Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.features.map((feat) => (
            <div
              key={feat}
              className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-start space-x-3"
            >
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
              <span className="text-sm font-medium text-[var(--text-primary)]">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PROJECT OUTCOME */}
      <section id="project-outcome" className="p-8 sm:p-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
          <ShieldCheck className="w-4 h-4" />
          <span>PROJECT OUTCOME</span>
        </div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Engineering Takeaways
        </h2>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          {project.outcome}
        </p>
      </section>

      {/* 9. BACK TO PROJECTS & NAVIGATION */}
      <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('/projects')}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO PROJECTS</span>
        </button>

        <button
          onClick={() => onNavigate('/contact')}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[var(--accent)] text-[#080c14] hover:bg-[var(--accent-hover)] transition-all shadow-lg font-mono"
        >
          <span>DISCUSS PROJECT / CONTACT</span>
        </button>
      </div>
    </div>
  );
};
