import React from 'react'
import classes from '../DashBoard/DashBoard.module.css'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import MenuBar from '../../Pages/MenuBar/MenuBar'

const DashBoard =() => {
  return (
    <div className='App'>
        <MenuBar></MenuBar>
        <TopMenuBar></TopMenuBar>
    </div>
  );
};
export default DashBoard;