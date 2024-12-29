import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import stars from '../assets/images/star1.png'
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";


export default function Products() {
  const darkMode = useSelector((state) =>state.darkMode.darkMode); 

  const {products,isLoading,error} = useProducts(); 

// console.log("products", products);

const [searchTerm, setSearchTerm] = useState("");

// console.log(searchTerm);

const searchProducts  = () => {
  const result = products?.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  // console.log('result', result);
  
  return result || []
};

const searchResult = searchProducts()


// is code mai ap price or discount ek hi tarike ke match karwaskte hai 
// const searchProducts  = () => {
//   const result = products?.filter((item) => {
//     return ;
//   });
//   console.log('result', result);
  
//   return result || []
// };

// const searchResult = searchProducts()


  return (
    <div className={`container  transition-colors duration-1000 ${darkMode ? "bg-slate-900" : ""}`}>
      
      <input type="Search"
       name="price" 
       id="price"
       onChange={(event)=>{
        setSearchTerm(event.target.value);
        
       }}
        class="block w-full rounded-md border-0 py-1.5 pl- pr-20 outline-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6" placeholder="0.00" />
  
      
      <div className=" flex flex-wrap gap-[30px] center"> 
        {searchResult?.map((item) => (
          <ProductCard
            darkMode={darkMode}
            key={item.id} 
            id={item.id} 
            image={item.thumbnail} 
            percent={item.discountPercentage} 
            text={item.title}  
            price={item.price} 
            discountPercentage={item.discountPercentage} 
            star={stars}
             />  
        ))}
</div>
    </div>
  )
}

