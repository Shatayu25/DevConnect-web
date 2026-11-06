import { useNavigate } from "react-router-dom";
import useBack from "../hooks/useBack";
import { useForm } from "react-hook-form";
import Error from "../ui/Error";
import { BASE_URL } from "../utils/constants";

const baseUrl = BASE_URL;

function Signup() {
  const moveBack = useBack();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  async function onSubmit(data) {
    try {
      const res = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await res.json();
      if (res.ok) {
        navigate("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-lato bg-gray-50 p-4">
      <button
        onClick={moveBack}
        className="bg-orange-500 hover:bg-orange-600 transition-all rounded-full text-[10px] md:text-sm lg:text-base w-fit px-2 py-1 md:px-4 md:py-2 absolute top-4 left-3"
      >
        &larr; Back
      </button>
      <div className="flex flex-col items-center gap-0 md:gap-1 mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-orange-500 font-bold tracking-tight">
          Welcome!
        </h1>
        <p className="text-gray-500 text-[10px] md:text-sm xl:text-lg italic">
          Create account to continue...
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md bg-white p-5 gap-5 rounded-2xl shadow-lg border border-gray-100"
      >
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="firstName"
              className="text-[12px] md:text-sm lg:text-base font-semibold text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "This field is required",
              })}
              className="w-full px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-[13px] md:text-base lg:text-lg"
              placeholder="Shatayu"
            />
            {errors?.firstName?.message && (
              <Error error={errors?.firstName?.message} />
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="lastName"
              className="text-[12px] md:text-sm lg:text-base font-semibold text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-[13px] md:text-base lg:text-lg"
              placeholder="Deshpande"
              {...register("lastName", {
                required: "This field is required",
              })}
            />
            {errors?.lastName?.message && (
              <Error error={errors?.lastName?.message} />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="emailId"
            className="text-[12px] md:text-sm lg:text-base font-semibold text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="emailId"
            className="w-full px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-[13px] md:text-base lg:text-lg"
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
            className="text-[12px] md:text-sm lg:text-base font-semibold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-[13px] md:text-base lg:text-lg"
            placeholder="••••••••"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should at-least have 8 characters",
              },
              maxLength: {
                value: 16,
                message: "Max 16 characters are required",
              },
            })}
          />
          {errors?.password?.message && (
            <Error error={errors?.password?.message} />
          )}
        </div>

        <button
          type="submit"
          className="mt-2 w-fit text-[12px] md:text-base mx-auto bg-orange-500 hover:bg-orange-600 text-white md:font-bold py-2 px-3 md:py-3 md:px-4 rounded-xl transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
