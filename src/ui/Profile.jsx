import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import NavBar from "./NavBar";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const [show, setShow] = useState("");
  const { user } = useAuth();

  function handleClick() {
    setShow((show) => !show);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center gap-1 text-[11px] md:text-base rounded-lg bg-orange-500 relative px-1 py-1 md:px-4 md:py-2"
      >
        <span>
          <FaRegUser />
        </span>
        {user.data.firstName}&nbsp;{user.data.lastName}
      </button>
      {show ? <NavBar handleClick={handleClick} /> : ""}
    </>
  );
}

export default Profile;
