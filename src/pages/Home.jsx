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
    background: '#f8fbff',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(21,101,192,0.07)',
    padding: '2.5rem 2rem',
  };
  const headingStyle = {
    color: '#1565c0',
    fontWeight: 800,
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  };
  const sectionStyle = {
    marginBottom: '2rem',
    background: '#e3f0ff',
    borderRadius: 10,
    padding: '1.2rem',
  };

  return (
    <div className="page home" style={cardStyle}>
      <h1 style={headingStyle}>Loi Wai</h1>
      <div style={sectionStyle}>
        <p style={{ margin: 0 }}>
          Mathematics & Computer Science professional passionate about IT, Finance, and Data Analytics. Dedicated to leveraging analytical skills and technical expertise to drive innovative solutions and support data-driven decision-making.
        </p>
      </div>
      <div style={{ ...sectionStyle, background: '#eaf6ff' }}>
        <p style={{ margin: 0 }}>
          Explore my background, skills, and experience across IT, analytics, and leadership. Welcome to my modern portfolio!
        </p>
      </div>
      <NeumorphicToggle />
    </div>
  );
}
