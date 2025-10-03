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
      <div className="fish-anim-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" viewBox="0 0 700 350" style={{ position: 'absolute', left: 0, top: 0 }}>
          <defs>
            <linearGradient id="rainbowGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff5e62" />
              <stop offset="30%" stopColor="#ffb347" />
              <stop offset="60%" stopColor="#43e97b" />
              <stop offset="100%" stopColor="#38f9d7" />
            </linearGradient>
            <path id="fishPath" d="M50,50 h600 a30,30 0 0 1 30,30 v190 a30,30 0 0 1 -30,30 h-600 a30,30 0 0 1 -30,-30 v-190 a30,30 0 0 1 30,-30 z" />
          </defs>
          {/* Rainbow Fish */}
          <g opacity="0.7">
            <ellipse cx="0" cy="0" rx="20" ry="12" fill="url(#rainbowGradient)" />
            <polygon points="20,0 38,10 20,12" fill="#6a5acd" />
            <circle cx="-10" cy="-4" r="2.5" fill="#fff" />
            <circle cx="-10" cy="-4" r="1.2" fill="#222" />
            <animateMotion dur="22s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="0s">
              <mpath href="#fishPath" />
            </animateMotion>
          </g>
          {/* Neon Tetra */}
          <g opacity="0.7">
            <ellipse cx="0" cy="0" rx="16" ry="8" fill="#38f9d7" />
            <rect x="-8" y="-2" width="16" height="4" fill="#ff5e62" />
            <polygon points="16,0 26,6 16,8" fill="#1565c0" />
            <circle cx="-7" cy="-2" r="1.5" fill="#fff" />
            <circle cx="-7" cy="-2" r="0.8" fill="#222" />
            <animateMotion dur="18s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="4s">
              <mpath href="#fishPath" />
            </animateMotion>
          </g>
          {/* Goldfish */}
          <g opacity="0.7">
            <ellipse cx="0" cy="0" rx="18" ry="10" fill="#ffb347" />
            <polygon points="18,0 35,8 18,10" fill="#ff7f50" />
            <circle cx="-8" cy="-3" r="2.5" fill="#fff" />
            <circle cx="-8" cy="-3" r="1.2" fill="#222" />
            <animateMotion dur="25s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="8s">
              <mpath href="#fishPath" />
            </animateMotion>
          </g>
          {/* Guppy */}
          <g opacity="0.7">
            <ellipse cx="0" cy="0" rx="14" ry="7" fill="#43e97b" />
            <polygon points="14,0 24,5 14,7" fill="#ff5e62" />
            <circle cx="-6" cy="-2" r="1.8" fill="#fff" />
            <circle cx="-6" cy="-2" r="0.9" fill="#222" />
            <animateMotion dur="20s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="12s">
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
