import React, { useState } from 'react'
import LogoAlta from '../../assets/Image/Logo alta.png'
import LogoRight from '../../assets/Image/Group 341.png'
import classes from '../../Components/ForgotPass/ForgotPass.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { error } from 'console'
import { database } from '../../firebase'
import Input from 'antd/es/input'

interface User{
  userName:string;
  email:string;
}

const ForgotPass: React.FC  =() => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [errorMessage,setError] = useState('');

  const handleLogin = async () => {
    try {
      const userRef = database.ref("users").orderByChild("email").equalTo(email);
      const snapshot = await userRef.once("value");
      const userData = snapshot.val();
      if (!userData) {
        setError("không tồn tại email");
        console.log(userData)
        return;
      }
        const userId = Object.keys(userData)[0];
        const user = userData[userId] as User;
      if (user.email.toString() !== email) {
        console.log(user)
        setError("không tồn tại email ");
        
        return;
      }
      //successful
      navigate(`/Pass/${userId}`);
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    }
  };

  return (
    <div className={classes.ForgotPass}>
      <div className={classes.Boxforget}>
        <div className={classes.logologin}>
          <img  src={LogoAlta} />
        </div>
        <form className={classes.formforget}>
          <label className={classes.forgetlabel}>
            <h3 className={classes.passname}>Đặt lại mật khẩu</h3>
            <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
            <input className={classes.Textemail} type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>

          <div></div>
        </form>
        <div>
          <div className={classes.buttonForgot}>
            <Link className="link-nav" to="/Login">
              {" "}
              <button className={classes.buttonHuy} type="submit">Hủy</button>
            </Link>
              {" "}
              <button className={classes.buttonTiepTuc} type="submit" onClick={handleLogin}>Tiếp tục</button>

              <p className={classes.errorM}>
              {errorMessage}
              </p>
          </div>
        </div>
      </div>

        <div className={classes.BoxForgotPassRight}>
                <div className={classes.BoxLogoRight}>
                  <img src={LogoRight}></img>
                </div>
        </div>
        
        
    </div>
  );
};
export default ForgotPass;