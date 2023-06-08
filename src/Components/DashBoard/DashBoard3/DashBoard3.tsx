import React, { useState } from 'react'
import classes from './DashBoard3.module.css'
import MenuBar from '../../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../TopMenuBar/TopMenu'
import { Link, useNavigate } from 'react-router-dom';
import Picture1 from '../../../assets/Image/Dashboard/Piccture1.png'
import Picture2 from '../../../assets/Image/Dashboard/Picture2.png'
import Picture3 from '../../../assets/Image/Dashboard/Picture3.png'
import Group1  from '../../../assets/Image/Dashboard/Group1.png'
import Group2  from '../../../assets/Image/Dashboard/Group2.png'
import Group3  from '../../../assets/Image/Dashboard/Group3.png'
import Picture4 from '../../../assets/Image/Dashboard/Picture4.png'
import Group4  from '../../../assets/Image/Dashboard/Group4.png'
import F90  from '../../../assets/Image/Dashboard/Frame90.png'
import F76  from '../../../assets/Image/Dashboard/Frame76.png'
import F86  from '../../../assets/Image/Dashboard/Frame86.png'
import TB  from '../../../assets/Image/Dashboard/TB.png'
import DV  from '../../../assets/Image/Dashboard/DV.png'
import capso  from '../../../assets/Image/Dashboard/capso.png'
import { DatePicker } from 'antd';
import DatePickerProps from '../../../Utils/Date/Date';
import Xanh  from '../../../assets/Image/Dashboard/NgayXanh.png'
import Line from '../../../assets/Image/Dashboard/Line.png'
import cham from '../../../assets/Image/Dashboard/cham.png'
import so from '../../../assets/Image/Dashboard/so.png'
const DashBoard: React.FC = ()=> {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event: { target: { value: any; }; }) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        navigate(selectedValue); // Navigate to the selected route
      };
  return (
    <div className={classes.Details}>
              <div className={classes.Detailsheader}>
                  <MenuBar></MenuBar>
              </div>
              <div className={classes.A}>
                 <h1>
                      <a href='/DashBoard'>DashBoard</a>
                  </h1>
                 <h2>Biểu đồ cấp số</h2>
              </div>
              {/* box1 */}
                <div className={classes.DetailEqui}>
                    <div className={classes.DetailText}>
                        <Link to='/CapSoDS'><p>Số thứ tự đã cấp</p></Link> 
                    </div>
                    <div className={classes.Pic1}>
                      <Link to='/CapSoDS'> <img src={Picture1}></img></Link>
                    </div>
                    <div className={classes.DetailTexts}>                   
                        <Link to='/CapSoDS'><p>4.221</p></Link> 
                    </div>
                    <div className={classes.Gr1}>
                      <Link to='/CapSoDS'><img src={Group1}></img></Link>
                    </div>
                </div>
                {/* box2 */}
                <div className={classes.DetailEqui2}>
                    <div className={classes.DetailText}>
                        <Link to='/CapSo2'><p>Số thứ tự đã sử dụng</p></Link>
                    </div>
                    <div className={classes.Pic1}>
                      <Link to='/CapSo2'><img src={Picture2}></img></Link>
                    </div>
                    <div className={classes.DetailTexts}>       
                        <Link to='/CapSo2'> <p>3.721</p></Link>
                    </div>
                    <div className={classes.Gr1}>
                      <Link to='/CapSo2'><img src={Group2}></img></Link>
                    </div>
                </div>
                {/* box3 */}
                <div className={classes.DetailEqui3}>
                    <div className={classes.DetailText}>
                        <Link to='/CapSo1'><p>Số thứ tự đang chờ</p></Link>
                    </div>
                    <div className={classes.Pic1}>
                      <Link to='/CapSo1'><img src={Picture3}></img></Link>
                    </div>
                    <div className={classes.DetailTexts}>
                        <Link to='/CapSo1'><p>468</p></Link>
                    </div>
                    <div className={classes.Gr1}>
                      <Link to='/CapSo1'><img src={Group3}></img></Link>
                    </div>
                </div>
                {/* box4 */}
                <div className={classes.DetailEqui4}>
                    <div className={classes.DetailText}>
                        <Link to='/CapSo3'><p>Số thứ tự đã bỏ qua</p></Link>
                    </div>
                    <div className={classes.Pic1}>
                      <Link to='/CapSo3'><img src={Picture4}></img></Link>
                    </div>
                    <div className={classes.DetailTexts}>
                        <Link to='/CapSo3'><p>32</p></Link>
                    </div>
                    <div className={classes.Gr1}>
                      <Link to='/CapSo3'><img src={Group4}></img></Link>
                    </div>
                </div>

                <div className={classes.DetailEqui4s}>
                <div className={classes.Pic6}>
                      <h1>Bảng thống kê theo ngày</h1>
                    </div>
                    <div className={classes.Pic7}>
                      <h1>Năm 2021</h1>
                    </div>
                    <div className={classes.Pic8}>
                      <h1>Xem theo </h1>
                    </div>
                    {/* <img src={Cam}></img> */}
                    <div className={classes.Combobox2}>
                        <select 
                            value={selectedOption} 
                            onChange={handleOptionChange}>
                            <option  id='default'value="/DashBoard3">Tháng</option>
                            <option value="/DashBoardTrang2">Ngày</option>
                            <option value="/DashBoard">Tuần</option>
                         
                        </select>
                    </div>
                    <div className={classes.Pic9}>
                      <h1>6000</h1>
                    </div>
                    <div className={classes.Border1}  >

                    </div>
                    <div className={classes.Pic10}>
                      <h1>5000</h1>
                    </div>
                    <div className={classes.Border2}  >
                        
                    </div>
                    <div className={classes.Pic11}>
                      <h1>4000</h1>
                    </div>
                    <div className={classes.Border3}  >
                        
                    </div>
                    <div className={classes.Pic12}>
                      <h1>3000</h1>
                    </div>
                    <div className={classes.Border4}  >
                        
                    </div>
                    <div className={classes.Pic13}>
                      <h1>2000</h1>
                    </div>
                    <div className={classes.Border5}  >
                        
                    </div>
                    <div className={classes.Pic14}>
                      <h1>1000</h1>
                    </div>
                    <div className={classes.Border6}  >
                        
                    </div>
                    <div className={classes.Pic15}>
                      <h1>0</h1>
                    </div>
                    <div className={classes.Border7}  >
                        
                    </div>
                    <div className={classes.Pic16}>
                      <h1>sl</h1>
                    </div>
                    <div className={classes.Pic17}>
                      <h1>/</h1>
                    </div>
                    <div className={classes.Pic18}>
                      <h1>ngày</h1>
                    </div>
                    <div className={classes.Pic19}>
                      <h1> 1</h1>
                    </div>
                    <div className={classes.Pic19s}>
                      <h1> 2</h1>
                    </div>
                    <div className={classes.Pic19s1}>
                      <h1> 3</h1>
                    </div>
                    <div className={classes.Pic19s2}>
                      <h1> 4</h1>
                    </div>
                    <div className={classes.Pic19s3}>
                      <h1> 5</h1>
                    </div>
                    <div className={classes.Pic20}>
                      <h1>6</h1>
                    </div>
                    <div className={classes.Pic20s}>
                      <h1>7</h1>
                    </div>
                    <div className={classes.Pic20s1}>
                      <h1>8</h1>
                    </div>
                    <div className={classes.Pic21}>
                      <h1>9</h1>
                    </div>
                    <div className={classes.Pic21s}>
                      <h1>10</h1>
                    </div>
                    <div className={classes.Pic21s1}>
                      <h1>11</h1>
                    </div>
                    <div className={classes.Pic22}>
                      <h1>12</h1>
                    </div>
                    <div className={classes.Pic23}>
                      <img src={Xanh} ></img>
                    </div>
                    <div className={classes.Pic24}>
                      <img src={Line} ></img>
                    </div>
                    <div className={classes.Pic25}>
                      <img src={cham} ></img>
                    </div>
                    <div className={classes.Pic26}>
                      <img src={so} ></img>
                    </div>

                </div>

                {/* box5 */}
                <div className={classes.DetailEqui5}>
                  <TopMenuBar></TopMenuBar>
                  <h2>Tổng quan</h2>
                      <div className={classes.DetailEqui6}>
                        <div className={classes.DetailTextsN1}>  
                            <Link to='/ThietBi'><p>4.221</p></Link>
                        </div>
                        <div className={classes.Pic2}>
                            <Link to='/ThietBi'><img src={F90}></img></Link>
                        </div>
                        <div className={classes.Pic3}>
                          <Link to='/ThietBi'><img src={TB}></img></Link>
                        </div>
                        <div className={classes.Text}>
                            <Link to='/ThietBi'><h3>Thiết bị</h3></Link>
                        </div> 
                        <div>
                          <span className={classes.Gray}></span>
                              <div className={classes.DetailText2}>
                                  <Link to='/ThietBi'><label style={{width: '109px', left: '227.02px',top: '20px'}}   >Đang hoạt động</label></Link>
                              </div>
                              <div className={classes.DetailText3}>
                                  <Link to='/ThietBi'><label>3.799</label></Link>
                              </div>
                        </div>
                        <div>
                          <span className={classes.Yellow}></span>
                              <div className={classes.DetailText2s}>
                                  <Link to='/ThietBi'><label>Ngưng hoạt động</label></Link>
                              </div>
                              <div className={classes.DetailText3s}>
                                  <Link to='/ThietBi'> <label>422</label></Link>
                              </div>
                        </div>      
                    </div>
                    <div className={classes.DetailEqui7}>
                        <div className={classes.DetailTextsN1}>
                            <Link to='/DV'><p>276</p></Link>
                        </div>
                        <div className={classes.Pic2}>
                          <Link to='/DV'><img src={F76}></img></Link>
                        </div>
                        <div className={classes.Pic3}>
                          <Link to='/DV'><img src={DV}></img></Link>
                        </div>
                        <div className={classes.Text2}>
                            <Link to='/DV'><h3>Dịch vụ</h3></Link>
                        </div> 
                        <div>
                          <span className={classes.Blue}></span>
                              <div className={classes.DetailText2}>
                                  <Link to='/DV'><label style={{width: '109px', left: '227.02px',top: '20px'}}    >Đang hoạt động</label></Link>
                              </div>
                              <div className={classes.DetailText4}>
                                  <Link to='/DV'><label>210</label></Link>
                              </div>
                        </div>
                        <div>
                          <span className={classes.Yellow}></span>
                              <div className={classes.DetailText2s}>
                                  <Link to='/DV'><label>Ngưng hoạt động</label></Link>
                              </div>
                              <div className={classes.DetailText4s}>   
                                  <Link to='/DV'><label>66</label></Link>
                              </div>
                        </div>
                    </div>

                    <div className={classes.DetailEqui8}>
                        <div className={classes.DetailTextsN1}>
                            <Link to='/CapSoDS'><p>4.221</p></Link>
                        </div>
                        <div className={classes.Pic2}>
                          <Link to='/CapSoDS'><img src={F86}></img></Link>
                        </div>
                        <div className={classes.Pic3}>
                          <Link to='/CapSoDS'><img src={capso}></img></Link>
                        </div>
                        <div className={classes.Text3}>
                            <Link to='/CapSoDS'><h3>Cấp số</h3></Link>
                        </div> 
                        <div>
                          <span className={classes.XanhLa}></span>
                              <div className={classes.DetailText2}>
                                  <Link to='/CapSoDS'><label style={{width: '109px', left: '227.02px',top: '20px'}}    >Đã sử dụng</label></Link>
                              </div>
                              <div className={classes.DetailText5}>
                                  <Link to='/CapSoDS'><label>3.721</label></Link>
                              </div>
                        </div>
                        <div>
                          <span className={classes.Yellow}></span>
                              <div className={classes.DetailText2s}>
                                  <Link to='/CapSoDS'><label>Đang chờ</label></Link>
                              </div>
                              <div className={classes.DetailText5s}>
                                  <Link to='/CapSoDS'><label>486</label></Link>
                              </div>
                        </div>
                        <div>
                          <span className={classes.Pink}></span>
                              <div className={classes.DetailText6}>
                                  <Link to='/CapSoDS'><label>Bỏ qua</label></Link>
                              </div>
                              <div className={classes.DetailText7}>
                                  <Link to='/CapSoDS'><label>32</label></Link>
                              </div>
                        </div>
                    </div>
                    <div className={classes.DetailEqui9}>
                    <DatePickerProps></DatePickerProps>                                 
                    </div>
                </div>                              
    </div>
  );
};
export default DashBoard;

