import React from "react";
import "./EpicCaseStudy.css"; // Use a separate CSS file for styling

const EpicCaseStudy = () => {
  return (
    <div className="case-study-page">
      {/* Case Study Header Section */}
      <section className="case-study-header">
        <div className="case-study-text">
          <h1 className="case-title">Epic</h1>
          <h2 className="case-subtitle">Case Study of Optimization Redesign</h2>
          <p className="case-description">
            We streamlined emergency workflows by enhancing real-time EMT-to-ER 
            data transfer, reducing manual documentation, and optimizing the 
            medical ordering system for faster, more efficient patient care.
          </p>
          <p className="designer-info">
            <strong>Maya Khan, UX Designer</strong> <br />
            01/15/2025 - 03/10/2025
          </p>
          <p className="launch-date">Launched March 14, 2025</p>
        </div>

        {/* Right Side Image */}
        <div className="case-study-image">
          <img src="@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

/* ========== GLOBAL STYLES ========== */
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  background-color: #FDF3E5;
}

body::-webkit-scrollbar {
  display: none;
}

/* Main App Container */
.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FDF3E5;
  -webkit-overflow-scrolling: touch;
}

/* ========== NAVIGATION STYLES ========== */
.heading-nav {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #FDF3E5;
}

.heading-nav nav {
  display: flex;
  gap: 20px;
}

.nav-button {
  font-family: 'Montserrat', sans-serif;
  background: none;
  border: none;
  color: #E6AF2E;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-button:hover,
.nav-button.active {
  font-weight: 700;
  font-size: 1.3rem;
}

.linkedin-button, .resume-button {
  font-family: 'Montserrat', sans-serif;
  background: none;
  border: none;
  color: #E6AF2E;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* ========== HOME PAGE STYLES ========== */
.home-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 60px 0;
}

.introHome {
  text-align: center;
}

.nameIntro {
  color: #7AB574;
  font-size: 3rem;
}

.p1 {
  color: #E6AF2E;
  font-size: 1.5rem;
  width: 80%;
  margin: 20px auto;
}

/* ========== CASE STUDY
" alt="Epic EMT Handoff Portal UI" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview">
        <h2>Overview</h2>
        <div className="overview-content">
          <img src="Component 5.png" className="overview-image" />
          <p>
            Emergency medicine operates in high-pressure, time-sensitive 
            conditions, yet electronic health record (EHR) systems like Epic 
            often create workflow inefficiencies that slow down EMTs, 
            ER doctors, nurses, medical technicians, and emergency teams. 
            Our project focused on improving the EMT-to-ER patient handoff 
            process by integrating real-time data sharing, simplifying 
            patient registration, and streamlining medication ordering to 
            enhance hospital preparedness in critical situations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EpicCaseStudy;
