import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");

if (redirect) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const decoded = decodeURIComponent(redirect || "/");

    const path = decoded.startsWith("/") ? decoded : `/${decoded}`;

    window.history.replaceState(null, "", `${base}${path}`);
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
