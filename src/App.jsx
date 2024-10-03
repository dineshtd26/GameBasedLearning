import { Box, Flex } from "@chakra-ui/react";
import './App.css';
import React, { useEffect } from 'react';

import { Navbar } from "./Structrue/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component1 } from "./componentcount/Component1";
import { Component2 } from "./componentcount/Component2";
import { Component3 } from "./componentcount/Component3";
import { Component4 } from "./componentcount/Component4";
import { Component5 } from "./componentcount/Component5";
import { Component6 } from "./componentcount/Component6";
import { Component7 } from "./componentcount/Component7";
import { Component8 } from "./componentcount/Component8";
import { Component9 } from "./componentcount/Component9";
import { Component10 } from "./componentcount/Component10";



function App() {
  useEffect(() => {
    const resetZoom = () => {
      document.body.style.transform = "scale(1)";
      document.body.style.transformOrigin = "0 0";
    };
    const detectZoom = () => {
      const zoomLevel = window.devicePixelRatio || 1;
      if (zoomLevel !== 1) {
        resetZoom();
      }
    };

    window.addEventListener('resize', detectZoom);
    window.addEventListener('wheel', detectZoom);
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '-' || e.key === '0' || (e.key === '+' && e.shiftKey))) {
        e.preventDefault();
        resetZoom(); 
      }
    });
    return () => {
      window.removeEventListener('resize', detectZoom);
      window.removeEventListener('wheel', detectZoom);
      window.removeEventListener('keydown', detectZoom);
    };
  }, []);
  return (
    <Box  bg="#0f0a19" color="gray.500"  className="app">
      <BrowserRouter>
      <Flex>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/Component2" element={<Component2 />} />
          <Route path="/Component3" element={<Component3 />} />
          <Route path="/Component4" element={<Component4 />} />
          <Route path="/Component5" element={<Component5 />} />
          <Route path="/Component6" element={<Component6 />} />
          <Route path="/Component7" element={<Component7 />} />
          <Route path="/Component8" element={<Component8 />} />
          <Route path="/Component9" element={<Component9 />} />
          <Route path="/Component10" element={<Component10 />} />

        </Routes>
        </Flex>

      </BrowserRouter>
    </Box>
  );
}

export default App;
