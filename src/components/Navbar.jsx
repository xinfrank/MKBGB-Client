import { Search } from "./Search";
import { BsSun, BsMoonFill } from "react-icons/bs";

export const Navbar = ({ darkMode, setDarkMode, search, setSearch }) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-20 bg-white dark:bg-neutral-800 transition-all shadow-sm"></div>
      <nav className="flex items-center w-4/5 xs:w-9/12 md:w-4/5 max-w-7xl m-auto h-20">
        <div className="pr-10 hidden md:block -ml-1">
          <button className="kbc-button kbc-button-light">M</button>
          <button className="kbc-button kbc-button-light">K</button>
          <button className="kbc-button kbc-button-light">B</button>
          <button className="kbc-button kbc-button-light">G</button>
          <button className="kbc-button kbc-button-light">B</button>
        </div>
        <div className="pr-3 xxs:pr-1 sm:pr-10 block md:hidden -ml-1">
          <button className="kbc-button kbc-button-light">MKBGB</button>
        </div>
        <Search search={search} setSearch={setSearch} />
        {darkMode ? (
          <button
            className="h-11 w-11 rounded-md flex justify-center items-center bg-sky-300 ml-auto z-50"
            type="button"
            onClick={() => setDarkMode((prevTheme) => !prevTheme)}
          >
            <BsSun fill="#000000" size={18} />
          </button>
        ) : (
          <button
            className="h-11 w-11 rounded-md flex justify-center items-center bg-violet-700 ml-auto z-50"
            type="button"
            onClick={() => setDarkMode((prevTheme) => !prevTheme)}
          >
            <BsMoonFill fill="#FFFFFF" size={18} />
          </button>
        )}
      </nav>
    </>
  );
};
