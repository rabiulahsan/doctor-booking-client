import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Numbers = () => {
  return (
    <div className=" mt-[12%] mb-[5%]">
      <SectionTitle heading="Our Impact in Numbers"></SectionTitle>
      <div className="bg-slate-700 rounded-lg py-6 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-6 text-center text-white">
          {/* Doctors */}
          <div>
            <p className="text-lg font-semibold mb-3 flex items-center justify-center space-x-1">
              <span role="img" aria-label="icon">
                🦷
              </span>{" "}
              {/* Icon (replace with real image if needed) */}
              <span>Doctors</span>
            </p>
            <p className="text-3xl font-bold">+824</p>
          </div>

          {/* Customer Service */}
          <div className="border-l border-r border-gray-400">
            <p className="text-lg font-semibold mb-3">Customer Service</p>
            <p className="text-3xl font-bold">+20K</p>
          </div>

          {/* Pion Service */}
          <div>
            <p className="text-lg font-semibold mb-3 flex items-center justify-center space-x-1">
              <span>Pion Service</span>
              <span role="img" aria-label="icon">
                🏥
              </span>{" "}
              {/* Icon */}
            </p>
            <p className="text-3xl font-bold">+10K</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
