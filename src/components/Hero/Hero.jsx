import React , {useState , useEffect} from "react";
import HeroPng from "../../assets/logo.webp";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Hero = () => {
    const [sentence1] = useState(" or Accomodation ");
    const [sentence2] = useState(" & Flight");
    const [sentence3] = useState(" Transfer");
    const [sentence4] = useState("  (Optional)");
    const [sentence5] = useState("  (Tours)");
    const [currentIndex1, setCurrentIndex1] = useState(0);
    
    useEffect(() => {
  //counter of the sentence
      let interval1 = setInterval(() => {
        setCurrentIndex1((currentIndex) => currentIndex + 1);
      }, 100);
      return () => 
      clearInterval(interval1);
      }, []);
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif text-[#9b802fa5]"
            >
              AWINJA HOMES
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base font-semibold text-gray-500 leading-7"
            >
              Make memories in a stylishly designed space with everything you need at your fingertips. <br/> Whether you're here for work or play, our Airbnb offers seamless comfort and convenience.
            </motion.p>
            <div className="space-x-4">
            <h2 className=" flex justify-center font-semibold text-sm">
            <span className='text-gray-900 ml-2 mr-2'>◆</span>
      Serene Escape
      {sentence1.slice(0, currentIndex1)}
    </h2>

    <h2 className="     flex justify-center font-semibold text-sm">
    <span className='text-gray-900 ml-2 mr-2'>◆</span>
    Ticketing for SGR 
      {sentence2.slice(0, currentIndex1)}
    </h2>

    <h2 className="   flex justify-center font-semibold text-sm">
    <span className='text-gray-900 ml-2 mr-2'>◆</span>
    SGR & Airport
      {sentence3.slice(0, currentIndex1)}
    </h2>

    <h2 className=" flex justify-center font-semibold text-sm ">
    <span className='text-gray-900 ml-2 mr-2'>◆</span>
    Chef Provided
      {sentence4.slice(0, currentIndex1)}
    </h2>

    <h2 className=" flex justify-center mb-4 font-semibold text-sm">
      <span className='text-gray-900 ml-2 mr-2'>◆</span>
    Guided Provided
      {sentence5.slice(0, currentIndex1)}
    </h2>
                
             
              <motion.a
  href="https://wa.me/254711112791"
  target="_blank"
  rel="noopener noreferrer"
  variants={SlideUp(0.8)}
  initial="initial"
  animate="animate"
  className="primary-btn uppercase mt- bg-[#9b802fa5] text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
>
  Book via WhatsApp
</motion.a>

              
            </div>
          </div>
          {/* Images section */}
          <div className="flex flex-col items-center justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={HeroPng}
              alt=""
              className="w-[80%] md:w-[700px] object-cover rounded-full shadow-md "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;