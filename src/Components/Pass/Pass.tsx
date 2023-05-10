import React from 'react'
import LogoAlta from '../../assets/Image/Logo alta.png'
import LogoRight from '../../assets/Image/Group 341.png'
import classes from '../../Components/Pass/SetPass.module.css'
import { Input } from 'antd';
import { Link } from 'react-router-dom';
 
const SetPass=() => 
{
    return (
        <div className={classes.SetPass}>
            <div className={classes.BoxSetPass}>
                <div className={classes.LoginLeft}>
                    <div className={classes.BoxLogoleft} >
                        <img src={LogoAlta}></img>
                    </div>
                    <div className={classes.Title}>
                        <label>Đặt lại mật khẩu mới</label>
                    </div>
                        <div className={classes.InputText}>
                            <p>Mật khẩu</p>
                            <Input.Password placeholder="" />
                        </div>
                    
                        <div className={classes.PassText}>
                            <p>Nhập lại mật khẩu</p>
                            <Input.Password placeholder="" />

                        </div>
                    <div className={classes.BtnConfrim}> 
                    <Link to='/Login'><button type='button' >Xác nhận</button></Link>
                            {/* <button type='button' >Xác nhận</button> */}
                    </div>
                </div>
                <div className={classes.LoginRight}>
                    <div className={classes.LogoRight}> 
                    <img src={LogoRight}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SetPass;
