import React from 'react'
import { useState } from "react";
import { Pagination } from 'antd';
import { Input } from 'antd';
import classes from './ThietBi.module.css'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import { Link } from 'react-router-dom';
import Add from '../../assets/Image/AddTB.png'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import Vector from '../../assets/Image/V.png'
const ThietBi: React.FC =() => {

    const [choose1, setValue1] = useState('designation1');
    const handlechoose1Change = (e: any) => {
        setValue1(e.target.value);
    };

    const [choose2, setValue2] = useState('designation2');
    const handleSelect2Change = (e: any) => {
        setValue2(e.target.value);
    };

    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    return (
        <div className={classes.Equi}>
            <div className={classes.header}>
                 <MenuBar></MenuBar>

                <TopMenuBar></TopMenuBar>
            </div>
           
            <div className={classes.Text}>
            <h1>Thiết bị <img src={Vector}></img> 
            <a href='/ThietBi'> Danh sách thiết bị</a> </h1>
            <h2>Danh sách thiết bị</h2>
            </div>

            {/* hop trang thai 1 */}
            <div className={classes.Combobox}>
                <h2>Trạng thái hoạt động</h2>
                <select 
                id="designation1"value={choose1} onChange={handlechoose1Change}>
                    <option value="1">Tất cả</option>
                    <option value="2">Hoạt động</option>
                    <option value="3">Ngưng hoạt động</option>
                </select>

            </div>
            {/* hop trang thai 2*/}
            <div className={classes.Combobox2}>
                <h2>Trạng thái kết nối</h2>
                <select 
                id="designation2" value={choose2} onChange={handleSelect2Change}>
                    <option value="4">Tất cả</option>
                    <option value="5">Kết nối</option>
                    <option value="6">Mất kết nối</option>
                </select>

            </div>

            {/* thanh tim kiem */}
            <div className={classes.MenuSearch}>
                <h2>Từ khoá</h2>
                <Search 
                id="Search" placeholder="Nhập từ khoá" allowClear onSearch={onSearch} 
                style={{ width: 300, height: 44}}></Search>
            </div>

            {/* bảng số liệu */}
            <table>
                    <thead>
                        <tr>
                            {/* tựa đề bảng */}
                            <th>Mã thiết bị</th>

                            <th>Tên thiết bị</th>

                            <th>Địa chỉ IP</th>

                            <th>Trạng thái hoạt động</th>

                            <th>Trạng thái kết nối</th>

                            <th>Dịch vụ sử dụng</th>

                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>
                        
                        <td className={classes.conditionA}>
                            <span className={classes.Handle1}></span>

                            <p className={classes.TextTitle}>
                                Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={classes.conditionConnect}>
                                <span className={classes.statusConnect}></span>

                                <p className={classes.Connect}>
                                    Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={classes.Text2}>
                                Khám tim mạch, Khám mắt</p>

                            <a href="" className={classes.More}>
                                Xem thêm</a>
                        </td>
                        <td className={classes.link}>
                            <Link to="/ChiTietTB">Chi tiết</Link></td>

                        <td className={classes.Update}>
                            <Link to="/CapNhatTB">Cập nhật</Link></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>

                        <td className={classes.conditionA}>

                            <span className={classes.actionsSuccess}></span>
                            <p className={classes.titleSuccess}>
                                Hoạt động</p>
                        </td>
                        <td>
                            <div className={classes.conditionConnect}>
                                <span className={classes.actionsSuccess}></span>

                                <p className={classes.titleSuccess}>
                                    Kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={classes.Text2}>
                                Khám tim mạch, Khám mắt</p>

                            <a href="" className={classes.More}>
                                Xem thêm</a>
                        </td>
                        <td className={classes.link}>
                        <Link to="/ChiTietTB">Chi tiết</Link></td>

                        <td className={classes.Update}>
                            <Link to="/CapNhatTB">Cập nhật</Link></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>

                        <td className={classes.conditionA}>
                            <span className={classes.actionsSuccess}></span>

                            <p className={classes.titleSuccess}>
                                Hoạt động</p>
                        </td>
                        <td>
                            <div className={classes.conditionConnect}>
                                <span className={classes.statusConnect}></span>

                                <p className={classes.Connect}>
                                    Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={classes.Text2}>
                                Khám tim mạch, Khám mắt</p>

                            <a href="" className={classes.More}>
                                Xem thêm</a>
                        </td>
                        <td className={classes.link}>
                        <Link to="/ChiTietTB">Chi tiết</Link></td>

                        <td className={classes.Update}>
                            <Link to="/CapNhatTB">Cập nhật</Link></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>
                        <td className={classes.conditionA}>
                            <span className={classes.Handle1}></span>

                            <p className={classes.TextTitle}>
                                Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={classes.conditionConnect}>
                                <span className={classes.statusConnect}></span>

                                <p className={classes.Connect}>
                                    Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={classes.Text2}>
                                Khám tim mạch, Khám mắt</p>

                            <a href="" className={classes.More}>
                                Xem thêm</a>
                        </td>
                        <td className={classes.link}>
                        <Link to="/ChiTietTB">Chi tiết</Link></td>

                        <td className={classes.Update}>
                            <Link to="/CapNhatTB">Cập nhật</Link></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>

                        <td className={classes.conditionA}>
                            <span className={classes.Handle1}></span>

                            <p className={classes.TextTitle}>
                                Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={classes.conditionConnect}>
                                <span className={classes.statusConnect}></span>

                                <p className={classes.Connect}>
                                    Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={classes.Text2}>
                                Khám tim mạch, Khám mắt</p>

                            <a href="" className={classes.More}>
                                Xem thêm</a>
                        </td>
                        <td className={classes.link}>
                        <Link to="/ChiTietTB">Chi tiết</Link></td>

                        <td className={classes.Update}>
                            <Link to="/CapNhatTB">Cập nhật</Link></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>
                        <td className={classes.conditionA}>
                            <span className={classes.Handle1}></span>

                            <p className={classes.TextTitle}>
                                Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={classes.conditionConnect}>
                                <span className={classes.statusConnect}></span>

                                <p className={classes.Connect}>
                                    Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={classes.Text2}>
                                Khám tim mạch, Khám mắt</p>

                            <a href="" className={classes.More}>
                                Xem thêm</a>
                        </td>
                        <td className={classes.link}>
                        <Link to="/ChiTietTB">Chi tiết</Link></td>

                        <td className={classes.Update}>
                            <Link to="/CapNhatTB">Cập nhật</Link></td>
                    </tr>
                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>

                        <td className={classes.conditionA}>
                            <span className={classes.Handle1}></span>

                            <p className={classes.TextTitle}>
                                Ngưng hoạt động</p>
                        </td>
                        <td>
                            <div className={classes.conditionConnect}>
                                <span className={classes.statusConnect}></span>

                                <p className={classes.Connect}>
                                    Mất kết nối</p>
                            </div>
                        </td>
                        <td>
                            <p className={classes.Text2}>
                                Khám tim mạch, Khám mắt</p>

                            <a href="" className={classes.More}>Xem thêm</a>
                        </td>
                        <td className={classes.link}>
                        <Link to="/ChiTietTB">Chi tiết</Link></td>

                        <td className={classes.Update}>
                            <Link to="/CapNhatTB">Cập nhật</Link></td>
                    </tr>
                </tbody>
            </table>
                        
                        <div className={classes.ThemTB}>
                            <Link to='/ThemTB'><img src={Add} />Thêm Thiết Bị</Link>
                        </div>
                        <div className={classes.Phantrang}>
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
        </div>
    );
};
export default ThietBi;
