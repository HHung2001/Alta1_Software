import React, { useState } from 'react'
import classes from './CapSoMoi.module.css'
import MenuBar from '../../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../../Pages/TopBar/TopMenuBar'
import { Link } from 'react-router-dom';
import Vector from '../../../assets/Image/V.png'

const  CapSo:React.FC  =()=> {
    const [choose, setValue] = useState('designation');
    const handleSelectChange = (e: any) => 
    {
        setValue(e.target.value);
    };

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
                        <label>CẤP SỐ MỚI</label>
                    </div>

                    {/* hop trang thai 2*/}
                    <div className={classes.Combobox2}>
                        <label>Dịch vụ khách hàng lựa chọn</label>
                        <select 
                            value={choose} 
                            onChange={handleSelectChange}>
                            <option disabled={true} value="5">Chọn dịch vụ</option>
                            <option value="6">Khám tim mạch</option>
                            <option value="7">Khám sản - Phụ khoa</option>
                            <option value="8">Khám răng hàm mặt</option>
                            <option value="9">Khám tai mũi họng</option>
                        </select>
                    </div>

                    <div className={classes.ButtonHuy}>
                        <Link to='/CapSoDS'>
                        <button type='button' >Huỷ bỏ</button>
                        </Link>
                    </div>

                    <div className={classes.ButtonEquiA}>
                        <Link to='/InSo'>
                        <button type='button'>In số</button>
                        </Link>
                    </div>
                </div>
                {/* <div className={classes.DetailEquis}>

                </div> */}
    </div>
  );
};
export default CapSo;

