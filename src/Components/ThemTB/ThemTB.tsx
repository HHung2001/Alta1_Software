import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from '../ThemTB/ThemTB.module.css'
import Vector from '../../assets/Image/V.png'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
const ThemTB: React.FC =() => {
    const [choose1, setValue1] = useState("designation");
    const handlechooseChange = (e: any) => 
    {
        setValue1(e.target.value);
    };
    return (
        <div className={classes.EquiAdd}>

            <div className={classes.EquiAddheader}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            <div className={classes.Title}>
                 <h1>Thiết bị  <img src={Vector}></img>  <a className={classes.TB} href="/ThietBi"> Danh sách thiết bị</a>
                 <img src={Vector}></img> 
                      <a href='/ThemTB'> Thêm thiết bị </a> 
                 </h1>
                 <h2>Quản lý thiết bị</h2>
            </div>
           
            
            <div className={classes.TableInput}>
                <label>Thông tin thiết bị</label>

                <div className={classes.TableInputLeft}>
                    <div>
                        <span className={classes.TextBox}>Mã thiết bị: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='Nhập mã thiết bị' />
                    </div>

                    <div>
                        <span className={classes.TextBox}>Tên thiết bị: </span>
                        <span className={classes.star} >*</span>
                        <input type='text' placeholder='Nhập tên thiết bị' />
                    </div>

                    <div>
                        <span className={classes.TextBox}>Địa chỉ IP: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='Nhập địa chỉ IP' />
                    </div>

                </div>
                <div className={classes.TableInputRight}>
                    <div>
                        <span className={classes.TextBox}>Loại thiết bị: </span>
                        <span className={classes.star}>*</span>

                        <select
                            value={choose1} 
                            onChange={handlechooseChange}>
                            <option value="default">Chọn loại thiết bị</option>
                            <option value="one">Kiosk</option>
                            <option value="two">Display counter</option>
                        </select>
                    </div>

                    <div>
                        <span className={classes.TextBox}>Tên đăng nhập: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='Nhập tài khoản' />
                    </div>

                    <div>
                        <span className={classes.TextBox}>Mật Khẩu: </span>
                        <span className={classes.star}>*</span>
                        <input type='password' placeholder='Nhập mật khẩu' />
                    </div>

                </div>
                <div className={classes.solution}>
                    <span className={classes.TextBox}>Dịch vụ sử dụng: </span>
                    
                    <span className={classes.star}>*</span>
                    <input type='text' placeholder='Nhập dịch vụ sử dụng' />

                    <span className={classes.star}>*</span>
                    <span className={classes.Text1}>Là trường thông tin bắt buộc</span>
                </div>
            </div>
            <div className={classes.ButtonHuy}>
            <Link to='/ThietBi'>
            <button type='button' >Huỷ bỏ</button>
            </Link>
            </div>

            <div className={classes.ButtonEquiA}>
            <Link to='/ThietBi'>
            <button type='button'>Thêm thiết bị</button>
            </Link>
            </div>

        </div>
    );
};
export default ThemTB;
