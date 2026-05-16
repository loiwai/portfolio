import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">IT · Security · Support</span>
          <h1>
            Hi, I’m <span>Loi Wai</span>.
          </h1>
          <p className="hero-desc">
            Computer Science graduate and GRC Associate in Information Security, supporting policy reviews, user access checks, risk assessments, incident tracking, and compliance activities while managing the IIAPNG website.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Let’s collaborate</Link>
            <Link to="/projects" className="btn btn-secondary">See my work</Link>
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <strong>GRC Support</strong>
              <span>policy, access and risk reviews</span>
            </div>
            <div className="stat-card">
              <strong>IT & Data</strong>
              <span>reporting, analysis and user support</span>
            </div>
            <div className="stat-card">
              <strong>Volunteer</strong>
              <span>web admin and IT support for IIA PNG</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <h2>Core focus areas</h2>
          <ul>
            <li>Information security support, policy review and compliance tracking</li>
            <li>User access reviews, risk assessment and incident logging</li>
            <li>IT reporting, data analysis and web administration</li>
          </ul>
          <div className="section-title">Tech highlights</div>
          <div className="tag-list">
            <span className="tag">Python</span>
            <span className="tag">SQL</span>
            <span className="tag">Microsoft 365</span>
            <span className="tag">Power BI</span>
            <span className="tag">IT Support</span>
            <span className="tag">Cybersecurity</span>
            <span className="tag">Web Admin</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Why this portfolio?</h2>
        </div>
        <div className="section-card">
          <p>
            This portfolio highlights practical IT experience with systems, automation, and analytics delivered for business outcomes. It is built to match the expectations of recruiters and hiring managers searching for a data-driven IT professional.
          </p>
        </div>
      </section>
    </div>
  );
}
