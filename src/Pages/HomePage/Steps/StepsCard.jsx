/* eslint-disable react/prop-types */

const StepsCard = ({ stepDetails }) => {
  const { image, name, description, theme } = stepDetails;

  // Map theme values to Tailwind background color classes
  const themeColors = {
    sky: "bg-sky-100",
    red: "bg-red-100",
    slate: "bg-slate-100",
    yellow: "bg-yellow-100",
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-white">
      <div className="flex justify-center mb-4">
        <div className={` p-3 rounded-full ${themeColors[theme]}`}>
          <img
            width={36}
            height={36}
            src={image}
            alt={`${name} icon`}
            // className="rounded-full"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-700 text-center">
        {name}
      </h3>
      <p className="mt-2 text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

export default StepsCard;
