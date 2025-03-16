import React, { useState } from "react";
import './App.css';


function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="home-section">
            <div className="introHome">
              <h1 className="nameIntro">Hi,&nbsp;I'm&nbsp;Maya.</h1>
              <p className="p1">
              a UI/UX designer passionate about blending AI with thoughtful design to create intuitive, transformative digital experiences.
              </p>
            </div>
            <div className="case-studies">
              <p className="myCaseStudies">MY CASE STUDIES</p>
              <hr className="divider" />
              <div className="case-study row-left">
                <img
                  src="Screenshot 2024-12-11 at 9.07.02 PM.png"
                  alt="Foot Scale Project Design"
                  className="case-study-image"
                />
                <div className="case-study-details">
                  <a
                    href="#"
                    onClick={() => setActiveSection("caseStudy1")}
                    className="case-study-title"
                  >
                    EPIC SOFTWARE CASE STUDY
                  </a>
                  <p>01 - UX RESEARCH - UX/UI DESIGN - FIGMA PROTOTYPING</p>
                  <p className="description">Enhancing Epic’s medication ordering system to streamline workflows, reduce errors, and improve efficiency in emergency care.</p>
                </div>
              </div>
              <div className="case-study row-right">
                <div className="case-study-details">
                <a
                href="https://www.figma.com/deck/CKtT9HDylheCMWEVbvyl7W/Stepify-CSE-170-Final-Project?node-id=1-27&t=s8WnnKFesDFasWmq-1"
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-title"
              >
                    STEPIFY
                  </a>
                  <p>02 - UX RESEARCH - UX/UI DESIGN - UX WRITING</p>
                  <p className="description">Designed to make walking engaging and rewarding with incentives.</p>
                </div>
                <img
                  src="Screenshot 2024-12-11 at 9.14.55 PM.png"
                  alt="Stepify Case Study"
                  className="case-study-image"
                />
              </div>
              <div className="case-study row-left">
                <img
                  src="Component 2.png"
                  alt="Experimental Design Case Study"
                  className="case-study-image"
                />
                <div className="case-study-details">
                <a 
                  href="https://docs.google.com/document/d/1MhplTLdrUugZEVedmhA_2ypwYyARs7B58ezdcJgwjY4/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-button feline-research"
                >
                  FELINE BEHAVIOR RESEARCH
                </a>
                  <p>03 - EXPERIMENTAL DESIGN - OBSERVATIONAL RESEARCH</p>
                  <p className="description">An observational experiment researching the influence of time on the behavior of felines.</p>
                </div>
              </div>
              <div className="case-study row-right">
                <div className="case-study-details">
                  <a
                  href="https://www.figma.com/deck/w9fE9Cy6lZv9cT8TzUmWjR/ReFind-Pitch-Deck?node-id=1-87&t=s8WnnKFesDFasWmq-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study-title"
                >
                    REFIND
                  </a>
                  <p>04 - PITCH - UX RESEARCH - UX/UI DESIGN </p>
                  <p className="description">Personal project to develop an app combining machine learning, fashion, and sustainability.</p>
                </div>
                <img
                  src="Component 3 (3).png"
                  alt="Refind Case Study"
                  className="case-study-image"
                />
              </div>
            </div>
          </div>
        );
      case "about":
        return (
          <div className="about-section">
            <div className="graphic">
              <h1 className="nameIntro">A&nbsp;little&nbsp;bit&nbsp;about&nbsp;me.</h1>
              <div className="profilePic"></div>
             </div>
              <p className="p1">
                I am an aspiring<span> UI/UX designer</span> currently pursuing a
                degree in Cognitive Science, specializing in Machine Learning and
                Neural Computation, with a minor in Computer Science.
              </p>
              <hr className="divider" />
              <p className="p2">
                I am passionate about harnessing the power of Artificial Intelligence
                and blending it with my expertise in user research, interaction
                design, and software development to curate seamless digital
                experiences. By integrating AI technologies with thoughtful design, I
                hope to make technology more intuitive, accessible, and transformative
                for users.
              </p>
              <hr className="divider" />
              <h1 className="interestsHeading">My Interests</h1>
              <p className="bulletPoints">
              𖤓 Fashion<br />
              𖤓 Sustainability<br />
              𖤓 Art<br />
              𖤓 Cooking<br />
              𖤓 Travel<br />
              𖤓 Volunteering<br />
              </p>
            </div>
         );
      case "caseStudy1":
        return (
          <div className="case-study-page">
        {/* HEADER SECTION */}
        <section className="case-study-section">
          <div className="case-study-text">
            <h1>Epic</h1>
            <h2>Case Study of Optimization Redesign</h2>
            <p>
              We streamlined emergency workflows by enhancing real-time EMT-to-ER 
              data transfer, reducing manual documentation, and optimizing the 
              medical ordering system for faster, more efficient patient care.
            </p>
          </div>
          <div className="case-study-image">
            <img src={"Frame 1.png"} alt="Epic EMT Handoff Portal UI" />
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="case-study-section">
          <div className="case-study-text">
            <h2>Overview</h2>
            <p>
              Emergency medicine operates in high-pressure, time-sensitive conditions. 
              Yet electronic health record (EHR) systems like Epic create workflow 
              inefficiencies that slow down EMTs, ER doctors, nurses, medical 
              technicians, and emergency teams.
            </p>
          </div>
          <div className="case-study-image">
            {/* <img src={researchImage} alt="Overview UI" /> */}
          </div>
        </section>

        {/* DESIGN SOLUTION SECTION */}
        <section className="case-study-section">
          <div className="case-study-text">
            <h2>The Solution: A Smarter EMT Handoff Portal</h2>
            <ul>
              <li><strong>Auto-detects nearest hospital</strong> & pre-fills details.</li>
              <li><strong>One-tap patient handoff</strong> updates the hospital’s tracking board instantly.</li>
              <li><strong>EMT priority alerts</strong> highlight incoming critical patients.</li>
            </ul>
          </div>
          <div className="case-study-image">
            {/* <img src={designImage} alt="Design UI" /> */}
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="case-study-section">
          <div className="case-study-text">
            <h2>The Impact</h2>
            <p>By reducing workflow inefficiencies, we saved **10+ minutes per case**, enabling hospitals to act faster.</p>
          </div>
          <div className="case-study-image">
            {/* <img src={impactImage} alt="Impact Metrics" /> */}
          </div>
      </section>
     </div>
        );
      case "caseStudy2":
        return (
          <div className="case-study-page">
            <h1>Case Study: Blended Communities</h1>
            <p>Details about Blended Communities case study...</p>
            <button onClick={() => setActiveSection("home")} className="back-button">
              Back to Case Studies →
            </button>
          </div>
        );
        case "caseStudy3":
          return (
            <div className="case-study-page">
              <h1>Case Study: Time of Day & It's Influence on Feline Behavior</h1>
              <p>Details about Blended Communities case study...</p>
              <button onClick={() => setActiveSection("home")} className="back-button">
                Back to Case Studies →
              </button>
            </div>
          );
          case "caseStudy4":
          return (
            <div className="case-study-page">
              <h1>Case Study: Refind</h1>
              <p>Details about Blended Communities case study...</p>
              <button onClick={() => setActiveSection("home")} className="back-button">
                Back to Case Studies →
              </button>
            </div>
          );
      default:
        return <h1>Select a Section</h1>;
    }
  };

  return (
    <div className="App">
      <header className="heading-nav">
        <nav>
          <button
            onClick={() => setActiveSection("home")}
            className={activeSection === "home" ? "nav-button active" : "nav-button"}
          >
            HOME
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className={activeSection === "about" ? "nav-button active" : "nav-button"}
          >
            ABOUT
          </button>
          <a
          href="https://mayadastikhan.github.io/Portfolio/MayaKhanResume2025.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={activeSection === "resume" ? "nav-button active" : "resume-button"}
        >
          RESUME
        </a>
          <button
            onClick={() => (window.location.href = 'mailto:mayadastikhan@gmail.com')}
            className="nav-button"
          >
            CONTACT
          </button>
          <a
            href="https://www.linkedin.com/in/maya-khan-34779028b/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
           >
            LINKEDIN
          </a>
        </nav>
      </header>
      <main className="App-content">{renderSection()}</main>
    </div>
  );
}

export default App;
