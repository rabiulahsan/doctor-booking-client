import { useLoaderData } from "react-router-dom";
import PageBanner from "./PageBanner";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";

const SingleDoctorPage = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const {
    _id,
    name,
    title,
    fee,
    address,
    country,
    joining,
    image,
    type,
    rating,
  } = loadedData;
  return (
    <div className="px-[8%] ">
      <PageBanner image={image}></PageBanner>
      <div className="flex items-center gap-x-10 px-[5%] pt-[2%]">
        <div className="w-2/3 flex-col">
          {/* Header Section */}
          <p className="flex items-center gap-x-5 mb-2">
            <span className="text-slate-700 font-bold text-[27px] leading-tight">
              {name}
            </span>
            <span className="bg-green-200 text-green-700 text-xs  font-bold px-3 py-2 rounded-sm">
              {type}
            </span>
          </p>

          {/* Details Section */}
          <div className="flex justify-between items-center text-slate-500 font-semibold text-lg">
            {/* Address */}
            <p className="flex-1 text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap text-base">
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
        </div>
        <div className="w-1/3 border border-slate-400 rounded-md">book</div>
      </div>
    </div>
  );
};

export default SingleDoctorPage;
