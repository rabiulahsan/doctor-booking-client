import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { LuEyeClosed } from "react-icons/lu";

const DoctorSignup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, logOut } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Form Data:", data);
    // Handle form submission logic, such as sending data to the backend.
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        // Prepare the data to be sent to the database
        const doctorData = {
          name: data.name,
          email: data.email,
          image: data.image,
          type: data.type,
          verified: false,
          role: "doctor",
          createdAt: new Date().toISOString(),
        };

        // Post the data to the API
        fetch("http://localhost:5000/api/doctors/postdoctor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(doctorData),
        })
          .then((response) => response.json())
          .then((responseData) => {
            console.log("Doctor data saved:", responseData);
            if (responseData.doctorId) {
              reset();
              logOut()
                .then(navigate("/doctor/login"))
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            console.error("Error posting doctor data:", error);
          });
      })
      .catch((error) => {
        // Set error state with a user-friendly message
        if (error.message.includes("email-already-in-use")) {
          setError("patient's email can't be a doctor's email");
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-[2%]">
      <div className="bg-white shadow-lg rounded-lg py-[3%] px-[4%]  max-w-lg w-full">
        <h1 className="text-slate-600 font-bold text-2xl text-center">
          Provide Your Information
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg mx-auto mt-[5%]"
        >
          <div className="form-control mb-4">
            <label className="label block text-gray-700 text-sm font-bold mb-[6px]">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your full name"
              className=" border-2 border-slate-300 rounded-md w-full py-2 px-4 text-slate-700   focus:outline-none "
            />
            {errors.name && (
              <span className="text-red-600 font-semibold text-sm">
                Name is required
              </span>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label block text-gray-700 text-sm font-bold mb-[6px]">
              <span className="label-text">Photo URL*</span>
            </label>
            <input
              type="text"
              {...register("image", { required: true })}
              placeholder="Provide your image's url"
              className="border-2 border-slate-300 rounded-md w-full py-2 px-4 text-slate-700   focus:outline-none "
            />
            {errors.image && (
              <span className="text-red-600 font-semibold text-sm">
                Photo URL is required
              </span>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label block text-gray-700 text-sm font-bold mb-[6px]">
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("type", { required: true })}
              defaultValue=""
              className="border-2 border-slate-300 rounded-md w-full py-2 px-4 text-slate-700 bg-transparent focus:outline-none"
            >
              <option value="" disabled>
                Select your category
              </option>
              {categories.map((category, index) => (
                <option
                  key={index}
                  value={category}
                  className="font-semibold text-slate-600"
                >
                  {category}
                </option>
              ))}
            </select>
            {errors.type && (
              <span className="text-red-600 font-semibold text-sm">
                Category is required
              </span>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label block text-gray-700 text-sm font-bold mb-[6px]">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="border-2 border-slate-300 rounded-md w-full py-2 px-4 text-slate-700   focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-600 font-semibold text-sm">
                Email is required
              </span>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label block text-gray-700 text-sm font-bold mb-[6px]">
              <span className="label-text">Password*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggles between 'text' and 'password'
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, // At least one uppercase, lowercase, number, and special character
                })}
                placeholder="Confirm your password"
                className="border-2 border-slate-300 rounded-md w-full py-2 px-4 text-slate-700 focus:outline-none"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-slate-500"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              >
                {showPassword ? (
                  <FaRegFaceRollingEyes size={20} />
                ) : (
                  <LuEyeClosed size={20} />
                )}
              </button>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-600 font-semibold text-sm">
                Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 font-semibold text-sm">
                Password must be at least 6 characters
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600 font-semibold text-sm">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 font-semibold text-sm">
                Password must have one uppercase, one lowercase, one number, and
                one special character.
              </p>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label block text-gray-700 text-sm font-bold mb-[6px]">
              <span className="label-text">Confirm Password*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"} // Toggles between 'text' and 'password'
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, // At least one uppercase, lowercase, number, and special character
                })}
                placeholder="Confirm your password"
                className="border-2 border-slate-300 rounded-md w-full py-2 px-4 text-slate-700 focus:outline-none"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-slate-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle password visibility
              >
                {showConfirmPassword ? (
                  <FaRegFaceRollingEyes size={20} />
                ) : (
                  <LuEyeClosed size={20} />
                )}
              </button>
            </div>
            {errors.confirmPassword?.type === "required" && (
              <p className="text-red-600 font-semibold text-sm">
                Confirm Password is required
              </p>
            )}
            {errors.confirmPassword?.type === "minLength" && (
              <p className="text-red-600 font-semibold text-sm">
                Confirm Password must be at least 6 characters
              </p>
            )}
            {errors.confirmPassword?.type === "maxLength" && (
              <p className="text-red-600 font-semibold text-sm">
                Confirm Password must be less than 20 characters
              </p>
            )}
            {errors.confirmPassword?.type === "pattern" && (
              <p className="text-red-600 font-semibold text-sm">
                Confirm Password must have one uppercase, one lowercase, one
                number, and one special character.
              </p>
            )}
          </div>

          {error && (
            <p className="text-red-600 font-semibold text-sm my-5">{error}</p>
          )}

          <div className="form-control mt-6 flex justify-center items-center">
            <input
              className="cursor-pointer text-center bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-sm focus:outline-none "
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>

        <p className="mt-5  text-slate-600 text-center">
          Already have an account?{" "}
          <Link to="/doctor/login">
            {" "}
            <span className="underline font-bold ">login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DoctorSignup;

const categories = [
  "Cardiologists",
  "Ophthalmologists",
  "Endocrinologists",
  "Dermatologists",
  "Allergists",
];
