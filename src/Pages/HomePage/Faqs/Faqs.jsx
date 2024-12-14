import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FaqItem from "./FaqItem";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Faqs = () => {
  gsap.registerPlugin(ScrollTrigger);

  //todo => animate the faq page
  return (
    <div className="mb-[5%] faq-container">
      <SectionTitle heading="Insightful Answers to Common Questions"></SectionTitle>
      <div className="mx-[5%] px-[4%] faq-item faq-item">
        {faqs.map((faq) => (
          <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
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
