import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Suppress MetaMask and other extension errors
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason?.message?.includes('MetaMask') || 
      event.reason?.message?.includes('Failed to connect')) {
    event.preventDefault();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
