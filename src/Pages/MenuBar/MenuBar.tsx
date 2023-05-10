import React from 'react'
import { LoginOutlined, MoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LogoAlta from '../../assets/Image/Logo alta.png'
import DashBoard from '../../assets/Image/dashboard.png'
import ThietBi from '../../assets/Image/thietbi.png'
import DichVu from '../../assets/Image/chat.png'
import CapSo from '../../assets/Image/capso.png'
import BaoCao from '../../assets/Image/baocao.png'
import CaiDat from '../../assets/Image/setting.png'
import classes from '../../Pages/MenuBar/MenuBar.module.css'
const MenuBar=()=> {
  return (
    <div className={classes.MenuListBar}>
      {/* phần hình ảnh logo trên đầu */}
      <div className={classes.ALogo}>
        <img src={LogoAlta}></img>
      </div>
      {/* phần danh sách các mục điều khiển trong bảng dashboard */}  
      <div className={classes.MenuBar}>
        <div className={classes.ItemDashBoard}>
          <img src={DashBoard}></img>

          <Link to="/DashBoard"> DashBoard</Link>

        </div>
        <div className={classes.ItemThiebi}>
          <img src={ThietBi}></img>
          <Link to="/ThietBi"> Thiết Bị</Link>

        </div>
        <div className={classes.ItemDichvu}>
          <img src={DichVu}></img>
          {/* <a>Dịch vụ</a> */}
          <Link to="/ForgotPass"> Dịch vụ</Link>
        </div>
        <div className={classes.ItemCapso}>
          <img src={CapSo}></img>
          <a>Cấp số</a>
        </div>
        <div className={classes.ItemBaocao}>
          <img src={BaoCao}></img>
          <a>Báo cáo</a>
        </div>
        <div className={classes.ItemCaidat}>
          <img src={CaiDat}></img>
          <a>Cài đặt thiết bị<MoreOutlined/></a>
        </div>
        
         {/* button logout */}
        <div className={classes.BtnLogout}>
          <Link to="/login">
          <button><LoginOutlined/>Đăng Xuất</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MenuBar;