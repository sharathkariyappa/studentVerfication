import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { Web3ModalProvider } from "./Web3Provider"; // Import your Web3ModalProvider
import reportWebVitals from './reportWebVitals';

// Ensure that the root element is found
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router> {/* Add Router here */}
      <Web3ModalProvider>
        <App />
      </Web3ModalProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
