import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useBack from "../hooks/useBack";
import Error from "../ui/Error";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";

function ProfileEdit() {
  const moveBack = useBack();
  const { user, setUser } = useAuth();
  const [imageUrl, setImageUrl] = useState(user.data.photoUrl);
  const { register, formState, handleSubmit } = useForm({
    defaultValues: user.data,
  });
  const { errors } = formState;
  const navigate = useNavigate();
  const base_url = BASE_URL;

  // a event handler function to convert the image file to its url
  function handlePhotoUrl(e) {
    const file = e.target.files[0];
    if (file) {
      // Returns a string containing a unique blob URL
      setImageUrl(URL.createObjectURL(file));
    }
  }

  // cleanup function to clean up the memory, when the url changes
  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  async function onSubmit(data) {
    const { firstName, lastName, photoUrl, gender, age, about, skills } = data;
    const cleanData = {
      firstName,
      lastName,
      photoUrl,
      gender,
      age,
      about,
      skills,
    };
    // FormData API is used to send the image file along with other data to the database
    const formData = new FormData();

    Object.entries(cleanData).forEach(([key, value]) => {
      if (key === "photoUrl") {
        // for first load the image is FileList object and for the next load it ll be a string hence typeof is used.
        if (typeof value === "object" && value.length > 0) {
          formData.append(key, value[0]);
        }
      } else {
        formData.append(key, value);
      }
    });

    const res = await fetch(`${base_url}/profile/edit`, {
      method: "PATCH",
      body: formData,
      credentials: "include",
    });
    const updatedUser = await res.json();
    if (res.ok) {
      setUser(updatedUser);
      navigate("/profile/view");
    }
  }

  const displayUrl =
    imageUrl.startsWith("http") || imageUrl.startsWith("blob")
      ? imageUrl
      : `${base_url}${imageUrl}`;

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
              src={displayUrl}
              alt="Profile"
              className="w-48 h-48 object-cover rounded-xl bg-gray-100 border-2 border-orange-100 shadow-sm"
            />
            <input
              type="file"
              id="photoUrl"
              onChange={handlePhotoUrl}
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
                      // to check when the page first loads the value of the skills input is a array or string
                      const stringValue = Array.isArray(value)
                        ? value.join(",")
                        : value;
                      const skillsArray = stringValue
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
