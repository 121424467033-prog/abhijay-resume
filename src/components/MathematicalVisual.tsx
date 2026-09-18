import React from 'react';

export const MathematicalVisual: React.FC = () => {
  return (
    <div
      id="hero-mathematical-visual"
      className="relative w-full max-w-lg mx-auto aspect-square rounded-2xl border border-[var(--border)] bg-[var(--surface-card)]/80 p-6 sm:p-8 backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col justify-between"
    >
      {/* Background coordinate grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Decorative top bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-[var(--border)] pb-3 text-xs font-mono text-[var(--text-muted)]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          <span className="text-[var(--accent)] font-semibold">MATH_STAT_ENGINE</span>
        </div>
        <span className="text-[11px] tracking-widest uppercase">COORD [X, Y, f(x)]</span>
      </div>

      {/* Main SVG Visualization */}
      <div className="relative z-10 my-auto py-2 flex items-center justify-center">
        <svg
          viewBox="0 0 360 240"
          className="w-full h-auto drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Coordinate Axes */}
          <line x1="30" y1="200" x2="330" y2="200" stroke="currentColor" strokeWidth="1.2" className="text-[var(--border-subtle)]" />
          <line x1="40" y1="20" x2="40" y2="210" stroke="currentColor" strokeWidth="1.2" className="text-[var(--border-subtle)]" />

          {/* Axis Labels */}
          <text x="330" y="214" fill="currentColor" className="text-[10px] font-mono text-[var(--text-muted)]" textAnchor="end">X (Variables)</text>
          <text x="35" y="18" fill="currentColor" className="text-[10px] font-mono text-[var(--text-muted)]">P(x)</text>

          {/* Grid lines */}
          <line x1="40" y1="150" x2="330" y2="150" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-[var(--border)]" />
          <line x1="40" y1="100" x2="330" y2="100" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-[var(--border)]" />
          <line x1="40" y1="50" x2="330" y2="50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-[var(--border)]" />

          <line x1="100" y1="20" x2="100" y2="200" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-[var(--border)]" />
          <line x1="180" y1="20" x2="180" y2="200" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-[var(--border)]" />
          <line x1="260" y1="20" x2="260" y2="200" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-[var(--border)]" />

          {/* Statistical Gaussian / Normal Distribution Curve */}
          <path
            d="M 50 198 C 90 198, 120 192, 145 150 C 165 110, 175 42, 185 42 C 195 42, 205 110, 225 150 C 250 192, 280 198, 320 198"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_8px_var(--accent)]"
          />

          {/* Fill under bell curve */}
          <path
            d="M 50 198 C 90 198, 120 192, 145 150 C 165 110, 175 42, 185 42 C 195 42, 205 110, 225 150 C 250 192, 280 198, 320 198 L 320 200 L 50 200 Z"
            fill="url(#bellCurveGrad)"
            opacity="0.3"
          />

          {/* Peak mean indicator (mu) */}
          <line x1="185" y1="42" x2="185" y2="200" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="185" cy="42" r="4.5" fill="var(--accent)" />
          <circle cx="185" cy="42" r="9" stroke="var(--accent)" strokeWidth="1" opacity="0.6" className="animate-ping" />
          <text x="185" y="32" fill="var(--accent)" className="text-[11px] font-mono font-bold" textAnchor="middle">μ (Mean)</text>

          {/* Standard deviation markers (+/- sigma) */}
          <text x="145" y="214" fill="currentColor" className="text-[9px] font-mono text-[var(--text-muted)]" textAnchor="middle">-1σ</text>
          <text x="185" y="214" fill="currentColor" className="text-[9px] font-mono text-[var(--accent)] font-bold" textAnchor="middle">μ</text>
          <text x="225" y="214" fill="currentColor" className="text-[9px] font-mono text-[var(--text-muted)]" textAnchor="middle">+1σ</text>

          {/* Data Points (Scatter / Matrix) */}
          {[
            { cx: 75, cy: 180 },
            { cx: 95, cy: 165 },
            { cx: 120, cy: 135 },
            { cx: 140, cy: 110 },
            { cx: 160, cy: 80 },
            { cx: 210, cy: 95 },
            { cx: 235, cy: 130 },
            { cx: 265, cy: 165 },
            { cx: 290, cy: 185 },
            { cx: 185, cy: 75 },
          ].map((pt, idx) => (
            <g key={idx}>
              <circle cx={pt.cx} cy={pt.cy} r="2.5" fill="var(--accent)" opacity="0.8" />
              <line
                x1={pt.cx}
                y1={pt.cy}
                x2={pt.cx + 6}
                y2={pt.cy - 6}
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-[var(--text-muted)]"
                opacity="0.4"
              />
            </g>
          ))}

          {/* Linear regression / Trend indicator */}
          <path
            d="M 60 185 L 140 130 L 220 90 L 310 50"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            className="text-[var(--text-secondary)]"
            opacity="0.5"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="bellCurveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative bottom info badges */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-[var(--border)] font-mono text-center">
        <div className="p-2 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)]">
          <div className="text-[10px] text-[var(--text-muted)] uppercase">Foundation</div>
          <div className="text-xs font-bold text-[var(--text-primary)]">Mathematics</div>
        </div>
        <div className="p-2 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)]">
          <div className="text-[10px] text-[var(--text-muted)] uppercase">Methodology</div>
          <div className="text-xs font-bold text-[var(--accent)]">Statistics</div>
        </div>
        <div className="p-2 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)]">
          <div className="text-[10px] text-[var(--text-muted)] uppercase">Trajectory</div>
          <div className="text-xs font-bold text-[var(--text-primary)]">Data Analytics</div>
        </div>
      </div>
    </div>
  );
};
