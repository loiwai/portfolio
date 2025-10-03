import React from 'react';

export default function Contact() {
  const headingStyle = {
    color: '#1565c0',
    fontWeight: 800,
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
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
    marginTop: '1rem',
  };

  return (
    <div className="page contact">
      <h1 style={headingStyle}>Contact</h1>
      <p style={{ margin: '2rem 0' }}>
        Let's connect! You can reach me at:<br />
        <strong>Email:</strong> <a href="mailto:www.loiwai700@gmail.com">www.loiwai700@gmail.com</a><br />
        <strong>Phone:</strong> 675 - 72272799
      </p>
      <p style={{ margin: '2rem 0' }}>
        Or simply use the form below for collaborations, inquiries, or to tell me about something!
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
  );
}
