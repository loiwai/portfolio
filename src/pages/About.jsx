import React from 'react';

export default function About() {
  const cardStyle = {
    maxWidth: 700,
    margin: '2rem auto',
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(21,101,192,0.07)',
    padding: '2.5rem 2rem',
  };
  // Removed sectionStyle, use plain <p> tags for inner content
  const headingStyle = {
    color: '#1565c0',
    fontWeight: 800,
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  };
  const subHeadingStyle = {
    color: '#1565c0',
    fontWeight: 700,
    fontSize: '1.3rem',
    marginBottom: '1rem',
  };

  return (
    <div className="page about" style={cardStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <p style={{ margin: '2rem 0' }}>
        <strong>Education:</strong><br />
        Bachelor of Science in Mathematics & Computer Science<br />
        University of Papua New Guinea, Graduated March 2022
      </p>
      <p style={{ margin: '2rem 0' }}>
        <strong>Skills:</strong><br />
        <span style={{ color: '#1565c0', fontWeight: 600 }}>Programming:</span> Java, C++, C#, PHP, JavaScript, Python, VBA<br />
        <span style={{ color: '#1565c0', fontWeight: 600 }}>Databases:</span> MySQL, PostgreSQL, ODBC, OLEDB<br />
        <span style={{ color: '#1565c0', fontWeight: 600 }}>Frameworks & Tools:</span> Git, GitHub, Spring Boot, Vaadin, Laravel, Power BI, Tableau, Office 365, Advanced Excel<br />
        IT Support & Networking, Data Analytics, Production Planning, Data Visualization
      </p>
      <p style={{ margin: '2rem 0' }}>
        I am detail-oriented and eager to contribute to innovative IT solutions and data-driven decision-making in dynamic environments.
      </p>
      {/* Removed Download CV button */}
  <div style={{ marginTop: '2.5rem', textAlign: 'left', background: '#fff', borderRadius: 10, padding: '1.2rem' }}>
        <h2 style={subHeadingStyle}>My Work & Contributions</h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem' }}>
          <a href="https://github.com/loiwai" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ display: 'inline-block' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#1565c0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.184 6.839 9.525.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.192 22 16.437 22 12.012 22 6.484 17.523 2 12 2z"/></svg>
          </a>
        </div>
        <div style={{
          marginTop: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(21,101,192,0.07)',
          padding: '2rem 1rem',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <h2 style={{
            color: '#1565c0',
            fontWeight: 700,
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
            letterSpacing: '0.01em',
          }}>
            GitHub Profile Highlights
          </h2>
          <img
            src="https://github-readme-stats.vercel.app/api?username=loiwai&show_icons=true&theme=default"
            alt="Loi Wai GitHub Profile Card"
            style={{
              width: '100%',
              maxWidth: 480,
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(21,101,192,0.10)',
              background: '#fff',
              marginBottom: '0.5rem',
            }}
          />
        </div>
      </div>
  <div style={{ marginTop: '2.5rem', textAlign: 'center', background: '#fff', borderRadius: 10, padding: '1.2rem' }}>
        <h2 style={subHeadingStyle}>Connect with Me</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginTop: '1.2rem' }}>
          <a href="https://www.linkedin.com/in/loiwai" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ display: 'inline-block' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#1565c0" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
          </a>
          <a href="https://facebook.com/loiwai" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ display: 'inline-block' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#1565c0" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.325-1.325-1.325z"/></svg>
          </a>
          <a href="https://instagram.com/loiwai" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ display: 'inline-block' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#1565c0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.071-1.276.059-2.687.334-3.678 1.325-.991.991-1.266 2.402-1.325 3.678-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.059 1.276.334 2.687 1.325 3.678.991.991 2.402 1.266 3.678 1.325 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.276-.059 2.687-.334 3.678-1.325.991-.991 1.266-2.402 1.325-3.678.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.059-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.266-3.678-1.325-1.28-.059-1.688-.071-4.947-.071zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
