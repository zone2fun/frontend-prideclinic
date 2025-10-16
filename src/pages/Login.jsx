import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {

   const {backendUrl, token, setToken, loadUserProfileData} = useContext(AppContext)

   const [state, setState] = useState('Sign up');

   const [email, setEmail] = useState('');

   const [ password, setPassword ] = useState('');
   const [ name, setName ] = useState('');

   const navigate = useNavigate();

   const onSubmitHandler = async (event)=>{
      
     event.preventDefault()

      try{

          if(state === 'Sign up'){
              const {data} = await axios.post(backendUrl + '/api/user/register',{name,password,email})
               if(data.success){
                   localStorage.setItem('token', data.token)
                   setToken(data.token)
               }else{
                  toast.error(data.message)
               }
          }else{

                const {data} = await axios.post(backendUrl + '/api/user/login',{password,email})
               if(data.success){
                   localStorage.setItem('token', data.token)
                   setToken(data.token)
               }else{
                  toast.error(data.message)
               }

          }

      }catch(error){
          toast.error(error.message)
      }
      
   }

   useEffect(()=>{
      if(token){
         loadUserProfileData()
         navigate('/')
      }
   },[token])

  return (
    <div>
          <form onSubmit={onSubmitHandler} className="min-h-[80v] flex items-center">
             <div className="flex flex-col gap-4 p-10 m-auto items-start min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-2xl">
                 <p className="text-2xl font-semibold">{ state === 'Sign up' ? "สมัครสมาชิก" : "Login" }</p>
                 <p>Please {state === 'Sign up' ? "สมัครสมาชิก" : "Login"} สำหรับการจองคิวแพทย์</p>
                 {
                   state === 'Sign up' && <div className="w-full">
                    <p>ชื่อ-นามสกุล</p>
                    <input className="border border-zinc-300 rounded-md w-full p-2 mt-1" type="text" onChange={(e)=> setName(e.target.value)} value={name} required />
                 </div>
                 }
               
                 <div className="w-full">
                    <p>อีเมล</p>
                    <input className="border border-zinc-300 rounded-md w-full p-2 mt-1" type="email" onChange={(e)=> setEmail(e.target.value)} value={email} required />
                 </div>
                 <div className="w-full">
                    <p>รหัสผ่าน</p>
                    <input className="border border-zinc-300 rounded-md w-full p-2 mt-1" type="password" onChange={(e)=> setPassword(e.target.value)} value={password} required />
                 </div>
                 <button type="submit" className="bg-primary text-white w-full rounded-md py-2 px-3">{state === 'Sign up' ? "Create Account" : "Login"}</button>
                 {
                  state === 'Sign up' ? <p className="w-full text-center"> เคยสมัครแล้วใช่หรือไม่? <span className='text-primary font-semibold cursor-pointer' onClick={()=>setState('Login')}>เข้าสู่ระบบ</span> </p> : <p className="w-full text-center"> ยังไม่เคยสมัครใช่หรือไม่? <span onClick={()=>setState('Sign up')} className="text-primary font-semibold cursor-pointer">สมัครสมาชิกที่นี่</span></p>
                 }
             
             </div>
          </form>
    </div>
  )
}
export default Login