import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className={darkMode ? "dark bg-neutral-900" : "bg-neutral-50"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        search={search}
        setSearch={setSearch}
      />
      <Products search={search} />
    </div>
  );
};

export default App;
