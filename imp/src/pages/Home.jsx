 import Button from "../components/Button";
import Category from "../components/Category";
import CoverSlide from "../components/CoverSlide";
import ProductCard from "../components/ProductCard";
import FlashSale from "../components/FlashSale";
import Browse from "../components/Browse";
import BestPrice from "../components/BestPrice";
 import Slider from "../components/Slider";
 import NewArrival from "../components/NewArrival";

 import cover from "../assets/images/CoverSlide.png";
 import cover1 from "../assets/images/CoverSlide1.png";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";


export default function Home() {
  const darkMode = useSelector((state) =>state.darkMode.darkMode);

  const {products,isLoading,error} = useProducts('limit=15&skip=25');

  return (
    <div className={`container transition-colors duration-1000 ${darkMode ? "bg-slate-900" : ""} `} >
      <CoverSlide cover={cover} />    
      <FlashSale text="Today's" main="Flash Sales" />
      <Slider  />
      <Button button={"View All Products"} />
      <Browse text="Categories" main="Browse By Category" />
      <Category />  
      <BestPrice text="This Month" main="Best Selling Price" />
      <Slider />
      <CoverSlide cover={cover1} />
      <Browse text="Our Products" main="Explore Our Products" />
      <Slider />
      <Slider />
      <Button button={"View All Products"} />
      <Browse text="Feature" main="New Arrival" />
      <NewArrival />
        </div>
  )
}
