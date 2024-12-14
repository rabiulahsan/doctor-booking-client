import { Player } from "@lottiefiles/react-lottie-player";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div className="px-[10%] mb-[5%]">
      <SectionTitle heading="What Makes Us Different"></SectionTitle>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <Player
            className="h-[300px]"
            autoplay
            loop
            src="/about.json" // Ensure the path is correct
          ></Player>
        </div>
        <div className="w-1/2 text-slate-500 leading-8">
          <p className="w-[80%]">
            Our mission is to bridge the gap between patients and healthcare
            professionals. With our app, you can easily find doctors, review
            their expertise, and schedule appointments at your convenience. We
            are dedicated to making healthcare more accessible by providing a
            reliable platform for managing your health effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
