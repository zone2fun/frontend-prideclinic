import { assets } from "../assets/assets"

const About = () => {
  return (
    <div>
        <div className="text-3xl text-center mt-10">
           <p>ABOUT <span className="font-bold">US</span></p>
        </div>
          
       

          <div className="mt-10 flex flex-col md:flex-row gap-12">
            <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />        
            <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor tenetur labore odit accusantium aperiam distinctio natus voluptatem, nisi saepe facilis praesentium provident, doloremque quas? Ratione cupiditate quod dolorum minus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor tenetur labore odit accusantium aperiam distinctio natus voluptatem, nisi saepe facilis praesentium provident, doloremque quas? Ratione cupiditate quod dolorum minus.</p>
            <p className="font-bold">Our Vision</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor tenetur labore odit accusantium aperiam distinctio natus voluptatem, nisi saepe facilis praesentium provident, doloremque quas? Ratione cupiditate quod dolorum minus.</p>
            </div>
         </div>

         <div className="text-xl my-10">
            <p>Why <span className="font-bold">Choose US</span></p>
         </div>

         <div className="flex flex-col md:flex-row mb-20">
             <div className="border border-gray-400 px-10 py-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer">
                <b>Efficiency:</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod libero a enim in fugit quos quam, soluta similique repellat tempore. Corporis eveniet eaque quis, eligendi molestias amet rem debitis reiciendis.</p>
             </div>
             <div className="border border-gray-400 px-10 py-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer">
                <b>Convenience:</b>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis accusantium autem dignissimos, eaque quia voluptates eius, non sunt labore fugiat ab repudiandae. Asperiores beatae consequatur earum itaque maxime minus quam?</p>
             </div>
             <div className="border border-gray-400 px-10 py-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 hover:text-white cursor-pointer">
                <b>Personalization:</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ad ut consectetur sed possimus perferendis, eveniet voluptates repudiandae optio dolorum? Earum iure nisi, totam quo numquam atque voluptates possimus maiores.</p>
             </div>
         </div>
        

    </div>
  )
}
export default About