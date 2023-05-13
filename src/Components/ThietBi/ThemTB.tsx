import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'antd';
import classes from '../ThietBi/ThemTB.module.css'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopBar from '../../Pages/TopBar/TopMenuBar'
import Vector from '../../assets/Image/V.png'


const ThemTB = () => {
    const [choose1, setValue1] = useState('designation');
    const handlechooseChange = (e: any) => 
    {
        setValue1(e.target.value);
    };
    return (

        <div className={classes.AddDevice}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <h1>Thiết bị <img src={Vector}></img> Danh sách thiết bị <img src={Vector}></img>  Thêm thiết bị</h1>
            <h2>Quản lý thiết bị</h2>
            <div className={classes.MenuAdd}>
                <p>Thông tin thiết bị</p>
                <div className={classes.MenuAddLeft}>
                    <div className={classes.Code}>
                        <span className={classes.Title}>Mã thiết bị: </span>
                        <span className={classes.Icon}>*</span>
                        <Input placeholder='Nhập mã thiết bị' />
                    </div>
                    <div className={classes.NameCode}>
                        <span className={classes.Title}>Tên thiết bị: </span>
                        <span className={classes.Icon} >*</span>
                        <Input placeholder='Nhập tên thiết bị' />
                    </div>
                    <div className={classes.Local}>
                        <span className={classes.Title}>Địa chỉ IP: </span>
                        <span className={classes.Icon}>*</span>
                        <Input placeholder='Nhập địa chỉ IP' />
                    </div>

                </div>
                <div className={classes.MenuAddRight}>
                    <div className={classes.Loai}>
                        <span className={classes.Title}>Loại thiết bị: </span>
                        <span className={classes.Icon}>*</span>
                        <select id="designation" value={choose1} onChange={handlechooseChange} >
                            <option disabled={false} value="option1">Chọn loại thiết bị</option>
                            <option value="option2">Kiosk</option>
                            <option value="option3">Display counter</option>
                        </select>
                    </div>
                    <div className={classes.NameInput}>
                        <span className={classes.Title}>Tên đăng nhập: </span>
                        <span className={classes.Icon}>*</span>
                        <Input placeholder='Nhập tài khoản' />
                    </div>
                    <div className={classes.Pass}>
                        <span className={classes.Title}>Mật Khẩu: </span>
                        <span className={classes.Icon}>*</span>
                        <Input placeholder='Nhập mật khẩu' />
                    </div>

                </div>
                <div className={classes.UseSevice}>
                    <span className={classes.Title}>Dịch vụ sử dụng: </span>
                    <span className={classes.Icon}>*</span>
                    <Input placeholder='Nhập dịch vụ sử dụng' />
                    <span className={classes.Icon}>*</span>
                    <span className={classes.Titles}>Là trường thông tin bắt buộc</span>
                </div>
            </div>
            <div className={classes.BtnCance}>

            <Link to='/ThietBi'>  <button type='button' >Huỷ</button></Link>
            </div>
            <div className={classes.BtnAdd}>
            <Link to='/ThietBi'><button type='button' >Thêm thiết bị</button></Link>
            </div>

        </div>
    );
};
export default ThemTB;
