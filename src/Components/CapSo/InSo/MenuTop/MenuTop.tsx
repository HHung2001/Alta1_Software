import React from 'react'
import { Link } from 'react-router-dom';
import LogoAlta from '../../../../assets/Image/Logo alta.png'
import CapSo from '../../../../assets/Image/capso.png'
import classes from '../../../CapSo/InSo/MenuTop/MenuTop.module.css'
const MenuBar:React.FC =()=> {
  return (
    <div className={classes.MenuListBar}>
      <div className={classes.ALogo}>
        <img src={LogoAlta}></img>
      </div>
      <div className={classes.MenuBar}>                     
        <div className={classes.ItemCapso}>
          <Link to="/CapSoDS"> 
            <img src={CapSo}></img> 
              <a>Cấp số</a>
          </Link>
        </div>                     
      </div>
    </div>
  );
};
export default MenuBar;