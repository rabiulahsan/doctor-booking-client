import { useState, useEffect } from "react";
import UseAllDoctors from "../../Hooks/UseAllDoctors/UseAllDoctors";
import DoctorCard from "./DoctorCard";
import StaggerAnimation from "../../Components/StaggerAnimation/StaggerAnimation";

const DoctorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allDoctors, isLoading] = UseAllDoctors();
  const [categoricalDoctor, setCategoricalDoctor] = useState([]);
  const [sort, setSort] = useState("");
  const [searchInput, setSearchInput] = useState("");
  // console.log(categoricalDoctor);

  useEffect(() => {
    let filteredDoctors = allDoctors;

    if (selectedCategory) {
      filteredDoctors = filteredDoctors.filter(
        (doctor) => doctor.type.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchInput.trim() !== "") {
      filteredDoctors = filteredDoctors.filter(
        (doc) =>
          doc &&
          doc.name &&
          doc.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (sort === "highToLow") {
      filteredDoctors = filteredDoctors.sort((a, b) => b.fee - a.fee);
    } else if (sort === "lowToHigh") {
      filteredDoctors = filteredDoctors.sort((a, b) => a.fee - b.fee);
    }

    setCategoricalDoctor(filteredDoctors);
  }, [selectedCategory, sort, searchInput, allDoctors]);

  // Handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    setSearchInput(e.target.value); // Update the search input
  };

  // Handle clear filters
  const handleClear = () => {
    setCategoricalDoctor(allDoctors);
    setSelectedCategory("");
    setSearchInput("");
    setSort("");
  };

  return (
    <>
      <StaggerAnimation text={"Find Your Doctor"}></StaggerAnimation>

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
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-slate-200 w-full  bg-transparent rounded-sm px-5 py-3 text-slate-600 font-semibold"
          >
            <option value="" disabled>
              Default
            </option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
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
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-x-9 gap-y-7 grid-cols-1 lg:grid-cols-3 px-[8%] my-[4%] ">
            {categoricalDoctor?.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor?._id}></DoctorCard>
            ))}
          </div>
        )}
      </>
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
