import React from 'react'
import Input from "antd/es/input/Input";
import classes from '../../Components/Infor/Infor.module.css'
import Avatar from '../../assets/Image/img.jpg'
import Camera from '../../assets/Image/Camera.png'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import { useParams } from 'react-router-dom';
const Infor: React.FC =() =>{
  const { userId } = useParams<{ userId: string }>();
    return (
        <div className={classes.Infor}>
        {/*Phần menubar nằm trong phần pages  */}
        <div className={classes.MenuBar}>
          <MenuBar></MenuBar>
        </div>
         {/*Phần topmenubar nằm trong phần pages  */}
        <div className={classes.TopBar}>
          <TopMenuBar></TopMenuBar>
        </div>
        <div className={classes.BoxContentsLeft}>
        <p> Thông tin cá nhân </p>
        {/* <label>Thông tin cá nhân</label> */}
      </div>
        <div className={classes.TableInfor}>

          <div className={classes.AvatarBig}>
            <img src={Avatar}></img>
          </div>

          <div className={classes.InconCamera}>
            <img src={Camera}></img>
          </div>
          <div className={classes.MyName}>
            <p>Ôn Việt Hùng</p>
          </div>
          <div className={classes.BoxInforLeft}>
            <div className={classes.NameofUser}>
              <p>Tên người dùng:</p>
              <Input placeholder='Ôn Việt Hùng' />
            </div>
            <div className={classes.Numberphone}>
              <p>Số điện thoại:</p>
              <Input placeholder='0932558455' />
            </div>
            <div className={classes.Emailofuser}>
              <p>Email:</p>
              <Input placeholder='onviethung@gmail.com' />
            </div>

          </div>
          <div className={classes.BoxInforRight}>
            <div className={classes.LoginName}>
              <p>Tên đăng nhập:</p>
              <Input placeholder='viethung' />
            </div>
            <div className={classes.Password}>
              <p>Mật khẩu:</p>
              <Input placeholder='hung123' />
            </div>
            <div className={classes.vaitro}>
              <p>Vai Trò:</p>
              <Input placeholder='người dùng' />
            </div>
          </div>
        </div>

    </div>
    );
};
export default Infor;