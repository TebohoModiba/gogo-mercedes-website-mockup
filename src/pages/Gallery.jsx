import React from "react";

const captions = ["Moments & memories", "Culture & craft", "Community gatherings", "Behind the scenes", "Creative expression", "Shared experiences"];

export default function Gallery() {
  return (
    <section className="section section-soft section-anchor" id="gallery">
      <div className="section-heading">
        <div><div className="section-kicker"><span>02</span><i /> A visual collection</div><h2>Moments worth <em>sharing.</em></h2></div>
        <p>A selection of photographs and moments. Add only images that the business owns or has permission to publish.</p>
      </div>
      <div className="gallery-grid">
        {captions.map((caption, index) => (
          <div className={`gallery-tile gallery-tile-${index + 1}`} key={caption}>
            <div className="gallery-placeholder"><span>Image {String(index + 1).padStart(2, "0")}</span><small>Add approved photo</small></div>
            <div className="gallery-caption"><span>{caption}</span><b>0{index + 1}</b></div>
          </div>
        ))}
      </div>
    </section>
  );
}
