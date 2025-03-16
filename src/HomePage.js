import React, { useState } from "react";
import './HomePage.css';


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
            <section className="case-study-intro">
              {/* Left Content Section */}
              <div className="case-study-text">
                <h1>Epic</h1>
                <h2 className="subtitle">Case Study of Optimization Redesign</h2>
                <p>
                  We streamlined emergency workflows by 
                  enhancing real-time EMT-to-ER data 
                  transfer, reducing manual documentation, 
                  and improving medical ordering system.
                </p>
                </div>
            

              {/* Right Image Section */}
              <div className="case-study-image">
                <img src="epicRightImageIntro.png" alt="Epic EMT Handoff Portal UI" />
              </div>
            </section>
             <section className="overview">
                <h2>Overview</h2>
                <img src="Component 5.png" className ="case-study-image"/>
                <p>Emergency medicine operates in high-pressure, time-sensitive 
                conditions, yet electronic health record (EHR) systems like
                Epic often create workflow inefficiencies that slow down EMTs, 
                ER doctors, nurses, medical technicians, and emergency teams. 
                Our project focused on improving the EMT-to-ER patient handoff 
                process by integrating real-time data sharing, simplifying 
                patient registration, and streamlining medication ordering to 
                enhance hospital preparedness in critical situtations.</p>
              </section>
      
            <hr className="divider" />
            <section className="problem-statement">
              <h2>The Problem</h2>
              <p>Emergency room doctors need to quickly capture essential patient data 
                during time-sensitive situations, but current documentation requirements 
                force them to choose between thorough record-keeping and immediate patient 
                care. This trade-off can lead to delayed treatments, increased cognitive 
                strain, and potential gaps in patient records, ultimately compromising both 
                efficiency and patient outcomes.
              </p>
            </section>

            <hr className="divider" />
            <section className="research">
              <h2>Research & Insights</h2>
              <img src="Screenshot 2024-12-11 at 9.07.02 PM.png" className ="case-study-image"/>
              <p>To fully understand these pain points, we conducted user interviews and usability 
              testing with our key stakeholders:

              Dr. Sofia J Dasti (Emergency Physician): Highlighted workflow inefficiencies, cognitive 
              overload, and the need for real-time patient handoff integration in Epic.

              Kyra Brandt (Epic Software Trainor): Provided insights into how EMTs and hospital staff 
              use Epic, customization limitations, and areas for UX improvement.
              </p>
              <ul>
              <li> <strong>EMTs:</strong> Need a **faster way to send patient data** before arrival.</li>
              <li> <strong>Doctors:</strong> Lose **10+ minutes per patient** due to **manual data entry & lack of real-time updates**.</li>
              <li> <strong>Nurses & Techs:</strong> Struggle with **missing info**, causing **delayed lab tests & room prep**.</li>
              <li> <strong>Current tracking boards:</strong> Don't highlight **EMT patients in transit**, delaying hospital response.</li>
              </ul>
            </section>

            <hr className="divider" />
            <section className="design">
              <h3>The Solution: A Smarter EMT Handoff Portal</h3>
              <p>We redesigned the **EMT-to-ER patient handoff** to improve speed, clarity, and hospital readiness.</p>
              
              <h4>EMT Handoff Portal</h4>
              <ul>
                <li><strong>Auto-detects nearest hospital</strong> & pre-fills details.</li>
                <li><strong>One-tap patient handoff</strong> that updates the hospital’s tracking board instantly.</li>
                <li><strong>EMT priority alerts</strong> highlight incoming critical patients.</li>
              </ul>

              <h4>Medication Ordering System</h4>
              <ul>
                <li> **Pre-set dosage selection** for quick orders.</li>
                <li> **Urgent order bypass** for emergencies.</li>
                <li> **Auto-fills past prescriptions** for returning patients.</li>
              </ul>
            </section>

            <hr className="divider" />
            <section className="impact">
              <h3>The Impact</h3>
              <p>By cutting **10+ minutes of wasted time per critical case**, our system allows hospitals to act faster.</p>
              <ul>
                <li> <strong>Doctors</strong> can **call in specialists sooner**, preventing delays in trauma & cardiac cases.</li>
                <li> <strong>Nurses</strong> get **clearer patient data upfront**, allowing faster **room prep & IV setup**.</li>
                <li> <strong>Techs & Radiologists</strong> receive **early imaging & test requests**, reducing ER congestion.</li>
                <li> <strong>EMTs</strong> spend **less time on paperwork**, focusing more on **patient care**.</li>
              </ul>
            </section>

            <hr className="divider" />
            <section className="next-steps">
              <h3>What’s Next?</h3>
              <ul>
                <li> Conduct **more usability testing** with EMTs & ER staff.</li>
                <li> Explore **real-time patient updates** in the ER dashboard.</li>
                <li> Integrate **voice-to-text** for hands-free EMT reporting.</li>
              </ul>
            </section>

            <footer className="cta">
              <p>Want to see it in action? <a href="INSERT_FIGMA_LINK">Check out the Figma Prototype</a></p>
            </footer>
            <button onClick={() => setActiveSection("home")} className="back-button">
              Back to Case Studies →
            </button>
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
