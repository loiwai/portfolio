import React from 'react';

export default function Projects() {
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
    <div className="page projects" style={cardStyle}>
      <h1 style={headingStyle}>Projects & Experience</h1>
      <div style={sectionStyle}>
        <ul style={{ marginLeft: 0, paddingLeft: '1.2em', fontSize: '1.08em' }}>
          <li>
            <strong>Assistant Internal Auditor</strong> – Paradise Foods Limited (2024–Present)<br />
            Worked with Audit Team to performed business process audits.
          </li>
          <li>
            <strong>Graduate Management Trainee</strong> – Paradise Foods Limited (2022–2024)<br />
            Built Power BI dashboards, managed production planning, and developed live dashboards for real-time monitoring.
          </li>
          <li>
            <strong>IT/Finance Intern</strong> – Paradise Foods Limited (2019–2022)<br />
            Provided IT support, managed IT assets, and assisted finance teams with technical solutions.
          </li>
          <li>
            <strong>Leadership & Communication</strong><br />
            Led a team to 3rd place in a science competition with an Online SRC Voting System prototype, participated in peer mentorship and leadership development programs.
          </li>
        </ul>
      </div>
      <div style={{ ...sectionStyle, background: '#eaf6ff' }}>
        <p style={{ margin: 0 }}>
          For more details and surprises, feel free to explore further or get in touch!
        </p>
      </div>
    </div>
  );
}
