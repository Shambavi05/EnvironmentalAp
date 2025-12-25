import React from "react";
import heroImage from "./assets/hero.png";
import "./Hero.css";

export default function Hero() {
  return (
  <section
  style={{
    height: "100vh",
    position: "relative",
    backgroundImage: `linear-gradient(rgba(15, 58, 44, 0.65), rgba(8, 8, 8, 0.65)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",   // stack heading and paragraph vertically
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  }}
>
  {/* Overlay for blur effect */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.3)",
      backdropFilter: "blur(1px)",
      zIndex: 1,
    }}
  ></div>

  {/* Text on top */}
  <div style={{ zIndex: 2 }}>
    <h1 style={{ fontSize: "70px", marginBottom: "20px" }}>
  Leading Experts in Sustainable <br />
  <span className="highlight-text">Land Development &</span> <br />
  Reforestation
</h1>


    <p style={{ fontSize: "20px", margin: "0 auto" }}>
      Enviro Forest delivers eco-friendly land solutions, forest restoration services, and <br />
      environmental planning to support biodiversity and climate resilience.
    </p> 
    <br />
    <button className="LearnMore">
    Start Your Green Journey Today
  </button>
  </div>
</section>
  )}
