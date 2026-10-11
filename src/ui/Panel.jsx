import { FaUserFriends, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Panel() {
  return (
    <div className="border shadow-md flex gap-2 absolute top-4 left-6 p-2">
      <Link
        to="/user/requests/received"
        className="flex items-center gap-1 p-1 hover:bg-slate-100 transition-all"
      >
        <span>
          <FaUserPlus />
        </span>
        <p>Requests</p>
      </Link>
      <Link
        to="/user/connections"
        className="flex items-center gap-1 p-1 hover:bg-slate-100 transition-all"
      >
        <span>
          <FaUserFriends />
        </span>
        <p>Connections</p>
      </Link>
    </div>
  );
}

export default Panel;
