import { useState } from "react"

const Login = () => {

   const [state, setState] = useState('Sign up');

   const [email, setEmail] = useState('');

   const [ password, setPassword ] = useState('');
   const [ name, setName ] = useState('');

   const onSubmitHandler = async (event)=>{
      
     event.preventDefault()
      
   }

  return (
    <div>
          <form className="min-h-[80v] flex items-center">
             <div className="flex flex-col gap-4 p-10 m-auto items-start min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-2xl">
                 <p className="text-2xl font-semibold">{ state === 'Sign up' ? "Create Account" : "Login" }</p>
                 <p>Please {state === 'Sign up' ? "Create Account" : "Login"} to book appointment</p>
                 {
                   state === 'Sign up' && <div className="w-full">
                    <p>Full Name</p>
                    <input className="border border-zinc-300 rounded-md w-full p-2 mt-1" type="text" onChange={(e)=> setName(e.target.name)} name={name} required />
                 </div>
                 }
               
                 <div className="w-full">
                    <p>Email</p>
                    <input className="border border-zinc-300 rounded-md w-full p-2 mt-1" type="email" onChange={(e)=> setName(e.target.name)} name={email} required />
                 </div>
                 <div className="w-full">
                    <p>Password</p>
                    <input className="border border-zinc-300 rounded-md w-full p-2 mt-1" type="password" onChange={(e)=> setName(e.target.name)} name={password} required />
                 </div>
                 <button className="bg-primary text-white w-full rounded-md py-2 px-3">{state === 'Sign up' ? "Create Account" : "Login"}</button>
                 {
                  state === 'Sign up' ? <p className="w-full text-center"> Already have an account? <span className='text-primary font-semibold cursor-pointer' onClick={()=>setState('Login')}>Login here</span> </p> : <p className="w-full text-center"> Create a new account? <span onClick={()=>setState('Sign up')} className="text-primary font-semibold cursor-pointer">Sign up here</span></p>
                 }
             
             </div>
          </form>
    </div>
  )
}
export default Login