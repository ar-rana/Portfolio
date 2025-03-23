import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Pages/Home.tsx"));
const About = lazy(() => import("./Pages/About.tsx"));
const Project = lazy(() => import("./Pages/Project.tsx"));
const Contact = lazy(() => import("./Pages/Contact.tsx"));
const Blog = lazy(() => import("./Pages/Blog.tsx"));
import ParticleEffect from "./components/ParticleEffect/ParticleEffect";
import Loading from "./components/Loading/Loading.tsx";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/connect-with-me" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </Suspense>
      <ParticleEffect />
    </BrowserRouter>
  );
}

export default App;
