import React from "react";
import AntiScamBanner from "./components/AntiScamBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Testimonies from "./pages/Testimonies";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="site-shell">
      <AntiScamBanner />
      <Navbar />
      <main>
        <Home />
        <About />
        <Gallery />
        <Products />
        <Testimonies />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
