import React from 'react'
import LogoAlta from '../../assets/Image/Logo alta.png'
import LogoRight from '../../assets/Image/Group 341.png'
import classes from '../../Components/ForgotPass/ForgotPass.module.css'
import { Link } from 'react-router-dom'
import Input from 'antd/es/input'

const ForgotPass: React.FC  =() => {
  return (
    <div className={classes.ForgotPass}>
      <div className={classes.Boxforget}>
        <div className={classes.logologin}>
          <img  src={LogoAlta} />
        </div>
        <form className={classes.formforget}>
          <label className={classes.forgetlabel}>
            <h3>Đặt lại mật khẩu</h3>
            <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
            <Input 
            className={classes.Textemail} 
            type="text" 
            placeholder='Nhập email'>
            </Input>
          </label>
        </form>
        <div className={classes.Huy}>
          <Link to='/Login'>
          <button 
          type='button'>Hủy</button></Link>
          </div>
          
          <div className={classes.TiepTuc}>
          <Link to='/Pass'>
          <button 
          type='button'>Tiếp tục</button></Link>
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

// interface User{
//   userName:string;
//   email:string;
// }
  // const navigate = useNavigate();, { useState } 
  // const [email,setEmail] = useState('');
  // const [errorMessage,setError] = useState('');

  // const handleLogin = async () => {
  //   try {
  //     const userRef = database.ref("users").orderByChild("email").equalTo(email);
  //     const snapshot = await userRef.once("value");
  //     const userData = snapshot.val();
  //     if (!userData) {
  //       setError("không tồn tại email");
  //       console.log(userData)
  //       return;
  //     }
  //       const userId = Object.keys(userData)[0];
  //       const user = userData[userId] as User;
  //     if (user.email.toString() !== email) {
  //       console.log(user)
  //       setError("không tồn tại email ");
        
  //       return;
  //     }

  //     navigate(`/Pass/${userId}`);
  //   } catch (error) {
  //     console.error(error);
  //     setError("Something went wrong");
  //   }
  // };
   {/* <div>
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
        </div>  onChange={(e) => setEmail(e.target.value)} */}