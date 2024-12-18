/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useVerifyDoctor from "../../Hooks/UseVerifyDoctor/UseVerifyDoctor";

const SingleDoctorRightSide = ({ _id }) => {
  const [isDoctor] = useVerifyDoctor();

  return (
    <div className="w-1/3 border border-slate-300 rounded-md py-5 px-5 self-start">
      <h2 className="text-xl  text-slate-700 font-bold mb-6 text-center">
        Available Dates
      </h2>

      <div className="flex items-center justify-center">
        <Link to={`/booking/${_id}`}>
          <button
            className={`font-semibold text-white bg-green-600 hover:bg-green-700 px-6 py-3 mt-5 rounded ${
              isDoctor ? "disabled:bg-gray-400" : ""
            }`}
            disabled={isDoctor}
          >
            Make Appointments
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleDoctorRightSide;
