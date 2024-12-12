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
                    FASHION FORECAST
                  </a>
                  <p>01 - UI DESIGN - FIGMA PROTOTYPING</p>
                  <p className="description">Inch, Foot, and Yard Scale for an app to simplify picking out outfits.</p>
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
                  href="https://mayadastikhan.github.io/Portfolio/COGS%2013%20Final%20Project%20Influence%20on%20Feline%20Behavior.pdf" 
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
            <h1>Fashion Forecast</h1>
            <h2>Inch Scale Design</h2>
            <img src="Component 5.png" className ="case-study-image"/>
            <p>User:
              Ava is a 32 year-old professional (likely working in a corporate
              role) who is living in New York City and constantly on the go.
              She is a fashion-conscious individual who loves to wear trendy,
              fun outfits, but is having trouble creating outfits for work in the
              short amount of time she has before she needs to leave. She
              also never knows what to wear with New York City’s
              unpredictable weather patterns and always finds herself caught
              in the rain without an umbrella.</p>



            <p>Task:
              Ava can quickly put on an outfit that emulates her style and is
              appropriate for New York City’s weather patterns that day. All
              she does is slip on her watch in the morning and the app
              already is synced with her schedule and the weather that day,
              assembling the perfect outfit for Ava within seconds. She also
              has the ability to choose from recommended options for each
              type of clothing to quickly go through all her options of what to
              wear. It was raining that day, so the app reminds her to take an
              umbrella as a precaution before she heads out.
              </p>
              <hr className="divider" />
              <h2>Foot Scale Design</h2>
              <img src="Screenshot 2024-12-11 at 9.07.02 PM.png" className ="case-study-image"/>
              <p>User:
              Ava is a 32 year-old professional (likely working in a corporate
              role) who is living in New York City and constantly on the go.
              She is a fashion-obsessed individual who loves to wear trendy,
              fun outfits, but is having trouble creating outfits for work in the
              short amount of time she has before she needs to leave. She
              never knows what to wear with New York City’s unpredictable
              weather patterns.
              </p>
              <p>
              Task:
              Ava uses the app to quickly assemble a stylish and weather-appropriate 
              outfit for the day. With just a few taps, she can view curated outfit 
              recommendations synced with her schedule and the day’s weather. If she 
              needs inspiration, Ava can upload a photo or choose from Pinterest-like 
              suggestions to recreate an outfit using items in her closet. </p>
              <hr className="divider" />
              <h2>Yard Scale Design</h2>
              <img src="YardScale.png" className ="case-study-image"/>
              <p>User:
              Ava is a 32-year-old professional who works in a corporate
              setting in New York City and needs to curate stylish, functional
              outfits for work and other activities. She is constantly on-thego, but she still wants to efficiently create outfits that can
              withstand New York City’s unpredictable weather and her busy
              schedule. he values efficiency and practicality while
              maintaining her sense of style. She is very interested in fashion
              and always forgets what’s in her closet and doesn’t always
              know how to style her items.
              </p>

              <p>Task:
              Ava checks her screen in the closet while getting ready. The
              display provides a quick overview of what it would recommend
              for her to wear based on her selected activity(which is going to
              work). She can select pieces it recommends and have it
              continue to suggest other items until she has selected all aspects
              of her outfit and is happy with her curated outfit. The system
              saves her outfit to a list of previous outfits which she can
              always go back to look at to rewear and take inspiration from.
              She can also browse through her full wardrobe and separate it
              into categories such as the item of clothing, the season it might
              pertain to, if it's new, or favorited, etc. Now Ava can be
              fashionable with ease and she gets to work with enough time to
              grab a coffee beforehand.
              </p>
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
          href="https://mayadastikhan.github.io/Portfolio/Maya%20Khan%20Resume.pdf" 
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
