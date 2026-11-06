import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Profile from "./Profile";

const pages = ["/", "/login", "/signup"];

function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bg-slate-700 p-2.5 md:p-4 flex gap-2 items-center justify-between font-lato relative">
      <Logo />
      {path === "/" && (
        <Link
          to="/login"
          className="bg-orange-500 hover:bg-orange-400 px-2 py-1 md:px-4 md:py-2 text-[12px] md:text-lg rounded-3xl"
        >
          Login
        </Link>
      )}
      {!pages.includes(path) && <Profile />}
    </div>
  );
}

export default Header;
