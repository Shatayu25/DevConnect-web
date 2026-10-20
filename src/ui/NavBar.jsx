import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useAuth } from "../context/AuthContext";

const baseUrl = BASE_URL;

function NavBar({ handleClick }) {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  async function handleLogout() {
    try {
      const res = await fetch(`${baseUrl}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.ok) {
        setUser(null);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ul className="bg-orange-500 absolute px-4 py-1 z-10 rounded-sm right-6 top-12 flex flex-col gap-2">
      <li>
        <Link to="/profile/view" onClick={handleClick}>
          View profile
        </Link>
      </li>
      <li>
        <Link to="/profile/edit/password" onClick={handleClick}>
          Edit Password
        </Link>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  );
}

export default NavBar;
