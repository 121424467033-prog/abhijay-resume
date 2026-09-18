import React from 'react';
import { ArrowDown, Database, Cpu, Eye, Sparkles, Binary } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolio';

export const CareerDirection: React.FC = () => {
  const steps = [
    { title: 'MATHEMATICS', desc: 'Analytical rigor, logic & formal reasoning' },
    { title: 'STATISTICS', desc: 'Probability distributions, inference & modeling' },
    { title: 'TECHNICAL FOUNDATION', desc: 'Algorithmic programming & structured databases' },
    { title: 'HANDS-ON PROJECTS', desc: 'Practical circuit logic, sensing & system integration' },
    { title: 'DATA ANALYTICS', desc: 'Target domain for impactful organizational solutions' },
  ];

  const interestIcons = [Database, Cpu, Eye, Sparkles];

  return (
    <section id="career-direction-section" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trajectory &amp; Focus"
          title="Where I'm Heading"
          description="Connecting academic principles in Mathematics and Statistics with hands-on technical execution toward a career in Data Analytics."
          align="center"
        />

        {/* Narrative Flowchart Pipeline */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="space-y-3">
            {steps.map((step, idx) => {
              const isTarget = idx === steps.length - 1;
              return (
                <React.Fragment key={step.title}>
                  <div
                    className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      isTarget
                        ? 'bg-[var(--accent)]/10 border-[var(--accent)] shadow-lg shadow-[var(--accent)]/10 text-[var(--accent)]'
                        : 'bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-accent)]'
                    }`}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <span
                        className={`w-7 h-7 rounded-md font-mono text-xs flex items-center justify-center font-bold ${
                          isTarget
                            ? 'bg-[var(--accent)] text-[#080c14]'
                            : 'bg-[var(--surface-hover)] text-[var(--text-muted)] border border-[var(--border)]'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <h3
                          className={`text-sm sm:text-base font-bold tracking-wide ${
                            isTarget ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                    {isTarget && (
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/40 shrink-0">
                        Target Goal
                      </span>
                    )}
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-[var(--text-muted)] animate-bounce" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Areas of Interest Grid */}
        <div className="mt-16 pt-12 border-t border-[var(--border)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[var(--surface-hover)] text-[var(--accent)] border border-[var(--border)] mb-3">
              <Binary className="w-3.5 h-3.5" />
              <span>Career Objective Focus</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Areas of Interest
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Specific cutting-edge technology areas from the career objective that inspire ongoing curiosity and future exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.areasOfInterest.map((item, idx) => {
              const Icon = interestIcons[idx % interestIcons.length];
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--border)] text-[10px] font-mono text-[var(--text-muted)] flex items-center justify-between">
                    <span>AREA OF INTEREST</span>
                    <span className="text-[var(--accent)]">Exploration</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-mono text-[var(--text-muted)] max-w-xl mx-auto">
              Note: The above represent domain interests stated in the career objective for future professional development, not claimed commercial expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
