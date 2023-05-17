import React from 'react'
import classes from '../ChiTietTB/ChiTietTB.module.css'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import Update from '../../assets/Image/EditNote.png'
import { Link } from 'react-router-dom';
import Vector from '../../assets/Image/V.png'

const detail:React.FC = ()=> {
  return (
    <div className={classes.Details}>
            <div className={classes.header}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            <div className={classes.A}>
                 <h1>Thiết bị  <img src={Vector}></img>  Danh sách thiết bị  <img src={Vector}></img> 
                    <a href='/ChiTietTB'> Chi tiết thiết bị</a></h1>
                 <h2>Quản lý thiết bị</h2>
            </div>
    <div className={classes.DetailEqui}>
                <div className={classes.DetailText}>
                    <label>Thông tin thiết bị</label>
                </div>
        <div className={classes.DetailEquiR}>
          <div>
            <span className={classes.Text}>Mã thiết bị:</span>
            <span className={classes.DetailText}>KIO_01</span>
          </div>
          
          <div>
            <span className={classes.Text}>Tên thiết bị:</span>
            <span className={classes.DetailText}>Kiosk</span>
          </div>

          <div>
            <span className={classes.Text}>Địa chỉ IP:</span>
            <span className={classes.DetailText}>128.172.308</span>
          </div>
        </div>
        <div className={classes.DetailEquiL}>
          <div>
            <span className={classes.Text}>Loại thiết bị:</span>
            <span className={classes.DetailText}>Kiosk</span>
          </div>

          <div>
            <span className={classes.Text}>Tên đăng nhập:</span>
            <span className={classes.DetailText}>Linhkyo011</span>
          </div>

          <div>
            <span className={classes.Text}>Mật khẩu:</span>
            <span className={classes.DetailText}>CMS</span>
          </div>
        </div>

        <div className={classes.DetailS}>
          <span className={classes.Text}>Dịch vị sử dụng:</span>
          <span className={classes.DetailTexts}> Khám tim mạch, Khám sản - Phụ khoa,Khám răng hàm mặt, Khám tai mũi họng, khám hô hấp, Khám tổng quát.</span>
        </div>

        <div className={classes.UpdateEqui}>
            <Link to='/CapNhatTB'>
            <img src={Update}></img> Cập nhập thiết bị</Link>
        </div>
    </div>

    </div>
  );
};
export default detail;