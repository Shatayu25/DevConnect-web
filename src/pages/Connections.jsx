import useBack from "../hooks/useBack";

function Connections() {
  const moveBack = useBack();

  return (
    <div className="flex flex-col items-center w-full px-4 pt-16">
      <button
        onClick={moveBack}
        className="bg-orange-500 hover:bg-orange-600 transition-all rounded-full text-sm w-fit px-4 py-2 absolute top-4 left-3"
      >
        &larr; Back
      </button>
      <div className="flex flex-row items-center w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-100 p-4 gap-6">
        <img
          src="/user.png"
          className="w-[100px] h-[100px] rounded-full object-cover bg-gray-100 flex-shrink-0"
          alt="User profile"
        />

        <div className="flex flex-col flex-1 gap-2 p-4">
          <div className="flex items-baseline gap-2 mb-1">
            <h2 className="text-xl font-bold text-slate-800">
              Shatayu Deshpande
            </h2>
            <span className="text-sm font-semibold text-gray-500">25</span>
          </div>
          <p className="text-xs font-bold text-orange-500 uppercase tracking-wider">
            MERN stack developer
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Building responsive MERN applications. Currently focused on React
            Router and Tailwind CSS. Always open to collaborating on new web
            projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Connections;
