/* eslint-disable react/prop-types */

const MarqueeCard = ({ image }) => {
  return (
    <div>
      <img width={100} height={50} className=" mx-9" src={image} alt="" />
    </div>
  );
};

export default MarqueeCard;
