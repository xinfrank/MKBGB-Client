import { Link } from "react-router-dom";

export const Card = ({ name, img, date, price, uuid }) => {
  return (
    <Link to={"/product/" + uuid}>
      <div className="rounded-md overflow-hidden shadow-md hover:shadow-sky-300/80 dark:hover:shadow-violet-700/50 dark:bg-neutral-800 transition-all">
        <img className="h-52 object-cover w-full" src={img} alt="keyboard" />
        <div className="px-6 py-2 xs:py-4">
          <div className="font-bold text-xl mb-1 xs:mb-2 text-gray-800 dark:text-neutral-50">
            {name}
          </div>
          <p className="text-gray-700 dark:text-neutral-100 text-base">
            {date}
          </p>
        </div>
        <div className="px-6 pb-1 pt-1 xs:pt-2 xs:pb-2">
          <span className="inline-block bg-sky-200 dark:bg-violet-300 rounded-full px-3 py-1 text-sm font-semibold dark:text-violet-800 mr-2 mb-2">
            ${price}
          </span>
        </div>
      </div>
    </Link>
  );
};
