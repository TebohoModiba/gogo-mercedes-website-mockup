import React, { useState } from "react";

const links = [
  ["about", "Our story"],
  ["gallery", "Gallery"],
  ["products", "Offerings"],
  ["testimonies", "Testimonials"],
  ["events", "Events"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">GM</span>
          <span className="brand-copy">
            <strong>Gogo Mercedes</strong>
            <small>Culture · Community · Connection</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Make an enquiry <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
}
