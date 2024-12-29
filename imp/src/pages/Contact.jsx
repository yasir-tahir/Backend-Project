import { useSelector } from "react-redux";

export default function Contact() {
  const darkMode = useSelector((state) =>state.darkMode.darkMode);

 
  return (
    <div className={`container  h-screen transition-colors duration-1000 ${darkMode ? "bg-slate-900 w-full " : ""}`} >Contact</div>
  )
}
