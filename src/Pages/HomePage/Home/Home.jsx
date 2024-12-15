import Banner from "../Banner/Banner";
import Steps from "../Steps/Steps";
import Numbers from "../Numbers/Numbers";
import Categories from "../Categories/Categories";
import Faq from "../Faqs/Faqs";
import About from "../About/About";
import Partner from "../Partner/Partner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      <Partner></Partner>
      <Steps></Steps>
      <Numbers></Numbers>
      <Categories></Categories>
      <Faq></Faq>
      <About></About>
    </div>
  );
};

export default Home;
