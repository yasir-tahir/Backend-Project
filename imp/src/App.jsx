
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Slider from "./components/Slider";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

// import { useState } from "react";
import { useSelector } from "react-redux";
import AddProduct from "./pages/addProduct";



function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const darkMode = useSelector((state) =>state.darkMode.darkMode);

  const isLoggedIn = true;

  return ( 
    <>
<Banner/>
<Navbar darkMode={darkMode}  />     
{/* setDarkMode={setDarkMode} */}


<Routes>
  <Route path="/" element= { <Home darkMode={darkMode} />} />
  <Route path="/about" element= { <About darkMode={darkMode} /> } />
  <Route path="/not-found" element={<div>not found!</div>} darkMode={darkMode} />
  <Route path="/contact" element= { <Contact Us darkMode={darkMode} /> } />
  <Route path="/products" element= { <Products darkMode={darkMode} /> } />
  <Route path="/product/:id" element= { <ProductDetail darkMode={darkMode} /> } />
  <Route path="/product/add" element= { <AddProduct darkMode={darkMode} /> } />
  
  {isLoggedIn ? (
    <>
     <Route
              path="/profile"
              element={<div>this is my profile page</div>}
            />

            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>

    </>
  )
}

export default App
