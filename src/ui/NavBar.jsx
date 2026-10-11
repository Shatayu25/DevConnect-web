import { Link } from "react-router-dom";

function NavBar({ handleClick }) {
  return (
    <ul className="bg-orange-500 absolute px-4 py-1 z-10 rounded-sm right-6 top-12 flex flex-col gap-2">
      <li>
        <Link to="/profile/view" onClick={handleClick}>
          View profile
        </Link>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
    </ul>
  );
}

export default NavBar;
