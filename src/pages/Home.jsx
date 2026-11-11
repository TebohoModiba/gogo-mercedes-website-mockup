import React from "react";

export default function Home() {
  return (
    <section className="hero section-anchor" id="home">
      <div className="hero-image" role="img" aria-label="Warm-toned cultural portrait placeholder">
        <div className="image-placeholder"><span>Portrait photography</span><small>Add an approved photograph of Gogo Mercedes</small></div>
      </div>
      <div className="hero-content">
        <span className="eyebrow"><i /> A space for culture and connection</span>
        <h1>Honouring tradition.<br /><em>Connecting generations.</em></h1>
        <p className="hero-intro">
          Discover the work, offerings and community activities of Gogo Mercedes.
          Explore the site and get in touch to learn more.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#about">Discover the story <span>↗</span></a>
          <a className="button button-outline" href="#contact">Make an enquiry</a>
        </div>
        <div className="hero-footnote"><span>01 / 06</span><span className="line" /><span>Explore the website</span></div>
      </div>
      <a className="scroll-cue" href="#about">Scroll to explore <span>↓</span></a>
    </section>
  );
}
