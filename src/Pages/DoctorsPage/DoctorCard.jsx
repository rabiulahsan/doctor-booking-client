import { Link } from "react-router-dom";
import UseVerifyPatient from "../../Hooks/UseVerifyPatient/UseVerifyPatient";

/* eslint-disable react/prop-types */
const DoctorCard = ({ doctor }) => {
  //   console.log(doctor);
  const { _id, name, title, image, rating, fee, joining } = doctor;
  const [isPatient] = UseVerifyPatient();
  console.log(isPatient);

  return (
    <div className="flex items-center gap-x-5  border border-green-100 px-5 py-5 shadow-md shadow-slate-200 bg-green-50 rounded-sm">
      <div className="image-container flex flex-col items-center ">
        {/* Image Section */}
        <img
          src={image}
          alt={name}
          className="w-[60px] h-[60px] object-cover rounded-full border-[3px] border-slate-600 bg-white"
        />

        {/* Rating */}
        <p className="flex items-center text-slate-700 mt-1">
          <span className="flex ml-1 text-yellow-500 font-semibold">
            {/* Full Stars */}
            {Array.from({ length: Math.floor(rating) }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.121-6.54L.489 7.91l6.564-.953L10 .91l2.947 6.045 6.564.953-4.754 3.64 1.121 6.54z" />
              </svg>
            ))}

            {/* Half Star */}
            {rating % 1 >= 0.5 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 20 20"
              >
                <defs>
                  <clipPath id="halfStarClip">
                    <rect width="10" height="20" fill="currentColor" />
                  </clipPath>
                </defs>
                <path
                  d="M10 15l-5.878 3.09 1.121-6.54L.489 7.91l6.564-.953L10 .91l2.947 6.045 6.564.953-4.754 3.64 1.121 6.54z"
                  clipPath="url(#halfStarClip)"
                />
              </svg>
            )}
          </span>
          <span className="text-green-600 font-semibold">({rating})</span>
        </p>

        {/* Fee */}
        <p className="text-slate-700 font-semibold">
          <span className="font-bold text-green-600">${fee}</span>/visit
        </p>
      </div>

      <div className="details-container flex flex-col">
        <p className="text-slate-600 font-bold text-xl">{name}</p>
        <p className="text-slate-500 font-semibold text-sm">{title}</p>
        {/* Experience Calculation */}
        <p className="text-slate-500 font-semibold text-sm">
          {new Date().getFullYear() - joining} + years experience
        </p>
        <div className="flex items-center gap-x-5 mt-3">
          <Link to={`/doctors/${_id}`}>
            <button className="font-semibold bg-green-200 text-green-700 text-sm px-4 py-2 rounded-sm hover:bg-green-300">
              Details
            </button>
          </Link>

          {/* //todo is loading animation  */}
          {isPatient && (
            <Link to={`/booking/${_id}`}>
              <button className="font-semibold bg-slate-200 text-slate-700 text-sm px-4 py-2 rounded-sm hover:bg-slate-300">
                Book Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
