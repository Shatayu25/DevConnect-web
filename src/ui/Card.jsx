import { useAuth } from "../context/AuthContext";

function Card() {
  const { user } = useAuth();

  return (
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

        <p className="text-md font-bold text-gray-500 uppercase tracking-wider mb-2">
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
          <button className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
            Ignore
          </button>
          <button className="flex-1 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
