import React from 'react';

interface RFIDVisualProps {
  interactive?: boolean;
}

export const RFIDVisual: React.FC<RFIDVisualProps> = () => {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl border border-[var(--border)] bg-[var(--surface-card)] p-4 sm:p-6 overflow-hidden flex flex-col justify-between">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono border-b border-[var(--border)] pb-2 text-[var(--text-muted)]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[var(--text-primary)] font-semibold">RFID_SYSTEM_SCHEMATIC</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-mono">
          CONTACTLESS VERIFICATION
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
          {/* Step 1: RFID Card */}
          <g id="rfid-card-node" className="transition-transform duration-300 hover:scale-105">
            <rect
              x="20"
              y="55"
              width="70"
              height="95"
              rx="6"
              fill="var(--surface-hover)"
              stroke="var(--accent)"
              strokeWidth="1.8"
            />
            {/* Magnetic chip icon on card */}
            <rect x="32" y="70" width="20" height="16" rx="2" fill="var(--accent)" fillOpacity="0.4" stroke="var(--accent)" strokeWidth="1" />
            <line x1="32" y1="78" x2="52" y2="78" stroke="var(--accent)" strokeWidth="0.8" />
            <line x1="42" y1="70" x2="42" y2="86" stroke="var(--accent)" strokeWidth="0.8" />
            <text x="55" y="112" fill="var(--text-primary)" className="text-[10px] font-mono font-bold" textAnchor="middle">RFID</text>
            <text x="55" y="125" fill="var(--text-muted)" className="text-[8px] font-mono" textAnchor="middle">TAG / CARD</text>
            <text x="55" y="140" fill="var(--accent)" className="text-[7px] font-mono" textAnchor="middle">UID CREDENTIAL</text>
          </g>

          {/* Radio Transmission Waves */}
          <g id="rfid-waves">
            <path d="M 100 85 A 25 25 0 0 1 100 120" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" className="animate-pulse" />
            <path d="M 108 78 A 35 35 0 0 1 108 127" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M 116 71 A 45 45 0 0 1 116 134" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          </g>

          {/* Step 2: RFID Reader Module */}
          <g id="rfid-reader-node">
            <rect
              x="130"
              y="50"
              width="85"
              height="105"
              rx="6"
              fill="var(--surface-hover)"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[var(--border-subtle)]"
            />
            <circle cx="172" cy="85" r="18" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="3 2" />
            <circle cx="172" cy="85" r="6" fill="var(--accent)" />
            <text x="172" y="122" fill="var(--text-primary)" className="text-[10px] font-mono font-bold" textAnchor="middle">RFID READER</text>
            <text x="172" y="136" fill="var(--text-muted)" className="text-[8px] font-mono" textAnchor="middle">ANTENNA COIL</text>
            <text x="172" y="148" fill="var(--accent)" className="text-[7px] font-mono" textAnchor="middle">RECEIVES UID</text>
          </g>

          {/* Data Bus connection to Arduino */}
          <line x1="215" y1="102" x2="250" y2="102" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="232" cy="102" r="3" fill="var(--accent)" className="animate-ping" />

          {/* Step 3: Arduino Processing Unit */}
          <g id="arduino-core-node">
            <rect
              x="250"
              y="40"
              width="95"
              height="125"
              rx="6"
              fill="var(--surface-hover)"
              stroke="var(--accent)"
              strokeWidth="1.8"
            />
            {/* Header pins illustration */}
            <rect x="256" y="46" width="83" height="12" rx="2" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.8" />
            <text x="297" y="55" fill="var(--text-muted)" className="text-[7px] font-mono" textAnchor="middle">DIGITAL / ANALOG I/O</text>

            <rect x="265" y="68" width="65" height="32" rx="3" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
            <text x="297" y="84" fill="var(--accent)" className="text-[10px] font-mono font-bold" textAnchor="middle">ARDUINO</text>
            <text x="297" y="94" fill="var(--text-muted)" className="text-[7px] font-mono" textAnchor="middle">LOGIC PROCESSOR</text>

            {/* Validation condition */}
            <text x="297" y="122" fill="var(--text-primary)" className="text-[8px] font-mono font-semibold" textAnchor="middle">UID MATCH CHECK</text>
            <text x="297" y="135" fill="var(--text-muted)" className="text-[7px] font-mono" textAnchor="middle">AUTHORIZED = TRUE?</text>
            <text x="297" y="152" fill="#34d399" className="text-[8px] font-mono font-bold" textAnchor="middle">✓ GRANTED / ✗ DENIED</text>
          </g>

          {/* Connection to Display and Lock outputs */}
          <path d="M 345 75 L 375 75" stroke="var(--accent)" strokeWidth="1.5" />
          <path d="M 345 130 L 375 130" stroke="var(--accent)" strokeWidth="1.5" />

          {/* Step 4: LCD Status Display */}
          <g id="lcd-display-node">
            <rect
              x="375"
              y="45"
              width="75"
              height="55"
              rx="4"
              fill="#06202a"
              stroke="var(--accent)"
              strokeWidth="1.2"
            />
            <rect x="380" y="52" width="65" height="30" rx="2" fill="#03161e" stroke="#0e3a47" strokeWidth="0.5" />
            <text x="412" y="64" fill="#38bdf8" className="text-[7px] font-mono" textAnchor="middle">STATUS LCD</text>
            <text x="412" y="75" fill="#34d399" className="text-[7px] font-mono font-bold" textAnchor="middle">ACCESS GRANTED</text>
            <text x="412" y="94" fill="var(--text-muted)" className="text-[6px] font-mono" textAnchor="middle">VISUAL FEEDBACK</text>
          </g>

          {/* Step 5: Door Lock mechanism */}
          <g id="door-lock-node">
            <rect
              x="375"
              y="110"
              width="75"
              height="55"
              rx="4"
              fill="var(--surface-hover)"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-[var(--border-subtle)]"
            />
            {/* Lock symbol */}
            <rect x="403" y="126" width="18" height="14" rx="2" fill="var(--accent)" fillOpacity="0.4" stroke="var(--accent)" strokeWidth="1" />
            <path d="M 407 126 V 122 A 5 5 0 0 1 417 122 V 126" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            <text x="412" y="152" fill="var(--text-primary)" className="text-[7px] font-mono font-semibold" textAnchor="middle">DIGITAL LOCK</text>
            <text x="412" y="161" fill="#34d399" className="text-[6px] font-mono" textAnchor="middle">UNLOCKED (ACTIVE)</text>
          </g>
        </svg>
      </div>

      {/* Workflow labels footer */}
      <div className="relative z-10 grid grid-cols-4 gap-1 text-[10px] font-mono text-center pt-2 border-t border-[var(--border)] text-[var(--text-muted)]">
        <div>1. PRESENT CARD</div>
        <div>2. READ UID</div>
        <div>3. AUTHENTICATE</div>
        <div>4. STATUS &amp; UNLOCK</div>
      </div>
    </div>
  );
};
