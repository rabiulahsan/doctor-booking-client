import { Link } from "react-router-dom";
import StepsCard from "./StepsCard";

const Steps = () => {
  return (
    <div className="bg-green-600 mx-[12%] my-[5%] py-8 rounded-lg h-[360px] relative">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Easy Steps To Get Your Solution
        </h2>
        <p className="mt-3 text-lg text-white sm:mt-4">
          Easily make an appointment with our best doctors for your family, same
          day or next day.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="bg-white text-green-600 font-semibold py-3 px-6 rounded-md hover:bg-slate-50 "
          >
            Make an Appointment
          </Link>
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-[6%] max-w-6xl mx-auto absolute bottom-[-30%]">
        {steps?.map((step) => (
          <StepsCard key={step.id} stepDetails={step}></StepsCard>
        ))}
      </div>
    </div>
  );
};

export default Steps;

const steps = [
  {
    id: 1,
    name: "Search Doctor",
    image: "/hourglass.png",
    theme: "sky",
    description:
      "Before booking an appointment, first search for a doctor by category.",
  },
  {
    id: 2,
    name: "Choose Your Location",
    image: "/location.png",
    theme: "red",
    description:
      "Enter your location, and we will help you find an appointment near you.",
  },
  {
    id: 3,
    name: "Schedule Appointment",
    image: "/calendar.png",
    theme: "slate",
    description: "Select a date to set an appointment with your doctor.",
  },
  {
    id: 4,
    name: "Get Your Solution",
    image: "/idea.png",
    theme: "yellow",
    description:
      "We will help you find solutions for your health after the consultation.",
  },
];
