import { useState, useEffect } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAllDoctors from "../../Hooks/UseAllDoctors/UseAllDoctors";
import SearchBar from "./SearchBar";

const DoctorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allDoctors, isLoading] = UseAllDoctors();
  const [categoricalDoctor, setCategoricalDoctor] = useState([]);

  // Effect to filter doctors when the category changes
  useEffect(() => {
    if (selectedCategory) {
      const filteredDoctors = allDoctors.filter(
        (doctor) => doctor.type.toLowerCase() === selectedCategory.toLowerCase()
      );
      setCategoricalDoctor(filteredDoctors);
    } else {
      setCategoricalDoctor(allDoctors); // Show all doctors if no category selected
    }
  }, [selectedCategory, allDoctors]);

  return (
    <>
      <SectionTitle heading={"Find Your Doctor"}></SectionTitle>
      <SearchBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      ></SearchBar>
      <div className="doctor-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          categoricalDoctor.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p>{doctor.type}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DoctorsPage;
