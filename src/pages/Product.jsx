import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl dark:text-neutral-50 text-gray-800">
        Sorry, something went wrong
      </h1>
    );
  }
  return (
    <div className="w-4/5 xs:w-9/12 md:w-4/5 max-w-7xl m-auto">
      <div className="grid grid-cols-2 gap-4">
        <img src={keyboard.img} alt="Product" />
        <div>
          <h1>{keyboard.name}</h1>
          <p>{keyboard.price}</p>
          <p>{keyboard.info}</p>
          <a target="_blank" rel="noreferrer" href={keyboard.origin}>
            View Origin
          </a>
        </div>
      </div>
    </div>
  );
};
