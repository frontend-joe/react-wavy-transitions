import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

import { Nav } from "./layout/Nav";
import { Main } from "./layout/Main";

import { WavyContainer } from "./library/waves";

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Main />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<>...</>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<>...</>}>
                <Contact />
              </Suspense>
            }
          />
          <Route path="*" element={<>No Match</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
