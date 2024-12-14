import { useEffect, useRef, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Categories = () => {
  const [activeTab, setActiveTab] = useState(0);
  const indicatorRef = useRef(null);
  const buttonRefs = useRef([]);
  const specialists = [
    {
      id: 0,
      name: "Cardiologists",
      data: "Cardiologists are medical doctors who specialize in diagnosing and treating conditions related to the heart and cardiovascular system. They manage issues such as heart disease, heart attacks, high blood pressure, arrhythmias, and heart failure. Cardiologists are experts in performing diagnostic tests like electrocardiograms (EKGs) and echocardiograms, as well as procedures like angioplasty and heart catheterization. They work closely with surgeons in cases requiring heart surgery and provide ongoing care for patients with chronic heart conditions.",
      image: "/1.png", // Image placeholder
    },
    {
      id: 1,
      name: "Ophthalmologists",
      data: "Ophthalmologists are eye care specialists who are trained to diagnose and treat all types of eye disorders and diseases. They are licensed to practice medicine and perform surgery. Ophthalmologists treat a variety of conditions including glaucoma, cataracts, macular degeneration, diabetic retinopathy, and other vision problems. They are also qualified to prescribe corrective lenses such as glasses or contact lenses and perform vision-related surgeries like LASIK. Their expertise extends to both medical and surgical aspects of eye care.",
      image: "/2.png", // Image placeholder
    },
    {
      id: 2,
      name: "Endocrinologists",
      data: "Endocrinologists specialize in the body’s hormonal systems. They diagnose and treat conditions related to hormonal imbalances, including diabetes, thyroid diseases, metabolic disorders, osteoporosis, infertility, and hypertension. These doctors are experts in glands and hormones, and they often work with patients suffering from chronic conditions that require long-term care and monitoring. Endocrinologists play a key role in managing diabetes, helping patients regulate blood sugar levels through medications, insulin therapy, and lifestyle changes.",
      image: "/3.png", // Image placeholder
    },
    {
      id: 3,
      name: "Dermatologists",
      data: "Dermatologists are specialists in diagnosing and treating skin, hair, and nail disorders. They handle a wide variety of skin conditions, ranging from cosmetic concerns such as acne, scars, and wrinkles, to more severe conditions like eczema, psoriasis, and skin cancer. Dermatologists also perform procedures like mole removal, skin biopsies, and cosmetic surgeries such as botox injections. They are experts in skin care treatments and play an essential role in detecting early signs of skin cancer and providing preventive care.",
      image: "/4.png", // Image placeholder
    },
    {
      id: 4,
      name: "Allergists",
      data: "Allergists, or immunologists, specialize in diagnosing and treating allergic conditions and immune system disorders. They help patients manage allergies related to food, pollen, mold, and animal dander, as well as conditions like asthma, hay fever, and eczema. Allergists conduct allergy testing and provide treatments such as allergy shots (immunotherapy) to help patients reduce their allergic reactions. They also treat more complex immune system disorders such as autoimmune diseases and immune deficiencies, helping to improve patients’ quality of life through personalized treatment plans.",
      image: "/5.png", // Image placeholder
    },
  ];

  // Dynamically set the sliding indicator width and position
  useEffect(() => {
    const activeButton = buttonRefs.current[activeTab];
    if (activeButton && indicatorRef.current) {
      const buttonWidth = activeButton.offsetWidth;
      indicatorRef.current.style.width = `${buttonWidth}px`;
      indicatorRef.current.style.transform = `translateX(${activeButton.offsetLeft}px)`;
    }
  }, [activeTab]);

  return (
    <div className="my-[5%]  py-6 lg:px-[15%]">
      <SectionTitle heading="Medical Specialists by Category"></SectionTitle>
      {/* Tab Navigation */}
      <div className="relative flex items-center p-2 rounded-full bg-slate-700 overflow-hidden transition">
        {/* Sliding Indicator */}
        <div
          ref={indicatorRef}
          className="absolute top-2 bottom-2 left-1 right-1 rounded-full bg-green-600 transition-all duration-700 "
        ></div>

        {/* Tab Buttons */}
        {specialists.map((specialist, index) => (
          <button
            key={specialist.id}
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => setActiveTab(index)}
            className={`relative flex-grow py-3 mr-2 px-6  rounded-full font-semibold text-white ${
              activeTab === index ? "" : "hover:bg-slate-600"
            }`}
          >
            {specialist.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-[4%] p-4  rounded-lg bg-slate-100">
        {specialists
          .filter((specialist) => specialist.id === activeTab)
          .map((specialist) => (
            <CategoriesCard
              key={specialist.id}
              specialist={specialist}
            ></CategoriesCard>
          ))}
      </div>
    </div>
  );
};

export default Categories;
