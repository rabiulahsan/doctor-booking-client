import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAllDoctors from "../../Hooks/UseAllDoctors/UseAllDoctors";
import SearchBar from "./SearchBar";

const DoctorsPage = () => {
  const [allDoctors, isLoading] = UseAllDoctors();
  // console.log(allDoctors);
  return (
    <>
      <SectionTitle heading={"Find Your Doctor"}></SectionTitle>
      <SearchBar></SearchBar>
    </>
  );
};

export default DoctorsPage;
