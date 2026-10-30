import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Error from "../ui/Error";
import { BASE_URL } from "../utils/constants";
import useBack from "../hooks/useBack";

function PasswordEdit() {
  const moveBack = useBack();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  async function onSubmit(data) {
    const res = await fetch(`${BASE_URL}/profile/edit/password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      navigate("/profile/view");
    }
  }

  return (
    <>
      <button
        onClick={moveBack}
        className="bg-orange-500 hover:bg-orange-600 transition-all rounded-full text-sm w-fit px-4 py-2 absolute top-4 left-3"
      >
        &larr; Back
      </button>
      <div className="flex flex-col items-center justify-center min-h-screen font-lato bg-gray-50 p-4">
        <p className="text-lg text-orange-500 font-bold mb-4">
          Change Password
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-md bg-white p-8 gap-5 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="new-password"
              className="text-sm font-semibold text-gray-700"
            >
              Enter new password
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
            className="mt-4 w-fit mx-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl transition-colors"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default PasswordEdit;
