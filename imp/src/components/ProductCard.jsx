
import { IoMdHeartEmpty } from "react-icons/io"; 
import { IoEyeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function ProductCard(Props){
    const darkMode = useSelector((state) =>state.darkMode.darkMode);

   const discountPrice =  (Props.price - Props.discountPercentage * (Props.price/100)).toFixed(2)
    // console.log('discount', discountPrice);

    return(
        <div className="bg-[#F5F5F5]  w-64 h-[450px] p-3 group" >
        <Link  
         to={`/product/${Props.id}`}   
         className={` ${darkMode ? "bg-slate-600" : "bg-[#F5F5F5]"} w-64 h-full mt-2  `}>
            <div className='discount top-3 left-3 bg-[#DB4444] font-[poppins]  w-14 h-6 rounded flex items-center justify-center text-xs text-[#FAFAFA]'>
                {" "}
                {Props.percent}
            
                
            </div>
            
            <div className='text-xl top-3 flex justify-end h-0    items-center '>
                <span >
                <IoMdHeartEmpty className='rounded-[100px] bg-[white] p-1 text-2xl mb-2 ' />
                <IoEyeOutline className='rounded-[100px] bg-[white] text-2xl p-1 ' />
                </span>

            </div>

            

        <div className='bdr'>
            
        <img src={Props.image} alt='product img' className="m-auto group-hover:scale-105 transition-all duration-300  " />
        </div>

        

<div className='mt-8'>
       

        <h3 className='text-[#000000] font-medium mb-3 font-[poppins] group-hover:text-primary transition-all duration-300'> {Props.text} </h3>

        <p>
             <span className='text-[#DB4444] font-medium mb-3 '> ${discountPrice} </span>
        
            <span className='text-[#6d6c6c] font-medium ml-2  mb-3 line-through'> ${Props.price} </span>

        </p>

        
        </div>
        </Link>
        
  
        </div>
    )
}