import React from 'react'
import { useState } from "react";
import MenuBar from '../../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../../Pages/TopBar/TopMenuBar'
import classes from './VaiTro.module.css'
import Vector from '../../../assets/Image/AddTB.png'
import V from '../../../assets/Image/V.png'
import { Link, useNavigate } from 'react-router-dom';
import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined,CaretRightFilled } from '@ant-design/icons';
import { Pagination } from 'antd';

const DichVu:React.FC =() => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event: { target: { value: any; }; }) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        navigate(selectedValue); // Navigate to the selected route
      };

    const [choose,setValue ] = useState('designation');
    const handlecChange = (e: any) => 
    {
        setValue(e.target.value);
    };

    const { Search } = Input;
    function onSearch(value: string) 
    {
        console.log(value);
    }

    //lịch
    // const onChange: DatePickerProps['onChange'] = (date, dateString) => 
    // {
    //     console.log(date, dateString);
    // };
    function onChange(date: any, dateString: any) 
    {
        console.log(date, dateString);
    }

    return (
        <div className={classes.DichVu}>
            <div className={classes.DichVuheader}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            
            <div className={classes.BoxHeader}>
                <h1>Cài đặt hệ thống   <img src={V}></img> 
                    <a href='/VaiTro'> Quản lý vai trò</a> </h1>
                <h2>Danh sách vai trò</h2>
            </div>
            <div className={classes.Combobox}>
                <div className={classes.ComboboxHeader}>
                    <label>Tên vai trò</label>
                </div>
                <div className={classes.ComboboxStatus}>
                    <select 
                         value={selectedOption} 
                         onChange={handleOptionChange}>
                        <option  id='default' value="/TaiKhoan">Tất cả</option>
                        <option value="/VaiTro">Quản lý vai trò</option>
                        <option value="/TaiKhoan">Quản lý tài khoản</option>
                        <option value="/NhatKiNguoiDung">Quản lý người dùng</option>
                    </select>
                </div>
            </div>

            {/* <div className={classes.Combobox}>
                <div className={classes.ComboboxHeader}>
                    <label>Trạng thái hoạt động</label>
                </div>
                <div className={classes.ComboboxStatus}>
                    <select 
                        value={choose} 
                        onChange={handlecChange}>
                        <option value="1">Tất cả</option>
                        <option value="2">Hoạt động</option>
                        <option value="3">Ngưng hoạt động</option>
                    </select>
                </div>
            </div> */}

            {/* lịch */}
            {/* <div className={classes.DateBegin}>
                <p>Chọn thời gian</p>
                <DatePicker  
                    onChange={onChange} 
                    style={{top: -656, 
                            left: 550, 
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
                    style={{top: -701, 
                            left: 750, 
                            height: 44 
                        }}
                    ></DatePicker> 
            </div> */}

            <div className={classes.MenuSearch}>
                    <div className={classes.Search}>
                        <label>Từ khoá</label>
                    </div>           
                <Search 
                    placeholder="Nhập từ khoá" 
                    allowClear onSearch={onSearch}>
                </Search>
            </div>

            <div className={classes.ListDichVu}>
                <table style={{ width: '1350px' }}  >
                    <thead>
                        <tr>
                            <th style={{ width: '16%' }}  >Tên vai trò </th>
                            <th style={{ width: '52px' }}  >Số người dùng</th>
                            <th>Mô tả</th>                            
                            <th style={{ width: '32px' }}  ></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr style={{ background: 'white' }}  >
                            <td >Kế toán</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                           
                            <td className={classes.UpdateDichVu}>
                                <Link to="/VaiTroCapNhat">Cập nhật</Link>
                            </td>

                        </tr>
                        <tr>
                            <td>Bác sĩ</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/VaiTroCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}  >
                            <td>Lễ tân</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/VaiTroCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr>
                        <td>Quản lý</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/VaiTroCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}  >
                            <td>Admin</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/VaiTroCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Superadmin</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/VaiTroCapNhat">Cập nhật</Link>
                            </td>
                        </tr>                                                                                           
                    </tbody>
                </table>
            </div>
            <div className={classes.ThemDichVu}>
                <Link to='/VaiTroThem'>
                <img src={Vector}></img>Thêm vai trò</Link>
            </div>
            <div className={classes.PhanTrang}>
                <Pagination 
                        defaultCurrent={1} 
                        total={50} 
                ></Pagination>
            </div>
        </div>
    );
};
export default DichVu;

