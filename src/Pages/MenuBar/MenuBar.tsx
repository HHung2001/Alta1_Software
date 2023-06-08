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
import { CheckboxChangeEvent } from 'antd/es/checkbox';
const MenuBar=()=> {
  const onClick = (event: CheckboxChangeEvent) => 
    {
        console.log(`checked = ${event.target.checked}`);     
    };
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
          <Link to="/ThietBi"> <img className={classes.p1}  src={ThietBi}></img><a>Thiết Bị</a> </Link>

        </div>
        <div className={classes.ItemDichvu}>
          <Link to="/DV"> <img src={DichVu}></img><a> Dịch vụ</a></Link>
        </div>
        <div className={classes.ItemCapso}>
          <Link to="/CapSoDS"> <img src={CapSo}></img> <a>Cấp số</a></Link>
        </div>
        <div className={classes.ItemBaocao}>
          <Link to="/BaoCao"> <img src={BaoCao}></img><a>Báo cáo</a> </Link>
        </div>
        <div className={classes.ItemCaidat}>
          <Link to=""> <img src={CaiDat}></img><a>Cài đặt thiết bị<MoreOutlined/></a></Link>
            <div className={classes.DetailEqui8}>                                     
              <Link className={classes.L1} to="/VaiTro">Quản lý Vai trò </Link>
              <Link className={classes.L2} to="/TaiKhoan">Quản lý Tài khoản </Link>
              <Link className={classes.L3} to="/NhatKiNguoiDung">Nhật ký người dùng </Link>
            </div>
        </div>
        
         {/* button logout */}
        <div className={classes.BtnLogout}>
          <Link to="/login">
          <button>
            <div className={classes.BtnL}>
              <LoginOutlined></LoginOutlined>Đăng Xuất
            </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MenuBar;