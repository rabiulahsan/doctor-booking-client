import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FaqItem from "./FaqItem";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faqs = () => {
  const faqRefs = useRef([]);

  useGSAP(() => {
    faqRefs.current.forEach((faq) => {
      gsap.fromTo(
        faq,
        { x: -200 }, // Initial position: off-screen to the left
        {
          x: 0, // Final position: at its original position
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faq,
            start: "top 80%", // Animation starts when FAQ enters the viewport
            end: "top 40%", // Animation ends when FAQ is closer to the center
            scrub: 1,
            markers: true,
            toggleActions: "reverse play reverse reverse", // Animates in and out
          },
        }
      );
    });
  });

  return (
    <div className="mb-[5%] faq-container">
      <SectionTitle heading="Insightful Answers to Common Questions"></SectionTitle>
      <div className="mx-[5%] px-[4%] faq-item faq-item">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            ref={(el) => (faqRefs.current[index] = el)} // Assign ref to each FAQ item
          >
            <FaqItem question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;

const faqs = [
  {
    id: 1,
    question: "How do I book an appointment with a doctor?",
    answer:
      "You can book an appointment by searching for a doctor by specialty or location, selecting a preferred time, and confirming the appointment. You'll receive a confirmation via email or SMS.",
  },
  {
    id: 2,
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can easily reschedule or cancel your appointment through the app. Navigate to your upcoming appointments, select the one you wish to modify, and choose the reschedule or cancel option.",
  },
  {
    id: 3,
    question: "Are there any consultation fees for booking through the app?",
    answer:
      "Yes, there are consultation fees depending on the doctor you choose. The fee will be displayed before you confirm your appointment. Payment can be made online or at the clinic.",
  },
  {
    id: 4,
    question:
      "What should I do if I don't receive an appointment confirmation?",
    answer:
      "If you don't receive a confirmation within a few minutes, check your email's spam folder. You can also check the appointment status in the app under 'My Appointments'. If there's still an issue, contact customer support.",
  },
  {
    id: 5,
    question: "Can I book an appointment for a family member?",
    answer:
      "Yes, you can book appointments for family members. During the booking process, simply choose the option to add a family member's details before confirming the appointment.",
  },
  {
    id: 6,
    question: "What if the doctor I want to see is unavailable?",
    answer:
      "If your preferred doctor is unavailable, you can opt to receive a notification when they become available again, or choose another doctor with a similar specialty.",
  },
];
