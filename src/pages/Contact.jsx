
import React, { useState } from "react";
import { openWhatsApp } from "../config";

const topics = [
  "General enquiry",
  "Consultation",
  "Products",
  "Events",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    topic: topics[0],
    message: "",
  });

  const [prepared, setPrepared] = useState(false);

  const update = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();

    const message = [
      "Thokoza gogo,",
      "",
      "I would like to make an enquiry.",
      `Name: ${form.name}`,
      `Topic: ${form.topic}`,
      `Message: ${
        form.message.trim() ||
        "I would appreciate more information."
      }`,
    ].join("\n");

    const opened = openWhatsApp(message);
    setPrepared(Boolean(opened));
  };

  return (
    <section
      className="contact-section section-anchor"
      id="contact"
    >
      <div className="contact-intro">
        <div className="section-kicker light-kicker">
          <span>06</span>
          <i /> We'd love to hear from you
        </div>

        <h2>
          Let's start a <em>conversation.</em>
        </h2>

        <p>
          Have a question or need more information?
          Send an enquiry through WhatsApp.
        </p>

        <div className="contact-detail">
          <span>DIRECT ENQUIRIES</span>
          <strong>WhatsApp</strong>
          <small>
            Messages open in WhatsApp for you to review and send.
          </small>
        </div>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <span className="form-kicker">SEND AN ENQUIRY</span>

        <h3>How can we help?</h3>

        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          name="name"
          value={form.name}
          onChange={update}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="contact-topic">
          What is your enquiry about?
        </label>
        <select
          id="contact-topic"
          name="topic"
          value={form.topic}
          onChange={update}
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>

        <label htmlFor="contact-message">
          Your message <span>(optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          value={form.message}
          onChange={update}
          placeholder="Write your message here..."
        />

        <button
          className="button button-dark submit-button"
          type="submit"
        >
          Continue to WhatsApp <span>↗</span>
        </button>

        <p className="privacy-note">
          Your details are placed into a WhatsApp message.
          This demo form does not store or submit information
          to a website database. Review the message before sending.
        </p>

        {prepared && (
          <p className="form-feedback" role="status">
            WhatsApp should have opened in a new tab.
            Review your message and press Send to complete
            your enquiry.
          </p>
        )}
      </form>
    </section>
  );
}
