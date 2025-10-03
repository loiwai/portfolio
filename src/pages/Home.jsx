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
  const cardStyle = {
    maxWidth: 700,
    margin: '2rem auto',
    background: '#fff',
    borderRadius: 18,
    boxShadow: '0 8px 32px #e0e3ec, -8px -8px 32px #ffffff',
    padding: '2.5rem 2rem',
    position: 'relative',
  };
  const headingStyle = {
    color: '#1565c0',
    fontWeight: 800,
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  };
  // Removed sectionStyle, use plain <p> tags for inner content

  return (
    <div className="page home" style={cardStyle}>
      <h1 style={headingStyle}>Loi Wai</h1>
      <p style={{ margin: '2rem 0' }}>
        Mathematics & Computer Science professional passionate about IT, Finance, and Data Analytics. Dedicated to leveraging analytical skills and technical expertise to drive innovative solutions and support data-driven decision-making.
      </p>
      <p style={{ margin: '2rem 0' }}>
        Explore my background, skills, and experience across IT, analytics, and leadership. Welcome to my modern portfolio!
      </p>
      <NeumorphicToggle />
    </div>
  );
}
