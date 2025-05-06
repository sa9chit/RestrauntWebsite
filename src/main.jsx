import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./contextApi/Context.jsx";
import { BrowserRouter as Router } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </StrictMode>
);
