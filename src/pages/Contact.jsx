import React from 'react';

export default function Contact() {
  return (
    <div className="page contact">
      <section className="section">
        <div className="section-header">
          <h1>Contact</h1>
        </div>
        <div className="hero-card">
          <p>
            Let’s connect. I’m available for IT, analytics, and automation roles where I can support systems, reporting, and business improvement.
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:loiwai700@gmail.com">loiwai700@gmail.com</a><br />
            <strong>Phone:</strong> +675 7227 2799
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card contact-card">
          <form action="https://formspree.io/f/mldpnjgn" method="POST" className="contact-form">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="your@email.com" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Send a quick note..." required />

            <button type="submit" className="btn btn-primary">Send message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
