import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
