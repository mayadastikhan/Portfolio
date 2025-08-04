import React, { useState } from "react";
import './App.css';
import epicIntroImg from "../src/Frame 1 (2).png";
import epicCaseStudyImg from "../src/EpicCaseStudyImg.png";
import userPersona from "../src/UserPersona (1).png";
import userFlow from "../src/UserFlow (1).png";
import UxFlowDrawn from "../src/UxFlowDrawn.png";
import lowfi from "../src/LowFi.png";
import lowfiMedOrder from "../src/lowFiMedOrder.png";
import emtPortal from "../src/emtPortal.png";
import earlyHiFi from "../src/earlyHiFi.png"
import medOrderAlt from "../src/medOrderAlt.png"
import emtPortalAlt from "../src/emtPortalAlt.png"
import hiFiFinalMedOrder from "../src/Hi-Fi Prototype for UX Flow 3.png"
import hiFiFinalEmtPortal from "../src/EMT Portal Alternative Screens.png"
import beforeAfter1 from "../src/Before and After Stories 1.png"
import beforeAfter2 from "../src/Before and After Stories 2.png"
import { useEffect } from "react"; // make sure both are imported
function App() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection])

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
                  src={epicCaseStudyImg}
                  alt="Foot Scale Project Design"
                  className="case-study-pic"
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
                    href="#"
                    onClick={() => setActiveSection("caseStudy2")}
                    className="case-study-title"
                  >
                    ENERGY AVE 
                  </a>
                  <p>02 - UX RESEARCH - UX/UI DESIGN - FIGMA PROTOTYPING - GAMEDEV</p>
                  <p className="description">An interactive educational game that teaches energy conservation habits through gamified tasks, immediate feedback, and user-centered design.</p>
                </div>
                <img
                  src="ENERGY AVE COVER.png"
                  alt="Energy Ave Game"
                  className="case-study-pic"
                />
              </div>

              <div className="case-study row-left">
                <img
                  src="Screenshot 2024-12-11 at 9.14.55 PM.png"
                  alt="Stepify Case Study"
                  className="case-study-pic"
                />
                <div className="case-study-details">
                <a 
                  href="https://www.figma.com/deck/CKtT9HDylheCMWEVbvyl7W/Stepify-CSE-170-Final-Project?node-id=1-27&t=s8WnnKFesDFasWmq-1"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-button feline-research"
                >
                    STEPIFY
                  </a>
                  <p>03 - UX RESEARCH - UX/UI DESIGN - UX WRITING</p>
                  <p className="description">A prototype for an app designed to make walking engaging and rewarding with incentives through gamified tasks.</p>
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
                  <p className="description">Personal project, developing an app that combinines machine learning, fashion, and sustainability through user research and intuitive design.</p>
                </div>
                <img
                  src="Component 3 (3).png"
                  alt="Refind Case Study"
                  className="case-study-pic"
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
                <img src={epicIntroImg} alt="Epic EMT Handoff Portal UI" />
              </div>
            </section>
             <section className="overview">
                <h2>Overview</h2>
                <p>Emergency medicine operates in high-pressure, time-sensitive 
                conditions, yet electronic health record (EHR) systems like
                Epic often create workflow inefficiencies that slow down EMTs, 
                ER doctors, nurses, medical technicians, and emergency teams. 
                Our project focused on improving the EMT-to-ER patient handoff 
                process by integrating real-time data sharing, simplifying 
                patient registration, and streamlining medication ordering to 
                enhance hospital preparedness in critical situtations.</p>
              </section>

            <section className="problem-statement">
              <h2>The Problem</h2>
              <p>Emergency room doctors, nurses, and technicians need to quickly capture essential patient data 
                during time-sensitive situations, but current documentation requirements 
                force them to choose between thorough record-keeping and immediate patient 
                care. This trade-off can lead to delayed treatments, increased cognitive 
                strain, and potential gaps in patient records, ultimately compromising both 
                efficiency and patient outcomes.
              </p>
            </section>

            <section className="research-intro">
                <h2>Research & Insights</h2>
                <p>To fully understand these pain points, we conducted user interviews and usability 
                testing with our key stakeholders:
                </p>
              </section>

            <section className="research">

              <div className="stakeholder">
                <h3>Dr. Sofia Dasti (Emergency Physician)</h3>
                <ul>
                  <li>Uses Epic daily in the ER but faces <strong>workflow inefficiencies</strong>.</li>
                  <li><strong>Frequent logins</strong> (100+ times per shift) slow down patient care.</li>
                  <li><strong>Order placement barriers</strong>: Rigid system requirements prevent quick actions in critical cases.</li>
                  <li><strong>Click fatigue</strong>: Excessive steps and documentation requirements increase cognitive strain.</li>
                  <li><strong>Simultaneous access issues</strong>: Only one user can edit a patient’s chart at a time, causing workflow bottlenecks.</li>
                </ul>
              </div>

              <div className="stakeholder">
                <h3>Kyra Brandt (Epic Software Trainer)</h3>
                <ul>
                  <li>Trains new Epic users, focusing on <strong>workflow-based learning</strong>.</li>
                  <li><strong>Customization is both a strength and a challenge</strong>—every hospital configures Epic differently, making training difficult.</li>
                  <li><strong>Feedback-driven approach</strong>: Epic updates its software and training programs based on user input.</li>
                  <li><strong>ER-specific training</strong> ensures staff can navigate the system efficiently under pressure.</li>
                </ul>
              </div>
              <div className="key-takeaways">
              <h3>Key Takeaways</h3>
              <ul>
                <li>Epic’s system is robust but has <strong>usability barriers</strong> that slow emergency workflows.</li>
                <li>Login delays, complex order entry, and documentation burdens impact patient care.</li>
                <li><strong>Real-time data sharing</strong> and <strong>better customization training</strong> could enhance efficiency.</li>
              </ul>
            </div>
            </section>

            
              {/* Title Section */}
              <div className="research-intro">
                <h2>The Solution: A Smarter EMT Handoff Portal</h2>
                <p>
                  We redesigned the <strong>EMT-to-ER patient handoff</strong> to improve speed, 
                  clarity, and hospital readiness. Our design process was driven by <strong>user research</strong>, 
                  <strong>iterative testing</strong>, and <strong>real-time data integration</strong> to create a 
                  <strong> seamless</strong> and <strong>intuitive</strong> solution for EMTs and hospital staff.
                </p>
              </div>
              <section className="design">
              {/* UX Design Process */}
              <div className="ux-process">
                <h3>UX Design Process</h3>
                <p>
                  Our iterative design approach focused on solving real user pain points. Through 
                  <strong> user research, prototype testing, and feedback loops</strong>, we developed a solution 
                  that significantly improves emergency workflows.
                </p>

                {/* Personas Section */}
                <div className="personas">
                  <h4>Understanding Our Users</h4>
                  <p>
                    We created <strong>personas</strong> representing <strong>EMTs</strong>, <strong>ER physicians</strong>, 
                    and <strong>nurses</strong> to better understand their needs and frustrations. This helped us define the 
                    core functionalities of the system.
                  </p>
                  <div className="design-image">
                    <img src={userPersona} alt="User Personas" />
                  </div>
                </div>

                {/* Low-Fidelity Prototypes Section */}
                <div className="lowfi-prototypes">
                  <h4>Low-Fidelity Prototypes</h4>
                  <p>
                    We started with <strong>hand-drawn sketches</strong> and <strong>wireframes</strong>, testing different 
                    workflows with users. These early tests allowed us to refine the most 
                    intuitive interactions before moving to high-fidelity designs.
                  </p>
                  <div className="design-image">
                    <img src={UxFlowDrawn} alt="Low-Fidelity Wireframes" />
                  </div>
                  <div className="design-image">
                    <img src={lowfi} alt="Low-Fidelity Wireframes" />
                  </div>
                </div>

                {/* UX Flow Section */}
                <div className="ux-flow">
                  <h4>UX Flow Refinement</h4>
                  <p>
                    Our final <strong>UX Flow</strong> enables <strong>real-time patient handoff</strong> by reducing manual 
                    data entry and highlighting urgent cases, ensuring that hospitals can prepare 
                    <strong> before</strong> the patient arrives.
                  </p>
                  <div className="design-image">
                    <img src={userFlow} alt="Final UX Flow" />
                  </div>
              </div>

              {/* EMT Handoff Portal Section */}
              <div className="design-feature">
                <h3>EMT Handoff Portal</h3>
                <p>
                  The <strong>EMT Handoff Portal</strong> enables emergency responders to <strong>transmit critical 
                  patient data</strong> instantly, reducing cognitive load and improving hospital preparedness.
                </p>
                <ul>
                  <li><strong>Auto-detects nearest hospital</strong> & pre-fills patient details.</li>
                  <li><strong>One-tap patient handoff</strong> updates the hospital’s tracking board instantly.</li>
                  <li><strong>EMT priority alerts</strong> highlight incoming critical patients.</li>
                </ul>
                <div className="design-image">
                  <img src={emtPortal} alt="EMT Handoff Portal UI" />
                </div>
              </div>

              {/* Medication Ordering System Section */}
              <div className="design-feature">
                <h3>Medication Ordering System</h3>
                <p>
                  Our <strong>Medication Ordering System</strong> minimizes errors and improves efficiency by 
                  enabling <strong>faster</strong>, <strong>safer</strong>, and <strong>more accurate</strong> medication orders.
                </p>
                <ul>
                  <li><strong>Pre-set dosage selection</strong> for quick and accurate orders.</li>
                  <li><strong>Urgent order bypass</strong> for high-priority cases.</li>
                  <li><strong>Auto-fills past prescriptions</strong> for returning patients.</li>
                </ul>
                <div className="design-image">
                  <img src={lowfiMedOrder} alt="Medication Ordering UI" />
                </div>
              </div>
              </div>
            </section>

            <section className="impact">
              {/* Title Section */}
              <div className="impact-intro">
                <h2>Enhancing Emergency Workflows</h2>
                <p>
                  Our final solution significantly reduces inefficiencies, cutting down 
                  wasted time by over an estimated <strong>10 minutes per critical case</strong>. 
                  This ensures that emergency teams can respond <strong>faster and more accurately</strong>.
                </p>
              </div>

              {/* User Testing Insights */}
              <div className="ux-testing">
                <h3>User Testing & Findings</h3>
                <p>
                  During testing, we presented multiple workflow prototypes to 
                  <strong> ER physicians</strong> and <strong>triage nurses</strong>. 
                  Their feedback helped refine our final design.
                </p>

                {/* Alternative Designs Explored */}
                <div className="alternative-designs">
                  <h4>Alternative Approaches Explored</h4>
                  <ul>
                    <li>
                      <strong>Prototype A:</strong> Focused on streamlining the **medication ordering process** with a bypass feature.
                    </li>
                    <li>
                      <strong>Prototype B:</strong> Emphasized real-time **EMT patient tracking** with pre-filled intake forms.
                    </li>
                  </ul>
                  <p>
                    <strong>Final Decision:</strong> Users preferred a <strong>hybrid approach</strong>, integrating the 
                    <strong> urgent medication bypass</strong> from Prototype A and the 
                    <strong> real-time patient tracking board</strong> from Prototype B. 
                  </p>
                </div>
              </div>

              {/* Key Improvements Based on User Feedback */}
              <div className="key-improvements">
                <h3>Key Refinements Based on User Feedback</h3>

                {/* Patient Intake & Registration */}
                <div className="improvement">
                  <h4>Streamlined Patient Intake</h4>
                  <ul>
                    <li><strong>An allergy field</strong> for quick registration with bypass option</li>
                    <li><strong>Pre-filled EMT Data</strong> enabling faster handoff and room assignments.</li>
                    <li><strong>Temporary Name Generator</strong> for unidentified patients, preventing confusion.</li>
                  </ul>
                </div>

                {/* Medication Ordering Optimization */}
                <div className="improvement">
                  <h4>Optimized Medication Ordering</h4>
                  <ul>
                    <li><strong>One-tap medication ordering</strong> for life-threatening emergencies.</li>
                    <li><strong>Urgent order bypass</strong> that enables immediate prescribing.</li>
                    <li><strong>Auto-fill past prescriptions</strong> for returning patients.</li>
                  </ul>
                </div>

                {/* EMT Tracking Board */}
                <div className="improvement">
                  <h4>Enhanced EMT Tracking Board</h4>
                  <ul>
                    <li><strong>Critical patients highlighted</strong> to improve visibility for triage teams.</li>
                    <li><strong>A portal for communication with EMTs</strong> for real-time patient updates.</li>
                    <li><strong>Severity indicators</strong> to help detect deteriorating conditions at a glance.</li>
                  </ul>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="key-takeaways">
                {/* Final Takeaways (Stakeholder Insights) */}
                <h3>Stakeholder Insights & Final Takeaways</h3>
                  <ul>
                    <li>
                    ER physicians emphasized the need for <strong> immediate access</strong> to real-time 
                      <strong> patient vitals and arrival estimates</strong>, leading to the integration 
                      of <strong>live status updates</strong> in our final design.
                    </li>
                    <li>
                    Doctors found<strong> manual intake to be the biggest bottleneck</strong>, 
                      prompting the addition of <strong>automated patient pre-registration</strong> 
                      and <strong>one-tap intake confirmation</strong>.
                    </li>
                
                    <li>
                    Epic software trainers<strong> highlighted usability challenges</strong>, leading 
                      to <strong>simplified workflows with reduced clicks</strong> and <strong>pre-set templates</strong>.
                    </li>
                  </ul>
                </div>
            </section>
            {/* UX Flow Evolution Section */}
            <section className="ux-flow-evolution">
              <h2>Evolution of UX Flow & High-Fidelity Prototypes</h2>
              <p>
                Our design process involved multiple iterations of the UX flow based on user testing. 
                Below, we showcase our early high-fidelity prototypes, alternative concepts considered, 
                and the final version refined after user feedback.
              </p>

              {/* Initial High-Fidelity Prototypes */}
              <div className="prototype-section">
                <h3>Early High-Fidelity Prototypes</h3>
                <p>
                  Our first high-fidelity designs focused on streamlining the EMT handoff process and simplifying medication orders. 
                  These designs were tested with EMTs and ER staff to evaluate usability and workflow efficiency.
                </p>
                <div className="ux-images">
                  <img src={earlyHiFi} alt="Early High-Fidelity Prototype - Medication Orders" />
                </div>
              </div>

              {/* Alternative Concepts & User Preferences */}
              <div className="prototype-section">
                <h3>Alternative Concepts & User Preferences</h3>
                <p>
                  Throughout testing, we explored different data presentation formats, navigation styles, and user inputs. 
                  Below are some alternative layouts we tested and the preferences expressed by our users.
                </p>
                <div className="ux-images">
                  <img src={medOrderAlt} alt="Alternative Layout - List-Based Handoff" />
                  <img src={emtPortalAlt} alt="Alternative Layout - Tabbed Navigation" />
                </div>
                <ul>
                  <li><strong>List-Based Handoff:</strong> EMTs found this intuitive but wanted a quicker, more visual approach.</li>
                  <li><strong>Tabbed Navigation:</strong> ER staff preferred this for medication ordering, but it required too many clicks.</li>
                  <li><strong>Best Practices:</strong> Users preferred a single, streamlined interface with collapsible sections.</li>
                </ul>
              </div>

              {/* Final High-Fidelity Prototype after User Feedback */}
              <div className="prototype-section">
                <h3>Final High-Fidelity Prototype</h3>
                <p>
                  After incorporating user feedback, we finalized a high-fidelity prototype that reduced manual entry, 
                  improved readability, and optimized critical task flows. This version enhances real-time patient handoff, 
                  provides clearer medication ordering, and minimizes cognitive load for EMTs and ER staff.
                </p>
                <div className="ux-images">
                  <img src={hiFiFinalMedOrder} alt="Final High-Fidelity Prototype - Medication Ordering System" />
                  <img src={hiFiFinalEmtPortal} alt="Final High-Fidelity Prototype -Streamlined EMT Handoff" />
                </div>
                <div className="ux-images">
                <img src={beforeAfter2} alt="Patient Chart Screen Before and After" />
                  <img src={beforeAfter1} alt="Medical Ordering Screen Before and After" />
                </div>
              </div>
            </section>

            {/* Conclusion Section */}
            <section className="conclusion">
              <h2>Conclusion & High-Fidelity Prototype Refinements</h2>
              <p>
                Our final design integrates feedback from multiple testing rounds, refining the system 
                to better meet the needs of EMTs and ER staff.
              </p>
              <ul>
                <li>A <strong>streamlined EMT handoff system</strong> with real-time updates and priority alerts.</li>
                <li>A <strong>more flexible medication ordering system</strong> with emergency overrides.</li>
                <li>An <strong>intuitive patient summary interface</strong> to improve hospital intake efficiency.</li>
              </ul>

            </section>

            <footer className="cta">
              <p>Want to see it in action? <a href="https://www.figma.com/proto/bAuQXehyU77uBjndiSqJEQ/Designs?node-id=258-3807&p=f&t=UqeeXahc4ghnVYLN-1&scaling=min-zoom&content-scaling=fixed&page-id=162%3A489&starting-point-node-id=258%3A3807&show-proto-sidebar=1">Check out the Figma Prototype</a></p>
            </footer>
            <button onClick={() => setActiveSection("home")} className="back-button">
              Back to Case Studies →
            </button>
          </div>
        );
      case "caseStudy2":
        return (
          <div className="case-study-page">
            <section className="case-study-intro">
              {/* Left Content Section */}
              <div className="case-study-text">
                <h1>Energy Ave</h1>
                <h2 className="subtitle">Gamifying Energy Conservation for Kids</h2>
                <p>
                  We partnered with PlanetFlip to develop an interactive, educational game that
                  encourages elementary-aged students to adopt energy-saving habits. Through
                  engaging design and gamified feedback, Energy Avenue bridges the gap between
                  awareness and action.
                </p>
                </div>
            

              {/* Right Image Section */}
              <div className="case-study-image">
                <img
                    src="ENERGY AVE COVER.png"
                    alt="Energy Ave Game"
                />
              </div>
            </section>
             
            <section className="overview">
              <h2>Overview</h2>
              <p>
                Climate education often lacks the interactivity needed to drive behavioral change,
                especially in younger audiences. Our mission was to design a fun, engaging game
                that teaches players simple, real-world actions—like unplugging electronics or
                turning off lights—to build sustainable habits through repetition and feedback.
              </p>
            </section>
      
            <section className="problem-statement">
              <h2>The Problem</h2>
              <p>
                Despite increasing concern about climate change, many young students aren’t
                equipped with the tools to take action. Traditional educational methods fall short
                in fostering long-term engagement and habit formation around energy conservation.
              </p>
            </section>
      
            <section className="research-intro">
              <h2>Research & Insights</h2>
              <p>
                To guide our design, we interviewed sustainability educators and analyzed existing
                educational games. We discovered a need for more engaging, visually-driven tools
                tailored to younger audiences that also provide immediate, meaningful feedback.
              </p>
              <div className="stakeholder">
                <h3>Educator Interviews</h3>
                <ul>
                  <li>Interactive tools help students retain lessons better than lectures.</li>
                  <li>Most existing climate games are either too passive or lack real-life relevance.</li>
                  <li>Teachers want tools that are classroom-friendly and easy to integrate.</li>
                </ul>
              </div>
              <div className="stakeholder">
                <h3>Game Analysis Takeaways</h3>
                <ul>
                  <li>Repetitive mechanics reduce long-term engagement.</li>
                  <li>Effective games combine simplicity with reward systems.</li>
                  <li>Visual feedback and mini goals improve player retention.</li>
                </ul>
              </div>
            </section>
      
            <section className="research-intro">
              <h2>The Solution: Energy Avenue</h2>
              <p>
                Players explore rooms in a home and tap on household items to identify energy
                waste. Each correct action earns points and reveals fun facts about energy
                conservation, creating an intuitive, rewarding experience.
              </p>
              <div className="stakeholder">
                <h3>UX Design Process</h3>
                <p>
                  We used a user-centered, iterative approach involving low-fidelity wireframes,
                  high-fidelity prototypes in Figma, and final development in Construct3.
                </p>
              </div>
              <div className="design-image">
              <img
                  src="LOWFI (1).png"
                  alt="Energy Ave Game Low Fidelity"
                />
              </div>
              <div className="design-image">
              <img
                  src="HIFI.png"
                  alt="Energy Ave Game High Fidelity"
                />
              </div>
            </section>
      
            <section className="impact">
              <h2>Impact & User Testing</h2>
              <p>
                During multiple rounds of user testing with students and community members,
                Energy Avenue was praised for its visuals and simplicity. Feedback led us to
                implement a point-based reward system, smoother transitions, and refined tutorials.
              </p>
              <div className="stakeholder">
                <h3>Key Takeaways</h3>
                <ul>
                  <li>Users found the visuals fun and the learning intuitive.</li>
                  <li>Points and challenge levels improved replayability.</li>
                  <li>Simple UI encouraged independent exploration.</li>
                </ul>
              </div>
            </section>
      
            <section className="conclusion">
              <h2>Conclusion & Next Steps</h2>
              <p>
                Energy Avenue demonstrates the power of gamified learning. Moving forward, we
                aim to integrate the game into classrooms, add difficulty levels, and expand to
                other sustainability topics. With stakeholder partnerships, we hope to scale the
                game for wider impact.
              </p>
            </section>
      
            <footer className="cta">
              <p>Want to see it in action? <a href="https://aquamarine-faloodeh-96404d.netlify.app/">View Energy Ave Here</a></p>
            </footer>
      
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