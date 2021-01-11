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
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div class={loading ? "loading" : "loading off"}>
          <div class="body">
            <span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="base">
              <span></span>
              <div class="face"></div>
            </div>
          </div>
          <div class="longfazers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1 className="loading-title">Loading...</h1>
        </div>
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
