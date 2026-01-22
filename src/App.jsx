import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Research from "./pages/Research";
import Demo from "./pages/Demo";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="text-primary">
      <Header />
      <div className="container px-6 mx-auto bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/research" element={<Research />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
