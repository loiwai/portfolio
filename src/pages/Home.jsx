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
      {/* Fish Animation SVG - behind content */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" viewBox="0 0 700 350" style={{ position: 'absolute', left: 0, top: 0 }}>
          <defs>
            <path id="fishPath" d="M50,50 h600 a30,30 0 0 1 30,30 v190 a30,30 0 0 1 -30,30 h-600 a30,30 0 0 1 -30,-30 v-190 a30,30 0 0 1 30,-30 z" />
            <g id="goldfish">
              <ellipse cx="0" cy="0" rx="18" ry="10" fill="#ffb347" opacity="0.7" />
              <polygon points="18,0 35,8 18,10" fill="#ff7f50" opacity="0.7" />
              <circle cx="-8" cy="-3" r="2.5" fill="#fff" />
              <circle cx="-8" cy="-3" r="1.2" fill="#222" />
            </g>
          </defs>
          {/* Fish 1 */}
          <use href="#goldfish" width="35" height="20">
            <animateMotion dur="20s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="0s">
              <mpath href="#fishPath" />
            </animateMotion>
          </use>
          {/* Fish 2 */}
          <use href="#goldfish" width="40" height="24">
            <animateMotion dur="25s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="5s">
              <mpath href="#fishPath" />
            </animateMotion>
          </use>
          {/* Fish 3 */}
          <use href="#goldfish" width="50" height="30">
            <animateMotion dur="30s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="10s">
              <mpath href="#fishPath" />
            </animateMotion>
          </use>
        </svg>
      </div>
      {/* Main Content - above fish animation */}
      <div style={{ position: 'relative', zIndex: 1 }}>
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
