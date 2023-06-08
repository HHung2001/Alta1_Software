import React from 'react'
import classes from '../ChiTietTB/ChiTietTB.module.css'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import Update from '../../assets/Image/EditNote.png'
import { Link } from 'react-router-dom';
import Vector from '../../assets/Image/V.png'
import Back  from '../../assets/Image/Back.png'
const detail:React.FC = ()=> {
  return (
    <div className={classes.Details}>
              <div className={classes.Detailsheader}>
                  <MenuBar></MenuBar>
                  <TopMenuBar></TopMenuBar>
              </div>
              <div className={classes.A}>
                 <h1>Thiết bị  
                    <img src={Vector}></img>  
                      <a className={classes.TB} href="/ThietBi"> Danh sách thiết bị</a>  
                    <img src={Vector}></img> 
                      <a href='/ChiTietTB'> Chi tiết thiết bị </a>
                  </h1>
                 <h2>Quản lý thiết bị</h2>
              </div>
      <div className={classes.DetailEqui}>
                <div className={classes.DetailText}>
                    <label>Thông tin thiết bị</label>
                </div>
          <div className={classes.DetailEquiR}>
            <div className={classes.TextDetail}>
              <p className={classes.Text}>Mã thiết bị:</p>
              <p className={classes.DetailText}>KIO_01</p>
            </div>
            
            <div className={classes.TextDetail}>
              <p className={classes.Text}>Tên thiết bị:</p>
              <p className={classes.DetailText}>Kiosk</p>
            </div>

            <div className={classes.TextDetail}>
              <p className={classes.Text}>Địa chỉ IP:</p>
              <p className={classes.DetailText}>128.172.308</p>
            </div>
          </div>
          <div className={classes.DetailEquiL}>
            <div className={classes.TextDetails}>
              <p className={classes.Text}>Loại thiết bị:</p>
              <p className={classes.DetailText}>Kiosk</p>
            </div>

            <div className={classes.TextDetails}>
              <p className={classes.Text}>Tên đăng nhập:</p>
              <p className={classes.DetailText}>Linhkyo011</p>
            </div>

            <div className={classes.TextDetails}>
              <p className={classes.Text}>Mật khẩu:</p>
              <p className={classes.DetailText}>CMS</p>
            </div>
          </div>

        <div className={classes.DetailS}>
          <p className={classes.Text}>Dịch vị sử dụng:</p>
          <p className={classes.DetailTexts}> Khám tim mạch, Khám sản - Phụ khoa,Khám răng hàm mặt, Khám tai mũi họng, khám hô hấp, Khám tổng quát.</p>
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