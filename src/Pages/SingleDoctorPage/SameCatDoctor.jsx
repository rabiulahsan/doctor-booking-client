/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import UseAllDoctors from "../../Hooks/UseAllDoctors/UseAllDoctors";

const SameCatDoctor = ({ type }) => {
  const [sameCatDoctos, setSameCatDoctors] = useState([]);
  const [allDoctors] = UseAllDoctors();

  // Effect to filter doctors when the category changes
  useEffect(() => {
    const filteredDoctors = allDoctors?.filter(
      (doctor) => doctor?.type?.toLowerCase() === type.toLowerCase()
    );
    setSameCatDoctors(filteredDoctors);
  }, [type, allDoctors]);

  console.log(sameCatDoctos);

  return <div></div>;
};

export default SameCatDoctor;
