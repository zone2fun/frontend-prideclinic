import { assets } from "../assets/assets"

const Contact = () => {
  return (
    <div>

       <div className="text-3xl my-10 text-center">
          <p>CONTACT <span className="font-bold">US</span></p>
       </div>

       <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
          <img className="w-full md:max-w-[350px]" src={assets.contact_image} alt="" />
           
            <div className="flex flex-col justify-center items-start gap-3">
                <p className="text-xl font-semibold text-gray-600">OUR OFFICE</p>
                <p>99/8 Soi Sukhumvit 40, Sukhumvit Rd.,<br/>Phra Khanong Nuea, Watthana, Bangkok 10110 </p>
                <p><span className="font-semibold">Tel:</span> (02) 255 7878</p>
                <p><span className="font-semibold">Email:</span> admin@prideclinic.com</p>
                <button className="py-5 px-10 border border-gray-500 text-center cursor-pointer hover:bg-primary hover:text-white  hover:border-white transition-all duration-300">Explore Jobs</button>
            </div>

       </div>

    </div>
  )
}
export default Contact