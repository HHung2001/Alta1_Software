import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Login from './Components/Login/Login';
import ForgotPass from './Components/ForgotPass/ForgotPass';
import Pass from './Components/Pass/Pass';
import Infor from './Components/Infor/Infor';
import DashBoard from './Components/DashBoard/DashBoard';
import ThietBi from './Components/ThietBi/ThietBi';
import ThemTB from './Components/ThietBi/ThemTB';
function App() {
  return (
    <div className='App' >
          <Routes>
          <Route path="*" element={<Login></Login>}></Route>
          <Route path="/ForgotPass" element={<ForgotPass></ForgotPass>}></Route>
          <Route path="/Pass/" element={<Pass></Pass>}></Route>
          <Route path="/Infor" element={<Infor></Infor>}></Route>
          <Route path="/DashBoard" element={<DashBoard></DashBoard>}></Route>
          <Route path="/ThietBi" element={<ThietBi></ThietBi>}></Route>
          <Route path="/ThemTB" element={<ThemTB></ThemTB>}></Route>
          </Routes>
    </div>
  );
}

export default App;