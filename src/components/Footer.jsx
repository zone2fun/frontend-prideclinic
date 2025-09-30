import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* left section */}
              <div >
                 <img className="w-50 mb-5" src={assets.logo_clinic} alt="" />
                 <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eveniet quaerat magnam fugiat culpa accusamus quis libero doloremque odio dolor pariatur molestias iste tempore minus! Nobis quam distinctio officiis vero.</p>
              </div>
            {/* center section */}
               <div>
                   <p className="text-3xl font-medium mb-5">Company</p>
                     <ul className="flex flex-col gap-2 text-grey-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Policy privacy</li>
                     </ul>
               </div>
            {/* right section */}
              <div>
                  <p className="text-3xl font-medium mb-5">Get in touch</p>
                    <ul className="flex flex-col gap-2 text-grey-600">
                       <li>061 454 4516</li>
                       <li>webmaster@prideclinic.com</li>
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