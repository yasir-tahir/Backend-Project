import { useEffect, useState } from 'react'
import axios from 'axios'



export default function useProducts(query) {
  
  // const API_KEY =  `https://dummyjson.com/products?${query}`;
      const API_KEY =  `http://localhost:3000/product`;
     
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getProductData = async () =>{
  try{
    setError(null) 
    setIsLoading(true)
  const response = await axios(API_KEY); 
  
  // console.log("response", response.data.products);
  
  setProducts(response?.data?.products);
  } catch (error) {
    setError(
      error?.response?.statusText || "Unknown error, please try again");
    
  } finally {
    setIsLoading(false);
  
  }
  
  };
  
  useEffect(()=> { 
  
    getProductData();
  },[]);
  
  // console.log("Slider", products);
  
return{
    products: products,
    isLoading: isLoading,
    error: error
}


  
}
