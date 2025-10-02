import React from 'react';

export default function Contact() {
  return (
    <div className="page contact">
      <h1>Contact</h1>
      <p>
        Let's connect! You can reach me at:
        <br />
        <strong>Email:</strong> <a href="mailto:www.loiwai700@gmail.com">www.loiwai700@gmail.com</a>
        <br />
        <strong>Phone:</strong> 675 - 72272799
      </p>
      <p>
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

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
