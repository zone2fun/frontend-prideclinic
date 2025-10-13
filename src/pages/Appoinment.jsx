import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import  RelatedDoctors  from "../components/RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";

const Appoinment = () => {

   const {docId} = useParams();
   console.log({docId})
   const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext);

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const [docInfo, setDocInfo] = useState(null)
    const [ docSlot, setDocSlot ] = useState([])

    const [slotIndex, setSlotIndex] = useState(0)

    const [slotTime, setSlotTime]= useState('')
    const navigate = useNavigate()


   const fetchDocInfo = async ()=>{
     const docInfo = doctors.find(doc => doc._id === docId)
     setDocInfo(docInfo)
     console.log(docInfo)
   }

   const getAvailableStots = async ()=>{
      setDocSlot([])

      let today = new Date()
      for(let i=0; i<7; i++){
         let currentDate = new Date(today)
         currentDate.setDate(today.getDate()+i)
         ///setting end time of the date with index
         let endTime = new Date()
         endTime.setDate(today.getDate()+i)
         endTime.setHours(21,0,0,0)
        

         ///Settings hours
         if(today.getDate()=== currentDate.getDate()){
            currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1:10)
            currentDate.setMinutes(currentDate.getMinutes()>30 ? 30 : 0)
         }else{
             currentDate.setHours(10)
             currentDate.setMinutes(0)
         }

         let timeSlots = []

         while(currentDate < endTime){
            let formattedTime = currentDate.toLocaleTimeString([],{ hour:'2-digit', minute:'2-digit' })


             let day = currentDate.getDate()
             let month = currentDate.getMonth()+1
             let year = currentDate.getFullYear()

             const slotDate = day+"_"+month+"_"+year
             const slotTime = formattedTime

             const isSlotAvailable = docInfo?.slots_booked?.[slotDate] && docInfo?.slots_booked?.[slotDate]?.includes(slotTime) ? false : true
             
             if(isSlotAvailable){             

                      // add Slot
                timeSlots.push({
               datetime: new Date(currentDate),
               time: formattedTime
            })

             }


        

              currentDate.setMinutes(currentDate.getMinutes()+30)
            
         }

           setDocSlot(prev =>([...prev, timeSlots]))
      }
   }

   const bookAppointment = async ()=>{
       if(!token){
          toast.warning('Login to book appointment')
          return navigate('/login')
       }

       try{

           const date = docSlot[slotIndex][0].datetime

           let day = date.getDate()
           let month = date.getMonth()+1 
           let year = date.getFullYear()

           const slotDate = day+"_"+month+"_"+year

           const {data} = await axios.post(backendUrl + '/api/user/book-appointment',{docId, slotDate, slotTime},{headers:{token}})

             if(data.success){
                toast.success(data.message)
                getDoctorsData()
                navigate('/my-appointment')
             }else{
                toast.error(data.message)
             }
          

       }catch(error){
            console.log(error)
            toast.error(error.message)
       }
   }

   useEffect(()=>{
       console.log("doctors:", doctors)
     fetchDocInfo()
   },[doctors, docId])

   useEffect(()=>{
      getAvailableStots()
   },[docInfo])

   useEffect(()=>{
     console.log(docSlot)
   },[docSlot])

  return docInfo && (
    <div>
       {/* Doctor detail */}
       <div className="flex flex-col sm:flex-row gap-4">
           {/* picture doctor */}
          <div>
              <img className="bg-primary w-full sm:max-w-72 rounded-xl" src={docInfo.image} alt="" />
          </div>

          {/* info */}

                     <div className="flex-1 border border-gray-500 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-90px] sm:mt-0">
           {/* Doctor Info name, degree ,experience */}
           <p className="flex item-center gap-2 text-2xl font-medium text-gray-900">{docInfo.name} <img className="w-5" src={assets.verified_icon} alt="" /></p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
               <p>{docInfo.degree} - {docInfo.speciality}</p>
               <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
            </div>

            {/* Doctor About */}
            <div>
               <p className="flex item-center gap-1 text-sm font-medium text-gray-900 mt-3">About <img src={assets.info_icon} alt="" /></p>
               <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
            </div>

            <p>Appointment fee: <span className="text-gray-500 font-bold">{currencySymbol}{docInfo.fees}</span></p>
          </div>
       </div>  

         {/* ----------  Booking Slot ------------------------- */}
          <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
           <p>Booking slots</p>
           <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
              {
                docSlot.length && docSlot.map((item, index)=>(
                    <div key={index} onClick={()=> setSlotIndex(index)} className={`text-center py-6 rounded-full min-w-16 cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-400'} `}>
                       <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                       <p>{item[0] && item[0].datetime.getDate()}</p>
                      
                    </div>

                ))
              }
           </div>

                <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
                  {docSlot.length && docSlot[slotIndex].map((item, index)=>(
                    <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-500'}`} key={index}>
                       {item.time.toLowerCase()}
                    </p>
                ))}
                </div>

                
                   <button onClick={bookAppointment} className="bg-primary text-white text-sm font-light rounded-full py-4 px-14 mt-10 hover:scale-105 transition-all duration-300">Book and appointment</button>
               
                

        </div>
              {/* Listing Related */}
               <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

    </div> // End Container
    
  )
}
export default Appoinment