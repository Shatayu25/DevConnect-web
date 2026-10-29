import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import useBack from "../hooks/useBack";

import Error from "../ui/Error";
import { BASE_URL } from "../utils/constants";

const baseUrl = BASE_URL;

function Login() {
  const moveBack = useBack();
  const navigate = useNavigate();
  const { fetchProfile } = useAuth();
  const { register, handleSubmit, formState, setError } = useForm();
  const { errors } = formState;

  async function onSubmit(data) {
    try {
      const res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (res.ok) {
        await fetchProfile();
        navigate("/user/feed");
      } else {
        const { message } = await res.json();
        setError("root", { message: message });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-lato bg-gray-50 p-4">
      <button
        onClick={moveBack}
        className="bg-orange-500 hover:bg-orange-600 transition-all rounded-full text-sm w-fit px-4 py-2 absolute top-4 left-3"
      >
        &larr; Back
      </button>
      <div className="flex flex-col items-center gap-1 mb-8">
        <h1 className="text-4xl text-orange-500 font-bold tracking-tight">
          Welcome!
        </h1>
        <p className="text-gray-500 text-sm italic">Login to Proceed...</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md bg-white p-8 gap-5 rounded-2xl shadow-lg border border-gray-100"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="emailId"
            className="text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="emailId"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            placeholder="sd@example.com"
            {...register("emailId", {
              required: "EmailId is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please provide a valid emailId address",
              },
            })}
          />
          {errors?.emailId?.message && (
            <Error error={errors?.emailId?.message} />
          )}
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should at-least have 8 characters",
              },
              maxLength: {
                value: 16,
                message: "Max 16 characters allowed",
              },
            })}
          />
          {errors?.password?.message && (
            <Error error={errors?.password?.message} />
          )}
        </div>
        {errors?.root?.message && <Error error={errors?.root?.message} />}
        <button
          type="submit"
          className="mt-4 w-fit mx-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
