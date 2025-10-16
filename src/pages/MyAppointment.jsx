import { useContext } from "react"
import { AppContext } from '../context/AppContext'
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useEffect } from "react"

const MyAppointment = () => {

  const { backendUrl, token, getDoctorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [payment, setPayment] = useState(false)

  const months = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const [showModal, setShowModal] = useState(false) // ✅ เปิด/ปิด modal


  const slotDateFormat = (slotDate)=>{
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }



  const getUserAppointment = async ()=>{
    try{
       const {data} = await axios.get(backendUrl + '/api/user/appointments',{headers:{token}})
       if(data.success){
        setAppointments(data.appointments.reverse())
        getUserAppointment()
        getDoctorsData()
        
       }
    }catch(error){
        console.log(error)
        toast.error(error.message)
    }
  }

  const cancelAppointment = async ()=>{

      try{
        
        const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment',{appointmentId: selectedAppointment},{headers:{token}})

        if(data.success){
          toast.success(data.message)
          getUserAppointment()
        }else{
          toast.error(data.message)
        }

      }catch(error){
           console.log(error)
        toast.error(error.message)
      }

  }

  const appointmentStripe = async (appointmentId) =>{

      
      
       console.log(appointmentId)
    
     try{

        const { data } = await axios.post(backendUrl + '/api/user/payment-stripe',{appointmentId},{headers:{token}})
        if(data.success){
           console.log(data)
           window.location.href = data.url
           
        }

     }catch(error){
        console.log(error)
     }

  }


  useEffect(()=>{

     if(token){
        getUserAppointment()
     }

  },[token])

  return (
    <div >
       <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">การนัดหมายของฉัน</p>

        {/* ✅ Modal Confirm */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">ยกเลิกการนัดหมาย</h2>
             {
               payment ? <p className="w-full rounded px-3 py-5 mb-3 text-center bg-red-800 text-white font-semibold text-xl">คุณจ่ายค่าธรรมเนียมเข้ามาแล้ว ข้อกำหนดของเราจะไม่คืนเงินหากยกเลิก.</p> : ''
            }
            <p className="text-sm text-gray-600 mb-6">คุณแน่ใจแล้วหรือไม่?</p>
           
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
              >
                ไม่ตกลง
              </button>
              <button
                onClick={()=>{cancelAppointment(); setShowModal(false)}}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
              >
                ใช่, ฉันยอมรับข้อตกลง!
              </button>
            </div>
          </div>
        </div>
      )}

          <div>
              { appointments.map((item, index)=>(

                  <div key={index} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b">

                      <div>
                          <img src={item.docData.image} alt="" className="w-32 bg-indigo-50 rounded" />
                      </div>
                      <div className="flex-1 text-sm text-zinc-500">
                         <p className="text-neutral-800 font-semibold">{item.docData.name}</p>
                         <p>{item.docData.speciality}</p>
                         <p className="text-zinc-700 font-medium mt-1">ที่อยู่:</p>
                         <p className="text-xs">{item.docData.address.line1}</p>
                         <p className="text-xs">{item.docData.address.line2}</p>
                         <p className="text-xs mt-1"><span className="text-sm text-neutral-600 font-medium">วันและเวลา :</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
                      </div>
                        <div></div>
                        <div className="flex flex-col gap-2 justify-end">
                           {!item.cancelled && item.payment && <button className="sm:min-w-48 py-2 border bg-green-500 text-white">จ่ายแล้ว</button>}
                           {item.isCompleted && <button className="sm:min-w-48 py-2 border bg-blue-700 text-white">เข้าพบเรียบร้อยแล้ว</button>}
                            {!item.cancelled && !item.isCompleted && !item.payment && <button onClick={()=> appointmentStripe(item._id)} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">ชำระเงินออนไลน์</button> }
                            {!item.cancelled && !item.isCompleted && <button onClick={()=> {setSelectedAppointment(item._id);setPayment(item.payment);setShowModal(true)}} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded  hover:bg-red-700 hover:text-white transition-all duration-300 cursor-pointer">ยกเลิกการนัดหมาย</button> }
                            { item.cancelled && <button className="sm:min-w-48 py-2 border text-red-500 rounded">Appointment Cancelled</button> }
                        </div>
                  </div>


              )) }
          </div>
    </div>
  )
}
export default MyAppointment