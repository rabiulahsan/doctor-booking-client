import { useLoaderData } from "react-router-dom";
import PageBanner from "./PageBanner";
import { FaStar } from "react-icons/fa";

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
    <div className="px-[8%]">
      <PageBanner></PageBanner>
      <div className="flex items-center gap-x-10 px-[5%]">
        <div className="w-2/3 flex-col">
          <div className="">
            <img
              src={image}
              alt={name}
              className="w-[200px] h-[200px] object-cover rounded-full border-4 border-slate-500"
            />

            <div className="mt-3">
              {/* Header Section */}
              <p className="flex items-center gap-x-5 mb-2">
                <span className="text-slate-700 font-bold text-[27px] leading-tight">
                  {name}
                </span>
                <span className="bg-green-200 text-green-700 text-xs font-bold px-3 py-2 rounded-sm">
                  {type}
                </span>
              </p>

              {/* Details Section */}
              <div className="flex justify-between items-center text-slate-500 font-semibold text-lg">
                {/* Address */}
                <p className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap text-base">
                  {address}, {country}
                </p>

                {/* Fee and Rating */}
                <div className="flex items-center gap-x-6">
                  {/* Fee */}
                  <p className="flex items-center gap-x-1">
                    <span className="font-bold text-slate-700">{fee}$</span>
                    <span className="text-slate-500 font-normal">/visit</span>
                  </p>

                  {/* Rating */}
                  <p className="flex items-center gap-x-1 text-yellow-500">
                    <span className="font-bold text-slate-700">{rating}</span>
                    <FaStar className="text-yellow-400 text-lg" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 border border-slate-400 rounded-md">book</div>
      </div>
    </div>
  );
};

export default SingleDoctorPage;
