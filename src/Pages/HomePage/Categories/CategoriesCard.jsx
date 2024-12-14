/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoriesCard = ({ specialist }) => {
  const { name, data, image } = specialist;
  console.log(specialist);
  return (
    <div className="relative ">
      <div className=" flex justify-between items-center p-5 px-7">
        <div className="w-1/2 ">
          <img
            src={image}
            alt="name"
            width={600}
            height={500}
            className=" mx-auto relative flex justify-center items-center bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${"/bg.png"})`,
              backgroundSize: "90%",
            }}
          />
        </div>
        <div className="w-1/2 text-slate-600 leading-8 p-4">
          <p className="font-bold text-2xl  mb-4">{name}</p>
          <p className="">{data}</p>
          <button className=" bg-slate-700 font-semibold  rounded px-5 py-2 text-white mt-5">
            <Link to="/">Book an Appointment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
