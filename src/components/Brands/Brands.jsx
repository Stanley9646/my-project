// import React from "react";
// import Brand1 from "../../assets/brand/photo4.jpg";
// import Brand2 from "../../assets/brand/photo5.jpg";
// import Brand3 from "../../assets/brand/photo4.jpg";
// import Brand4 from "../../assets/brand/photo5.jpg";
// import Brand5 from "../../assets/brand/photo4.jpg";
// import { motion } from "framer-motion";
// import { SlideLeft } from "../../animation/animate";
// const Brands = () => {
//   return (
//     <>
//       <div className="container py-14">
//         <div className="flex flex-wrap justify-center  lg:justify-between gap-6  ">
//           <motion.img
//             variants={SlideLeft(0.2)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand1}
//             alt="brand"
//             className="w-[110px] md:w-[200px] "
//           />
//           <motion.img
//             variants={SlideLeft(0.4)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand2}
//             alt="brand"
//             className="w-[110px] md:w-[200px]"
//           />
//           <motion.img
//             variants={SlideLeft(0.6)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand3}
//             alt="brand"
//             className="w-[110px] md:w-[200px]"
//           />
//           <motion.img
//             variants={SlideLeft(0.8)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand4}
//             alt="brand"
//             className="w-[110px] md:w-[200px]"
//           />
//           <motion.img
//             variants={SlideLeft(1.0)}
//             initial="initial"
//             whileInView={"animate"}
//             src={Brand5}
//             alt="brand"
//             className="w-[110px] md:w-[200px]"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Brands;

import React from "react";
import Brand1 from "../../assets/photo1.jpg";
import Brand2 from "../../assets/photo2.jpg";
import Brand3 from "../../assets/photo3.jpg";
import Brand4 from "../../assets/photo6.jpg";
import Brand5 from "../../assets/photo7.jpg";
import Brand6 from "../../assets/photo8.jpg";
import Brand7 from "../../assets/photo9.jpg";
import Brand8 from "../../assets/photo10.jpg";
import Brand9 from "../../assets/photo11.jpg";
import Brand10 from "../../assets/photo12.jpg";
import Brand11 from "../../assets/photo13.jpg";
import Brand12 from "../../assets/photo14.jpg";
import Brand13 from "../../assets/photo15.jpg";
import Brand14 from "../../assets/photo16.jpg";
import Brand15 from "../../assets/photo17.jpg";
import Brand16 from "../../assets/photo18.jpg";
import Brand17 from "../../assets/photo19.jpg";
import Brand18 from "../../assets/photo20.jpg";
import Brand19 from "../../assets/photo21.jpg";
import Brand20 from "../../assets/photo22.jpg";
import Brand21 from "../../assets/photo23.jpg";
import Brand22 from "../../assets/photo24.jpg";
import Brand23 from "../../assets/photo25.jpg";
import Brand24 from "../../assets/photo26.jpg";
import Brand25 from "../../assets/photo27.jpg";



import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Directly import Autoplay from 'swiper'
import 'swiper/swiper-bundle.css'; // Ensure styles are imported

const Brands = () => {
  return (
    <div className="container py-14">
      <Swiper
       modules={[Autoplay]} 
        loop={true}
        autoplay={{
          delay: 300, // 3 seconds delay
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 6 },
          768: { slidesPerView: 9 },
          168: { slidesPerView: 4 },
        }}
        className="flex justify-center gap-6 space-x-2"
      >
        <SwiperSlide>
          <img src={Brand16} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand17} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand18} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand19} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand20} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand21} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand22} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand8} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand9} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand10} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand11} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand12} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand13} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand14} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand15} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand1} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand2} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand3} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand4} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand5} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand6} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand7} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand23} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand24} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand25} alt="brand" className="w-[110px] md:w-[200px]" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Brands;
