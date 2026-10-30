import { BASE_URL } from "../utils/constants";

function Card({ data, handleIncrease }) {
  const photoUrl = data?.photoUrl?.startsWith("http")
    ? data.photoUrl
    : `${BASE_URL}${data.photoUrl}`;

  async function handleConnect() {
    await fetch(`${BASE_URL}/request/send/${data._id}/interested`, {
      method: "POST",
      credentials: "include",
    });
    handleIncrease();
  }

  async function handleIgnore() {
    await fetch(`${BASE_URL}/request/send/${data._id}/ignored`, {
      method: "POST",
      credentials: "include",
    });
    handleIncrease();
  }

  return (
    <div className="bg-white flex flex-col rounded-2xl shadow-xl border border-gray-100 w-full max-w-sm overflow-hidden my-10">
      <img
        src={photoUrl}
        className="w-full h-72 object-cover object-center bg-gray-100"
        alt="User profile"
      />

      <div className="flex flex-col p-6 gap-1">
        <div className="flex justify-between items-baseline mb-1">
          <h2 className="text-2xl font-bold text-slate-800">
            {data.firstName}&nbsp;{data.lastName}
          </h2>
          <span className="text-lg font-semibold text-gray-500">
            {data.age}
          </span>
        </div>

        <p className="text-md font-bold text-gray-500 uppercase tracking-wider mb-2">
          {data.gender}
        </p>

        <div className="self-end italic">
          <p className="text-lg font-bold text-orange-500 tracking-wider">
            {data.about}
          </p>
          <p className="text-xs font-semibold  text-gray-500 mb-2">
            Skill-set: {data.skills}
          </p>
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          <button
            onClick={handleIgnore}
            className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
          >
            Ignore
          </button>
          <button
            onClick={handleConnect}
            className="flex-1 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
