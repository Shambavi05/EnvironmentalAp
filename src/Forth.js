import React from "react";

export default function VerticalCards() {
  return (
    <div style={{ padding: "50px 20px", textAlign: "center" }}>
      {/* Section Heading */}
      <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#333" }}>
        Our Core Testing Systems 
      </h2>

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          flexWrap: "wrap", // make it responsive
        }}
      >
        {/* Card 1 */}
        <div style={cardStyle}>
          <h3>Our Core 
           <br /> Testing  Systems</h3>
          <p>
            We offer smart testing systems that monitor moisture content, nutrient levels, and hydrological flow in forest soils. These tools enable environmental teams to understand soil dynamics and predict changes affecting vegetation health and biodiversity. 
          </p>

          <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Let’s Connect
      </button>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <h3>Forest Atmosphere & Emissions Monitoring</h3>
          <p>
            Enviro Forest provides advanced solutions to track atmospheric conditions and greenhouse gas emissions within forest regions. These technologies support compliance with environmental standards and contribute to broader climate change studies.
          </p>

           <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Let’s Connect
      </button>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <h3>Integrated Monitoring & Decision Support</h3>
          <p>
            Our integrated systems combine data streams from multiple sources into a centralized dashboard, enabling forest managers to make data-driven decisions. With real-time alerts and customizable analytics, these systems help optimize forest resource management. 
          </p>

           <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Let’s Connect
      </button>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
  width: "280px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

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
