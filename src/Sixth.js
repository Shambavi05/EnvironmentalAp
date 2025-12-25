import React from "react";
import backgroundImage1 from "./assets/backgroundImage1.jpg";
import "./Sixth.css";

export default function SixthSec() {
  return (
    // Outer div for layout or padding
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      
      {/* Inner div with background image */}
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        height: "500px",
        width: "100%",
        maxWidth: "1200px",
        backgroundImage: `url(${backgroundImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
        padding: "20px",
        color: "#000000ff",
        position: "relative",
        overflow: "hidden",
      }}
      >
        <div
  style={{
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(21, 92, 59, 0.85)",
    zIndex: 1,
  }}
></div>


        {/* Left column: Text */}
        <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "10px",
    position: "relative",
    zIndex: 2,
    color: "white",
  }}
>

          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
            Interested in learning how our forestry <br />
            testing solutions can support your mission?
          </h2>

          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}>
            Visit our Contact Us page for more information, expert advice, or tailored support.
            Let Enviro Forest help you achieve smarter, greener forest management.
          </p>

          {/* Button below paragraph */}
          <div className="button-container">
            <button className="btn btn-muted">Connect Now </button>
          </div>
        </div>

      </div>
    </div>
  );
}
