import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useState, useRef, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [ open, setOpen ] = useState(false)
    
    const {token, setToken, userData} = useContext(AppContext)

    const menuRef = useRef(null);

    const logout = ()=>{
      setToken('')
      localStorage.removeItem('token')
      navigate('/login')
    }

    // ปิดเมนูเมื่อคลิกข้างนอก
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className='h-15 cursor-pointer' src={assets.logo_clinic} alt="" />
        <ul className='hidden md:flex item-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>หน้าแรก</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
             </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>รายชื่อแพทย์</li>
                 <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>เกี่ยวกับเรา</li>
                 <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>ติดต่อเรา</li>
                 <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
         
        </ul>
        <div className='flex item-center gap-4'>
            {
                token && userData? <div ref={menuRef} className='flex items-center gap-2 cursor-pointer relative'>
                    <img className='w-9 h-9 rounded-full' src={userData.image} onClick={()=>setOpen(!open)} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" onClick={()=>setOpen(!open)} /> 
                  
                       {
                         open && (
                               <div className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20`}>
                      <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow'>
                         <p onClick={()=> navigate('/my-profile')} className='hover:text-black cursor-pointer'>โปรไฟล์ของฉัน</p>
                         <p onClick={()=> navigate('/my-appointment')} className='hover:text-black cursor-pointer'>การนัดหมายของฉัน</p>
                         <p onClick={logout} className='hover:text-black cursor-pointer'>ออกจากระบบ</p>
                      </div>    
                    </div> 
                         )
                       }
                                  
                </div> 
                : <button onClick={()=> navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            }

            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            {/* mobile menu */}
            <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                 <div className='flex items-center justify-between px-5 py-6'>
                     <img className='w-36' src={assets.logo_clinic} alt="" />
                     <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                 </div>
                 <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                     <NavLink onClick={()=>setShowMenu(false)}  to='/'><p className='px-4 py-2 rounded inline-block'>หน้าแรก</p></NavLink>
                     <NavLink onClick={()=>setShowMenu(false)}  to='/doctors'><p className='px-4 py-2 rounded inline-block'>รายชื่อแพทย์</p></NavLink>
                     <NavLink onClick={()=>setShowMenu(false)}  to='/about'><p className='px-4 py-2 rounded inline-block'>เกี่ยวกับเรา</p></NavLink>
                     <NavLink onClick={()=>setShowMenu(false)}  to='/contact'><p className='px-4 py-2 rounded inline-block'>ติดต่อเรา</p></NavLink>
                 </ul>
            </div>
            
        </div>
    </div>
  )
}
export default Navbar