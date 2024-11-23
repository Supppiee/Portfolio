import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactMe from "./components/ContactMe";

class CookiePopup extends Component {
  state = {
    showPopup: false,
  };

  componentDidMount() {
    this.setState({ showPopup: true });
  }

  handleAccept = () => {
    this.setState({ showPopup: false });
  };

  render() {
    if (!this.state.showPopup) return null;

    return (
      <div className="fixed bottom-0 left-0 w-full bg-neutral-800 text-neutral-300 p-4 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <span>
            We use cookies to enhance your experience. Please accept to continue.
          </span>
          <button
            onClick={this.handleAccept}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 py-4 w-30 lg:w-40 text-neutral-950 font-bold rounded-lg mt-7 "
          >
            Accept
          </button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="overflow-x-hidden top-0 h-screen w-screen text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-950">
        <div className="h-full w-full fixed top-0 -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container px-10 mx-auto">
          <Navbar />
          <Hero />
          <About />
          <div className="flex flex-wrap align-middle justify-evenly">
            <Education />
            <Technologies />
          </div>
          <Projects />
          <ContactMe />
          <Contact></Contact>
        </div>
        <CookiePopup />
      </div>
    );
  }
}

export default App;
