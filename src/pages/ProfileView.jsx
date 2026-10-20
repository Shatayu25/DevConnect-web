import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useBack from "../hooks/useBack";

function ProfileView() {
  const moveBack = useBack();
  const navigate = useNavigate();
  const { user } = useAuth();

  function handleClick() {
    navigate("/profile/edit");
  }

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
            src="/user.png"
            className="w-full h-72 object-cover object-center bg-gray-100"
            alt="User profile"
          />

          <div className="flex flex-col p-6 gap-1">
            <div className="flex justify-between items-baseline mb-1">
              <h2 className="text-2xl font-bold text-slate-800">
                {user.data.firstName}&nbsp;{user.data.lastName}
              </h2>
              <span className="text-lg font-semibold text-gray-500">25</span>
            </div>

            <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
              Full-Stack Developer
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Building responsive MERN applications. Currently focused on React
              Router and Tailwind CSS. Always open to collaborating on new web
              projects.
            </p>

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
