import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Background } from "./Components/Background";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Skill from "./Components/Skill/Skill";

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
                <Background>
                  <Hero />
                  <Skill />
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
