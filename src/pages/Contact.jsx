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
    background: '#1565c0',
    color: '#fff',
    fontWeight: 700,
    border: 'none',
    borderRadius: 8,
    padding: '0.8rem 1.2rem',
    fontSize: '1.08em',
    boxShadow: '0 4px 12px rgba(21,101,192,0.25)',
    marginTop: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const inputStyle = {
    padding: '0.75rem 1rem',
    borderRadius: 8,
    border: '1px solid #ccc',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  const inputFocusStyle = {
    borderColor: '#1565c0',
    boxShadow: '0 0 6px rgba(21,101,192,0.2)',
  };

  return (
    <div className="page contact">
      <h1 style={headingStyle}>Contact</h1>
      <p style={{ margin: '2rem 0', lineHeight: 1.6 }}>
        Let's connect! You can reach me at:<br />
        <strong>Email:</strong> <a href="mailto:www.loiwai700@gmail.com">www.loiwai700@gmail.com</a><br />
        <strong>Phone:</strong> 675 - 72272799
      </p>
      <p style={{ margin: '2rem 0', lineHeight: 1.6 }}>
        Or simply use the form below for collaborations, inquiries, or to tell me about something!
      </p>
      <form
        action="https://formspree.io/f/mldpnjgn"
        method="POST"
        className="contact-form"
        style={{
          maxWidth: 450,
          margin: '2rem auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          style={inputStyle}
          onFocus={e => e.target.style = {...inputStyle, ...inputFocusStyle}}
          onBlur={e => e.target.style = inputStyle}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your@email.com"
          style={inputStyle}
          onFocus={e => e.target.style = {...inputStyle, ...inputFocusStyle}}
          onBlur={e => e.target.style = inputStyle}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Type your message..."
          rows={5}
          style={inputStyle}
          onFocus={e => e.target.style = {...inputStyle, ...inputFocusStyle}}
          onBlur={e => e.target.style = inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={e => e.target.style.background = '#0d47a1'}
          onMouseOut={e => e.target.style.background = '#1565c0'}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
