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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
