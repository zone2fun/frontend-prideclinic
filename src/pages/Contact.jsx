import { assets } from "../assets/assets"

const Contact = () => {
  return (
    <div>

       <div className="text-3xl my-10 text-center">
          <p>ติดต่อ <span className="font-bold">เรา</span></p>
       </div>

       <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
          <img className="w-full md:max-w-[350px]" src={assets.contact_image} alt="" />
           
            <div className="flex flex-col justify-center items-start gap-3">
                <p className="text-xl font-semibold text-gray-600">ที่อยู่เรา</p>
                <p>99/8 ซอยสุขุมวิท 40 ถนนสุขุมวิท<br/>แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพฯ 10110 </p>
                <p><span className="font-semibold">โทรศัพท์:</span> (02) 255 7878</p>
                <p><span className="font-semibold">อีเมล:</span> admin@prideclinic.com</p>
                
            </div>

       </div>

    </div>
  )
}
export default Contact