import React from "react";
import ThirdSection from "./assets/Third.png";
import background from "./assets/background.jpg";
import "./buttons.css";
import "./Third.css";

export default function ThirdSec() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // 2 columns: text left, image right
        gap: "20px",
        height: "600px",                
        padding: "20px",
        alignItems: "center",
        
        backgroundImage: `linear-gradient(rgba(0, 60, 40, 0.65), rgba(0, 60, 40, 0.65)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      {/* Left column: Text + Buttons */}
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
  }}
>
  <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
    Partner's <br />
    Trusted Partner with Global Recognition
  </h2>

  <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "15px" }}>
    Enviro Forest is designated as an “Expert” and a “Gold Partner” by GAO
    (Global Advanced Operations) Tek Inc., one of the top 10 global B2B
    technology providers, and by GAO RFID Inc., a global leader in BLE and RFID
    technology.
  </p>

  <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "25px" }}>
    We are also a proud sponsor of TekSummit, hosted by our partners.
  </p>

  {/* Buttons */}
  <div className="button-container">
    <button className="btn">GAO Tek TekSummit</button>
    <button className="btn">GAO RFID TekSummit</button>
  </div>
</div>


      {/* Right column: Image */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src={ThirdSection}
          alt="Third section"
          style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}