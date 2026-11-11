import React from "react";
import { openWhatsApp } from "../config";

const offerings = [
  { number: "01", title: "Consultations", description: "For information about consultation availability, format and arrangements.", tag: "Enquire for details" },
  { number: "02", title: "Traditional items", description: "Learn more about available items, their descriptions and current availability.", tag: "Details on request" },
  { number: "03", title: "Custom enquiries", description: "Have a question about a particular offering? Send an enquiry directly.", tag: "Let's talk" },
];

export default function Products() {
  const enquire = (title) => openWhatsApp(`Hello Gogo Mercedes, I would like to enquire about ${title}. Please share more information. Thank you.`);

  return (
    <section className="section section-anchor" id="products">
      <div className="section-heading">
        <div><div className="section-kicker"><span>03</span><i /> Explore the offerings</div><h2>Thoughtfully shared. <em>Personally explored.</em></h2></div>
        <p>Get in touch for accurate information about services, products, pricing and availability.</p>
      </div>
      <div className="offer-grid">
        {offerings.map((item) => (
          <article className="offer-card" key={item.number}>
            <div className="offer-art"><span>{item.number}</span><i>✳</i></div>
            <div className="offer-body">
              <span className="card-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="text-link button-link" onClick={() => enquire(item.title)}>Enquire on WhatsApp <span>↗</span></button>
            </div>
          </article>
        ))}
      </div>
      <p className="fine-print">Offerings shown are illustrative categories for this website concept. Confirm actual services, products, descriptions and prices with the business.</p>
    </section>
  );
}
