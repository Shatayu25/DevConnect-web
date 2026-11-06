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
    <div className="bg-white flex flex-col rounded-2xl shadow-xl border border-gray-100 w-[92%] md:w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden my-6 md:my-10 transition-all">
      <img
        src={photoUrl}
        className="w-full h-56 md:h-72 lg:h-80 object-cover object-center bg-gray-100 transition-all"
        alt="User profile"
      />

      <div className="flex flex-col p-4 md:p-6 lg:p-8 gap-1 md:gap-2">
        <div className="flex justify-between items-baseline mb-1">
          <h2 className="text-xl md:text-3xl font-bold text-slate-800">
            {data.firstName}&nbsp;{data.lastName}
          </h2>
          <span className="text-base md:text-xl font-semibold text-gray-500">
            {data.age}
          </span>
        </div>

        <p className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-wider mb-2">
          {data.gender}
        </p>

        <div className="self-end italic text-right mb-4">
          <p className="text-base md:text-xl font-bold text-orange-500 tracking-wider">
            {data.about}
          </p>
          <p className="text-xs md:text-base font-semibold text-gray-500 mt-1">
            Skill-set: {data.skills}
          </p>
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          <button
            onClick={handleIgnore}
            className="flex-1 py-2.5 md:py-4 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors text-sm md:text-lg lg:text-xl"
          >
            Ignore
          </button>
          <button
            onClick={handleConnect}
            className="flex-1 py-2.5 md:py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20 text-sm md:text-lg lg:text-xl"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
