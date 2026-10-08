function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-lato bg-gray-50 p-4">
      <div className="flex flex-col items-center gap-1 mb-8">
        <h1 className="text-4xl text-orange-500 font-bold tracking-tight">
          Welcome!
        </h1>
        <p className="text-gray-500 text-sm italic">
          Create account to continue...
        </p>
      </div>

      <form className="flex flex-col w-full max-w-md bg-white p-8 gap-5 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="first-name"
              className="text-sm font-semibold text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              placeholder="Shatayu"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="last-name"
              className="text-sm font-semibold text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              placeholder="Deshpande"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            placeholder="sd@example.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            placeholder="••••••••"
          />
        </div>

          <button
            type="submit"
            className="mt-4 w-fit mx-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl transition-colors"
          >
            Create Account
          </button>
      </form>
    </div>
  );
}

export default Signup;
