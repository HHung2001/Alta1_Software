import React from 'react'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import classes from '../DichVuThem/DichVuThem.module.css'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenuBar'
import {  Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import Vector from '../../assets/Image/V.png'
const DichVuCapNhat:React.FC =()=> 
{
    const { TextArea } = Input;
    const ClickChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => 
    {
    console.log('Change:', target.value);
    };

    const onClick = (event: CheckboxChangeEvent) => 
    {
        console.log(`checked = ${event.target.checked}`);     
    };

    return (
        <div className={classes.DichVuCapNhat}>
            <div className={classes.DichVuheader}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            
            <div className={classes.LinkPage}>
            <h1>Dịch vụ 
                <img src={Vector}></img> <a className={classes.TB} href="/DV"> Danh sách dịch vụ</a>
                <img src={Vector}></img> <a href='/DichVuThem'> Thêm dịch vụ</a> 
            </h1>
            </div>

            <div className={classes.NamePage}>
                <h2>Quản lý dịch vụ</h2>
            </div>
                
            <div className={classes.DichVuUpdate}>
                <h1>Thông tin dịch vụ</h1>
                <div className={classes.TextBox}>
                    <div>
                        <div className={classes.TextLeft}>
                            <label className={classes.DichVuText}>Mã dịch vụ:</label>
                            <label className={classes.Star}>*</label>
                        </div>
                        <Input type='text' placeholder='201'></Input>
                    </div>
                    <div>
                    <div className={classes.TextLeft}>
                        <label className={classes.DichVuText}>Tên dịch vụ:</label>
                        <label className={classes.Star}>*</label>
                    </div>
                        <Input type='text' placeholder='Khám tim mạch'></Input>
                    </div>
                </div>
                <div className={classes.TextBoxs}>
                    <div>
                    <div className={classes.TextLeft}>
                        <label className={classes.DichVuText}>Mô tả:</label>
                        <label className={classes.Star}>*</label>
                    </div> 
                        <div className={classes.TextA}>
                            <TextArea
                                typeof='text'
                                placeholder="Mô tả dịch vụ"
                                onChange={ClickChange}
                                style={{resize: 'none' }}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.DichVuUpdates}>
                    <h1>Quy tắc cấp số</h1>
                    <div>
                        <div>
                            <div className={classes.MenuSet}>
                                <label> 
                                    <Checkbox 
                                        onChange={onClick}>Tăng tự động từ: 
                                    </Checkbox>
                                </label>
                            </div>
                            <div className={classes.Box}>
                                <div style={{ width: '900px'}} className={classes.Number}> 
                                    <label>0001</label>                         
                                </div>
                                <p className={classes.Box1}>đến</p>
                                <div style={{ width: '900px'}} className={classes.Number}>                                  
                                    <label>9999</label>                                   
                                </div>

                            </div>
                            <div className={classes.MenuSet}>
                                <label>
                                    <Checkbox 
                                        onChange={onClick}>Prefix: 
                                    </Checkbox>
                                </label>
                            </div>
                            <div className={classes.Box}>
                                <div className={classes.Numbers}>
                                   <label>0001</label>                                     
                                </div>
                            </div>
                            <div className={classes.MenuSet}>
                                <label>
                                    <Checkbox 
                                    onChange={onClick}>Surfix: 
                                    </Checkbox>
                                </label>
                            </div>
                            <div className={classes.Box}>
                                <div className={classes.Numbers}>
                                    <label>0001</label>                               
                                </div>
                            </div>
                        </div>
                        <div className={classes.MenuSet}>
                            <label>
                                 <Checkbox 
                                    onChange={onClick}>Reset mỗi ngày
                                 </Checkbox>
                            </label>                           
                        </div>
                        <div>
                            <label className={classes.Star}>*</label>
                            <label className={classes.TextB}>Là trường thông tin bắt buộc</label>
                        </div>
                    </div>

                    <div className={classes.Box}>
                            <div className={classes.ButtonHuy}>
                            <Link to='/DV'>  
                                <button type='button'>Huỷ bỏ</button>
                            </Link>
                        </div>
                        <div className={classes.ButtonCapnhat}>
                            <Link to='/DV'>
                                <button type='button'>Thêm dịch vụ</button>
                            </Link>
                        </div>
                    </div>           
                </div>
            </div>
        </div>
    );
};
export default DichVuCapNhat;
