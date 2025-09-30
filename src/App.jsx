import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Doctors from "./pages/Doctors"
import MyAppointment from "./pages/MyAppointment"
import MyProfile from "./pages/MyProfile"
import Appoinment from "./pages/Appoinment"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/doctors/:speciality" element={<Doctors/>} />
          <Route path="/my-appointment" element={<MyAppointment/>} />
          <Route path="/appointment/:docId" element={<Appoinment/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
       </Routes>
       <Footer/>

    </div>
  )
}
export default App