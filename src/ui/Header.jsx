import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Profile from "./Profile";

const pages = ["/", "/signup", "/login"];

function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bg-slate-700 px-6 py-4 flex items-center justify-between font-lato relative">
      <Logo />
      {path === "/" && (
        <Link
          to="/login"
          className="bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-3xl"
        >
          Login
        </Link>
      )}
      {!pages.includes(path) && <Profile />}
    </div>
  );
}

export default Header;
