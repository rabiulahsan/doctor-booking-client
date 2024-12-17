import { useLoaderData } from "react-router-dom";
import PageBanner from "./PageBanner";

const SingleDoctorPage = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div className="px-[8%]">
      <PageBanner></PageBanner>
    </div>
  );
};

export default SingleDoctorPage;
