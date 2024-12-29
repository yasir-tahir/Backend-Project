import img from '../assets/images/remote1.png'
import img1 from '../assets/images/key1.png'
import img2 from '../assets/images/led1.png'
import img3 from '../assets/images/chair1.png'
import stars from '../assets/images/star1.png'
import stars1 from '../assets/images/star2.png'
import stars2 from '../assets/images/star3.png'
import stars3 from '../assets/images/star4.png'

import ProductCard from "../components/ProductCard";
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import useProducts from '../hooks/useProducts'


export default function Slider() {

  const {products,isLoading,error} = useProducts('limit=5&skip=20');
  
  return (
    <div> 
     {isLoading ? "loading..." : ""}
     {error}



         <Swiper
      spaceBetween={50} 
      slidesPerView={4}
      modules={[Navigation, Pagination, Autoplay, Scrollbar]}
      autoplay={{delay: 2000, pauseOnMouseEnter: true}}
      pagination={{ clickable: true}}
      navigation
      scrollbar={{ draggable: true}}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >

      {products?.slice(0, 6)?.map((item) => (
          <SwiperSlide key={item.id} >
             
             <ProductCard 
              id={item.id}
              image={item.thumbnail}
              percent={-item.discountPercentage} 
              text={item. title}  
              price={item.price} 
              discountPercentage={item.discountPercentage} 
              star={stars}
             /> 
             
             </SwiperSlide>
      ))}

      
      {/* <SwiperSlide> <ProductCard percent="-35%" image={img1} text="AK -900 Wired Keyboard"  star={stars1} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-30%" image={img2} text="IPS LCD Gaming Monitor"  star={stars2} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-25%" image={img3} text="S-Series Comfort Chair "  star={stars3} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-40%" image={img} text="HAVIT HV-G92 Gamepad"  star={stars} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-35%" image={img1} text="AK -900 Wired Keyboard"  star={stars1} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-30%" image={img2} text="IPS LCD Gaming Monitor"  star={stars2} /> </SwiperSlide>
      */}
      
    </Swiper>

    </div>
  )
}
