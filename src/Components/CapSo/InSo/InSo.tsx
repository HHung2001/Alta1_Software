import React, { useState } from 'react'
import classes from './InSo.module.css'
import MenuBar from '../../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../../Pages/TopBar/TopMenuBar'
import Update from '../../../assets/Image/EditNote.png'
import { Link } from 'react-router-dom';
import Vector from '../../../assets/Image/V.png'
import Cancel  from '../../../assets/Image/fi_x.png'
const InSo:React.FC  = ()=> {
    // const [choose2, setValue2] = useState('designation2');
    // const handleSelect2Change = (e: any) => 
    // {
    //     setValue2(e.target.value);
    // };

  return (
    <div className={classes.Details}>
              <div className={classes.Detailsheader}>
                  <MenuBar></MenuBar>
                  <TopMenuBar></TopMenuBar>
              </div>
              <div className={classes.A}>
                 <h1>Cấp số 
                    <img src={Vector}></img>  
                      <a className={classes.TB} href="/CapSoDS"> Danh sách cấp số</a>  
                    <img src={Vector}></img> 
                      <a href='/CapSoMoi'> Cấp số mới</a>
                  </h1>
                 <h2>Quản lý cấp số</h2>
              </div>
                <div className={classes.DetailEqui}>
                    <div className={classes.DetailText}>
                        <label>Số Thứ tự được cấp</label>
                    </div>

                    <div className={classes.DetailTexts}>
                        <label>2001201</label>
                    </div>

                    <div className={classes.DetailTexts2}>
                        <label>DV: Khám răng hàm mặt (tại quầy số 1)</label>
                    </div>

                </div>
                <div className={classes.DetailEquis}>
                    <div className={classes.DetailTexts3}>
                        <label>Thời gian cấp:</label>
                        <p>09:30 11/10/2021</p>
                    </div>

                    <div className={classes.DetailTexts4}>
                        <label>Hạn sử dụng:</label>
                        <p>17:30 11/10/2021</p>
                    </div>
                </div>
                <div className={classes.ThemTB}>
                            <Link to='/InSoMoi'><img src={Cancel} />
                                
                            </Link>
                        </div>
                
    </div>
  );
};
export default InSo;

