import React from 'react';

export default function Contact() {
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
  const buttonStyle = {
    minWidth: 220,
    background: '#e3f0ff',
    color: '#1565c0',
    fontWeight: 700,
    border: 'none',
    borderRadius: 8,
    padding: '0.8rem 1.2rem',
    fontSize: '1.08em',
    boxShadow: '0 2px 8px rgba(21,101,192,0.07)',
    cursor: 'pointer',
    marginTop: '1rem',
  };

  return (
    <div className="page contact" style={cardStyle}>
      <h1 style={headingStyle}>Contact</h1>
      <div style={sectionStyle}>
        <p style={{ margin: 0 }}>
          Let's connect! You can reach me at:<br />
          <strong>Email:</strong> <a href="mailto:www.loiwai700@gmail.com">www.loiwai700@gmail.com</a><br />
          <strong>Phone:</strong> 675 - 72272799
        </p>
      </div>
      <div style={{ ...sectionStyle, background: '#eaf6ff' }}>
        <p style={{ margin: 0 }}>
          Or simply use the form below for collaborations, inquiries, or to discover more surprises!
        </p>
        <form
          action="https://formspree.io/f/mldpnjgn"
          method="POST"
          className="contact-form"
          style={{ maxWidth: 400, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="your@email.com" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required placeholder="Type your message..." rows={5} />

          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
