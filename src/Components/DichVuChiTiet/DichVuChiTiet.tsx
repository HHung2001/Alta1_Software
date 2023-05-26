import React from 'react'
import { useState } from 'react'
import classes from '../DichVuChiTiet/DichVuChiTiet.module.css'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined,CaretRightFilled } from '@ant-design/icons';
import { Pagination } from 'antd';
import EditSevice  from '../../assets/Image/EditNote.png'
import Back  from '../../assets/Image/Back.png'
import { Link } from 'react-router-dom';
import Vector from '../../assets/Image/V.png'


const DichVuChiTiet :React.FC = () => 
{
    const [choose, setChoose] = useState('designation');
    const handlechooseChange = (e: any) => 
    {
        setChoose(e.target.value);
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
    return (
        <div className={classes.DichVuChiTiet}>
            <div className={classes.DichVuChiTietHeader}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            
            <div className={classes.BoxHeader}>
                <h1>Thiết bị
                    <img src={Vector}></img>  
                        <a className={classes.TB} href="/DV">Danh sách dịch vụ</a>  
                    <img src={Vector}></img> 
                        <a href='/DichVuChiTiet'>Chi tiết dịch vụ</a>
                </h1>
                <h2>Quản lý dịch vụ</h2>
            </div>
            
            <div className={classes.ThongTin}>
                <label>Thông tin dịch vụ</label>

                <div className={classes.ThongTinTren}>
                    <div className={classes.Line}>
                        <span className={classes.TenDichVu}>
                            Mã dịch vụ:</span>
                        <span className={classes.Text}>
                            201</span>
                    </div>

                    <div className={classes.Line}>
                        <span className={classes.TenDichVu}>
                            Tên dịch vụ:</span>
                        <span className={classes.Text}>
                            Khám tim mạch</span>
                    </div>

                    <div className={classes.Line}>
                        <span className={classes.TenDichVu}>
                            Mô tả:</span>
                        <span className={classes.Text}>
                            Chuyên các bệnh lý về tim</span>
                    </div>
                </div>
                <div className={classes.ThongTinDuoi}>
                    <label>Quy tắc cấp số</label>
                    <div className={classes.Default}>
                        <h4 className={classes.TenDichVu}>Tăng tự động từ: </h4>
                        <div className={classes.Number}>
                            <h4 >0001</h4>
                        </div>
                        <h4 style={{ marginTop:'40px' }} className={classes.TenDichVu}>đến</h4>
                        <div className={classes.Number}>
                            <h4>9999</h4>
                        </div>
                    </div>
                    <div className={classes.Default}>
                        <h4 className={classes.TenDichVu}>Prefix: </h4>
                        <div className={classes.Numbers}>
                            <h4>0001</h4>
                        </div>
                    </div>
                    <div className={classes.Default}>
                        <h4 className={classes.TenDichVu}>Reset mỗi ngày </h4>
                    </div>
                    <div>
                        <h4 className={classes.TextNumber}>ví dụ: 201-2001 </h4>
                    </div>
                </div>

            </div>
            <div className={classes.ThongTinPhai}>
                <div className={classes.Combobox}>
                    <div className={classes.Status}>
                         <p>Trạng thái</p>
                    </div>
                   <div className={classes.ComboboxStatus}>
                        <select  
                            value={choose} 
                            onChange={handlechooseChange}>
                            <option value="default">Tất cả</option>
                            <option value="switch first">Đã hoàn thành</option>
                            <option value="switch second">Đã thực hiện</option>
                            <option value="switch third">vắng</option>
                        </select>
                   </div>
                </div>
                <div className={classes.DateBegin}>
                    <p>Chọn thời gian</p>
                    <DatePicker 
                        onChange={onChange} 
                        style={{   
                                   width: 126,
                                   top: 46, 
                                   left: 300, 
                                   height: 45 
                                }}
                    ></DatePicker>                   
                </div>
                <div className={classes.Arrow}>
                    <div className={classes.Icon}>
                        <CaretRightFilled></CaretRightFilled>
                    </div>
                </div>
                <div className={classes.DateFinished}>
                    <DatePicker 
                        onChange={onChange} 
                        style={{ 
                                 top: 0,
                                 left: 470, 
                                 height: 45,
                                 width:125
                                }}
                    ></DatePicker>                   
                </div>
                <div className={classes.MenuSearch}>
                    <div className={classes.Search}>
                        <p>Từ khoá</p>
                    </div>
                    <div className={classes.Input}>
                        <Search 
                            placeholder="Nhập từ khoá" 
                            allowClear onSearch={onSearch}>
                        </Search>
                    </div>                 
                </div>
                <div className={classes.ListChiTiet}>
                    <table className={classes.TableDetails}>
                        <thead>
                            <tr>
                                <th>Số thứ tự </th>
                                <th>Trạng thái </th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>2010001</td>                               
                                    <td>
                                        <div className={classes.Connect}>
                                            <p className={classes.Green}></p>
                                            <label className={classes.Detailstatus}>Đã hoàn thành</label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2010002</td>
                                    <td>
                                        <div className={classes.Connect}>
                                            <p className={classes.Green}></p>
                                            <label className={classes.Detailstatus}>Đã hoàn thành</label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2010003</td>
                                    <td>
                                        <div className={classes.Connect}>
                                            <p className={classes.Blue}></p>
                                            <label className={classes.Detailstatus}>Đang thực hiện</label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2010004</td>
                                    <td>
                                        <div className={classes.Connect}>
                                            <p className={classes.Gray}></p>
                                            <label className={classes.Detailstatus}>Vắng</label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2010005</td>
                                    <td>
                                        <div className={classes.Connect}>
                                            <p className={classes.Green}></p>
                                            <label className={classes.Detailstatus}>Đã hoàn thành</label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2010006</td>
                                    <td>
                                        <div className={classes.Connect}>
                                            <p className={classes.Blue}></p>
                                            <label className={classes.Detailstatus}>Đã thực hiện</label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2010007</td>
                                    <td>
                                        <div className={classes.Connect}>
                                            <p className={classes.Gray}></p>
                                            <label className={classes.Detailstatus}>Vắng</label>
                                        </div>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>2010008</td>
                                    <td>
                                        <div className={classes.Connect}>
                                            <p className={classes.Green}></p>
                                            <label className={classes.Detailstatus}>Đã hoàn thành</label>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                

                <div className={classes.MucLuc}>
                    <Pagination 
                        defaultCurrent={1} 
                        total={50}
                    ></Pagination>
                </div>
            </div>
            <div className={classes.Button}>
                <div className={classes.DichVuCapNhat}>
                    <Link to='/DichVuCapNhat'> 
                        <img src={EditSevice}></img>Cập nhập danh sách
                    </Link>
                </div>
                <div className={classes.Return}>
                    <Link to='/DV'>
                        <img src={Back}></img>Quay lại
                    </Link>
                </div>
            </div>                
        </div>
    );
};
export default DichVuChiTiet;
