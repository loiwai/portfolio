import React from 'react';

export default function Projects() {
  return (
    <div className="page projects">
      <section className="section">
        <div className="section-header">
          <h1>Experience & Work</h1>
        </div>
        <div className="cards-grid">
          <article className="card">
            <h3>Information Security Support</h3>
            <p>
              As a GRC Associate, I help manage policy reviews, user access checks, risk assessments, incident tracking and compliance tasks.
            </p>
            <ul>
              <li>Support security controls and documentation.</li>
              <li>Help review access and monitor compliance activity.</li>
              <li>Track incidents and assist with follow-up actions.</li>
            </ul>
          </article>

          <article className="card">
            <h3>Reporting & Data Work</h3>
            <p>
              I build reports and analyze data to support business decisions and help teams understand their IT and security performance.
            </p>
            <ul>
              <li>Create clear, easy-to-read reports.</li>
              <li>Use SQL and analytics tools for data insights.</li>
              <li>Provide support for IT and compliance reporting.</li>
            </ul>
          </article>

          <article className="card">
            <h3>Volunteer Web & IT Support</h3>
            <p>
              I volunteer with the Institute of Internal Auditors PNG as a Web Administrator and IT Support resource.
            </p>
            <ul>
              <li>Maintain website content and functionality.</li>
              <li>Provide technical support for events and members.</li>
              <li>Help improve online systems and support availability.</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
