// import img1 from "../assets/images/station.png";
// import img2 from "../assets/images/lady.png";
// import img3 from "../assets/images/speaker.png";
// import img4 from "../assets/images/perfume.png";

// export default function NewArrivalGrid() {
//   return (
//     <div className="main grid grid-cols-4  gap-8 grid-rows-2">
//       <div className="bg-[#0D0D0D] relative text-gray-200 rounded col-span-2 row-span-2">
//         <img
//           className="object-contain  w-full h-full "
//           src={img1}
//           alt="product image"
//         />

//         <div className="absolute gap-3 flex-col flex bottom-0 p-6 ">
//           <h3 className="font-semibold text-2xl sm:text-sm md:text-lg lg:text-3xl">Women's Collections</h3>
//           <p className="w-3/5 line-clamp-3 sm:text-xs md:text-sm">
//             Featured woman collections that give you another vibe.
//           </p>
//           <a className="underline sm:text-xs md:text-sm" href="#">
//             Shop Now
//           </a>
//         </div>
//       </div>
//       <div className="relative bg-[#0D0D0D] text-gray-200 rounded col-span-2">
//         <img
//           className="object-contain  h-full w-full "
//           src={img2}
//           alt="product image"
//         />

//         <div className="absolute gap-3 flex-col flex bottom-0 p-6">
//           <h3 className="font-semibold text-xl sm:text-sm md:text-lg lg:text-3xl">Women's Collections</h3>
//           <p className="w-3/5 line-clamp-3 text-xl sm:text-xs md:text-sm lg:text-base">
//             Featured woman collections that gi ve you another vibe.
//           </p>
//           <a className="underline sm:text-xs md:text-sm" href="#">
//             Shop Now
//           </a>
//         </div>
//       </div>
//       <div className="bg-[#0D0D0D] relative group text-gray-200 rounded">
//         <img
//           className="object-contain group-hover:scale-110 transition duration-300 h-full w-full"
//           src={img3}
//           alt="product image"
//         />
//         <div className="absolute gap-2 flex-col flex bottom-0 p-6">
//           <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl sm:text-sm md:text-lg lg:text-3xl">
//             Speakers
//           </h3>
//           <p className="line-clamp-3 sm:text-xs md:text-sm">Amazon wireless speakers</p>
//           <a className="underline sm:text-xs md:text-sm" href="#">
//             Shop Now
//           </a>
//         </div>{" "}
//       </div>

//       <div className="bg-black">
//         <div
//           style={{
//             backdropFilter: "blur(300px)",
//             backgroundColor: "rgba(217, 217, 217, 0.2)",
//           }}
//           className="bg-[#0D0D0D] h-full relative text-gray-200 rounded"
//         >
//           <img
//             className="object-contain  h-full w-full"
//             src={img4}
//             alt="product image"
//           />

//           <div className="absolute gap-2 flex-col flex bottom-0 p-6">
//             <h3 className="font-semibold text-2xl sm:text-sm md:text-lg lg:text-3xl">Perfume</h3>
//             <p className="line-clamp-3 sm:text-xs md:text-sm">GUCCI INTENSE OUD EDP </p>
//             <a className="underline sm:text-xs md:text-sm" href="#">
//               Shop Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import img1 from "../assets/images/station.png";
import img2 from "../assets/images/lady.png";
import img3 from "../assets/images/speaker.png";
import img4 from "../assets/images/perfume.png";

export default function NewArrivalGrid() {
  return (
    <div className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 grid-rows-auto">
      {/* First product: Women's Collections large banner */}
      <div className="bg-[#0D0D0D] relative text-gray-200 rounded col-span-1 sm:col-span-2 row-span-2">
        <img
          className="object-contain w-full h-full"
          src={img1}
          alt="product image"
        />
        <div className="absolute flex flex-col gap-3 bottom-0 p-4 lg:p-6">
          <h3 className="font-semibold text-5xl sm:text-5xl lg:text-3xl">
            Women's Collections
          </h3>
          <p className="line-clamp-3 w-4/5 sm:w-3/5 text-2xl sm:text-3xl lg:text-base">
            Featured woman collections that give you another vibe.
          </p>
          <a className="underline text-xl sm:text-base lg:text-lg" href="#">
            Shop Now
          </a>
        </div>
      </div>

      {/* Second product: Women's Collection smaller card */}
      <div className="relative bg-[#0D0D0D] text-gray-200 rounded col-span-1 sm:col-span-2">
        <img
          className="object-contain h-full w-full  "
          src={img2}
          alt="product image"
        />
        <div className="absolute flex flex-col gap-3 bottom-0 p-4 lg:p-6">
          <h3 className="font-semibold text-5xl sm:text-4xl lg:text-2xl">
            Women's Collections
          </h3>
          <p className="line-clamp-3 w-4/5 sm:w-3/5 text-2xl sm:text-3xl lg:text-sm">
            Featured woman collections that give you another vibe.
          </p>
          <a className="underline text-xl sm:text-base lg:text-lg" href="#">
            Shop Now
          </a>
        </div>
      </div>

      {/* Third product: Speakers */}
      <div className="bg-[#0D0D0D] relative group text-gray-200 rounded">
        <img
          className="object-contain group-hover:scale-110 transition duration-300 h-full w-full"
          src={img3}
          alt="product image"
        />
        <div className="absolute flex flex-col gap-2 bottom-0 p-4 lg:p-6">
          <h3 className="S_Underline relative inline-block w-fit font-semibold text-5xl sm:text-4xl lg:text-2xl group-hover:after:w-[100%]">
            Speakers
          </h3>
          <p className="line-clamp-3  text-2xl sm:text-base lg:text-xs">
            Amazon wireless speakers
          </p>
          <a className="underline text-xl sm:text-base lg:text-lg" href="#">
            Shop Now
          </a>
        </div>
      </div>

      {/* Fourth product: Perfume */}
      <div className="bg-black">
        <div
          style={{
            backdropFilter: "blur(300px)",
            backgroundColor: "rgba(217, 217, 217, 0.2)",
          }}
          className="bg-[#0D0D0D] h-full relative text-gray-200 rounded"
        >
          <img
            className="object-contain h-full w-full"
            src={img4}
            alt="product image"
          />
          <div className="absolute flex flex-col gap-2 bottom-0 p-4 lg:p-6">
            <h3 className="font-semibold text-5xl sm:text-3xl lg:text-2xl">
              Perfume
            </h3>
            <p className="line-clamp-3 text-2xl sm:text-base lg:text-xs">
              GUCCI INTENSE OUD EDP
            </p>
            <a className="underline text-xl sm:text-base lg:text-lg" href="#">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
