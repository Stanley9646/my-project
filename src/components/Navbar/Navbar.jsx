import React from "react";
import Logo from "../../assets/logo.webp";
import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    title: "PAYBILL : 542542",
    link: "#",
  },
  {
    id: 2,
    title: "ACCOUNT NUMBER : 959371",
    link: "#",
  },
  
];
const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10" />
         
        </div>
        {/* Link section */}
        <div className="!space-x-12 flex flex-row">
          {NavLinks.map((link) => {
            return (
              <a
                href={link.link}
                className="inline-block mx-4 text-lg font-semibold"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Button section */}
        <div className="hidden md:block ">
        <a
  href="https://wa.me/254711112791"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn text-[#9b802fa5]"
>
  BOOK NOW
</a>

        </div>
      </motion.div>
    </>
  );
};

export default Navbar;