import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import classes  from "../../Components/Login/Login.module.css";
import LogoAlta from '../../assets/Image/Logo alta.png'
import LogoRight from '../../assets/Image/Group 341.png'
import hethong from '../../assets/Image/Hệ thống.png'
import quanly from '../../assets/Image/QUẢN LÝ XẾP HÀNG.png'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Button, Input, Space } from 'antd';
// import { database } from '../../firebase';
import { child, get, ref } from 'firebase/database';
import waring from "../../assets/Image/warning.png";
// import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
// interface User{
//   userName: string;
//   password: string;
// }
// const dbRef = ref(database);

// get(child(dbRef, `users`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     const data = (snapshot.val());
//     console.log(data);
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, seterror] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //thanh điều hướng
  const navigate = useNavigate();

// const handleLogin = async () => {
//   try{
//         const userRef = database.ref("users").orderByChild("userName").equalTo(userName);
//         const snapshot = await userRef.once('value');
//         const userData = snapshot.val();
//         if (!userData) 
//         {
//           setErrorMessage("Sai mật khẩu hoặc tên đăng nhập");
//           return;
//         }

//         const userId = Object.keys(userData)[0];
//         const user = userData[userId] as User;
//         if(user.password.toString()!==password)
//         {
//           setErrorMessage("Sai mật khẩu hoặc tên đăng nhập");
//           return;
//         }

//         // dang nhap thanh công
//         navigate(`/Infor/${userId}`);

//   }catch (error) {
//     console.error(error);
//     setErrorMessage("Sai mật khẩu hoặc tên đăng nhập");
//   }  
// };

   //phần hiển thị/ ẩn mật khẩu 
   const [showPass, setShowPass] = useState(false);
    
   const toggleShowPass = () => {
       setShowPass(!showPass);
   }
   const inputTypePassword = showPass ? 'text' : 'password';
   const eyePass = showPass ? faEye : faEyeSlash;

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // const handleLogin = () => {
  //   const auth = getAuth();
  //  signInWithEmailAndPassword(auth, userName, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     console.log(user)
  //     navigate("/Infor")
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     seterror(errorMessage)
  //     console.log(errorMessage)

  //   });
  // }

  return (
    <div className={classes.login}>
      <div className={classes.BoxLogin}>

        <div className={classes.LogoLeft}>
          <img src={LogoAlta} alt="logo"/>
        </div>

        <form className={classes.formlogin}>
          <label className={classes.textlabel}>
            <p>Tên đăng nhập *</p>
            {errorMessage?
            <input className={classes.textError} type="text"value={userName} onChange={(e) => setUsername(e.target.value)} />
            :<input className={classes.text} type="text"value={userName} onChange={(e) => setUsername(e.target.value)} />}
          </label>
          
          <label className={classes.pass}>
            <p>Mật khẩu *</p>
            {errorMessage?
            <input
              className={classes.passError}
              type={inputTypePassword}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value) }
            />:
            <input
              className={classes.passtext}
              type={inputTypePassword}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value) }
            />}
          </label>
          
          <div className={classes.eyes}>
            <FontAwesomeIcon
              icon={eyePass}
              onClick={toggleShowPass}
            />
          </div>

          {/* <div>
            <Link to="/ForgotPass">
              <label className={classes.forgetPass}>
               {errorMessage ?
               <div className={classes.errorForgotPass}> 
               <img src={waring}/>  
               <p className={classes.errorPassCode}>
                {errorMessage}</p></div>:
               <span>Quên mật khẩu?</span>
              }
              </label>
            </Link>
          </div> */}
          {/* {<span className={classes.forgetPass}>{errorMessage}</span>} */}
           <div className={classes.forgetPass}>
              <Link to="/ForgotPass">Quên mật khẩu?</Link>
            </div>
          
          
        </form>
        <div className={classes.BtnLogin}>
                    <Link to="/DashBoard"><button>Đăng nhập</button></Link>
                </div>
        {/* <button 
        className={classes.ButtonDN} type="submit">
              Đăng nhập
            </button> */}

            <div>
            <Link className="link-nav" to="/ForgotPass">
                  <label className={classes.PassForgotNew}>
              {errorMessage? 
              <span>Quên mật khẩu?</span>: <span></span>}</label>
            </Link>
        </div>
        
      </div>
                    <div className={classes.BoxLoginRight}>
                        <div className={classes.LogoRight}> 
                        <img src={LogoRight}></img>
                        </div>
                        <div className={classes.TextRight}>
                          <img src={hethong} />
                          <img src={quanly} />
                        </div>
                    </div>
      
      
    </div>
  );
};

export default Login;