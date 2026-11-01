import { BASE_URL } from "../utils/constants";

function RequestCard({ data, handleRemove }) {
  const photoUrl = data.fromUserId.photoUrl.startsWith("http")
    ? data.fromUserId.photoUrl
    : `${BASE_URL}${data.fromUserId.photoUrl}`;

  async function handleAccept() {
    const res = await fetch(`${BASE_URL}/request/review/${data._id}/accepted`, {
      method: "POST",
      credentials: "include",
    });
    if (res.ok) {
      handleRemove(data._id);
    }
  }

  async function handleReject() {
    const res = await fetch(`${BASE_URL}/request/review/${data._id}/rejected`, {
      method: "POST",
      credentials: "include",
    });
    if (res.ok) {
      handleRemove(data._id);
    }
  }

  return (
    <div className="flex flex-col items-center w-full px-4 p-6">
      <div className="flex flex-row items-center w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-100 p-5 gap-6">
        <img
          src={photoUrl}
          className="w-20 h-20 rounded-full object-cover bg-gray-100 flex-shrink-0"
          alt="User profile"
        />

        <div className="flex flex-col flex-1">
          <div className="flex gap-4 items-center mb-1">
            <h2 className="text-xl font-bold text-slate-800">
              {data.fromUserId.firstName}&nbsp;{data.fromUserId.lastName}
            </h2>
            <span className="text-sm font-semibold text-gray-500">
              {data.fromUserId.age}
            </span>
          </div>
          <p className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-1">
            {data.fromUserId.about}
          </p>
          <p className="text-xs italic font-bold text-gray-500 tracking-wider">
            Skills-set: {data.fromUserId.skills}
          </p>
        </div>

        <div className="flex flex-row gap-2 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-6 py-2 rounded-xl bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
