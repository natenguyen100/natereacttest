import { createRoot } from "react-dom/client"; // needed
import App from "./App.tsx";

const rootDiv = document.getElementById("root"); // TypeScript notation which means ignore null checks
if (rootDiv === null) {
  throw new Error("rootDiv is missing");
}
createRoot(rootDiv).render(<App />);
