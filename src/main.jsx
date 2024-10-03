import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import ErrorMessage from "./Structrue/ErrorMessage";
import './index.css'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ErrorMessage/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
