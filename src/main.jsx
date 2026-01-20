import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");

if (redirect) {
    const decoded = decodeURIComponent(redirect);
    window.history.replaceState(null, "", decoded || "/");
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
