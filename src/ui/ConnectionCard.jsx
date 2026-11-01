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
      <div className="flex items-center justify-between w-full max-w-xl bg-white shadow-lg rounded-2xl border border-gray-100 p-5 gap-4">
        <div className="flex items-center gap-5 flex-1">
          <img
            src={photoUrl}
            className="w-[100px] h-[100px] rounded-lg object-cover bg-gray-100 flex-shrink-0"
            alt="User profile"
          />

          <div className="flex flex-col justify-center">
            <div className="flex items-baseline gap-2 mb-1">
              <h2 className="text-xl font-bold text-slate-800">
                {data.firstName}&nbsp;{data.lastName}
              </h2>
              <span className="text-sm font-semibold text-gray-500">
                {data.age}
              </span>
            </div>
            <p className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-1">
              {data.about}
            </p>
            <p className="text-gray-500 italic font-bold text-xs">
              Skill-set: {data.skills}
            </p>
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors shadow-sm flex-shrink-0 whitespace-nowrap"
        >
          Remove Connection
        </button>
      </div>
    </div>
  );
}

export default ConnectionCard;
