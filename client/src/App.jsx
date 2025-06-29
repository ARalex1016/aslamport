import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Background } from "./Components/Background";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Background>
                  <Skill />
                  <Project />
                  {/* <Services /> */}
                  <Contact />
                </Background>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
