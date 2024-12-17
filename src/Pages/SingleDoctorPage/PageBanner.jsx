/* eslint-disable react/prop-types */
const PageBanner = ({ image }) => {
  return (
    <div className=" relative ">
      <div className="w-full h-[260px] relative mb-[5%]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={details?.image}
          alt={details?.title}
        />
        <div className=" rounded-xl flex justify-center items-center absolute top-0 left-0 right-0 h-full w-full  bg-[rgba(0,0,0,0.6)]">
          <p className="text-4xl text-white font-bold">{details?.title}</p>
        </div>
      </div>

      <div className=" absolute -bottom-[30%] left-[5%] ">
        <img
          src={image}
          alt=""
          className="h-[180px] w-[180px] rounded-full border-4  border-slate-300 object-cover bg-white"
        />
      </div>
    </div>
  );
};

export default PageBanner;

const details = {
  image: "https://wallpaper.dog/large/20618009.jpg",
  title: "Doctors Page",
};
