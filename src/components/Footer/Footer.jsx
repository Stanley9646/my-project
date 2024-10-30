import React from "react";
import Logo from "../../assets/logo.webp";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-6" />
              <p className="text-xl font-semibold">AWINJA HOMES</p>
            </div>
            <p className="text-sm uppercase text-[#9b802fa5]">home away from home</p>
           
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold ">BOOK WITH US</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#" className="text-[#9b802fa5] font-semibold">MODE OF PAYMENT</a>
                </li>
                <li>
                  <a href="#">PAYBILL : 542542</a>
                </li>
                <li>
                  <a href="#">ACCOUNT : 959371</a>
                </li>
              
              </ul>
            </div>
           
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+254 711112791 </a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:contact.thecodingjourney@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold text-[#9b802fa5] border-t-2 pt-5 mt-5">
          &copy; 2024 AH. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;