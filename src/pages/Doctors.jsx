import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";

const Doctors = () => {

   const { speciality } = useParams();
   const  navigate  = useNavigate();
   const [showFilter, setShowFilter] = useState(false)
   const [filterDoc, SetFilterDoc] = useState([])
   const { doctors } = useContext(AppContext);

   const applyFilter = ()=>{
     if(speciality) {
        SetFilterDoc(doctors.filter(doc => doc.speciality === speciality))
     }else{
        SetFilterDoc(doctors)
     }
   }

   useEffect(()=>{
      applyFilter()
      
   },[doctors, speciality])

   

  return (
    <div>
       <p className="text-gray-600 ">Browse through the doctors spcialist.</p>
       <div className="flex flex-col sm:flex-row item-start gap-5 mt-5">
         <button className={`py-1 px-3 border rounded text-sm trasition-all sm:hidden ${showFilter ? 'bg-primary text-white border-primary' : ''}`} onClick={()=>setShowFilter(prev=> !prev)}>{showFilter ? 'Hide Filter' : 'Show Filters'}</button>
          <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
              <p onClick={()=>!speciality ? navigate('/doctors') : navigate('/doctors')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${!speciality ? "bg-indigo-300 text-black" : ''}`}>All</p>
              <p onClick={()=>speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==='General physician' ? "bg-indigo-300 text-black" : ''}`}>General physician</p>
              <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==='Gynecologist' ? "bg-indigo-300 text-black" : ''}`}>Gynecologist</p>
              <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==='Dermatologist' ? "bg-indigo-300 text-black" : ''}`}>Dermatologist</p>
              <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==='Pediatricians' ? "bg-indigo-300 text-black" : ''}`}>Pediatricians</p>
              <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==='Neurologist' ? "bg-indigo-300 text-black" : ''}`}>Neurologist</p>
              <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==='Gastroenterologist' ? "bg-indigo-300 text-black" : ''}`}>Gastroenterologist</p>
          </div>
          <div className="w-full grid md:grid-cols-[var(--grid-cols-auto)]  gap-4 gap-y-6">
             { filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]
                 transition-all duration-300
                ">
                      <img className="bg-blue-50" src={item.image} alt="" />
                    <div className="p-4">
                            <div className={`flex items-center gap-2 text-sm text-center ${item.available ? ' text-green-500' : ' text-gray-500'} `}>
                             <p className={`w-2 h-2 ${item.available ? ' bg-green-500' : ' bg-gray-500'} rounded-full`}></p><p>{ item.available ? 'Available' : 'Not Available' }</p>
                          </div>
                          <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                          <p className="text-gray-900 text-sm">{item.speciality}</p>
                      </div>
                </div>
            )) }
          </div>
       </div>
    </div>
  )
}
export default Doctors