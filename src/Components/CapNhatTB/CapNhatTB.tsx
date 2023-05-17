import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from 'antd';
import classes from '../CapNhatTB/CapNhatTB.module.css'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import Vector from '../../assets/Image/V.png'

const UpdateTB: React.FC =() => {
    const [choose, setChoose] = useState("designation");
    const handlechooseChange = (e: any) => 
    {
        setChoose(e.target.value);
    };
    return (
        <div className={classes.Update}>

            <div className={classes.header}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            <div className={classes.A}>
                <h1>Thiết bị <img src={Vector}></img> Danh sách thiết bị <img src={Vector}></img> 
                 <a href='/CapNhatTB'> Cập nhật thiết bị</a></h1>
                <h2>Quản lý thiết bị</h2>
            </div>
            

            <div className={classes.UpdateMenu}>
                <label>Thông tin thiết bị</label>

                <div className={classes.UpdateMenuLeft}>
                    <div>
                        <span className={classes.Text}>Mã thiết bị: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='KIO_01' />
                    </div>

                    <div>
                        <span className={classes.Text}>Tên thiết bị: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='Kiosk' />
                    </div>

                    <div>
                        <span className={classes.Text}>Địa chỉ IP: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='128.172.308' />
                    </div>

                </div>
                <div className={classes.UpdateMenuRight}>
                    <div>
                        <span className={classes.Text}>Loại thiết bị: </span>
                        <span className={classes.star}>*</span>
                        <select value={choose} 
                                onChange={handlechooseChange}>
                            <option value="default">Chọn loại thiết bị</option>
                            <option value="switch first">Kiosk</option>
                            <option value="switch second">Display counter</option>
                        </select>
                    </div>

                    <div>
                        <span className={classes.Text}>Tên đăng nhập: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='Linhkyo011' />
                    </div>
                    
                    <div>
                        <span className={classes.Text}>Mật khẩu: </span>
                        <span className={classes.star}>*</span>
                        <input type='password' placeholder='CMS' />
                    </div>

                </div>
                <div className={classes.UpdateS}>
                    <span className={classes.Text}>Dịch vụ sử dụng: </span>
                    <span className={classes.star}>*</span>
                    <input type='text' placeholder='Khám tim mạch x   khám khoa phụ sản x   Khám răng hàm mặt x   Khám tai mũi họng x   Khám hô hấp x   Khám tổng quát x'  />
                    <span className={classes.star}>*</span>
                    <span className={classes.Texts}>Là trường thông tin bắt buộc</span>
                </div>
            </div>
            <div className={classes.Button}>
            <Link to='/ThietBi'>  
                <button type='button'>Huỷ</button>
            </Link>
            </div>
            <div className={classes.ButtonUpdate}>
            <Link to='/ThietBi'>
                <button type='button'>Cập nhập thiết bị</button>
            </Link>
            </div>
        </div>
    );
};
export default UpdateTB;
