import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from 'swr'
import { formatDistanceToNow } from "date-fns"
import { GrDeliver } from "react-icons/gr";
import { RiRefund2Line } from "react-icons/ri";

// // import stars from '../assets/images/star1.png'



// export default function ProductDetail(Props) {
//   const params = useParams();

//   const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${params.id}`, axios)

//   const product = data?.data;
//   console.log("products", data);
  
//   const [quantity, setQuantity] = useState(0)

//   const [selectedImage, setSelectedImage] = useState(null);

//   console.log("selectImage", selectedImage);

//     return (


//       <main>

//       <div className="product container flex p-3 bg-[#f7f6f6]  min-h-[600px] flex-col md:flex-row">
//         <div className="images flex md:w-[55%] bdr">
//           {product?.images?.length > 1 ?
//         <div className="w-[150px]  h-full">
//               {product?.images.map((image, i) => (
//                 <img 
//                 key={i}
//                 src={image} alt="" 
//                 className="" 
//                 onMouseOver={()=> 
//                   setSelectedImage(image)
//                 } />
//               ))}

//         </div> :null  }
//             <div className="m-auto" >
//             <img className="w-[346px] h-[315] " src={selectedImage || product?.images[0]} alt="" />
            
           
//               </div>  
              
//         </div>

//       <div className="product-data m-auto p-5 md:w-[45%] ">

//       <h2 className=" mb-3 text-[24px] font-semibold " > {product?.title} </h2>
      
//       <span > (150 Reviews)   </span>        
//       <span className="ml-2" > |  </span>
//       <span className="ml-2 text-[#00FF66]" >  In Stock   </span>                          
    

//       <p className="text-[24px] font-normal mt-3 mb-3" > ${product?.price} </p>

//        <p className=" mt-3 mb-3" > ${product?.description} </p>        
      
      
//       {/* quantity: */}

//        <div className="center ml-[18px]" >

//       <button className="btn-1 mr-3" onClick={()=>setQuantity(quantity + 1)} >+</button>
//       <span className="qty mr-3"> {quantity} </span>
//       <button className="btn-2 mr-3" 
//       onClick={()=>{ 
        
//         if(quantity < 2) return;
//         setQuantity(quantity - 1)

//       }} >-</button>        

// <button className="total ml-3 bg-[#DB4444] text-[white] w-auto " >  {product?.price * quantity}  </button>
// <button className="total ml-4 text-[white]  bg-[#DB4444]"> Buy Now </button>

// </div>

// <div className="delivery mt-[30px] flex center ">
  
// <div className="mr-5">
//     <span className="  text-[40px] bg-black" ><GrDeliver /></span>
//   </div>        
//   <div>
//   <p>Free Delivery</p>
//   <p>Enter your postal code for Delivery Availability</p>
//   </div>
// </div>

// <div className="delivery mt-4 flex center ">
  
// <div className="mr-5">
//     <span className="  text-[40px] bg-black" ><RiRefund2Line /></span>
//   </div>        
//   <div>
//   <p>Return Delivery</p>
//   <p>Free 30 Days Delivery Returns. Details Contact</p>
//   </div>
// </div>


// {/* 
//       <div className="mt-2 " >
//       <button className="mr-3" >  {product?.price * quantity}  </button>
//       <button> Buy Now </button>
//       </div> */}

//       </div>
              
//        </div>

//       <div className="reviews container flex flex-col gap-0">
//         {product?.reviews?.map((review)=>(
//           <div className=" commit rounded-xl p-2">
            
//             <h5>{review.reviewerName}</h5>
          
//           <span className="text-xs text-gray-600" > 
            
//             {formatDistanceToNow(review.date,{addSuffix:true})} 
            
//             </span> 
//           <p> {review.comment} </p>

//             </div>
//         ))}



// </div>


//       </main>



//     // <div>
//     //     ProductDetail{' '}
//     //     {params.id}        
//     //     </div>

    
//   )
// }


export default function ProductDetail(Props) {
  const params = useParams();

  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${params.id}`, axios);
  const product = data?.data;

  const [quantity, setQuantity] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  if(isLoading) return "loading...";
  if(error)
    return (
        <div className="w-full h-screen center">
          {JSON.stringify(error?.response?.data?.message)}
        </div>
    )

  return (
    <main className="bg-[#f7f6f6] min-h-[600px]">
      <div className="product container flex flex-col md:flex-row p-3">
        {/* Images Section */}
        <div className="images flex m-auto  md:w-[55%]">
          {product?.images?.length > 1 && (
            <div className="w-full md:w-[150px] h-full">
              {product?.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt=""
                  className="cursor-pointer hover:opacity-75"
                  onMouseOver={() => setSelectedImage(image)}
                />
              ))}
            </div>
          )}
          <div className="m-auto mt-4 md:mt-0">
            <img
              className="w-[346px] h-auto  object-cover"
              src={selectedImage || product?.images[0]}
              alt=""
            />
          </div>
        </div>

        {/* Product Data */}
        <div className="product-data flex flex-col p-5 md:w-[45%]">
          <h2 className="mb-3 text-[24px] font-semibold">{product?.title}</h2>
          
          <div>
          <span>(150 Reviews)</span>
          <span className="ml-2">|</span>
          <span className="ml-2 text-[#00FF66]">In Stock</span>
          </div>
          <p className="text-[24px] font-normal mt-3 mb-3">${product?.price}</p>
          <p className="mt-3 mb-3">${product?.description}</p>

          {/* Quantity Controls */}
          <div className="flex items-center mt-4 ">
            <button
              className="btn-1 mr-3 bg-blue-500 text-white p-2 rounded"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <span className="qty mr-3">{quantity}</span>
            <button
              className="btn-2 bg-red-500 text-white p-2 rounded"
              onClick={() => {
                if (quantity < 2) return;
                setQuantity(quantity - 1);
              }}
            >
              -
            </button>
            <button className="ml-3 bg-[#DB4444] text-white p-2 rounded">
              Total: ${product?.price * quantity}
            </button>
            <button className="ml-4 bg-[#DB4444] text-white p-2 rounded">
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="delivery mt-4 flex items-center">
            <GrDeliver className="text-[40px] mr-4" />
            <div>
              <p>Free Delivery</p>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </div>

          <div className="delivery mt-4 flex items-center">
            <RiRefund2Line className="text-[40px] mr-4" />
            <div>
              <p>Return Delivery</p>
              <p>Free 30 Days Delivery Returns. Details Contact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews container mt-6">
        {product?.reviews?.map((review, i) => (
          <div key={i} className="commit rounded-xl p-4 bg-white shadow mb-4">
            <h5>{review.reviewerName}</h5>
            <span className="text-xs text-gray-600">
              {formatDistanceToNow(review.date, { addSuffix: true })}
            </span>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
