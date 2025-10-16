import { assets } from "../assets/assets"

const About = () => {
  return (
    <div>
        <div className="text-3xl text-center mt-10">
           <p>เกี่ยวกับ <span className="font-bold">เรา</span></p>
        </div>
          
       

          <div className="mt-10 flex flex-col md:flex-row gap-12">
            <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />        
            <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
            <p>Pride Clinic ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะยกระดับการดูแลสุขภาพให้ครอบคลุมและเข้าถึงได้สำหรับทุกคน เรารวมทีมแพทย์ผู้เชี่ยวชาญในหลากหลายสาขา เพื่อให้บริการตรวจ วินิจฉัย และรักษาอย่างมีมาตรฐาน ภายใต้บรรยากาศที่อบอุ่นและเป็นกันเอง</p>
            <p>เรามุ่งเน้นการดูแลสุขภาพแบบองค์รวม โดยคำนึงถึงทั้งร่างกายและจิตใจ พร้อมเทคโนโลยีทางการแพทย์ที่ทันสมัย เพื่อมอบประสบการณ์การรักษาที่ปลอดภัยและมีประสิทธิภาพสูงสุดแก่ผู้รับบริการทุกคน</p>
            <p className="font-bold">วิสัยทัศน์ของเรา (Our Vision)</p>
            <p>เรามุ่งเป็นคลินิกสุขภาพชั้นนำที่ผู้คนไว้วางใจ ด้วยการให้บริการอย่างมืออาชีพ เต็มไปด้วยความเอาใจใส่ และยึดมั่นในคุณภาพ เพื่อให้ทุกคนได้ใช้ชีวิตอย่างมีสุขภาพดีและยั่งยืน</p>
            </div>
         </div>

         <div className="text-xl my-10">
            <p>ทำไม <span className="font-bold">ต้องเป็นเรา</span></p>
         </div>

         <div className="flex flex-col md:flex-row mb-20">
             <div className="border border-gray-400 px-10 py-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer">
                <b>ประสิทธิภาพ (Efficiency)</b>
                <p>Pride Clinic ให้ความสำคัญกับความรวดเร็วและแม่นยำในการให้บริการ เพื่อให้ผู้มารับบริการได้รับการดูแลที่มีประสิทธิภาพสูงสุด เรานำเทคโนโลยีทางการแพทย์ที่ทันสมัยและระบบบริหารจัดการที่เป็นมาตรฐานมาใช้ เพื่อให้ทุกขั้นตอนของการตรวจและรักษาเป็นไปอย่างราบรื่นและตรงเวลา</p>
             </div>
             <div className="border border-gray-400 px-10 py-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer">
                <b>ความสะดวกสบาย (Convenience)</b>
                <p>ที่ Pride Clinic เราใส่ใจในประสบการณ์ของผู้เข้ารับบริการเป็นสำคัญ ด้วยระบบจองคิวออนไลน์ การเข้าถึงข้อมูลสุขภาพได้ง่าย และสถานที่ให้บริการที่เป็นมิตร เรามุ่งมั่นให้ทุกขั้นตอนสะดวก รวดเร็ว และตอบโจทย์ไลฟ์สไตล์ของคนยุคใหม่</p>
             </div>
             <div className="border border-gray-400 px-10 py-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer">
                <b>การดูแลเฉพาะบุคคล (Personalization)</b>
                <p>Pride Clinic เชื่อว่าทุกคนมีความต้องการด้านสุขภาพที่แตกต่างกัน เราจึงให้การดูแลที่เหมาะสมกับแต่ละบุคคล โดยทีมแพทย์จะวิเคราะห์อย่างละเอียดและวางแผนการรักษาที่ตอบโจทย์เฉพาะของคุณ เพื่อให้ได้ผลลัพธ์ที่ดีที่สุดทั้งทางร่างกายและจิตใจ</p>
             </div>
         </div>
        

    </div>
  )
}
export default About