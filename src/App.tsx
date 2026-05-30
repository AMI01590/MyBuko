import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage dark={dark} setDark={setDark} />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/dashboard"
          element={<Dashboard dark={dark} setDark={setDark} />}
        />
      </Routes>
    </Router>
  );
}

export default App;