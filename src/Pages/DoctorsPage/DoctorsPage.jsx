import { useState, useEffect } from "react";
import UseAllDoctors from "../../Hooks/UseAllDoctors/UseAllDoctors";
import SearchBar from "./SearchBar";
import DoctorCard from "./DoctorCard";
import StaggerAnimation from "../../Components/StaggerAnimation/StaggerAnimation";

const DoctorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allDoctors, isLoading] = UseAllDoctors();
  const [categoricalDoctor, setCategoricalDoctor] = useState([]);
  // console.log(categoricalDoctor);

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
      <StaggerAnimation text={"Find Your Doctor"}></StaggerAnimation>
      <SearchBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setCategoricalDoctor={setCategoricalDoctor}
        allDoctors={allDoctors}
      ></SearchBar>
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
