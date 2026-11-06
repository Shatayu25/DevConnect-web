import { BASE_URL } from "../utils/constants";

function ConnectionCard({ data, handleRemove }) {
  const photoUrl = data?.photoUrl?.startsWith("http")
    ? data.photoUrl
    : `${BASE_URL}${data.photoUrl}`;

  async function handleDelete() {
    const res = await fetch(
      `${BASE_URL}/user/connection/${data.connectionId}/remove`,
      {
        method: "DELETE",
        credentials: "include",
      },
    );
    if (res.ok) {
      handleRemove(data.connectionId);
    }
  }

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex flex-row items-center w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-100 p-3 md:p-5 mt-11 gap-3 md:gap-6">
        <div className="flex items-center gap-2 md:gap-5 flex-1">
          <img
            src={photoUrl}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full object-cover bg-gray-100 flex-shrink-0"
            alt="User profile"
          />

          <div className="flex flex-col justify-center">
            <div className="flex items-baseline gap-2 mb-1">
              <h2 className="text-xs md:text-xl lg:text-2xl font-bold text-slate-800">
                {data.firstName}&nbsp;{data.lastName}
              </h2>
              <span className="text-[10px] md:text-sm lg:text-base font-semibold text-gray-500">
                {data.age}
              </span>
            </div>
            <p className="text-[10px] md:text-sm lg:text-base font-bold text-orange-500 uppercase tracking-wider mb-1">
              {data.about}
            </p>
            <p className="text-[8px] md:text-xs lg:text-sm italic font-bold text-gray-500 tracking-wider">
              Skill-set: {data.skills}
            </p>
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="px-1 py-1 md:px-6 md:py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors shadow-sm text-[10px] md:text-base lg:text-lg"
        >
          Remove Connection
        </button>
      </div>
    </div>
  );
}

export default ConnectionCard;
