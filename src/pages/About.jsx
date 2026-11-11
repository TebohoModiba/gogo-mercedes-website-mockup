import React from "react";

export default function About() {
  return (
    <section className="section section-anchor" id="about">
      <div className="section-kicker"><span>01</span><i /> The person behind the name</div>
      <div className="about-grid">
        <div className="about-photo image-placeholder">
          <span>Portrait image</span>
          <small>Replace with an owner-approved photograph</small>
          <b className="photo-caption">Gogo Mercedes</b>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A little introduction</p>
          <h2>A story rooted in <em>heritage.</em></h2>
          <p>
            Welcome. This space introduces Gogo Mercedes and provides a place to
            learn about her work, interests and activities.
          </p>
          <p>
            The story, biography and cultural details on this page should be
            personalised with information supplied and approved by Gogo Mercedes.
            We believe the most meaningful introduction is one told in her own words.
          </p>
          <a className="text-link" href="#contact">Start a conversation <span>↗</span></a>
          <div className="about-note"><span>“</span><p>Rooted in identity. Open to connection.</p></div>
        </div>
      </div>
    </section>
  );
}
