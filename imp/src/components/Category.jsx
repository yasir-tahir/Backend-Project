import phone from '../assets/images/phones.png'
import computer from '../assets/images/computers.png'
import cameras from '../assets/images/camera.png'
import headphones from '../assets/images/headphone.png'
import gamers from '../assets/images/gaming.png'
import watchs from '../assets/images/watch.png'


export default function Category() {
  const darkMode = true; 
  
  return (
    <div className={`flex ${darkMode ? "text-white" : "" } justify-center flex-wrap gap-[20px]`} >

        <img src={phone} alt="products" />
        <img src={computer} alt="products" />
        <img src={watchs} alt="products" />
        <img src={cameras} alt="products" />
        <img src={headphones} alt="products" />
        <img src={gamers} alt="products" />

    </div>
  )
}
