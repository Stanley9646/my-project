import React from "react";
import Banner1 from "../../assets/photo22.jpg";
import Banner2 from "../../assets/photo13.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center  ">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] ">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
             Your Home Away From Home Awaits!
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-[#9b802fa5]  font-semibold leading-7"
            >
                Perfectly designed for relaxation and exploration, our Airbnb offers all the essentials for an unforgettable stay.{" "}
            </motion.p>
            <div>
              {/* <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover Now
              </motion.button> */}
            </div>
            
          </div>

          
        </div>

        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center  ">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner2}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] ">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
             Experience Local Living in Style !
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-[#9b802fa5]  font-semibold leading-7"
            >
                Step into a thoughtfully curated home that gives you the best of both worlds—modern amenities and authentic local charm.{" "}
            </motion.p>
            <div>
              {/* <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover Now
              </motion.button> */}
            </div>
            
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Banner;