import React from 'react'
import { useState } from "react";
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import classes from './ThietBi.module.css'
import Add from '../../assets/Image/AddTB.png'
import Vector from '../../assets/Image/V.png'
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
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
    return (
        <div className={classes.Equi}>
            <div className={classes.Equiheader}>
                 <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
           
            <div className={classes.BoxHeader}>
                <h1>Thiết bị <img src={Vector}></img> 
                    <a href='/ThietBi'> Danh sách thiết bị</a> 
                </h1>
                <h2>Danh sách thiết bị</h2>
            </div>

            {/* hop trang thai 1 */}
            <div className={classes.Combobox}>
                {/* <h2>Trạng thái hoạt động</h2> */}
                <label>Trạng thái hoạt động</label>
                <select 
                    value={choose1} 
                    onChange={handlechoose1Change}>
                    <option value="1">Tất cả</option>
                    <option value="2">Hoạt động</option>
                    <option value="3">Ngưng hoạt động</option>
                </select>

            </div>

            {/* hop trang thai 2*/}
            <div className={classes.Combobox2}>
                <label>Trạng thái kết nối</label>
                <select 
                    value={choose2} 
                    onChange={handleSelect2Change}>
                    <option value="4">Tất cả</option>
                    <option value="5">Kết nối</option>
                    <option value="6">Mất kết nối</option>
                </select>

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
                                <th style={{ fontSize: '18px',paddingLeft:'5px' }} >Mã thiết bị</th>
                                <th style={{ fontSize: '18px',paddingLeft:'5px'  }} >Tên thiết bị</th>
                                <th style={{ fontSize: '18px',paddingLeft:'5px'  }} >Địa chỉ IP</th>
                                <th style={{ width: '150px', fontSize: '18px',paddingLeft:'5px'  }} >
                                    Trạng thái hoạt động 
                                </th>
                                <th style={{ width: '134px', fontSize: '18px',paddingLeft:'5px'  }} >
                                    Trạng thái kết nối
                                </th>
                                <th style={{ fontSize: '18px',paddingLeft:'5px'  }}>Dịch vụ sử dụng</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ background: 'white' }} >
                                <td>KIO_01</td>

                                <td>Kiosk</td>

                                <td>192.168.1.10</td>
                                
                                <td className={classes.conditionA}>
                                    <span className={classes.ConnectFail}></span>
                                    <label className={classes.BoxFail}>
                                        Ngưng hoạt động
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        <span className={classes.ConnectFalse}></span>
                                        <label className={classes.BoxFalse}>
                                            Mất kết nối
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt.........
                                    </p>
                                    <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div>
                                    
                                </td>
                                <td  className={classes.link}>
                                    {/* <Link to="/ChiTietTB">Chi tiết</Link> */}
                                    <Link   to="/ChiTietTB">Chi tiết</Link>
                                </td>

                                <td className={classes.Update}>
                                    <Link   to="/CapNhatTB">Cập nhật</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>KIO_01</td>

                                <td>Kiosk</td>

                                <td>192.168.1.10</td>

                                <td className={classes.conditionA}>

                                    <span className={classes.ConnectRight}></span>
                                    <p className={classes.BoxRight}>
                                        Hoạt động
                                    </p>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        <span className={classes.ConnectRight}></span>
                                        <label className={classes.BoxRight}>
                                            Kết nối
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt.........
                                    </p>
                                    <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div>
                                </td>
                                <td className={classes.link}>
                                    <Link  to="/ChiTietTB">Chi tiết</Link>
                                </td>

                                <td className={classes.Update}>
                                    <Link to="/CapNhatTB">Cập nhật</Link>
                                </td>
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td>KIO_01</td>

                                <td>Kiosk</td>

                                <td>192.168.1.10</td>

                                <td className={classes.conditionA}>
                                    <span className={classes.ConnectRight}></span>
                                    <p className={classes.BoxRight}>
                                        Hoạt động
                                    </p>
                                </td>
                                <td>
                                <div className={classes.conditionB}>
                                        <span className={classes.ConnectRight}></span>
                                        <label className={classes.BoxRight}>
                                            Kết nối
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt........
                                    </p>

                                    <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div>
                                </td>
                                <td className={classes.link}>
                                    <Link  to="/ChiTietTB">Chi tiết</Link>
                                </td>

                                <td className={classes.Update}>
                                    <Link   to="/CapNhatTB">Cập nhật</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>KIO_01</td>

                                <td>Kiosk</td>

                                <td>192.168.1.10</td>
                                <td className={classes.conditionA}>
                                    <span className={classes.ConnectFail}></span>

                                    <label className={classes.BoxFail}>
                                        Ngưng hoạt động
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        <span className={classes.ConnectFalse}></span>
                                        <label className={classes.BoxFalse}>
                                            Mất kết nối
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p>

                                    <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div>
                                </td>
                                <td className={classes.link}>
                                    <Link   to="/ChiTietTB">Chi tiết</Link>
                                </td>

                                <td className={classes.Update}>
                                    <Link   to="/CapNhatTB">Cập nhật</Link>
                                </td>
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td>KIO_01</td>

                                <td>Kiosk</td>

                                <td>192.168.1.10</td>

                                <td className={classes.conditionA}>
                                    <span className={classes.ConnectFail}></span>

                                    <label className={classes.BoxFail}>
                                        Ngưng hoạt động
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        <span className={classes.ConnectFalse}></span>

                                        <label className={classes.BoxFalse}>
                                            Mất kết nối
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt........
                                    </p>

                                    <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div>
                                </td>
                                <td className={classes.link}>
                                    <Link   to="/ChiTietTB">Chi tiết</Link>
                                </td>

                                <td className={classes.Update}>
                                    <Link  to="/CapNhatTB">Cập nhật</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>KIO_01</td>

                                <td>Kiosk</td>

                                <td>192.168.1.10</td>
                                <td className={classes.conditionA}>
                                    <span className={classes.ConnectFail}></span>

                                    <label className={classes.BoxFail}>
                                        Ngưng hoạt động
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        <span className={classes.ConnectFalse}></span>

                                        <label className={classes.BoxFalse}>
                                            Mất kết nối
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt........
                                    </p>

                                    <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div>
                                </td>
                                <td className={classes.link}>
                                    <Link  to="/ChiTietTB">Chi tiết</Link>
                                </td>

                                <td className={classes.Update}>
                                    <Link  to="/CapNhatTB">Cập nhật</Link>
                                </td>
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td>KIO_01</td>

                                <td>Kiosk</td>

                                <td>192.168.1.10</td>

                                <td className={classes.conditionA}>
                                    <span className={classes.ConnectFail}></span>
                                    <label className={classes.BoxFail}>
                                        Ngưng hoạt động
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        <span className={classes.ConnectFalse}></span>
                                        <label className={classes.BoxFalse}>
                                            Mất kết nối
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p>
                                    <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div>
                                </td>
                                <td className={classes.link}>
                                    <Link   to="/ChiTietTB">Chi tiết</Link>
                                </td>
                                <td className={classes.Update}>
                                    <Link  to="/CapNhatTB">Cập nhật</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                        <div className={classes.ThemTB}>
                            <Link to='/ThemTB'><img src={Add} />
                                Thêm Thiết Bị
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
