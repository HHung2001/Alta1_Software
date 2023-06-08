import React from 'react'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import classes from './VaiTroCapNhat.module.css'
import MenuBar from '../../../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../../../Pages/TopBar/TopMenuBar'
import {  Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import Vector from '../../../../assets/Image/V.png'
const VaiTroThem:React.FC =()=> 
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
            <h1>Cài đặt hệ thống 
                <img src={Vector}></img> <a className={classes.TB} href="/VaiTro"> Quản lý vai trò</a>
                <img src={Vector}></img> <a href='/VaiTroCapNhat'> Cập nhật vai trò</a> 
            </h1>
            </div>

            <div className={classes.NamePage}>
                <h2>Quản lý vai trò</h2>
            </div>
                
            <div className={classes.DichVuUpdate}>
                <h1>Thông tin vai trò</h1>
                <div className={classes.TextBox}>
                    <div>
                        <div className={classes.TextLeft}>
                            <label className={classes.DichVuText}>Tên vai trò:</label>
                            <label className={classes.Star}>*</label>
                        </div>
                        <Input type='text' placeholder='Nhập Tên vai trò'></Input>
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
                                placeholder="Nhập Mô tả "
                                onChange={ClickChange}
                                style={{resize: 'none' }}
                               
                            />
                        </div>
                        <div>
                            <label className={classes.Star}>*</label>
                            <label className={classes.TextB}>Là trường thông tin bắt buộc</label>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className={classes.DichVuUpdates}>
                    <div className={classes.Box}>
                            <div className={classes.ButtonHuy}>
                            <Link to='/VaiTro'>  
                                <button type='button'>Huỷ bỏ</button>
                            </Link>
                        </div>
                        <div className={classes.ButtonCapnhat}>
                            <Link to='/VaiTro'>
                                <button type='button'>Câp nhật vai trò</button>
                            </Link>
                        </div>
                    </div>           
                </div>
                <div className={classes.TextLeft}>
                            <label className={classes.DichVuText2}>Phân quyền chức năng:</label>
                            <label className={classes.Star2}>*</label>
                        </div>
            </div>
            <div className={classes.DichVuUpdate2}>
            <div className={classes.DichVuUpdates}>
                    <h1>Nhóm chức năng A</h1>
                    <div>
                        <div className={classes.MenuA}>
                            <div className={classes.MenuSet}>
                                <label> 
                                    <Checkbox 
                                        onChange={onClick}>Tất cả
                                    </Checkbox>
                                </label>
                            </div>
                           
                            <div className={classes.MenuSet}>
                                <label>
                                    <Checkbox 
                                        onChange={onClick}>Chức năng x
                                    </Checkbox>
                                </label>
                            </div>
                            
                            <div className={classes.MenuSet}>
                                <label>
                                    <Checkbox 
                                    onChange={onClick}>Chức năng y
                                    </Checkbox>
                                </label>
                            </div>
                                <div className={classes.MenuSet}>
                                    <label>
                                        <Checkbox 
                                            onChange={onClick}>Chức năng z
                                        </Checkbox>
                                    </label>                           
                                </div>
                        </div>                                          
                    </div>
                 </div>

                 <div className={classes.DichVuUpdates3}>
                    <h1>Nhóm chức năng B</h1>
                    <div>
                        <div className={classes.MenuA}>
                            <div className={classes.MenuSet}>
                                <label> 
                                    <Checkbox 
                                        onChange={onClick}>Tất cả
                                    </Checkbox>
                                </label>
                            </div>
                           
                            <div className={classes.MenuSet}>
                                <label>
                                    <Checkbox 
                                        onChange={onClick}>Chức năng x
                                    </Checkbox>
                                </label>
                            </div>
                            
                            <div className={classes.MenuSet}>
                                <label>
                                    <Checkbox 
                                    onChange={onClick}>Chức năng y
                                    </Checkbox>
                                </label>
                            </div>
                                <div className={classes.MenuSet}>
                                    <label>
                                        <Checkbox 
                                            onChange={onClick}>Chức năng z
                                        </Checkbox>
                                    </label>                           
                                </div>
                        </div>                                             
                    </div>
                 </div>

            </div>
        </div>
    );
};
export default VaiTroThem;
