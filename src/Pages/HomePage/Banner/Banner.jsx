import { useState } from "react";
import SvgLine from "../../../Components/ActiveLink/SvgLine/SvgLine";

const Banner = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      console.log(searchValue);
      setSearchValue("");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mb-[8%]">
      <p className="text-5xl text-slate-700 font-bold mt-[5%] mb-[3%]">
        Hassle-Free Appointments, Anytime, Anywhere.
      </p>
      <p className="w-[60%]  text-slate-400 font-semibold text-center leading-8 mb-[2%]">
        Take control of your health with our doctor appointment booking app.
        Find top-rated doctors, check availability, and schedule visits all in
        one place, making healthcare more accessible and convenient than ever
        before.
      </p>

      {/* banner button  */}

      <div className="flex ">
        <input
          className="py-2 px-4 w-[400px] focus:outline-none border border-gray-400 rounded-sm"
          type="text "
          placeholder="Search your doctors..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleSearch}
        ></input>
        <button
          className="bg-green-600 hover:bg-green-700 font-semibold text-lg text-white px-7 py-[10px] rounded-sm ml-5"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="flex justify-center items-center mt-[3%] ">
        <SvgLine></SvgLine>
      </div>
    </div>
  );
};

export default Banner;
