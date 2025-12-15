import React, { useState, useEffect } from "react";
import logoImage from "./assets/logo.png";
import "./NavBar.css";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuData = [
    {
      key: "soil",
      label: "Soil Hydrology Technologies",
      items: [
        "Digital Soil Texture Analyzers",
        "Forest Soil Compaction Meters",
        "Streamflow Monitoring Sensors",
        "Soil Respiration Chambers",
      ],
    },
    {
      key: "atmosphere",
      label: "Atmosphere & Emissions Monitoring",
      items: [
        "Eddy Covariance Flux Towers",
        "Precision Particulate Monitors",
        "Methane & Nitrous Oxide Analyzers",
        "Canopy Temperature Sensors",
      ],
    },
    {
      key: "integrated",
      label: "Integrated Monitoring & Decision Support",
      items: [
        "AI Forest Health Platforms",
        "LiDAR Forest Mapping",
        "Web Management Dashboards",
        "Wireless Sensor Grids",
      ],
    },
    {
      key: "more",
      label: "More",
      items: ["About Us"],
    },
    {
      key: "career",
      label: "Career",
      items: ["AI Internship Opportunities"],
    },
  ];

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img src={logoImage} alt="Logo" style={styles.logoImg} />
        <h2 style={styles.logoText}>Enviro Forest</h2>
      </div>

      {/* Hamburger (Mobile) */}
      {isMobile && (
        <div
          style={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </div>
      )}

      {/* Menu */}
      <ul
        style={{
          ...styles.menu,
          ...(isMobile ? styles.mobileMenu : {}),
          display: isMobile && !mobileMenuOpen ? "none" : "flex",
        }}
      >
        {menuData.map((menu) => (
          <li
            key={menu.key}
            style={styles.menuItem}
            onMouseEnter={() => !isMobile && setActiveMenu(menu.key)}
            onMouseLeave={() => !isMobile && setActiveMenu(null)}
            onClick={() =>
              isMobile &&
              setActiveMenu(activeMenu === menu.key ? null : menu.key)
            }
          >
            {menu.label}

            {activeMenu === menu.key && (
              <ul style={styles.dropdown}>
                {menu.items.map((item, index) => (
                  <li key={index} style={styles.dropdownItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Right Button */}
      {!isMobile && (
        <div style={styles.rightSection}>
          <button className="contactButton">CONTACT US</button>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    background: "#ffffff",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(24, 36, 25, 0.1)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logoImg: {
    width: "40px",
  },

  logoText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "green",
  },

  hamburger: {
    fontSize: "26px",
    cursor: "pointer",
  },

  menu: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    margin: 0,
    padding: 0,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },

  mobileMenu: {
    position: "absolute",
    top: "70px",
    left: 0,
    right: 0,
    background: "#ffffff",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "20px 0",
  },

  menuItem: {
    position: "relative",
    cursor: "pointer",
    fontWeight: "500",
  },

  dropdown: {
    position: "absolute",
    top: "120%",
    left: 0,
    background: "#333",
    listStyle: "none",
    padding: "10px 0",
    margin: 0,
    minWidth: "260px",
    borderRadius: "8px",
    zIndex: 2000,
  },

  dropdownItem: {
    padding: "10px 20px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },

  rightSection: {
    position: "absolute",
    right: "160px",
  },
};
