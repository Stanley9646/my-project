import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Imagine unwinding in a stylish, comfortable space with all the essentials. Whether you're here to relax, work, or explore, our Airbnb is your ideal home base.",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Settle into a space that offers more than just a place to sleep. Our Airbnb features open-concept living, sleek design, and plenty of room to unwind, making it the ideal spot for solo travelers, couples, and families alike.",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Looking for a budget-friendly place that doesn’t skimp on comfort? This Airbnb offers a warm, inviting space with all the essentials—perfect for travelers seeking great value and convenience.",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];
const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-[#9b802fa5]  font-semibold"
          >
            Enjoy a tastefully decorated, cozy space at a price that makes sense. Whether you’re here to explore or just need a comfortable spot to relax, we offer great value for your stay.
          </motion.p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif ">{card.title}</p>
                <p className="text-[#9b802fa5] text-sm font-semibold">{card.description}</p>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;