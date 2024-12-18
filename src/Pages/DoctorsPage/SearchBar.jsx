/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = ({
  selectedCategory,
  setSelectedCategory,
  setCategoricalDoctor,
  allDoctors,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  const fetchSearchData = (value) => {
    const results = allDoctors?.filter((doc) => {
      return value && doc && doc.name && doc.name.toLowerCase().includes(value);
    });
    setSearchData(results);
  };

  // console.log(searchData);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    fetchSearchData(e.target.value);
    setCategoricalDoctor(searchData);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value; // Get the updated value directly
    setSelectedCategory(newCategory); // Update the state
    // console.log(newCategory);
    // console.log(selectedCategory);
  };

  const handleClear = () => {
    setCategoricalDoctor(allDoctors);
    setSelectedCategory("");
    setSearchInput("");
    setSearchData([]);
  };

  return (
    <div className=" flex items-center gap-x-5 mx-[8%]">
      <div className="">
        {/* Search Icon and Input */}

        <input
          type="text"
          placeholder="Search your doctor..."
          value={searchInput}
          onChange={handleSearch}
          className="w-[400px] outline-none text-slate-700 border border-slate-300 rounded-sm  shadow-sm py-[10px] px-4 "
          // onKeyDown={handleSearch}
        />

        {/* Search Button */}
        {/* <button
            onClick={handleSearch}
            className=" text-white font-semibold px-6 py-[10px] ml-5 bg-green-600 hover:bg-green-700 transition rounded-sm"
          >
            Search
          </button> */}
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
      <div className="">
        <button
          onClick={handleClear}
          className="font-semibold text-white bg-slate-600 hover:bg-slate-700 px-5 py-3 rounded-sm"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

const categories = [
  "Cardiologists",
  "Ophthalmologists",
  "Endocrinologists",
  "Dermatologists",
  "Allergists",
];
