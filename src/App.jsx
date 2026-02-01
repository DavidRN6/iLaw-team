import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Nexus from "./pages/Nexus";
import { AnimatePresence } from "framer-motion";
import PageTransitionWrapper from "./animation/PageTransitionWrapper";

function App() {
  const location = useLocation();

  return (
    <div className="text-primary dark:bg-secondary transition-colors duration-300">
      <Header />
      <div className="container px-6 mx-auto bg-background dark:bg-secondary transition-colors duration-300">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransitionWrapper>
                  <Home />
                </PageTransitionWrapper>
              }
            />
            <Route
              path="/features"
              element={
                <PageTransitionWrapper>
                  <Features />
                </PageTransitionWrapper>
              }
            />
            <Route
              path="/nexus"
              element={
                <PageTransitionWrapper>
                  <Nexus />
                </PageTransitionWrapper>
              }
            />
            <Route
              path="/team"
              element={
                <PageTransitionWrapper>
                  <Team />
                </PageTransitionWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransitionWrapper>
                  <Contact />
                </PageTransitionWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;
