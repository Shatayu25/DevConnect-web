import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useBack from "../hooks/useBack";
import Error from "../ui/Error";
import { BASE_URL } from "../utils/constants";

function ProfileEdit() {
  const moveBack = useBack();
  const { user, setUser } = useAuth();
  const { register, formState, handleSubmit } = useForm({
    defaultValues: user.data,
  });
  const navigate = useNavigate();
  const { errors } = formState;
  const base_url = BASE_URL;

  async function onSubmit(data) {
    const { firstName, lastName, age, gender, about, skills, photoUrl } = data;
    const res = await fetch(`${base_url}/profile/edit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        age,
        gender,
        about,
        skills,
        photoUrl,
      }),
      credentials: "include",
    });
    if (res.ok) {
      setUser({ data });
      navigate("/profile/view");
    }
  }

  return (
    <>
      <button
        onClick={moveBack}
        className="bg-orange-500 text-white hover:bg-orange-600 transition-all rounded-full text-sm w-fit px-4 py-2 absolute top-4 left-3"
      >
        &larr; Back
      </button>

      <div className="flex flex-col items-center justify-center w-full min-h-screen font-lato p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row gap-8 w-full max-w-3xl bg-white shadow-xl rounded-2xl border border-gray-100 p-6"
        >
          <div className="flex flex-col items-center gap-4 w-1/3">
            <img
              src={user.data.photoUrl}
              alt="Profile"
              className="w-48 h-48 object-cover rounded-xl bg-gray-100 border-2 border-orange-100 shadow-sm"
            />
            <input
              type="file"
              id="photoUrl"
              accept="image/png, image/jpeg"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 transition-colors cursor-pointer"
              {...register("photoUrl")}
            />
          </div>

          <div className="flex flex-col gap-5 w-2/3">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 focus:outline-none focus:ring-2 border-gray-300 border transition-all rounded-lg focus:ring-orange-500"
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                />
                {errors?.firstName?.message && (
                  <Error error={errors?.firstName?.message} />
                )}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 focus:outline-none focus:ring-2 border-gray-300 border transition-all rounded-lg focus:ring-orange-500"
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                />
                {errors?.lastName?.message && (
                  <Error error={errors?.lastName?.message} />
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="age"
                  className="text-sm font-semibold text-gray-700"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  placeholder="26"
                  className="w-full px-4 py-2 focus:outline-none focus:ring-2 border-gray-300 border transition-all rounded-lg focus:ring-orange-500"
                  {...register("age", {
                    required: "This field is required",
                    min: 18,
                  })}
                />
                {errors?.age?.message && <Error error={errors?.age?.message} />}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="gender"
                  className="text-sm font-semibold text-gray-700"
                >
                  Gender
                </label>
                <select
                  className="w-full px-4 py-2 focus:outline-none focus:ring-2 border-gray-300 border transition-all rounded-lg focus:ring-orange-500"
                  id="gender"
                  {...register("gender")}
                >
                  <option value="" disabled>
                    Select a gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about"
                  className="text-sm font-semibold text-gray-700"
                >
                  About
                </label>
                <textarea
                  id="about"
                  className="w-full px-4 py-2 focus:outline-none focus:ring-2 border-gray-300 border transition-all rounded-lg focus:ring-orange-500 resize-none h-24"
                  {...register("about", {
                    minLength: {
                      value: 10,
                      message: "Min 10 characters required",
                    },
                    maxLength: {
                      value: 250,
                      message: "Max 250 characters required",
                    },
                  })}
                />
                {errors?.about?.message && (
                  <Error error={errors?.about?.message} />
                )}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="skills"
                  className="text-sm font-semibold text-gray-700"
                >
                  Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  className="w-full px-4 py-2 focus:outline-none focus:ring-2 border-gray-300 border transition-all rounded-lg focus:ring-orange-500"
                  {...register("skills", {
                    validate: (value) => {
                      const skillsArray = value
                        .split(",")
                        .filter((skill) => skill.trim() !== "");
                      if (skillsArray.length < 2)
                        return "Min 2 skills required";
                      if (skillsArray.length > 4)
                        return "Max 4 skills required";

                      return true;
                    },
                  })}
                />
                {errors?.skills?.message && (
                  <Error error={errors?.skills?.message} />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="p-3 mt-2 w-48 self-center bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileEdit;
