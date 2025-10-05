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

  // Generate multiple fish elements dynamically
  const fishCount = 10;
  const fishArray = Array.from({ length: fishCount }).map((_, i) => {
    const delay = Math.random() * 10; // random start delay for realism
    const size = 10 + Math.random() * 15; // smaller fish (10–25px)
    const color = ['#1f3b4d', '#22313f', '#1a252f', '#2b3a42'][Math.floor(Math.random() * 4)]; // dark blue shades
    const eyeColor = '#fff';
    const pupilColor = '#000';

    return (
      <g key={i} opacity="0.9">
        {/* Fish Body */}
        <ellipse cx="0" cy="0" rx={size} ry={size * 0.6} fill={color} />
        {/* Tail */}
        <polygon
          points={`${size},0 ${size * 1.8},${size * 0.4} ${size * 1.8},${-size * 0.4}`}
          fill={color}
        />
        {/* Eye */}
        <circle cx={-size * 0.5} cy={-size * 0.2} r={size * 0.15} fill={eyeColor} />
        <circle cx={-size * 0.5} cy={-size * 0.2} r={size * 0.07} fill={pupilColor} />

        {/* Swim motion */}
        <animateMotion
          dur={`${8 + Math.random() * 5}s`}
          repeatCount="indefinite"
          keyPoints="0;1"
          keyTimes="0;1"
          begin={`${delay}s`}
        >
          <mpath href="#fishPath" />
        </animateMotion>
      </g>
    );
  });

  return (
    <div className="page home" style={{ position: 'relative', overflow: 'visible' }}>
      {/* Fish Animation Background */}
      <div
        className="fish-anim-bg"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '400px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <svg
          width="100vw"
          height="400"
          viewBox="0 0 900 400"
          style={{ position: 'absolute', left: 0, top: 0 }}
        >
          <defs>
            <path
              id="fishPath"
              d="M100,100 h700 a40,40 0 0 1 40,40 v120 a40,40 0 0 1 -40,40 h-700 a40,40 0 0 1 -40,-40 v-120 a40,40 0 0 1 40,-40 z"
            />
          </defs>
          {fishArray}
        </svg>
      </div>

      {/* Main Content */}
      <div
        className="main-content"
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(255,255,255,0.98)',
          borderRadius: '24px',
          boxShadow: '0 4px 24px rgba(21,101,192,0.07)',
        }}
      >
        <h1 style={headingStyle}>Loi Wai</h1>
        <p style={{ margin: '2rem 0' }}>
          Mathematics & Computer Science professional passionate about IT, Finance, and Data
          Analytics. Dedicated to leveraging analytical skills and technical expertise to drive
          innovative solutions and support data-driven decision-making.
        </p>
        <p style={{ margin: '2rem 0' }}>
          Explore my background, skills, and experience across IT, analytics, and leadership. Thanks
          for visiting my portfolio!
        </p>
        <NeumorphicToggle />
      </div>
    </div>
  );
}
