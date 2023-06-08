import React from 'react'
import { useState } from "react";
import MenuBar from '../../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../../Pages/TopBar/TopMenuBar'
import classes from './NhatKiNguoiDung.module.css'
import Vector from '../../../assets/Image/AddTB.png'
import V from '../../../assets/Image/V.png'
import { Link, useNavigate } from 'react-router-dom';
import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined,CaretRightFilled } from '@ant-design/icons';
import { Pagination } from 'antd';
import Calendar from '../../../assets/Image/calendar.png'

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
                    <a href='/NhatKiNguoiDung'> Nhật kí hoạt động</a> </h1>
                <h2>Danh sách người dùng</h2>
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
            <div className={classes.DateBegin}>
                <p>Chọn thời gian</p>
                 <img src={Calendar}></img>
                <DatePicker  
                    onChange={onChange} 
                    style={{top: -656, 
                            left: 606, 
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
                            left: 809, 
                            height: 44 
                        }}
                    ></DatePicker> 
            </div>

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
                            <th style={{ width: '20%' }}  >Tên đăng nhập </th>
                            <th style={{ width: '20%' }}  >Thời gian tác động</th>
                            <th style={{ width: '20%' }}  >Ip thực hiện</th>                            
                            <th style={{ width: '34%' }}  >Thao tác thực hiện</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr style={{ background: 'white' }}  >
                            <td >tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                           
                            <td className={classes.UpdateDichVu}>
                                Cập nhật thông tin dịch vụ DV_01
                            </td>

                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td className={classes.UpdateDichVu}>
                            Cập nhật thông tin dịch vụ DV_01
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}  >
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td className={classes.UpdateDichVu}>
                            Cập nhật thông tin dịch vụ DV_01
                            </td>
                        </tr>
                        <tr>
                        <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td className={classes.UpdateDichVu}>
                            Cập nhật thông tin dịch vụ DV_01
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td className={classes.UpdateDichVu}>
                            Cập nhật thông tin dịch vụ DV_01
                            </td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td className={classes.UpdateDichVu}>
                            Cập nhật thông tin dịch vụ DV_01
                            </td>
                        </tr> 
                        <tr style={{ background: 'white' }}>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td className={classes.UpdateDichVu}>
                            Cập nhật thông tin dịch vụ DV_01
                            </td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td className={classes.UpdateDichVu}>
                            Cập nhật thông tin dịch vụ DV_01
                            </td>
                        </tr> 
                        <tr style={{ background: 'white' }}>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td className={classes.UpdateDichVu}>
                            Cập nhật thông tin dịch vụ DV_01
                            </td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td className={classes.UpdateDichVu}>
                            Cập nhật thông tin dịch vụ DV_01
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

