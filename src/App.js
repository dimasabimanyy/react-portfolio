import "./style/App.css";
import Hero from "./components/Header/HeroContainer";
import Navigation from "./components/Header/Navigation";
import AboutContainer from "./components/About/AboutContainer";
import ServicesContainer from "./components/Services/ServicesContainer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <AboutContainer />
      <ServicesContainer />
    </div>
  );
}

export default App;
