import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const DoctorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Cardiologists",
    "Ophthalmologists",
    "Endocrinologists",
    "Dermatologists",
    "Allergists",
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };
  return (
    <div>
      <SectionTitle heading={"Find Your Doctor"}></SectionTitle>
      <div className="">
        <div className=""></div>
        <div className="category-selector">
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-slate-300  bg-transparent rounded px-5 py-3 text-slate-600 font-semibold"
          >
            <option className="text-slate-500 " value="" disabled>
              Choose a category
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
    </div>
  );
};

export default DoctorsPage;
