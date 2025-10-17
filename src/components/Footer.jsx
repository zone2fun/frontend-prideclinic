import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const Footer = () => {

   const navigate = useNavigate()

  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* left section */}
              <div >
                 <img className="w-50 mb-5" src={assets.logo_clinic} alt="" />
                 <p className="w-full md:w-2/3 text-gray-600 leading-6">Pride Clinic มุ่งมั่นในการดูแลสุขภาพของคุณด้วยความใส่ใจ โดยทีมแพทย์ผู้เชี่ยวชาญหลากหลายสาขา เราให้บริการตรวจ วินิจฉัย และรักษาอย่างครบวงจรในบรรยากาศที่อบอุ่นและเป็นกันเอง เพื่อให้ทุกคนได้รับการดูแลอย่างดีที่สุดทั้งร่างกายและจิตใจ</p>
              </div>
            {/* center section */}
               <div>
                   <p className="text-3xl font-medium mb-5">คลีนิกของเรา</p>
                     <ul className="flex flex-col gap-2 text-grey-600">
                        <li className="hover:cursor-pointer hover:text-primary" onClick={()=>{navigate('/'); scrollTo(0,0)}}>หน้าแรก</li>
                        <li className="hover:cursor-pointer hover:text-primary" onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}>จองคิวแพทย์</li>
                        <li className="hover:cursor-pointer hover:text-primary" onClick={()=>{navigate('/about'); scrollTo(0,0)}}>เกี่ยวกับเรา</li>
                        <li className="hover:cursor-pointer hover:text-primary" onClick={()=>{navigate('/contact');scrollTo(0,0)}}>ติดต่อเรา</li>
                        <li>ร่วมงานกับเรา</li>
                     </ul>
               </div>
            {/* right section */}
              <div>
                  <p className="text-3xl font-medium mb-5">พบปัญหาการใช้ระบบ</p>
                    <ul className="flex flex-col gap-2 text-grey-600">
                       <li>061 454 4516</li>
                       <li>webmaster@prideclinic.com</li>
                       <li>ระบบจองคิวแพทย์จัดทำโดย ธนกฤต ธวัฒน์ธนเดช</li>
                    </ul>
              </div>
        </div>
         <div>
          <hr/>
            <p className="py-5 text-sm text-center text-gray-400">Copy right all reserved. Develop by Thanakrit</p>
         </div>
    </div>
  )
}
export default Footer