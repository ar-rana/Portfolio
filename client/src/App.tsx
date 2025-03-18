import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import ParticleEffect from "./components/ParticleEffect/ParticleEffect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/connect-with-me" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
      <ParticleEffect />
    </BrowserRouter>
  );
}

export default App;
