import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import Stars from "./components/canvas/Stars";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <div>
      {/* bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-600 */}
      <BrowserRouter>
        <div className="relative z-0  bg-gradient-to-r from-cyan-300 via-cyan-600 to-pink-400">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
        
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
