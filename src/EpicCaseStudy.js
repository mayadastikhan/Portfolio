import React from "react";
import "./CaseStudy.css"; // Use a separate CSS file for styling

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
          <img src="Cover.png" alt="Epic EMT Handoff Portal UI" />
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
