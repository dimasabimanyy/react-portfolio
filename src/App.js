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

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
