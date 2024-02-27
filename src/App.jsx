import React, { useState } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [show, setShow] = useState(true);
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className={`container ${show ? "container-show" : null}`}>
            <div class="background">
              <div></div>
              <div></div>
            </div>
            <Sidebar />
            <div className="nav-container">
              <Navbar show={show} setShow={setShow} />
              <div className="main-div">
                <div className="main-wrapper">
                  <AnimatePresence mode="wait">
                    <Routes>
                      <Route index element={<Home />} />
                      <Route path="/products" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
