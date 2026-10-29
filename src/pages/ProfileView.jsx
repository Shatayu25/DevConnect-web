import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useBack from "../hooks/useBack";
import { BASE_URL } from "../utils/constants";

function ProfileView() {
  const moveBack = useBack();
  const navigate = useNavigate();
  const base_url = BASE_URL;
  const { user } = useAuth();

  function handleClick() {
    navigate("/profile/edit");
  }

  const photoUrl = user.data.photoUrl.startsWith("http")
    ? user.data.photoUrl
    : `${base_url}${user.data.photoUrl}`;

  return (
    <>
      <button
        onClick={moveBack}
        className="bg-orange-500 hover:bg-orange-600 transition-all rounded-full text-sm w-fit px-4 py-2 absolute top-4 left-3"
      >
        &larr; Back
      </button>
      <div className="flex-1 flex flex-col items-center justify-center w-full font-lato">
        <div className="bg-white flex flex-col rounded-2xl shadow-xl border border-gray-100 w-full max-w-sm overflow-hidden my-10">
          <img
            src={photoUrl}
            className="w-full h-72 object-cover object-center bg-gray-100"
            alt="User profile"
          />

          <div className="flex flex-col p-6 gap-1">
            <div className="flex justify-between items-baseline mb-1">
              <h2 className="text-2xl font-bold text-slate-800">
                {user.data.firstName}&nbsp;{user.data.lastName}
              </h2>
              <span className="text-lg font-semibold text-gray-500">
                {user.data.age}
              </span>
            </div>

            <p className="text-sm mb-4 font-semibold uppercase text-gray-500">
              {user.data.gender}
            </p>

            <div className="self-end italic">
              <p className="text-lg font-bold text-orange-500 tracking-wider">
                {user.data.about}
              </p>
              <p className="text-xs font-semibold  text-gray-500 mb-2">
                Skill-set: {user.data.skills}
              </p>
            </div>

            <div className="flex gap-3 mt-auto pt-2">
              <button
                onClick={handleClick}
                className="flex-1 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileView;
