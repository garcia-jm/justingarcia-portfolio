import { useState } from "react";
import "./App.css";
import { Navbar, Projects, Header, AboutMe, Footer } from "./components";
function App() {
  return (
    <div>
      <div className="app__bg info__wrapper">
        <Navbar />
        <Header />
      </div>
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
