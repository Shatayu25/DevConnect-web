import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useBack from "../hooks/useBack";
import { BASE_URL } from "../utils/constants";

function ProfileView() {
  const moveBack = useBack();
  const navigate = useNavigate();
  const { user } = useAuth();

  function handleClick() {
    navigate("/profile/edit");
  }

  const photoUrl = user.data.photoUrl.startsWith("http")
    ? user.data.photoUrl
    : `${BASE_URL}${user.data.photoUrl}`;

  return (
    <>
      <button
        onClick={moveBack}
        className="bg-orange-500 hover:bg-orange-600 transition-all rounded-full text-[10px] md:text-sm lg:text-base w-fit px-2 py-1 md:px-4 md:py-2 absolute top-1 left-2 md:top-4 md:left-3"
      >
        &larr; Back
      </button>
      <div className="flex-1 flex flex-col items-center justify-center w-full font-lato">
        <div className="bg-white flex flex-col rounded-2xl shadow-xl border border-gray-100 w-[92%] md:w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden my-6 md:my-10 transition-all">
          <img
            src={photoUrl}
            className="w-full h-56 md:h-72 lg:h-80 object-cover object-center bg-gray-100 transition-all"
            alt="User profile"
          />

          <div className="flex flex-col p-4 md:p-6 lg:p-8 gap-1 md:gap-2">
            <div className="flex justify-between items-baseline mb-1">
              <h2 className="text-xl md:text-3xl font-bold text-slate-800">
                {user.data.firstName}&nbsp;{user.data.lastName}
              </h2>
              <span className="text-base md:text-xl font-semibold text-gray-500">
                {user.data.age}
              </span>
            </div>

            <p className="text-sm md:text-base font-bold uppercase text-gray-500 tracking-wider mb-2">
              {user.data.gender}
            </p>

            <div className="self-end italic text-right mb-4">
              <p className="text-base md:text-xl font-bold text-orange-500 tracking-wider">
                {user.data.about}
              </p>
              <p className="text-xs md:text-base font-semibold text-gray-500 mt-1">
                Skill-set: {user.data.skills}
              </p>
            </div>

            <div className="flex gap-3 mt-auto pt-2">
              <button
                onClick={handleClick}
                className="flex-1 py-2.5 md:py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20 text-sm md:text-lg lg:text-xl"
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