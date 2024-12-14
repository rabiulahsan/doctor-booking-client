import Marquee from "react-fast-marquee";
import MarqueeCard from "./MarqueeCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Partner = () => {
  return (
    <div className=" mb-[4%]">
      <SectionTitle heading="Doctor Chambers & Partnered Medical Centers"></SectionTitle>
      <div className="w-[70%] mx-auto">
        <Marquee
          pauseOnHover={true}
          gradient={true}
          speed={70}
          loop={0}
          className=""
        >
          <MarqueeCard image={"/google.png"}></MarqueeCard>
          <MarqueeCard image={"/amazon.png"}></MarqueeCard>
          <MarqueeCard image={"/netflix.png"}></MarqueeCard>
          <MarqueeCard image={"/microsoft.png"}></MarqueeCard>
          <MarqueeCard image={"/samsung.png"}></MarqueeCard>
          <MarqueeCard image={"/meta.png"}></MarqueeCard>
        </Marquee>
      </div>
      <div className="w-[70%] mx-auto mt-[1%]">
        <Marquee
          pauseOnHover={true}
          gradient={true}
          speed={70}
          loop={0}
          direction="right"
          className=""
        >
          <MarqueeCard image={"/asus.png"}></MarqueeCard>
          <MarqueeCard image={"/msi.png"}></MarqueeCard>
          <MarqueeCard image={"/nvidia.png"}></MarqueeCard>
          <MarqueeCard image={"/qualqom.png"}></MarqueeCard>
          <MarqueeCard image={"/intel.png"}></MarqueeCard>
          <MarqueeCard image={"/amd.png"}></MarqueeCard>
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
