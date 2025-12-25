import React from "react";
import Human from "./assets/human.jpg";
import "./Forth.css";


export default function VerticalCards() {
  return (
    <div style={{ padding: "50px 20px" }}>
  <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#333", textAlign: "center" }}>
    Our Core Testing Systems
  </h2>

  {/* MAIN LAYOUT */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: "50px",
      alignItems: "center",
    }}
  >
    {/* LEFT IMAGE */}
    <div>
      <img
        src={Human}
        alt="Testing Systems"
        style={{
          width: "100%",
          borderRadius: "16px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT ORDERED LIST */}
    <ol style={{ fontSize: "16px", lineHeight: "1.8", paddingLeft: "0", listStyleType: "none" }}>
      <li style={listItemStyle}>
        <span style={numberStyle}>01</span>
        <h2>Soil & Hydrology Testing Systems</h2>

        <p style={{marginBottom: "16px"}}>
          We offer smart testing systems that monitor moisture content, nutrient levels,
          and hydrological flow in forest soils. These tools help predict vegetation health
          and biodiversity changes.
        </p>
        <button className="LetsConnect">Let’s Connect</button>
      </li>

      <li style={listItemStyle}>
        <span style={numberStyle}>02</span>
        <h2>Forest Atmosphere & Emissions Monitoring</h2>

        <p style={{marginBottom: "16px"}}>
          Advanced solutions to track atmospheric conditions and greenhouse gas emissions
          within forest regions, supporting environmental compliance and climate studies.
        </p>
        <button className="LetsConnect">Let’s Connect</button>
      </li>

      <li style={listItemStyle}>
        <span style={numberStyle}>03</span>
        <h2>Integrated Monitoring & Decision Support</h2>

        <p style={{marginBottom: "16px"}}>
          Centralized dashboards combining multiple data streams with real-time alerts and
          analytics to optimize forest resource management.
        </p>
        <button className="LetsConnect">Let’s Connect</button>
      </li>
    </ol>
  </div>
</div>

      )}

const buttonStyle = {
  marginTop: "auto",
  padding: "8px 14px",
  fontSize: "14px",
  fontWeight: "bold",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const listItemStyle = {
  marginBottom: "30px",
};

const numberStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#3d6bafff", // highlighted green
};



