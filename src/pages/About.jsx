import React from 'react';

export default function About() {
  const cardStyle = {
    maxWidth: 700,
    margin: '2rem auto',
    background: '#f8fbff',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(21,101,192,0.07)',
    padding: '2.5rem 2rem',
  };
  const sectionStyle = {
    marginBottom: '2rem',
    background: '#e3f0ff',
    borderRadius: 10,
    padding: '1.2rem',
  };
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
      <div style={sectionStyle}>
        <p style={{ margin: 0 }}>
          <strong>Education:</strong><br />
          Bachelor of Science in Mathematics & Computer Science<br />
          University of Papua New Guinea, Graduated March 2022
        </p>
      </div>
      <div style={{ ...sectionStyle, background: '#eaf6ff' }}>
        <p style={{ margin: 0 }}>
          <strong>Skills:</strong><br />
          <span style={{ color: '#1565c0', fontWeight: 600 }}>Programming:</span> Java, C++, C#, PHP, JavaScript, Python, VBA<br />
          <span style={{ color: '#1565c0', fontWeight: 600 }}>Databases:</span> MySQL, PostgreSQL, ODBC, OLEDB<br />
          <span style={{ color: '#1565c0', fontWeight: 600 }}>Frameworks & Tools:</span> Git, GitHub, Spring Boot, Vaadin, Laravel, Power BI, Tableau, Office 365, Advanced Excel<br />
          IT Support & Networking, Data Analytics, Production Planning, Data Visualization
        </p>
      </div>
      <div style={{ ...sectionStyle, background: '#fffbe6' }}>
        <p style={{ margin: 0 }}>
          I am detail-oriented and eager to contribute to innovative IT solutions and data-driven decision-making in dynamic environments.
        </p>
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="/Loi Wai-CV.pdf" download className="cv-download-link">
          <button style={{ minWidth: 220 }}>
            Download My CV (PDF)
          </button>
        </a>
      </div>
      <div style={{ marginTop: '2.5rem', textAlign: 'left', background: '#f0f7fa', borderRadius: 10, padding: '1.2rem' }}>
        <h2 style={subHeadingStyle}>My Work & Contributions</h2>
        <ul style={{ marginLeft: 0, paddingLeft: '1.2em', fontSize: '1.08em' }}>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/loiwai" target="_blank" rel="noopener noreferrer" style={{ color: '#1565c0', textDecoration: 'underline' }}>github.com/loiwai</a>
          </li>
        </ul>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <img
            src={`https://ghchart.rshah.org/loiwai`}
            alt="GitHub Contribution Graph"
            style={{ maxWidth: '100%', borderRadius: 8, boxShadow: '0 2px 12px rgba(21,101,192,0.07)' }}
          />
        </div>
      </div>
      <div style={{ marginTop: '2.5rem', textAlign: 'left', background: '#f8fbff', borderRadius: 10, padding: '1.2rem' }}>
        <h2 style={subHeadingStyle}>Connect with Me</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '1.08em' }}>
          <li style={{ marginBottom: '0.7em' }}>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/loiwai" target="_blank" rel="noopener noreferrer" style={{ color: '#1565c0', textDecoration: 'underline' }}>linkedin.com/in/loiwai</a>
          </li>
          <li style={{ marginBottom: '0.7em' }}>
            <strong>Facebook:</strong> <a href="https://facebook.com/loiwai" target="_blank" rel="noopener noreferrer" style={{ color: '#1565c0', textDecoration: 'underline' }}>facebook.com/loiwai</a>
          </li>
          <li>
            <strong>Instagram:</strong> <a href="https://instagram.com/loiwai" target="_blank" rel="noopener noreferrer" style={{ color: '#1565c0', textDecoration: 'underline' }}>instagram.com/loiwai</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
