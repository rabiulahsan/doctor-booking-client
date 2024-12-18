import { useLoaderData } from "react-router-dom";
import PageBanner from "./PageBanner";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import SameCatDoctor from "./SameCatDoctor";
import SingleDoctorRightSide from "./SingleDoctorRightSide";

const SingleDoctorPage = () => {
  const loadedData = useLoaderData();
  // console.log(loadedData);
  const {
    _id,
    name,
    title,
    fee,
    address,
    country,
    gender,
    joining,
    description,
    availability,
    image,
    type,
    rating,
  } = loadedData;

  return (
    <div className="px-[8%] ">
      <PageBanner image={image}></PageBanner>
      <div className="flex  gap-x-10 px-[5%] pt-[2%]">
        <div className="w-2/3 ">
          {/* Header Section */}
          <p className="flex items-center gap-x-5 mb-2">
            <span className="text-slate-800 font-bold text-[27px] leading-tight">
              {name}
            </span>
            <span className="bg-green-200 text-green-700 text-xs  font-bold px-3 py-2 rounded-sm">
              {type}
            </span>
          </p>

          {/* title  */}
          <p className="  tracking-tighter whitespace-nowrap -mt-2  text-slate-500 font-semibold">
            {title}
          </p>

          {/* Details Section */}
          <div className="flex justify-between items-center text-slate-500 font-semibold text-lg">
            {/* Address */}
            <p className="flex-1 text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap text-base mt-2">
              {address}, {country}
            </p>

            {/* Fee and Rating */}
            <div className="flex items-center gap-x-6">
              {/* verified  */}
              <p className="flex items-center bg-slate-300 text-slate-700 font-semibold text-sm px-[10px] py-[6px] gap-x-1 rounded-sm">
                <span className="flex items-center justify-center">
                  <MdVerified className="text-lg" />
                </span>
                <span className="flex items-center leading-none">verified</span>
              </p>

              {/* Fee */}
              <p className="flex items-center bg-slate-300 text-slate-700 font-semibold text-sm px-[10px] py-[6px] gap-x-1 rounded-sm">
                <span className="flex items-center justify-center">
                  <AiFillDollarCircle className="text-lg" />
                </span>
                <span className="flex items-center leading-none">
                  {fee}/visit
                </span>
              </p>

              {/* Rating */}
              <p className="flex items-center bg-slate-300 text-slate-700 font-semibold text-sm px-4 py-[8px] gap-x-1 rounded-sm">
                <span className="flex items-center leading-none">{rating}</span>
                <span className="flex items-center justify-center text-slate-600">
                  <FaStar className="" />
                </span>
              </p>
            </div>
          </div>

          <hr className="my-[5%] border-[1.5px] border-slate-300" />

          <div className="">
            <p className="font-bold text-slate-800 text-2xl">About Doctor</p>
            <p className=" text-slate-600 leading-8 my-4">{description}</p>

            <ul className="">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <p className="font-bold text-slate-600">
                  Experiences:{" "}
                  <span className="font-[500] text-slate-700">
                    {new Date().getFullYear() - joining}+ years experience
                  </span>
                </p>
              </li>
              <li className="flex items-center my-2">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <p className="font-bold text-slate-600">
                  Gender:{" "}
                  <span className="font-[500] text-slate-700">{gender}</span>
                </p>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <p className="font-bold text-slate-600">
                  Category:{" "}
                  <span className="font-[500] text-slate-700">{type}</span>
                </p>
              </li>
            </ul>
          </div>
          <hr className="my-[5%] border-[1.5px] border-slate-300" />
        </div>

        {/* right side  */}
        <SingleDoctorRightSide
          availability={availability}
        ></SingleDoctorRightSide>
      </div>
      <SameCatDoctor type={type} _id={_id}></SameCatDoctor>
    </div>
  );
};

export default SingleDoctorPage;
