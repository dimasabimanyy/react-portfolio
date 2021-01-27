import React, { useState, useEffect } from "react";
import "./style/App.css";
import Hero from "./components/Header/HeroContainer";
import Navigation from "./components/Header/Navigation";
import AboutContainer from "./components/About/AboutContainer";
import ServicesContainer from "./components/Services/ServicesContainer";
import SkillSetContainer from "./components/SkillSet/SkillSetContainer";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import Youtube from "./components/Youtube/Youtube";
import ContactContainer from "./components/Contact/ContactContainer";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading";

function App() {
  const [loadTime, setLoadTime] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadTime(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loadTime ? (
        <Loading loading={loadTime} />
      ) : (
        <div className="main-content">
          <header>
            <Navigation />
            <Hero />
          </header>
          <ServicesContainer />
          <AboutContainer />
          <SkillSetContainer />
          <ProjectsContainer />
          <Youtube />
          <ContactContainer />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
