export const Search = ({ search, setSearch }) => {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="w-2/5">
      <input
        className="border-2 border-keyboard-100 bg-white h-10 w-full focus:outline-gray-400 rounded-md text-md !pl-4 !font-normal kbc-button kbc-button-light"
        type="search"
        name="search"
        placeholder="Search"
        onChange={searchHandler}
      ></input>
    </div>
  );
};
