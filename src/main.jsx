import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/mui-config.js";

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
    </ThemeProvider>
);