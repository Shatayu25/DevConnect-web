import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="items-center flex-grow justify-center gap-2 md:gap-6 flex flex-col font-lato">
      <div>
        <p className="text-[23px] md:text-[55px] lg:text-[75px] font-extrabold tracking-wide text-orange-500 p-2">
          Connect and grow together
        </p>
      </div>
      <Link
        to="/signup"
        className="bg-slate-600 text-white text-[8px] sm:text-base lg:text-lg font-bold px-2 py-1 md:px-4 md:py-2 rounded-3xl"
      >
        Create Account
      </Link>
    </div>
  );
}

export default Body;
