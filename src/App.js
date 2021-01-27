import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WebDev from "./components/WebDev";
import MechEng from "./components/MechEng";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/webdev" component={WebDev} />
      <Route exact path="/mecheng" component={MechEng} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
