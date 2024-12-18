import { useLoaderData } from "react-router-dom";

const BookingPage = () => {
  const loadedData = useLoaderData();

  const { _id, fee, country, availability } = loadedData;

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="">calender</div>
    </div>
  );
};

export default BookingPage;
