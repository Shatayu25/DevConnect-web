import useBack from "../hooks/useBack";

function Requests() {
  const moveBack = useBack();
  return (
    <div className="flex flex-col items-center w-full px-4 pt-16">
      <button
        onClick={moveBack}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all rounded-full text-sm w-fit px-4 py-2 absolute top-4 left-6"
      >
        &larr; Back
      </button>

      <div className="flex flex-row items-center w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-100 p-5 gap-6">
        <img
          src="/user.png"
          className="w-20 h-20 rounded-full object-cover bg-gray-100 flex-shrink-0"
          alt="User profile"
        />

        <div className="flex flex-col flex-1">
          <div className="flex items-baseline gap-2 mb-1">
            <h2 className="text-xl font-bold text-slate-800">
              Shatayu Deshpande
            </h2>
            <span className="text-sm font-semibold text-gray-500">25</span>
          </div>
          <p className="text-xs font-bold text-orange-500 uppercase tracking-wider">
            MERN stack developer
          </p>
        </div>

        <div className="flex flex-row gap-2 flex-shrink-0">
          <button className="px-6 py-2 rounded-xl bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-colors">
            Reject
          </button>
          <button className="px-6 py-2 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-sm">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default Requests;
