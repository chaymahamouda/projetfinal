
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import{ Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Profile from './components/Profile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers, logout, userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Abouttt from './components/abouttt';
import Devis from './components/Devis';
import Service from './components/Service';
import { useState } from 'react';
import { getvoyages } from './JS/Almasslice/Almasslice';
import VoyageO from './components/voyages/VoyageO';
import VoyageP from './components/voyages/VoyageP';
import VoyageN from './components/voyages/VoyageN';
import Dashbord from './components/Dashbord';
import Voyages from './components/admin/Voyages';
import Users from './components/admin/Users';
import { getreservations } from './JS/Reservationslice/ReservationSlice';
import ReservationV from './components/admin/ReservationV';

function App() {
  
    
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [ping, setping] = useState(false);
  useEffect(() => {
   
    dispatch(userCurrent());
    dispatch(getvoyages());
    dispatch(getUsers());
    dispatch(getreservations());

  }
  , [ping]);

  return (
    <div className="App">
      
   
      <Navbar/>
    <Routes>
      <Route exact path="/register" element={<Register ping={ping} setping={setping}/>} />
      <Route exact path="/login" element={<Login ping={ping} setping={setping}/>} />
      <Route exact path="/profile" element={<Profile ping={ping} setping={setping}/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/about" element={<Abouttt/>} />
      <Route exact path="/devis" element={<Devis/>} />
      <Route exact path="/service" element={<Service/>} />
      <Route exact path="/dashboard" element={<Dashbord/>} />
       <Route element={<PrivateRoute/>}/>
       <Route exact path="/voyageO" element={<VoyageO/>} />
       <Route exact path="/voyageP" element={<VoyageP/>} />
       <Route exact path="/voyageN" element={<VoyageN/>} />
       <Route exact path="/voyages" element={<Voyages ping={ping} setping={setping}/>} />
       <Route exact path="/users" element={<Users ping={ping} setping={setping}/>} />
       <Route exact path="/reservation" element={<ReservationV ping={ping} setping={setping}/>} />

   

      
       
    </Routes>
    <Footer/>

    
    </div>
  );
}

export default App;
