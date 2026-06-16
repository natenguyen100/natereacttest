import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PeoplePage from "./components/PeoplePage";
import CounterPage from "./components/CounterPage";

export default function App() {
  return (
    <BrowserRouter>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
