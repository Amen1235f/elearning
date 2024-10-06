import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/Navbar/Navbar";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Introduction from "./components/Introduction/Introduction";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Greetings from "./components/greetings/greetings";
import Testimonals from "./components/Testimonals/Testimonals";
import Contact from "./components/Contact/Contact";
import LessonNavigation from "./components/LessonNavigation/LessonNavigation";

import './App.css';
import BeginnerHTMLCourse from "./components/BeginnerHTMLCourse/BeginnerHTMLCourse";
import BuildHTMLHouse from "./components/BuildHTMLHouse/BuildHTMLHouse";
import IntermediateHTML from "./components/IntermediateHTML/IntermediateHTML";
import HTMLBuilderGame from "./components/HTMLBuilderGame/HTMLBuilderGame";
import AdvancedHTML from "./components/AdvancedHTML/AdvancedHTML";
import BuildPortfolio from "./components/BuildPortfolio/BuildPortfolio";
import BeginnerCSSCourse from "./components/BeginnerCSS/BeginnerCSS";
import CSSQuizGame from "./components/CSSQuizGame/CSSQuizGame";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/lessons" element={<LessonNavigation />} />
            <Route path="/beginner-html-course" element={<BeginnerHTMLCourse />} />
            <Route path="/BuildHTMLHouse" element={<BuildHTMLHouse />} />
            <Route path="/intermediate-html-course" element={<IntermediateHTML />} />
            <Route path="/HTMLBuilderGame" element={<HTMLBuilderGame />} />
            <Route path="/AdvancedHTML" element={<AdvancedHTML />} />
            <Route path="/BuildPortfolio" element={<BuildPortfolio />} />
            <Route path="/BeginnerCSSCourse" element={<BeginnerCSSCourse />} />
            <Route path="/CSSQuizGame" element={<CSSQuizGame />} />

            <Route path="/" element={
              <>
                <Introduction />
                <About />
                <Services />
                <Greetings />
                <Testimonals />
                <Contact />
             
              </>
            } />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
