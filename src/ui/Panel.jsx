import { FaUserFriends, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Panel() {
  return (
    <div className="border shadow-md text-[10px] md:text-base lg:text-xl flex lg:gap-2 absolute top-1 left-2 lg:top-4 lg:left-6 p-[1px] lg:p-2">
      <Link
        to="/user/requests/received"
        className="flex items-center gap-[2px] p-[2px] md:gap-1 md:p-1 hover:bg-slate-100 transition-all"
      >
        <span>
          <FaUserPlus />
        </span>
        <p>Requests</p>
      </Link>
      <Link
        to="/user/connections"
        className="flex items-center gap-[2px] p-[2px] md:gap-1 md:p-1  hover:bg-slate-100 transition-all"
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
