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
            <div className={classes.Updateheader}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            <div className={classes.A}>
                <h1>Thiết bị 
                    <img src={Vector}></img>  
                        <a className={classes.TB} href="/ThietBi"> Danh sách thiết bị</a>
                    <img src={Vector}></img> 
                        <a href='/CapNhatTB'> Cập nhật thiết bị </a>
                </h1>
                <h2>Quản lý thiết bị</h2>
            </div>
            
            <div className={classes.UpdateMenu}>
                <div className={classes.UpdateText}>
                    <label>Thông tin thiết bị</label>
                </div>
                <div className={classes.UpdateMenuLeft}>
                    <div>
                        <div className={classes.TextLeft}>
                            <span className={classes.Text}>Mã thiết bị: </span>
                            <span className={classes.star}>*</span>
                        </div>
                        <input type='text' placeholder='KIO_01'></input>
                    </div>

                    <div>
                    <div className={classes.TextLeft}>
                        <span className={classes.Text}>Tên thiết bị: </span>
                        <span className={classes.star}>*</span>
                    </div>
                        <input type='text' placeholder='Kiosk' ></input>
                    </div>

                    <div>
                        <div className={classes.TextLeft}>
                            <span className={classes.Text}>Địa chỉ IP: </span>
                            <span className={classes.star}>*</span>
                        </div>                        
                        <input type='text' placeholder='128.172.308'></input>
                    </div>

                </div>
                <div className={classes.UpdateMenuRight}>
                    <div>
                        <div className={classes.TextRight}>
                            <span className={classes.Text}>Loại thiết bị: </span>
                            <span className={classes.star}>*</span>
                        </div>
                        
                        <div className={classes.ComboboxDevice}>
                            <select value={choose} 
                                    onChange={handlechooseChange}>
                                    <option value="default">Chọn loại thiết bị</option>
                                    <option value="switch first">Kiosk</option>
                                    <option value="switch second">Display counter</option>
                            </select>
                        </div>  
                        
                    </div>

                    <div>
                        <div className={classes.TextRight}>
                            <span className={classes.Text}>Tên đăng nhập: </span>
                            <span className={classes.star}>*</span>
                        </div>
                        <input type='text' placeholder='Linhkyo011'></input>
                    </div>
                    
                    <div>
                        <div className={classes.TextRight}>                           
                            <span className={classes.Text}>Mật khẩu: </span>
                            <span className={classes.star}>*</span>
                        </div>                                               
                        <input type='password' placeholder='CMS'></input>
                    </div>

                </div>
                <div className={classes.UpdateS}>
                    <div className={classes.TextRight}>
                        <span className={classes.Text}>Dịch vụ sử dụng: </span>
                        <span className={classes.star}>*</span>
                    </div>
                    <input type='text' placeholder='Khám tim mạch x'></input>
                    <div className={classes.TextRight}>
                        <span className={classes.star}>*</span>
                        <span className={classes.Texts}>Là trường thông tin bắt buộc</span>
                    </div>                    
                </div>
            </div>

            <div className={classes.UpdateButton}>
                <div className={classes.UpdateButtonLeft}>
                    <div className={classes.Button}>
                        <Link to='/ThietBi'>  
                            <button type='button'>Huỷ bỏ</button>
                        </Link>
                    </div>
                </div>
                <div className={classes.UpdateButtonRight}>
                    <div className={classes.ButtonUpdate}>
                        <Link to='/ThietBi'>
                            <button type='button'>Cập nhập thiết bị </button>
                        </Link>
                    </div>
                </div>
            </div>           
        </div>
    );
};
export default UpdateTB;
