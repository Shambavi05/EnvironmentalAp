import React from "react";
import Sub from "./assets/sub.webp";
import "./Sub.css"

export default function SubSection() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // 2 columns: image left, text right
        gap: "20px",
        height: "600px",                // adjust height
        padding: "20px",
        alignItems: "center",
      }}
    >
      {/* Left column: Image */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={Sub}
          alt="Sub section"
          className="flippingImage"
          style={{ width: "100%", height: "500px", width: "600px" , borderRadius: "10px" }}
        />
      </div>

      {/* Right column: Text */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Sustainability at a Glance
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            At Enviro Forest, headquartered at 701 Fifth Avenue, Seattle, WA, 98104, USA, we specialize in delivering innovative environmental testing technologies tailored for the forestry sector. Our mission is to empower businesses with scalable, intelligent solutions that promote sustainable forest management. Backed by advanced research, stringent quality assurance, and a dedicated customer support framework, we provide reliable tools that enhance operational efficiency and decision-making in forest ecosystems. 

        <p style={{fontSize: "18px" , lineHeight: "1.6" }}>
            With a strong and expanding B2B presence across North America, Enviro Forest leads in product reliability, smart integration, and technological innovation. From soil health to atmospheric data, our comprehensive solutions are designed to help environmental professionals, researchers, and businesses monitor, analyze, and respond to real-time forest conditions with precision and ease. 
            </p>
         </p>
         <div>
         <button className="LetsConnect">
    Let's Connect
  </button>
  </div>
      </div>
    </div>
  );
}
