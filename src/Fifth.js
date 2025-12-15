import React from "react";
import serviceImg from "./assets/service.jpg"; // left image
import "./Fifth.css"

export default function ServicesSection() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        
        {/* LEFT SIDE */}
        <div style={leftStyle}>
          <span style={badgeStyle}>OUR SERVICE</span>
          <h2 style={headingStyle}>
            Our Environmental Services <br /> Include
          </h2>

          <div style={imageCardStyle}>
            <img
              src={serviceImg}
              alt="service"
              style={imageStyle}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={rightGridStyle}>
          <div className="flippingCard">
          <ServiceCard
            title="Afforestation & Reforestation Projects"
            text="We design and implement large-scale tree planting initiatives to restore degraded land, improve biodiversity, and combat climate change through carbon sequestration."
          />
          </div>

          <div className="flippingCard">
          <ServiceCard
            title="Eco-Maintenance & Monitoring"
            text="Ongoing care and ecological monitoring ensure long-term health of restored environments, with data-driven insights to track vegetation growth, soil quality, and ecosystem recovery."
          />
          </div>


          <div className="flippingCard">
          <ServiceCard
            title="Sustainable Land Use & Site Planning"
            text="We provide expert land assessment and ecological planning to help developers, communities, and governments build responsibly while preserving natural resources."
          />
          </div>


          <div className="flippingCard">
          <ServiceCard
            title="Carbon Footprint Offset Programs"
            text="Our certified offset programs allow businesses to neutralize emissions through verified carbon sequestration projects like reforestation and habitat restoration."
          />
          </div>


          <div className="flippingCard">
          <ServiceCard
            title="Environmental Impact Reports & Compliance"
            text="We deliver detailed environmental assessments aligned with regulatory standards, helping you navigate compliance, minimize risks, and operate sustainably."
          />
          </div>
          </div>
        </div>
    </section>
  );
}
function ServiceCard({ icon, title, text }) {
  return (
    <div style={cardStyle}>
      <img src={icon} alt="" style={iconStyle} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
const sectionStyle = {
  backgroundColor: "#155c3b",
  padding: "80px 60px",
};

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr",
  gap: "60px",
  alignItems: "start",
};

const leftStyle = {
  color: "white",
};

const badgeStyle = {
  backgroundColor: "white",
  color: "#155c3b",
  padding: "6px 14px",
  fontSize: "12px",
  borderRadius: "6px",
  fontWeight: "bold",
};

const headingStyle = {
  fontSize: "38px",
  margin: "20px 0 40px",
};

const imageCardStyle = {
  borderRadius: "20px",
  overflow: "hidden",
  opacity: 0.6,
  height: "1000px",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const rightGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "30px",
};

const cardStyle = {
  backgroundColor: "#178a4a",
  padding: "30px",
  borderRadius: "16px",
  color: "white",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
};

const iconStyle = {
  width: "40px",
  marginBottom: "15px",
};
