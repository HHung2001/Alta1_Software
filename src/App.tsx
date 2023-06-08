
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Login from './Components/Login/Login';
import ForgotPass from './Components/ForgotPass/ForgotPass';
import Pass from './Components/Pass/Pass';
import Infor from './Components/Infor/Infor';
import DashBoard from './Components/DashBoard/DashBoard';
import ThietBi from './Components/ThietBi/ThietBi';
import ThemTB from './Components/ThemTB/ThemTB';
import CapNhatTB from './Components/CapNhatTB/CapNhatTB';
import ChiTietTB from './Components/ChiTietTB/ChiTietTB';
import DichVu from './Components/DichVu/DichVu';
import DichVuCapNhat from './Components/DichVuCapNhat/DichVuCapNhat';
import DichVuThem from './Components/DichVuThem/DichVuThem';
import DichVuChiTiet from './Components/DichVuChiTiet/DichVuChiTiet';
import CapSoDS from './Components/CapSo/CapSoDS/CapSoDS';
import CapSoMoi from './Components/CapSo/CapSoMoi/CapSoMoi';
import InSo from './Components/CapSo/InSo/InSo';
import CapSoChiTiet from './Components/CapSo/CapSoChiTiet/CapSoChiTiet';
import InSoMoi from './Components/CapSo/InSo/InSoMoi/InSoMoi';
import CapSo1 from './Components/CapSo/CapSoDS/CapSo1/CapSo1';
import CapSo2 from './Components/CapSo/CapSoDS/CapSo2/CapSo2';
import CapSo3 from './Components/CapSo/CapSoDS/CapSo3/CapSo3';
import BaoCao from './Components/BaoCao/BaoCao';
import VaiTro from './Components/HeThong/VaiTro/VaiTro';
import VaiTroThem from './Components/HeThong/VaiTro/VaiTroThem/VaiTroThem';
import VaiTroCapNhat from './Components/HeThong/VaiTro/VaiTroCapNhat/VaiTroCapNhat';
import TaiKhoan from './Components/HeThong/taiKhoan/TaiKhoan';
import TaiKhoanThem from './Components/HeThong/taiKhoan/TaiKhoanThem/TaiKhoanThem';
import TaiKhoanCapNhat from './Components/HeThong/taiKhoan/TaiKhoanCapNhat/TaiKhoanCapNhat';
import NhatKiNguoiDung from './Components/HeThong/Nguoidung/NhatKiNguoiDung';
import DashBoard2 from './Components/DashBoard/DashBoard2/DashBoard2';
import DashBoard3 from './Components/DashBoard/DashBoard3/DashBoard3'
function App() {
  return (
    <div className='App' >
          <Routes>
          <Route path="*" element={<Login></Login>}></Route>
          <Route path="/ForgotPass" element={<ForgotPass></ForgotPass>}></Route>
          <Route path="/Pass/" element={<Pass></Pass>}></Route>
          <Route path="/Infor" element={<Infor></Infor>}></Route>
          <Route path="/DashBoard" element={<DashBoard></DashBoard>}></Route>
          <Route path="/DashBoardTrang2" element={<DashBoard2></DashBoard2>}></Route>

          <Route path="/DashBoard3" element={<DashBoard3></DashBoard3>}></Route>

          <Route path="/ThietBi" element={<ThietBi></ThietBi>}></Route>
          <Route path="/ThemTB" element={<ThemTB></ThemTB>}></Route>
          <Route path="/CapNhatTB" element={<CapNhatTB></CapNhatTB>}></Route>
          <Route path="/ChiTietTB" element={<ChiTietTB></ChiTietTB>}></Route>
          <Route path="/DV" element={<DichVu></DichVu>}></Route>
          <Route path="/DichVuCapNhat" element={<DichVuCapNhat></DichVuCapNhat>}></Route>
          <Route path="/DichVuThem" element={<DichVuThem></DichVuThem>}></Route>
          <Route path="/DichVuChiTiet" element={<DichVuChiTiet></DichVuChiTiet>}></Route>
          <Route path="/CapSoDS" element={<CapSoDS></CapSoDS>}></Route>
          <Route path="/CapSoMoi" element={<CapSoMoi></CapSoMoi>}></Route>
          <Route path="/InSo" element={<InSo></InSo>}></Route>
          <Route path="/CapSoChiTiet" element={<CapSoChiTiet></CapSoChiTiet>}></Route>
          <Route path="/InSoMoi" element={<InSoMoi></InSoMoi>}></Route>
          <Route path="/CapSo1" element={<CapSo1></CapSo1>}></Route>
          <Route path="/CapSo2" element={<CapSo2></CapSo2>}></Route>
          <Route path="/CapSo3" element={<CapSo3></CapSo3>}></Route>
          <Route path="/BaoCao" element={<BaoCao></BaoCao>}></Route>
          <Route path="/VaiTro" element={<VaiTro></VaiTro>}></Route>
          <Route path="/VaiTroThem" element={<VaiTroThem></VaiTroThem>}></Route>
          <Route path="/VaiTroCapNhat" element={<VaiTroCapNhat></VaiTroCapNhat>}></Route>
          <Route path="/TaiKhoan" element={<TaiKhoan></TaiKhoan>}></Route>
          <Route path="/TaiKhoanThem" element={<TaiKhoanThem></TaiKhoanThem>}></Route>
          <Route path="/TaiKhoanCapNhat" element={<TaiKhoanCapNhat></TaiKhoanCapNhat>}></Route>
          <Route path="/NhatKiNguoiDung" element={<NhatKiNguoiDung></NhatKiNguoiDung>}></Route>
          </Routes>
    </div>
  );
}

export default App;