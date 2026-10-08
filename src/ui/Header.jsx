import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <div className="bg-slate-700 px-6 py-4 flex items-center justify-between font-lato">
      <Logo />
      <Link to="/login" className="bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-3xl">Login</Link>
    </div>
  )
}

export default Header;