import React from 'react'
import { LoginOutlined, MoreOutlined,LogoutOutlined  } from '@ant-design/icons';
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
          

          <Link to="/DashBoard"><img src={DashBoard}></img> <a>DashBoard</a></Link>

        </div>
        <div className={classes.ItemThiebi}>
          
          <Link to="/ThietBi"> <img   src={ThietBi}></img><a>Thiết Bị</a> </Link>

        </div>
        <div className={classes.ItemDichvu}>
          
          {/* <a>Dịch vụ</a> */}
          <Link to="/DV"> <img src={DichVu}></img><a> Dịch vụ</a></Link>
        </div>
        <div className={classes.ItemCapso}>
          
          {/* <a>Cấp số</a> */}
          <Link to="/"> <img src={CapSo}></img> <a>Cấp số</a></Link>
        </div>
        <div className={classes.ItemBaocao}>
          
          {/* <a>Báo cáo</a> */}
          <Link to="/"> <img src={BaoCao}></img><a>Báo cáo</a> </Link>
        </div>
        <div className={classes.ItemCaidat}>
          
          {/* <a>Cài đặt thiết bị</a> */}
          <Link to="/"> <img src={CaiDat}></img><a>Cài đặt thiết bị<MoreOutlined/></a> </Link>
        </div>
        
         {/* button logout */}
        <div className={classes.BtnLogout}>
          <Link to="/login">
          <button  >  <LogoutOutlined /> Đăng Xuất</button>
          
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MenuBar;