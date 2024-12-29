// import { CiSearch } from "react-icons/ci";
// import { IoMdHeart } from "react-icons/io";
// import { IoCart } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const links = [
//   { title: "home", link: "/" },
//   { title: "about", link: "/about" },
//   { title: "contact us", link: "/contact" },
//   // { title: "products", link: "/products"}
// ];




// export default function Navbar() {
//   const darkMode = true;

//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
//   const isLoggedIn = true;

//   const navLinkStyle =
//     "capitalize hover:underline cursor-pointer hover:text-primary";

//   return (
//     <div className= {`container 
//     ${darkMode ? "bg-slate-900 " : ""}
//     gap-40 navbar h-28 bg-[#ffffff]  shadow-sm  flex justify-around items-center`}>
        
//     <h1 className=" font-bold text-2xl">
//     Exclusive    
//     </h1>    

      

// {/* Desktop Navbar */}
// <ul className="hidden md:flex gap-4">
//         {links.map((item, i) => (
//           <li className={navLinkStyle} key={i}>
//             <Link to={item.link}>{item.title}</Link>
//           </li>
//         ))}

//           {!isLoggedIn ? ( 
//           <li className={navLinkStyle}>
//             <Link to="/login"> Login </Link>
//             </li> 
//             ) : null}
//       </ul>

//       <div className="bdr w-60 px-3 rounded h-10 center bg-[#f5f5f5]">
//         <input type="search" className="outline-none text-sm w-[300px] bg-[#F5F5F5]" placeholder="What are you looking for?"/>
//         <CiSearch className="font-bold text-3xl" />        
//     </div>


//       <button
//         onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
//         className="md:hidden order-1 text-4xl"
//       >
//         {isHamburgerOpen ? <IoCloseCircleOutline /> : <IoMenu />}
//       </button>

// {/* Mobile Navbar */}
//       {isHamburgerOpen && (
//         <ul 
//         className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
//           {links.map((item, i) => (
//             <li className={navLinkStyle} key={i}>
//               <Link onClick={()=> setIsHamburgerOpen(false)} 
//                to={item.link}>{item.title}</Link>
//             </li>
//           ))}

//           {!isLoggedIn ? ( 
//           <li className={navLinkStyle}>
//             <Link onClick={()=> setIsHamburgerOpen(false)} 
//              to="/login"> Login </Link>
//             </li> 
//             ) : null}
//         </ul>
//       )}
//  <div className="icons center text-2xl gap-3">
//         {isLoggedIn ? (
//           <>
//             <IoMdHeart className="" />
//             <IoCart />
//           </>
//         ) : null}

//         <Link to={'/profile'} className="bg-primary rounded-full overflow-hidden h-8 w-8 center text-base text-white">
//           {isLoggedIn ? (
            
//             <img src="https://avatars.githubusercontent.com/u/154784215?v=4" alt=""/>


//           ) : (
//             <FaRegUser />
//           )}
//         </Link>
//       </div>
    

//     </div>
//   )
// }

import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";

const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "contact us", link: "/contact" },
];

export default function Navbar() {

  const dispatch = useDispatch();
  const darkMode = useSelector((state) =>state.darkMode.darkMode); 


  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = true;

  const navLinkStyle =
    "capitalize hover:underline cursor-pointer hover:text-primary";
  return (
    <div id="top" className={`container ${
      darkMode ?  "bg-slate-900" : ""} h-28 transition-colors duration-1000 relative flex justify-between items-center`}>
      
      <h1 className={` ${darkMode ? "text-white" : ""} font-bold text-2xl `}>
       Exclusive    
      </h1>    

      <div className="w-60 px-2 h-10 rounded center bg-[#F5F5F5]">
        <input
          type="search"
          className="outline-none w-full text-sm bg-transparent"
          placeholder="What are you looking for?"
        />
        <CiSearch className="text-3xl" />
      </div>

      {/* desktop navbar */}
      <ul className={`hidden ${darkMode ? "text-white" : ""} md:flex gap-3`}>
        {links.map((item, i) => (
          <li className={navLinkStyle} key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        {!isLoggedIn ? (
          <li className={navLinkStyle}>
            <Link to="/login">Login</Link>
          </li>
        ) : null}
      </ul>

      <button
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="md:hidden  order-1 text-4xl"
      >
        {isHamburgerOpen ? <IoCloseCircleOutline /> : <IoMenu />}
      </button>

      {isHamburgerOpen && (
        // mobile navbar
        <ul className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
          {links.map((item, i) => (
            <li className={navLinkStyle} key={i}>
              <Link onClick={() => setIsHamburgerOpen(false)} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}

          {!isLoggedIn ? (
            <li className={navLinkStyle}>
              <Link onClick={() => setIsHamburgerOpen(false)} to="/login">
                Login
              </Link>
            </li>
          ) : null}
        </ul>
      )}

      <div className={` icons ${darkMode ? "text-white" : ""} center text-2xl gap-3 `}>
       <button onClick={()=>{
         dispatch(toggleDarkMode());
       }} 
       className={`${darkMode ?  "text-white" : ""} transition duration-1000`}
       >
        {darkMode ? <LuSun /> : <FaMoon />}
        </button>
       
        {isLoggedIn ? (
          <>
            <IoMdHeart className="" />
            <IoCart />
          </>
        ) : null}

        <Link
          to={"/profile"}
          className="bg-primary rounded-full overflow-hidden h-8 w-8 center text-base text-white"
        >
          {isLoggedIn ? (
            <img
              src="https://avatars.githubusercontent.com/u/154784215?v=4"
              alt=""
            />
          ) : (
            <FaRegUser />
          )}
        </Link>
      </div>
    </div>
  );
}