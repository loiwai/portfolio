import React, { useState } from 'react';

function NeumorphicToggle() {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`neumorphic-toggle${active ? ' active' : ''}`}
      onClick={() => setActive(!active)}
      title={active ? 'On' : 'Off'}
      style={{ margin: '2rem auto' }}
    >
      <div className="toggle-knob" />
    </div>
  );
}

export default function Home() {
  const headingStyle = {
    color: '#1565c0',
    fontWeight: 800,
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  };
  // Removed sectionStyle, use plain <p> tags for inner content

  return (
    <div className="page home" style={{ position: 'relative', overflow: 'visible' }}>
      {/* Fish Animation SVG - strictly behind card, not inside content */}
      <div className="fish-anim-bg" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '400px', zIndex: 0, pointerEvents: 'none' }}>
        <svg width="100vw" height="400" viewBox="0 0 900 400" style={{ position: 'absolute', left: 0, top: 0 }}>
          <defs>
            <linearGradient id="rainbowGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff5e62" />
              <stop offset="30%" stopColor="#ffb347" />
              <stop offset="60%" stopColor="#43e97b" />
              <stop offset="100%" stopColor="#38f9d7" />
            </linearGradient>
            <path id="fishPath" d="M100,100 h700 a40,40 0 0 1 40,40 v120 a40,40 0 0 1 -40,40 h-700 a40,40 0 0 1 -40,-40 v-120 a40,40 0 0 1 40,-40 z" />
          </defs>
          {/* TEST FISH - Large and visible */}
          <g opacity="1">
            <ellipse cx="0" cy="0" rx="40" ry="24" fill="red" />
            <polygon points="40,0 80,20 40,24" fill="yellow" />
            <circle cx="-20" cy="-8" r="5" fill="#fff" />
            <circle cx="-20" cy="-8" r="2.5" fill="#222" />
            <animateMotion dur="10s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="0s">
              <mpath href="#fishPath" />
            </animateMotion>
          </g>
        </svg>
      </div>
      {/* Main Content - above fish animation, not mixed */}
      <div className="main-content" style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.98)', borderRadius: '24px', boxShadow: '0 4px 24px rgba(21,101,192,0.07)' }}>
        <h1 style={headingStyle}>Loi Wai</h1>
        <p style={{ margin: '2rem 0' }}>
          Mathematics & Computer Science professional passionate about IT, Finance, and Data Analytics. Dedicated to leveraging analytical skills and technical expertise to drive innovative solutions and support data-driven decision-making.
        </p>
        <p style={{ margin: '2rem 0' }}>
          Explore my background, skills, and experience across IT, analytics, and leadership. Welcome to my modern portfolio!
        </p>
        <NeumorphicToggle />
      </div>
    </div>
  );
}
