import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import spinner from "../assets/loading.svg";

export const Product = () => {
  const { id } = useParams();
  const [keyboard, setKeyboard] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchKeyboard = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://mkbgb.herokuapp.com/api/keyboards/" + id
      );
      const keyboard = await res.json();
      setIsLoading(false);
      setIsError(false);
      setKeyboard(keyboard);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchKeyboard();
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
      <Link to="/">
        <h1 className="text-3xl dark:text-neutral-50 text-gray-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Something went wrong, click to return home
        </h1>
      </Link>
    );
  }
  return (
    <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 max-w-7xl m-auto">
      <div className="inline-block">
        <Link to="/">
          <p className="hidden h-fit w-fit px-8 py-2 text-sm bg-sky-300 rounded-md text-neutral-50 font-bold mt-5 mb-3 sm:block">
            Return Home
          </p>
        </Link>
        <img
          src={keyboard.img}
          alt="Product"
          className="object-cover rounded-md mt-5 sm:mt-0"
        />
        <div>
          <h1 className="text-gray-800 dark:text-neutral-50 text-3xl xs:text-4xl font-bold mt-3">
            {keyboard.name}
          </h1>
          <p className="text-gray-700 dark:text-neutral-50 text-xl xs:text-2xl font-medium">
            ${keyboard.price}
          </p>
          <p className="text-gray-700 dark:text-neutral-50 text-lg xs:text-xl mt-5 mb-5 break-all">
            {keyboard.info}
          </p>
          <div className="flex justify-between">
            <a
              className="inline-block h-fit w-fit px-5 py-4 bg-violet-700 rounded-md text-neutral-50 font-bold"
              target="_blank"
              rel="noreferrer"
              href={keyboard.origin}
            >
              View Origin
            </a>
            <Link to="/">
              <p className="inline-block h-fit w-fit px-5 py-4 bg-sky-300 rounded-md text-neutral-50 font-bold sm:hidden">
                Return Home
              </p>
            </Link>
          </div>
          <div className="h-5"></div>
        </div>
      </div>
    </div>
  );
};
