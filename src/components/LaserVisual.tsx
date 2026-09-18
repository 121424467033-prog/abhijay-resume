import React from 'react';

interface LaserVisualProps {
  interactive?: boolean;
}

export const LaserVisual: React.FC<LaserVisualProps> = () => {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl border border-[var(--border)] bg-[var(--surface-card)] p-4 sm:p-6 overflow-hidden flex flex-col justify-between">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono border-b border-[var(--border)] pb-2 text-[var(--text-muted)]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[var(--text-primary)] font-semibold">LASER_INTRUSION_MONITOR</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-rose-400 font-mono">
          OPTICAL PATH ACTIVE
        </span>
      </div>

      {/* Main SVG diagram */}
      <div className="relative z-10 my-auto py-2">
        <svg
          viewBox="0 0 460 200"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Node 1: Laser Diode Emitter */}
          <g id="laser-emitter-node">
            <rect
              x="20"
              y="60"
              width="65"
              height="80"
              rx="6"
              fill="var(--surface-hover)"
              stroke="#f43f5e"
              strokeWidth="1.8"
            />
            <polygon points="75,88 88,100 75,112" fill="#f43f5e" />
            <circle cx="50" cy="90" r="10" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="50" cy="90" r="4" fill="#f43f5e" />
            <text x="52" y="118" fill="var(--text-primary)" className="text-[9px] font-mono font-bold" textAnchor="middle">LASER</text>
            <text x="52" y="130" fill="var(--text-muted)" className="text-[7px] font-mono" textAnchor="middle">EMITTER</text>
          </g>

          {/* Continuous Red Optical Laser Beam */}
          <g id="laser-beam-path">
            {/* Glow corridor */}
            <line x1="88" y1="100" x2="200" y2="100" stroke="#f43f5e" strokeWidth="6" opacity="0.25" strokeLinecap="round" />
            {/* Core laser beam */}
            <line x1="88" y1="100" x2="200" y2="100" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Interruption Marker (Simulated Hand / Obstacle) */}
            <g transform="translate(138, 70)">
              <rect x="-6" y="-5" width="12" height="65" rx="3" fill="var(--surface)" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="2 2" />
              <text x="0" y="72" fill="#f59e0b" className="text-[7px] font-mono font-bold" textAnchor="middle">INTERRUPTION</text>
              <line x1="-12" y1="30" x2="12" y2="30" stroke="#f59e0b" strokeWidth="1" />
              <polygon points="0,25 5,30 0,35" fill="#f59e0b" />
            </g>
          </g>

          {/* Node 2: LDR Sensor (Light Dependent Resistor) */}
          <g id="ldr-sensor-node">
            <rect
              x="200"
              y="55"
              width="75"
              height="90"
              rx="6"
              fill="var(--surface-hover)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            {/* LDR serpentine symbol */}
            <circle cx="237" cy="85" r="16" stroke="var(--accent)" strokeWidth="1.2" />
            <path d="M 227 85 L 232 80 L 237 90 L 242 80 L 247 85" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            <text x="237" y="115" fill="var(--text-primary)" className="text-[9px] font-mono font-bold" textAnchor="middle">LDR SENSOR</text>
            <text x="237" y="126" fill="var(--text-muted)" className="text-[7px] font-mono" textAnchor="middle">PHOTOCELL</text>
            <text x="237" y="137" fill="var(--accent)" className="text-[6px] font-mono" textAnchor="middle">Δ RESISTANCE</text>
          </g>

          {/* Signal Bus */}
          <path d="M 275 100 L 295 100" stroke="var(--accent)" strokeWidth="1.8" />
          <circle cx="285" cy="100" r="2.5" fill="var(--accent)" />

          {/* Node 3: Signal Conditioning & Transistor Trigger */}
          <g id="transistor-trigger-node">
            <rect
              x="295"
              y="50"
              width="85"
              height="100"
              rx="6"
              fill="var(--surface-hover)"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[var(--border-subtle)]"
            />
            {/* Transistor schematic graphic */}
            <circle cx="337" cy="80" r="15" stroke="var(--text-secondary)" strokeWidth="1" />
            <line x1="330" y1="72" x2="330" y2="88" stroke="var(--accent)" strokeWidth="2" />
            <line x1="324" y1="80" x2="330" y2="80" stroke="var(--accent)" strokeWidth="1.5" />
            <line x1="330" y1="75" x2="344" y2="70" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <line x1="330" y1="85" x2="344" y2="90" stroke="var(--text-secondary)" strokeWidth="1.5" />

            <text x="337" y="112" fill="var(--text-primary)" className="text-[8px] font-mono font-bold" textAnchor="middle">SIGNAL CONDITION</text>
            <text x="337" y="124" fill="var(--text-muted)" className="text-[7px] font-mono" textAnchor="middle">&amp; TRANSISTOR</text>
            <text x="337" y="138" fill="var(--accent)" className="text-[6px] font-mono font-semibold" textAnchor="middle">THRESHOLD SWITCH</text>
          </g>

          {/* Trigger Line to Alarm */}
          <path d="M 380 100 L 400 100" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />

          {/* Node 4: Buzzer / Alarm Alert */}
          <g id="alarm-unit-node">
            <rect
              x="400"
              y="55"
              width="50"
              height="90"
              rx="6"
              fill="#2b0a12"
              stroke="#f43f5e"
              strokeWidth="1.8"
            />
            {/* Siren / Speaker icon */}
            <polygon points="415,90 425,82 425,108 415,100" fill="#f43f5e" />
            <path d="M 430 86 A 12 12 0 0 1 430 104" stroke="#f43f5e" strokeWidth="1.5" fill="none" className="animate-ping" />
            <text x="425" y="122" fill="#fda4af" className="text-[8px] font-mono font-bold" textAnchor="middle">ALARM</text>
            <text x="425" y="133" fill="#f43f5e" className="text-[6px] font-mono" textAnchor="middle">ALERT ON</text>
          </g>
        </svg>
      </div>

      {/* Workflow labels footer */}
      <div className="relative z-10 grid grid-cols-4 gap-1 text-[10px] font-mono text-center pt-2 border-t border-[var(--border)] text-[var(--text-muted)]">
        <div>1. EMIT BEAM</div>
        <div>2. LDR SENSE</div>
        <div>3. BEAM BROKEN</div>
        <div>4. TRIGGER ALARM</div>
      </div>
    </div>
  );
};
