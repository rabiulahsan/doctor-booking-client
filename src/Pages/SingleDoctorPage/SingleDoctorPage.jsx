import { useLoaderData } from "react-router-dom";

const SingleDoctorPage = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return <div>this is single doctor page</div>;
};

export default SingleDoctorPage;
