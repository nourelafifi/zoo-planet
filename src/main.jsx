import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";  // Import HashRouter

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter>   {/* Wrap the app in HashRouter for GitHub Pages */}
            <App />
        </HashRouter>
    </React.StrictMode>
);