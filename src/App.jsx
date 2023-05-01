import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  Tech,
  StarsCanvas
} from "./components";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className="relative z-0">git
        <Tech />
        <Feedbacks />
        <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
