import React, { useState } from 'react'
import LogoAlta from '../../assets/Image/Logo alta.png'
import LogoRight from '../../assets/Image/Group 341.png'
import classes from '../../Components/Pass/SetPass.module.css'
import { Input } from 'antd';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {   useParams , useNavigate} from "react-router-dom";
import { ref, update } from '@firebase/database';
// import { database } from '../../firebase';
 
interface User{
    userName: string;
    password: string;
    email: string;
}

const SetPass: React.FC =() => 
{
    const navigate = useNavigate();
    const { userId } = useParams<{ userId: string }>();

    // const handleSetPassword = () => {
    //     update(ref(database,`users/${userId}`),{
    //         password:password,
    //     });
    //     navigate('/Login');
    // };
    //React.useState('');
    const [password,setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => 
    {
        setShowPassword(!showPassword);
    };

    const inputTypePass = showPassword ? "text" : "password";
    const [password1, setPassword1] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);

    const toggleShowPassword1 = () => 
    {
        setShowPassword1(!showPassword1);
    };
    const inputType1 = showPassword1 ? "text" : "password";

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
                            <Input.Password
                            className="usertext"
                            type={inputTypePass}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* <Input.Password placeholder="" /> */}
                        </div>
                    
                        <div className={classes.PassText}>
                            <p>Nhập lại mật khẩu</p>
                            <Input.Password
                                className="passtext"
                                type={inputType1}
                                id="password1"
                                value={password1}
                                onChange={(e) => setPassword1(e.target.value)}
                                />
                            {/* <Input.Password placeholder="" /> */}

                        </div>
                    <div className={classes.BtnConfrim}> 
                    {/* <button type="submit" >
                        Xác nhận
                        </button> */}

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
