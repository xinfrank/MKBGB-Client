import { useState, useEffect } from "react";
import spinner from "../assets/loading.svg";

export const Products = ({ search }) => {
  const [keyboards, setKeyboards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const keyboards_filtered = keyboards.filter((keyboard) => {
    return keyboard.name.toLowerCase().indexOf(search) > -1;
  });

  const fetchKeyboards = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://mkbgb.herokuapp.com/api/keyboards");
      const keyboards = await res.json();
      setIsLoading(false);
      setIsError(false);
      setKeyboards(keyboards);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchKeyboards();
  }, []);

  if (isLoading) {
    return (
      <img
        src={spinner}
        alt="Loading spinner"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24"
      />
    );
  }

  if (isError) {
    return (
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
        Sorry, something went wrong
      </h1>
    );
  }

  return (
    <div className="w-4/5 xs:w-9/12 md:w-4/5 max-w-7xl m-auto">
      <h1 className="font-bold text-2xl mt-5 text-gray-800 dark:text-neutral-50">
        Live Group Buys
      </h1>
      <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-6 mt-5">
        {keyboards_filtered.length > 0 ? (
          keyboards_filtered.map((keyboard) => {
            return (
              <div
                key={keyboard.uuid}
                className="rounded-md overflow-hidden shadow-md dark:bg-neutral-800"
              >
                <img
                  className="h-52 object-cover w-full"
                  src={keyboard.img}
                  alt="keyboard"
                />
                <div className="px-6 py-2 xs:py-4">
                  <div className="font-bold text-xl mb-1 xs:mb-2 text-gray-800 dark:text-neutral-50">
                    {keyboard.name}
                  </div>
                  <p className="text-gray-700 dark:text-neutral-100 text-base">
                    {keyboard.date}
                  </p>
                </div>
                <div className="px-6 pb-1 pt-1 xs:pt-2 xs:pb-2">
                  <span className="inline-block bg-sky-200 dark:bg-violet-300 rounded-full px-3 py-1 text-sm font-semibold dark:text-violet-800 mr-2 mb-2">
                    ${keyboard.price}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-neutral-800 dark:text-neutral-50">
            No products were found
          </h1>
        )}
      </div>
    </div>
  );
};
