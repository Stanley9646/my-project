import React from "react";
import Banner1 from "../../assets/photo17.jpg";
import Banner3 from "../../assets/photo10.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner2 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              An Oasis of Comfort and Style
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-[#9b802fa5] font-semibold leading-7"
            >
              Escape the hustle and bustle in a beautifully designed retreat where comfort meets sophistication.{" "}
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
             
              <div className="max-w-[90px] space-y-2">
                <p className="text-3xl font-bold font-serif">500 +</p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              
            </motion.div>
           
          </div>
          {/* image section */}
          <div className="flex flex-col justify-center  ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
        </div>

        
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
             A Peaceful Retreat in the Heart of the City
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-[#9b802fa5]  font-semibold leading-7"
            >
              Ideal for travelers looking to balance relaxation with proximity to all the best spots!{" "}
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
             
              <div className="max-w-[90px] space-y-2">
                <p className="text-3xl font-bold font-serif">5 +</p>
                <p className="text-gray-500 text-sm">Years of Experience</p>
              </div>
              
            </motion.div>
           
          </div>
          {/* image section */}
          <div className="flex flex-col justify-center  ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner3}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
        </div>

        
      </div>
      
    </div>
  );
};

export default Banner2;