import { assets } from '../assets/assets'
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {

  const {userData, setUserData, token, backendUrl, loadUserProfileData} = useContext(AppContext)

  // const [userData, setUserData] = useState({
  //   name: "Edward Vincent",
  //   image: assets.profile_pic,
  //   email:'zone2fun@gmail.com',
  //   phone:'0614544516',
  //   address:{
  //     line1:'328 moo1 maechai',
  //     line2:', phayao 56130'
  //   },
  //   gender: 'Male',
  //   dob:'2000-01-20'

  // });

  const [isEdit, setIsEdit] = useState(true)
  const [image, setImage] = useState(false)

  const updateUserProfileData = async ()=>{
     try{
       const formData = new FormData()
       formData.append('name', userData.name)
       formData.append('phone', userData.phone)
       formData.append('address', JSON.stringify(userData.address))
       formData.append('gender', userData.gender)
       formData.append('dob', userData.dob)

        image && formData.append('image', image)

        for (let [key, value] of formData.entries()) {
  console.log(key, value);
}

        const {data} = await axios.post(backendUrl + '/api/user/update-profile',formData, {headers:{token}})
          
        if(data.success){
           toast.success(data.message)
           await loadUserProfileData()
           setIsEdit(false)
           setImage(false)
        }else{
          toast.error(data.message)
        }

     }catch(error){
         console.log(error)
         toast.error(error.message)
     }
  }

  return userData && (
    <div className='max-w-lg flex flex-col text-sm'>
       {
         isEdit
         ? <label htmlFor='image'>
             <div className='inline-block relative cursor-pointer'>
                <img className='w-36 rouned opacity-90' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
             </div>
             <input onChange={(e)=> setImage(e.target.files[0])} type="file" id='image' hidden/>
         </label>
         : <img className='w-36 rounded' src={userData.image} alt="" />
       }
       
        {
          isEdit ? <input className='bg-gray-5 text-3xl font-medium max-w-60 mt-4' type='text' value={userData.name} onChange={e=> setUserData(prev =>({...prev, name:e.target.value}))}/>
          : <p className='text-xl font-medium mt-4 max-w-60'>{userData.name}</p>
        }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
         <p className='text-neutral-500 underline mt-3'>ข้อมูลการติดต่อ</p>
           <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'> 
               <p className='font-medium'>อีเมล:</p>
               <p className='text-blue-400'>{userData.email}</p>
               <p className='font-medium'>โทรศัพท์:</p>
                   {
          isEdit ? <input type='text' className='bg-gray-100 max-w-52' value={userData.phone} onChange={e=> setUserData(prev =>({...prev, phone:e.target.value}))}/>
          : <p className='text-blue-400'>{userData.phone}</p>
        }
          <p className='font-medium'>ที่อยู่:</p>
           {
             isEdit 
             ? <p>
              <input className='bg-gray-100 max-w-52' onChange={(e)=> setUserData(prev=> ({...prev,address:{...prev.address,line1: e.target.value}}))} value={userData.address.line1} type='text'/>
              <br/>
              <input className='bg-gray-100 max-w-52' onChange={(e)=> setUserData(prev=> ({...prev,address:{...prev.address,line2: e.target.value}}))} value={userData.address.line2} type='text'/>
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
          <p className='underline mt-3 '>ข้อมูลพื้นฐาน</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
             <p className='font-medium'>เพศ:</p>
             <p>
                {
                  isEdit
                  ? <select className='max-w-20 bg-gray-100' onChange={(e)=> setUserData(prev=> ({...prev, gender: e.target.value}))} value={userData.gender}>
                      <option value="ชาย">ชาย</option>
                      <option value="หญิง">หญิง</option>
                  </select>
                  : <p>{userData.gender}</p>
                }
             </p>
             <p className='font-medium'>เกิดวันที่:</p>
             {
               isEdit 
               ? <input className='max-w-28 bg-gray-100' type='date' onChange={(e)=> setUserData(prev=> ({...prev, dob: e.target.value}))} value={userData.dob}/>
               : <p className='text-gray-400'>{userData.dob}</p>
             }
          </div>

          <div className='mt-10'>
              {
                 isEdit
                 ? <button className='border border-primary px-8 py-2 rounded-full' onClick={updateUserProfileData}>บันทึก</button>
                 : <button className='border border-primary px-8 py-2 rounded-full' onClick={()=>setIsEdit(true)}>แก้ไข</button>
              }
          </div>

       </div>

    </div>
  )
}
export default MyProfile