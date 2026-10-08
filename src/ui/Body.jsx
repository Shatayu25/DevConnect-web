import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="items-center flex-grow justify-center gap-8 flex flex-col font-lato">
      <div>
        <p className="text-7xl font-extrabold tracking-wide text-orange-500 p-6">
          Connect and grow together
        </p>
      </div>
      <Link to="/signup" className="bg-slate-600 text-white font-bold px-4 py-2 rounded-3xl">
        Create Account
      </Link>
    </div>
  );
}

export default Body;
