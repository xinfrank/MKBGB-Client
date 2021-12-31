import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";

export const Home = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        search={search}
        setSearch={setSearch}
      />
      <Products search={search} />
      <div className="h-5"></div>
    </div>
  );
};
