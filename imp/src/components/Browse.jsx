import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";




export default function SectionTitle(Props) {
  const darkMode = true;

  return (
    <div className={`flex-wrap ${darkMode ? "text-white" : ""} justify-between mb-14 mt-[150px]  `}>

  <div className="gap-4 flex items-center">
      <div className="h-10 w-5 bg-primary rounded"></div>
      <h2 className="font-semibold text-xl text-primary">{Props.text}</h2>
    </div>


    <div className="center gap-8 ">
    <h3 className="font-semibold   mt-3 text-xl sm:text-4xl mr-auto" > {Props.main} </h3>
    <div className="center mx-auto   gap-7 "> 


<div className={`center ${darkMode ? "text-black" : ""} ml-auto text-xl`}>
    <span className="rounded-[100px] p-2 block bg-[#F5F5F5] mr-3">
        <FaArrowLeft />
    </span>

    <span className="rounded-[100px] p-2 block bg-[#F5F5F5]" >
    <FaArrowRight />

    </span>
</div>

</div>
</div>
    </div>
    
 


)
}
