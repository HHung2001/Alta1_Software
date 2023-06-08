import React from 'react'
import { useState } from "react";
import MenuBar from '../../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../../Pages/TopBar/TopMenuBar'
import classes from './TaiKhoan.module.css'
import Vector from '../../../assets/Image/AddTB.png'
import V from '../../../assets/Image/V.png'
import { Link } from 'react-router-dom';
import { Input, DatePicker  } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';

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

    
   

    return (
        <div className={classes.DichVu}>
            <div className={classes.DichVuheader}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            
            <div className={classes.BoxHeader}>
                <h1>Cài đặt hệ thống<img src={V}></img> 
                    <a href='/DV'> Quản lý tài khoản</a> </h1>
                <h2>Danh sách tài khoản</h2>
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
                            <th>Tên đăng nhập</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Trạng thái hoạt động</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr style={{ background: 'white' }}  >
                            <td >tuyetnguyen@12</td>
                            <td>Nguyen Văn A</td>
                            <td>0919256712</td>
                            <td>
                                <div className={classes.Connect}>
                                  
                                    <label className={classes.BoxFail}>
                                    tuyetnguyen123@gmail.com
                                    </label>
                                </div>
                            </td>

                            
                            <td>Kế toán</td>
                            <td className={classes.UpdateDichVu}>
                            <div className={classes.Connect}>
                                    <span className={classes.ConnectFail}></span>
                                    <label className={classes.BoxFail}>
                                        Ngưng hoạt động
                                    </label>
                                </div>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/TaiKhoanCapNhat">Cập nhật</Link>
                            </td>

                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>Nguyen Văn A</td>
                            <td>0919256712</td>

                            <td>
                                <div className={classes.Connect}>
                                    
                                <label className={classes.BoxFail}>
                                    tuyetnguyen123@gmail.com
                                    </label>
                                </div>
                            </td>

                            <td>Kế toán</td>
                            <td className={classes.UpdateDichVu}>
                            <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/TaiKhoanCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}  >
                            <td>tuyetnguyen@12</td>
                            <td>Nguyen Văn A</td>
                            <td>0919256712</td>

                            <td>
                                <div className={classes.Connect}>
                                    
                                    <label className={classes.BoxFail}>
                                    tuyetnguyen123@gmail.com
                                    </label>
                                </div>
                            </td>

                            <td>Kế toán</td>
                            <td className={classes.UpdateDichVu}>
                            <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/TaiKhoanCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr>
                        <td>tuyetnguyen@12</td>
                            <td>Nguyen Văn A</td>
                            <td>0919256712</td>

                            <td>
                                <div className={classes.Connect}>
                                       
                                <label className={classes.BoxFail}>
                                    tuyetnguyen123@gmail.com
                                    </label>
                                </div>
                            </td>

                            <td>Kế toán</td>
                            <td className={classes.UpdateDichVu}>
                            <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/TaiKhoanCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}  >
                            <td>tuyetnguyen@12</td>
                            <td>Nguyen Văn A</td>
                            <td>0919256712</td>

                            <td>
                                <div className={classes.Connect}>
                                  
                                    <label className={classes.BoxFail}>
                                    tuyetnguyen123@gmail.com
                                    </label>
                                </div>
                            </td>
                            
                            <td>Kế toán</td>
                            <td className={classes.UpdateDichVu}>
                            <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/TaiKhoanCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>Nguyen Văn A</td>
                            <td>0919256712</td>

                            <td>
                                <div className={classes.Connect}>
                                    
                                    <label className={classes.BoxFail}>
                                    tuyetnguyen123@gmail.com
                                    </label>
                                </div>
                            </td>

                            <td>Kế toán</td>
                            <td className={classes.UpdateDichVu}>
                            <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/TaiKhoanCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}  >
                            <td>tuyetnguyen@12</td>
                            <td>Nguyen Văn A</td>
                            <td>0919256712</td>

                            <td>
                                <div className={classes.Connect}>
                                 
                                <label className={classes.BoxFail}>
                                    tuyetnguyen123@gmail.com
                                    </label>
                                </div>
                            </td>

                            <td>Kế toán</td>
                            <td className={classes.UpdateDichVu}>
                            <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/TaiKhoanCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>Nguyen Văn A</td>
                            <td>0919256712</td>

                            <td>
                                <div className={classes.Connect}>
                                 
                                <label className={classes.BoxFail}>
                                    tuyetnguyen123@gmail.com
                                    </label>
                                </div>
                            </td>

                            <td>Kế toán</td>
                            <td className={classes.UpdateDichVu}>
                            <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/TaiKhoanCapNhat">Cập nhật</Link>
                            </td>
                        </tr >
                        <tr style={{ background: 'white' }}  >
                            <td>tuyetnguyen@12</td>
                            <td>Nguyen Văn A</td>
                            <td>0919256712</td>

                            <td>
                                <div className={classes.Connect}>
                                   
                                    <label className={classes.BoxFail}>
                                    tuyetnguyen123@gmail.com
                                    </label>
                                </div>
                            </td>
                            
                            <td>Kế toán</td>
                            <td className={classes.UpdateDichVu}>
                            <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/TaiKhoanCapNhat">Cập nhật</Link>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className={classes.ThemDichVu}>
                <Link to='/TaiKhoanThem'>
                <img src={Vector}></img>Thêm tài khoản</Link>
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

