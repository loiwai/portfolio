import React, { useState } from 'react';

/* -------------------------------
   Neumorphic Toggle Component
-------------------------------- */
function NeumorphicToggle() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`neumorphic-toggle ${active ? 'active' : ''}`}
      onClick={() => setActive(!active)}
      title={active ? 'On' : 'Off'}
      style={{ margin: '2rem auto' }}
    >
      <div className="toggle-knob" />
    </div>
  );
}

/* -------------------------------
   Home Component
-------------------------------- */
export default function Home() {
  const headingStyle = {
    color: '#1565c0',
    fontWeight: 800,
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  };

  return (
    <div className="page home" style={{ position: 'relative', overflow: 'visible' }}>
      {/* ---------------------------
          PNG-Inspired Animated Background
      --------------------------- */}
      <div
        className="pattern-anim-bg"
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
        {/* SVG or Canvas-based tribal pattern animation goes here */}
      </div>

      {/* ---------------------------
          Main Content Section
      --------------------------- */}
      <div
        className="main-content"
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(255,255,255,0.98)',
          borderRadius: '24px',
          boxShadow: '0 4px 24px rgba(21,101,192,0.07)',
          padding: '2rem',
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
