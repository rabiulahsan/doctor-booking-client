import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const DoctorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchInput.trim()) {
      console.log("Searching for:", searchInput);
      setSearchInput("");
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };
  return (
    <>
      <SectionTitle heading={"Find Your Doctor"}></SectionTitle>
      <div className=" flex items-center gap-x-5 mx-[8%]">
        <div className="">
          {/* Search Icon and Input */}

          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="outline-none text-slate-700 border border-slate-300 rounded-sm  shadow-sm py-[10px] px-4 "
            onKeyDown={handleSearch}
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className=" text-white font-semibold px-6 py-[10px] ml-5 bg-green-600 hover:bg-green-700 transition rounded-sm"
          >
            Search
          </button>
        </div>
        <div className="category-selector">
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-slate-300  bg-transparent rounded-sm px-5 py-3 text-slate-700 font-semibold"
          >
            <option className="text-slate-500 " value="" disabled>
              Choose a category{" "}
            </option>
            {categories.map((category, index) => (
              <option
                className="text-slate-800  font-semibold bg-transparent cursor-pointer"
                key={index}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;

const categories = [
  "Cardiologists",
  "Ophthalmologists",
  "Endocrinologists",
  "Dermatologists",
  "Allergists",
];
