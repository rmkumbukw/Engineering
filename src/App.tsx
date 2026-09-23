import "./App.css";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Topics from "./components/Pages/topics";
import Streams from "./components/Pages/streams";
import Contact from "./components/Pages/contact";
import NavBars from "./components/std/navbars";
import Footer from "./components/std/footer";
import Accordion from "./components/ui/accordion";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MechE from "./components/Pages/meche";
import ElE from "./components/Pages/ele";
import ChemE from "./components/Pages/cheme";

// This App.tsx is the main hub for the website: routes, layout, and state. links everything on the website together
function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <NavBars />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/streams" element={<Streams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meche" element={<MechE />} />
        <Route path="/ele" element={<ElE />} />
        <Route path="/cheme" element={<ChemE />} />
      </Routes>
      <Accordion />
      <Footer />
    </Router>
  );
}
console.log(
  "BASE_URL:",
  import.meta.env.BASE_URL,
  "URL:",
  window.location.href,
);

export default App;
