import React from 'react'
import { useState } from "react";
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import classes from './BaoCao.module.css'
import Add from '../../assets/Image/D.png'
import Vector from '../../assets/Image/V.png'
import right from '../../assets/Image/right.png'
import thanh from '../../assets/Image/thanh.png'
import { Input,Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined,CaretRightFilled } from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
const ThietBi: React.FC =() => {

    const [choose1, setValue1] = useState('designation1');
    const handlechoose1Change = (e: any) => 
    {
        setValue1(e.target.value);
    };

    const [choose2, setValue2] = useState('designation2');
    const handleSelect2Change = (e: any) => 
    {
        setValue2(e.target.value);
    };

    const { Search } = Input;
    function onSearch(value: string) 
    {
        console.log(value);
    }
    function onChange(date: any, dateString: any) 
    {
        console.log(date, dateString);
    }
    const onClick = (event: CheckboxChangeEvent) => 
    {
        console.log(`checked = ${event.target.checked}`);     
    };
    return (
        <div className={classes.Equi}>
            <div className={classes.Equiheader}>
                 <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
           
            <div className={classes.BoxHeader}>
                <h1>Báo cáo <img src={Vector}></img> 
                    <a href='/BaoCao'> lập báo cáo</a> 
                </h1>
                <h2>Quản lí báo cáo</h2>
            </div>

            {/* hop trang thai 1 */}
            {/* <div className={classes.Combobox}>
                
                <label>Số thứ tự</label>
                <select 
                    value={choose1} 
                    onChange={handlechoose1Change}>
                    <option value="1">Tất cả</option>
                    <option value="2">2010001</option>
                    <option value="3">2010002</option>
                    <option value="4">2010003</option>
                    <option value="2">2010004</option>
                    <option value="3">2010005</option>
                    <option value="4">2010006</option>
                    <option value="2">2010005</option>
                    <option value="3">2010006</option>
                    <option value="4">2010007</option>
                    <option value="3">2010008</option>
                    <option value="4">2010009</option>
                </select>

            </div> */}

            {/* hop trang thai 2*/}
            {/* <div className={classes.Combobox2}>
                <label>Tình trạng</label>
                <select 
                    value={choose2} 
                    onChange={handleSelect2Change}>
                    <option value="5">Tất cả</option>
                    <option value="6">Đang chờ</option>
                    <option value="7">Đã sử dụng</option>
                    <option value="8">Bỏ qua</option>
                </select>

            </div> */}

            {/* <div className={classes.Combobox3}>
                <label>Nguồn cấp</label>
                <select 
                    value={choose2} 
                    onChange={handleSelect2Change}>
                    <option value="9">Tất cả</option>
                    <option value="10">Kiosk</option>
                    <option value="11">Hệ thống</option>
                    
                </select>
            </div> */}

            {/* <div className={classes.Combobox4}>
                <label>Thời gian cấp</label>
                <select 
                    value={choose2} 
                    onChange={handleSelect2Change}>
                    <option value="9">Tất cả</option>
                    <option value="10">07:10  01/10/2021</option>
                    <option value="11">07:15  01/10/2021</option>
                    
                </select>
            </div> */}

            {/* lịch */}
            <div className={classes.DateBegin}>
                <p>Chọn thời gian</p>
                <DatePicker  
                    onChange={onChange} 
                    style={{top: -659, 
                            left: 232, 
                            height: 44
                        }}
                    ></DatePicker> 
            </div>
                <div className={classes.Arrow}>
                        <div className={classes.Icon}>
                            <CaretRightFilled></CaretRightFilled>
                        </div>
                </div>
            <div className={classes.DateEnd}>
                <DatePicker 
                    onChange={onChange} 
                    style={{top: -702, 
                            left: 432, 
                            height: 44 
                        }}
                    ></DatePicker> 
            </div>

            {/* thanh tim kiem */}
            <div className={classes.MenuSearch}>
                <label>Từ khoá</label>
                <Search 
                    placeholder="Nhập từ khoá" 
                    allowClear onSearch={onSearch}>
                    </Search>
            </div>

            {/* bảng số liệu */}
                <div className={classes.ListThietBi}>
                    <table style={{ width: '1359px' }} >
                        <thead  >
                            <tr   >
                                {/* tựa đề bảng */}
                                <th style={{ fontSize: '18px',paddingLeft:'20px', width: '15%' }}>Số thứ tự 
                                <img style={{marginLeft: '45%'}} className={classes.right} src={right} ></img>
                                <div className={classes.DetailEqui}>
                                    <p  className={classes.sott} > Tất cả</p>
                                    <p style={{ marginLeft: '18px'}} > 2040001</p>
                                    <p style={{ marginLeft: '18px'}} > 2040002</p>
                                    <p style={{ marginLeft: '18px'}} > 2040003</p>
                                    <p style={{ marginLeft: '18px'}} > 2040004</p>
                                </div>

                                 </th>

                                {/* <th style={{ width: '190px',fontSize: '18px',paddingLeft:'20px'  }} >Tên khách hàng</th> */}
                                <th style={{ fontSize: '18px',paddingLeft:'20px',width: '20%'  }} >Tên dịch vụ <img style={{marginLeft: '50%'}}  className={classes.right} src={right} ></img> 
                                <div className={classes.DetailEqui5}>
                                    
                                    {/* <p style={{ marginLeft: '18px'}} > Khám tim mạch</p> */}
                                    <div style={{ padding: '10px'}} className={classes.MenuSet}>
                                        <label style={{ fontWeight: '400', marginLeft: '18px', color: 'black'}} > Tất cả   
                                            <Checkbox style={{ marginLeft: '170px'}}
                                                onChange={onClick}>
                                            </Checkbox>
                                        </label>
                                    </div>
                                    <div style={{ padding: '10px'}} className={classes.MenuSet}>
                                                
                                        <label style={{ fontWeight: '400', marginLeft: '18px', color: 'black'}} >   
                                        
                                            <Checkbox style={{ marginLeft: '215px'}}
                                                onChange={onClick}><span className={classes.KhamTQ} >Khám tim mạch </span> 
                                            </Checkbox>
                                        </label>
                                    </div>
                                    <div style={{ padding: '10px'}} className={classes.MenuSet}>
                                        <label style={{ fontWeight: '400', marginLeft: '18px',color: 'black'}} >  
                                            <Checkbox style={{ marginLeft: '215px'}}
                                                onChange={onClick}><span className={classes.KhamTQ2} >Khám tổng quát </span> 
                                            </Checkbox>
                                        </label>
                                    </div>



                                    {/* <p style={{ marginLeft: '18px'}} > Khám </p> */}
                                    {/* <p style={{ marginLeft: '18px'}} > Khám tổng quát</p> */}
                                </div>
                                 </th>
                                <th style={{ width: '156px', fontSize: '18px',paddingLeft:'20px'  }} >
                                    Thời gian cấp 
                                <img style={{marginLeft: '61%'}} className={classes.right} src={right} ></img>
                                    <div className={classes.DetailEqui2}>
                                    <p  className={classes.sott} > Tất cả</p>
                                    <p style={{ marginLeft: '18px'}} > 07:10  01/10/2021</p>
                                    <p style={{ marginLeft: '18px'}} > 07:10  01/10/2021</p>
                                    <p style={{ marginLeft: '18px'}} > 07:10  01/10/2021</p>
                                    <p style={{ marginLeft: '18px'}} > 07:10  01/10/2021</p>
                                </div>
                                </th>
                                {/* <th style={{ width: '154px', fontSize: '18px',paddingLeft:'20px'  }} >
                                    Hạn sử dụng
                                </th> */}
                                <th style={{ fontSize: '18px',paddingLeft:'20px'  }}>
                                    Tình trạng 
                                <img style={{marginLeft: '54%'}} className={classes.right} src={right} ></img> 
                                <div className={classes.DetailEqui3}>
                                    <p  className={classes.sott} > Tất cả</p>
                                    <p style={{ marginLeft: '18px'}} > Đang chờ</p>
                                    <p style={{ marginLeft: '18px'}} > Đã sử dụng</p>
                                    <p style={{ marginLeft: '18px'}} > Bỏ qua</p>
                                </div>
                                </th>
                                
                                <th style={{ paddingLeft:'20px'  }} >Nguồn cấp <img style={{marginLeft: '52%'}} className={classes.right} src={right} ></img> 
                                <div className={classes.DetailEqui4}>
                                    <p  className={classes.sott} > Tất cả</p>
                                    <p style={{ marginLeft: '18px'}} > Kiosk</p>
                                    <p style={{ marginLeft: '18px'}} >Hệ thống</p>
                                    
                                </div>
                                </th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }} >2010001</td>
                               

                                {/* <td>Lê Huỳnh Ái Vân</td> */}

                                <td>Khám tim mạch</td>
                                
                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}
                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                {/* <td>
                                    <div className={classes.conditionB}>
                                       
                                        <label className={classes.BoxFalse}>
                                            14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td> */}
                                <td>
                                    <div className={classes.Connect}>
                                        <span className={classes.Green}></span>
                                        <label className={classes.available}>
                                            Đang chờ
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt.........
                                    </p>                                                                        */}
                                </td>
                                <td  className={classes.link}>
                                    {/* <Link to="/ChiTietTB">Chi tiết</Link> */}
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> Kiosk */}
                                    <p className={classes.Text3}>
                                        Kiosk
                                    </p>
                                </td>

                                {/* <td className={classes.Update}>
                                    <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td> */}
                            </tr>
                            <tr>
                                <td style={{ textAlign:'center', width: '8%' }}  >2010002</td>

                                {/* <td>Huỳnh Ái Vân</td> */}

                                <td style={{ width: '15%' }}  >Khám sản - Phụ Khoa</td>

                                <td className={classes.conditionA}>

                                    {/* <span className={classes.ConnectRight}></span> */}
                                    <p className={classes.BoxRight}>
                                        14:35 - 07/11/2021
                                    </p>
                                </td>
                                {/* <td>
                                    <div className={classes.conditionB}>
                                   
                                        <label style={{ marginLeft: '2%' }}   className={classes.BoxRight}>
                                            14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td> */}
                                <td>
                                    <div className={classes.Connect}>
                                        <span className={classes.Gray}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt.........
                                    </p> */}
                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link  to="/ChiTietTB">Chi tiết</Link> */}
                                    <p className={classes.Text3}>
                                        Kiosk
                                    </p>
                                </td>

                                {/* <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td> */}
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }}  >2010003</td>

                                {/* <td>Lê Ái Vân</td> */}

                                <td>Khám răng hàm mặt</td>

                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectRight}></span> */}
                                    <p className={classes.BoxRight}>
                                        14:35 - 07/11/2021
                                    </p>
                                </td>
                                {/* <td>
                                <div className={classes.conditionB}>
                                      
                                        <label style={{ marginLeft: '2%' }}   className={classes.BoxRight}>
                                            14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td> */}
                                <td>
                                    <div className={classes.Connect}>
                                            <span className={classes.Green}></span>
                                            <label className={classes.available}>
                                                Đang chờ
                                            </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt........
                                    </p> */}

                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link  to="/ChiTietTB">Chi tiết</Link> */}
                                    <p  style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ Thống
                                    </p>
                                </td>

                                {/* <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td> */}
                            </tr>
                            <tr>
                                <td style={{ textAlign:'center', width: '8%' }}  >2010004</td>

                                {/* <td>Nguyễn Ái Vân</td> */}

                                <td>Khám tai mũi họng</td>
                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}

                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                {/* <td>
                                    <div className={classes.conditionB}>
                                        
                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td> */}
                                <td>
                                    <div className={classes.Connect}>
                                        <span className={classes.Green}></span>
                                        <label className={classes.available}>
                                            Đang chờ
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p> */}

                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ Thống
                                    </p>
                                </td>

                                {/* <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td> */}
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }}  >2010005</td>

                                {/* <td>Trần Thị Ái Vân</td> */}

                                <td>Khám hô hấp</td>

                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}

                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                {/* <td>
                                    <div className={classes.conditionB}>
                                     

                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td> */}
                                <td>
                                    <div className={classes.Connect}>
                                        <span className={classes.Green}></span>
                                        <label className={classes.available}>
                                            Đang chờ
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt........
                                    </p> */}

                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p className={classes.Text3}>
                                        Kiosk
                                    </p>
                                </td>

                                {/* <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td> */}
                            </tr>
                            <tr>
                                <td style={{ textAlign:'center', width: '8%' }}  >2010006</td>

                                {/* <td>Lê Huỳnh Nghĩa</td> */}

                                <td>Khám tổng quát</td>
                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}

                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                {/* <td>
                                    <div className={classes.conditionB}>
                                       

                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td> */}
                                <td>
                                <div className={classes.Connect}>
                                        <span className={classes.Gray}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt........
                                    </p> */}

                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link  to="/ChiTietTB">Chi tiết</Link> */}
                                    <p style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ Thống
                                    </p>
                                </td>

                                {/* <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td> */}
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }}  >2010007</td>

                                {/* <td>Lê Huỳnh Đức</td> */}

                                <td>Khám tai mũi họng</td>

                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}
                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                {/* <td>
                                    <div className={classes.conditionB}>
                                       
                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td> */}
                                <td>
                                <div className={classes.Connect}>
                                        <span className={classes.Gray}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p> */}
                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p className={classes.Text3}>
                                        Kiosk
                                    </p>
                                </td>
                                {/* <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td> */}
                            </tr>
                            <tr>
                                <td style={{ textAlign:'center', width: '8%' }}  >2010008</td>

                                {/* <td>Phạm Văn Mạnh</td> */}

                                <td>Khám tổng quát</td>

                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}
                                    <label className={classes.BoxFail}>
                                    14:35 - 07/11/2021
                                    </label>
                                </td>
                                {/* <td>
                                    <div className={classes.conditionB}>
                                       
                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td> */}
                                <td>
                                <div className={classes.Connect}>
                                        <span className={classes.red}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p> */}
                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ Thống
                                    </p>
                                </td>
                                {/* <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td> */}
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }}  >2010009</td>

                                {/* <td>Lê Thị Cẩm Tiên</td> */}

                                <td>Khám tai mũi họng</td>

                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}
                                    <label className={classes.BoxFail}>
                                    14:35 - 07/11/2021
                                    </label>
                                </td>
                                {/* <td>
                                    <div className={classes.conditionB}>
                                        
                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td> */}
                                <td>
                                <div className={classes.Connect}>
                                        <span className={classes.Gray}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p> */}
                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ thống
                                    </p>
                                </td>
                                {/* <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
                        <div className={classes.ThemTB}>
                            <Link to='/CapSoMoi'><img src={Add} />
                                Tải về
                            </Link>
                        </div>
                        <div className={classes.PhantrangThietBi}>
                            <Pagination defaultCurrent={1} 
                                total={50}></Pagination>
                        </div>
        </div>
    );
};
export default ThietBi;
