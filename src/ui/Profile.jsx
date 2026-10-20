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
        className="flex items-center gap-1 rounded-lg bg-orange-500 relative px-4 py-2"
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
