import React from 'react';

export default function About() {
  return (
    <div className="page about">
      <section className="section">
        <div className="section-header">
          <h1>About Me</h1>
        </div>
        <div className="cards-grid">
          <article className="card">
            <h3>Professional background</h3>
            <p>
              Computer Science graduate currently working as a GRC Associate in Information Security. I support policy reviews, user access reviews, risk assessments, incident tracking, and compliance activities.
            </p>
            <p>
              I also manage the IIAPNG website and provide web administration and IT support for the Institute of Internal Auditors Papua New Guinea.
            </p>
          </article>

          <article className="card">
            <h3>Skills & technologies</h3>
            <div className="tag-list">
              <span className="tag">Python</span>
              <span className="tag">SQL</span>
              <span className="tag">Power BI</span>
              <span className="tag">Microsoft 365</span>
              <span className="tag">Cybersecurity</span>
              <span className="tag">Web Admin</span>
              <span className="tag">GRC</span>
              <span className="tag">Compliance</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Experience snapshot</h2>
        </div>
        <div className="card">
          <ul>
            <li><strong>GRC Associate</strong> – Information Security (current)</li>
            <li><strong>Volunteer Web Administrator</strong> – Institute of Internal Auditors PNG</li>
            <li><strong>IT Support Volunteer</strong> – Institute of Internal Auditors PNG</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Connect with me</h2>
        </div>
        <div className="card">
          <p>
            I am eager to apply IT, audit, and analytics experience to new challenges. Reach out on LinkedIn, explore my GitHub, or send a message through the contact page.
          </p>
          <div className="tag-list">
            <a className="tag" href="https://github.com/loiwai" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="tag" href="https://www.linkedin.com/in/loiwai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
