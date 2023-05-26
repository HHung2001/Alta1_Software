import React from 'react'
import classes from '../DashBoard/DashBoard.module.css'

import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'

const DashBoard:React.FC =() =>{
  return (
    <div>

        <MenuBar></MenuBar>

        <TopMenuBar></TopMenuBar>

    </div>
  );
};
export default DashBoard;