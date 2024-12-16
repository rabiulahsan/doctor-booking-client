import { useEffect, useState } from "react";

const UseAllDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors/getalldoctors")
      .then((res) => res.json())
      .then((data) => {
        setAllDoctors(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return [allDoctors, isLoading];
};

export default UseAllDoctors;
