import React from "react";
import Logo from "./assets/logo2.png";

export default function Footer() {
  const footerSectionStyle = {
    flex: 1,
    padding: "20px",
    minWidth: "200px",
    fontSize: "19px",
  };

  const footerContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#328050ff",
    color: "#ffffffff",
    padding: "40px 20px",
  };

  const footerBottomStyle = {
    textAlign: "center",
    backgroundColor: "#7dcc9eff",
    padding: "15px",
    fontSize: "16px",
  };

  const ulStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#ffffffff",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <footer>
      {/* Footer Main */}
      <div style={footerContainerStyle}>

        {/* About Enviro Forest */}
        <div
          style={{
            ...footerSectionStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <img
            src={Logo}
            alt="Enviro Forest Logo"
            style={{ width: "70px", marginBottom: "12px"}}
          />

          <h3 style={{ marginBottom: "12px" }}>Enviro Forest</h3>

          <p style={{ lineHeight: "1.3" }}>
            These technologies evaluate forest soil characteristics and water
            dynamics essential for ecological balance and sustainable forest
            management
          </p>
        </div>

        {/* Quick Links */}
        <div style={footerSectionStyle}>
          <h3>Quick Links</h3>
          <ul style={ulStyle}>
            {[
              { name: "Home", link: "Hero.js" },
              { name: "About Us", link: "Sub.js" },
              { name: "Careers", link: "Services.js" },
              { name: "Get In Touch", link: "Contact.js" },
            ].map((item) => (
              <li key={item.name}>
                <a href={item.link} style={linkStyle}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div style={footerSectionStyle}>
          <h3>Services</h3>
          <ul style={ulStyle}>
            {[
              { name: "Forest Soil & Hydrology Assessment", link: "Hero.js" },
              { name: "Forest Atmosphere & Emissions Monitoring", link: "Sub.js" },
              { name: "Forest Monitoring & Decision Support Systems", link: "Services.js" },
            ].map((service) => (
              <li key ={service.name}>
                <a href={service.link} style={linkStyle}>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Location */}
        <div style={footerSectionStyle}>
          <h3>Our Location</h3>
          <p>123 Green Street, Colombo, Sri Lanka</p>
          <p>Mail: info@envirotest.com</p>
          <p>Call: +94-112345678</p>

          <iframe
            title="EnviroTest Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21520.823527155768!2d-122.33038!3d47.604688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab0b832d2ff%3A0x876d4c735a2ecb5f!2s701%205th%20Ave%2C%20Seattle%2C%20WA%2098104!5e0!3m2!1sen!2sus!4v1765657969604!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      {/* Footer Bottom */}
      <div style={footerBottomStyle}>
        <p>&copy; | 2025 EnviroTest | All Rights Reserved</p>
      </div>
    </footer>
  );
}
