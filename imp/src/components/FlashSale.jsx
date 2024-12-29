import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";




export default function SectionTitle(Props) {
  const darkMode = true;
  
    return (
    <div className={`flex-wrap ${darkMode ? "text-white" : "" }  justify-between mb-14 mt-[150px]  `}>

  <div className="gap-4 flex items-center">
      <div className="h-10 w-5 bg-primary rounded"></div>
      <h2 className="font-semibold text-xl text-primary">{Props.text}</h2>
    </div>


    <div className="center gap-8 ">
    <h3 className="font-semibold   mt-3 text-xl sm:text-4xl mr-auto" > {Props.main} </h3>
    <div className="center mx-auto   gap-7 "> 

<div className={``}>
    <div className="text-[12px] center font-[500] "><p>Days</p></div>
    <div className="text-[32px] center font-semibold text-xl sm:text-4xl"><p>03</p></div>
</div>

    <div>
        <p  className="text-[32px] font-[700] mt-4 text-[#E07575]">  : </p>
    </div>

    
    <div>
    <div className="text-[12px] center font-[500]"><p>Hours</p></div>
    <div className="text-[32px] center font-semibold text-xl sm:text-4xl" ><p>23</p></div>
</div>

    <div>
        <p  className="text-[32px] font-[700] mt-4 text-[#E07575]">  : </p>
    </div>


    <div>
    <div className="text-[12px] center font-[500]"><p>Minutes</p></div>
    <div className="text-[32px] center font-semibold text-xl sm:text-4xl"><p>19</p></div>
</div>

    <div>
        <p  className="text-[32px] font-[700] mt-4 text-[#E07575]">  : </p>
    </div>


    <div>
    <div className="text-[12px] center font-[500]"><p>Seconds</p></div>
    <div className="text-[32px] center font-semibold text-xl sm:text-4xl"><p>56</p></div>
</div>
</div>

<div className={`center text-xl ${darkMode ? "text-black" : "" } `}>
    <span className="rounded-[100px] p-2 block bg-[#F5F5F5] mr-3">
        <FaArrowLeft />
    </span>

    <span className="rounded-[100px] p-2 block bg-[#F5F5F5]" >
    <FaArrowRight />

    </span>
</div>

</div>

    </div>
    
 


)
}
