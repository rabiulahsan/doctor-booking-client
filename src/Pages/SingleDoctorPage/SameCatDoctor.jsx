/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import UseAllDoctors from "../../Hooks/UseAllDoctors/UseAllDoctors";
import DoctorCard from "../DoctorsPage/DoctorCard";

const SameCatDoctor = ({ type, _id }) => {
  const [sameCatDoctos, setSameCatDoctors] = useState([]);
  const [allDoctors, isLoading] = UseAllDoctors();

  // Effect to filter doctors when the category changes
  useEffect(() => {
    const filteredDoctors = allDoctors?.filter(
      (doctor) => doctor?.type?.toLowerCase() === type.toLowerCase()
    );

    const newFilteredDoctors = filteredDoctors?.filter(
      (doc) => doc?._id !== _id
    );
    setSameCatDoctors(newFilteredDoctors);
  }, [_id, type, allDoctors]);

  console.log(sameCatDoctos);

  return (
    <div>
      <p className="font-bold text-slate-800 text-2xl my-5">
        Same categories othes doctors
      </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-x-9 gap-y-7 grid-cols-1 lg:grid-cols-3  mb-[4%] mt-[2%]">
          {sameCatDoctos?.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor?._id}></DoctorCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SameCatDoctor;
