import { assets } from '../assets/assets'
import { useState } from 'react';

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email:'zone2fun@gmail.com',
    phone:'0614544516',
    address:{
      line1:'328 moo1 maechai',
      line2:', phayao 56130'
    },
    gender: 'Male',
    dob:'2000-01-20'

  });

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className='max-w-lg flex flex-col text-sm'>
       <img className='w-36 rounded' src={userData.image} alt="" />
        {
          isEdit ? <input className='bg-gray-5 text-3xl font-medium max-w-60 mt-4' type='text' value={userData.name} onChange={e=> setUserData(prev =>({...prev, name:e.target.value}))}/>
          : <p>{userData.name}</p>
        }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
         <p className='text-neutral-500 underline mt-3'>CONTACT INFROMATION</p>
           <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'> 
               <p className='font-medium'>Email:</p>
               <p className='text-blue-400'>{userData.email}</p>
               <p className='font-medium'>Phone:</p>
                   {
          isEdit ? <input type='text' className='bg-gray-100 max-w-52' value={userData.phone} onChange={e=> setUserData(prev =>({...prev, phone:e.target.value}))}/>
          : <p className='text-blue-400'>{userData.phone}</p>
        }
          <p className='font-medium'>Address:</p>
           {
             isEdit 
             ? <p>
              <input className='bg-gray-100 max-w-52' onChange={(e)=> setUserData(prev=> ({...prev.address, line1: e.target.value}))} value={userData.address.line1} type='text'/>
              <br/>
              <input className='bg-gray-100 max-w-52' onChange={(e)=> setUserData(prev=> ({...prev.address, line2: e.target.value}))} value={userData.address.line2} type='text'/>
              </p>
                
             : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
             </p>
           }
           </div>
      </div>
       <div>
          <p className='underline mt-3 '>BASIC INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
             <p className='font-medium'>Gender:</p>
             <p>
                {
                  isEdit
                  ? <select className='max-w-20 bg-gray-100' onChange={(e)=> setUserData(prev=> ({...prev, gender: e.target.value}))} value={userData.gender}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                  </select>
                  : <p>{userData.name}</p>
                }
             </p>
             <p className='font-medium'>Birthday:</p>
             {
               isEdit 
               ? <input className='max-w-28 bg-gray-100' type='date' onChange={(e)=> setUserData(prev=> ({...prev, dob: e.target.value}))} value={userData.dob}/>
               : <p className='text-gray-400'>{userData.dob}</p>
             }
          </div>

          <div className='mt-10'>
              {
                 isEdit
                 ? <button className='border border-primary px-8 py-2 rounded-full' onClick={()=>setIsEdit(false)}>Save information</button>
                 : <button className='border border-primary px-8 py-2 rounded-full' onClick={()=>setIsEdit(true)}>Edit</button>
              }
          </div>

       </div>

    </div>
  )
}
export default MyProfile