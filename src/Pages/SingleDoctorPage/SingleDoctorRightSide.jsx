/* eslint-disable react/prop-types */
const SingleDoctorRightSide = ({ availability }) => {
  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(":");
    const hour12 = ((+hour + 11) % 12) + 1; // Converts 24hr to 12hr
    const ampm = +hour >= 12 ? "pm" : "am";
    return `${hour12}:${minute} ${ampm}`;
  };

  return (
    <div className="w-1/3 border border-slate-300 rounded-md py-5 px-5 self-start">
      <h2 className="text-xl  text-slate-700 font-bold mb-6 text-center">
        Available Dates
      </h2>
      <div className="space-y-4">
        {availability[0]?.days?.map((day, index) => (
          <div
            key={index}
            className="p-4 bg-slate-100 hover:bg-slate-200 rounded flex justify-between items-center"
          >
            <p className=" font-semibold text-slate-700">{day}</p>
            {availability[0]?.timeSlots?.map((slot, i) => (
              <p
                key={i}
                className="  text-slate-600 flex space-x-4 font-semibold"
              >
                {convertTo12HourFormat(slot.startTime)} -{" "}
                {convertTo12HourFormat(slot.endTime)}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="font-semibold text-white bg-green-600 hover:bg-green-700 px-6 py-3 mt-5 rounded">
          Make Appointments
        </button>
      </div>
    </div>
  );
};

export default SingleDoctorRightSide;
