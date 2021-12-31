import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Error } from "./pages/Error";
const App = () => {
  const getDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(getDarkMode === "true");

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div
        className={
          darkMode
            ? "dark bg-neutral-900 min-h-screen"
            : "bg-neutral-50 min-h-screen"
        }
      >
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
