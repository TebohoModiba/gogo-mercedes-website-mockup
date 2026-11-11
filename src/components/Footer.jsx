import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">GM</span>
          <span className="brand-copy"><strong>Gogo Mercedes</strong><small>Culture · Community · Connection</small></span>
        </a>
        <p>A welcoming space to learn more, explore offerings and make an enquiry.</p>
        <a className="text-link light-link" href="#contact">Get in touch <span>↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Gogo Mercedes. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
      <p className="mockup-note">Website concept preview. Business details and content should be confirmed by the owner before publication.</p>
    </footer>
  );
}
