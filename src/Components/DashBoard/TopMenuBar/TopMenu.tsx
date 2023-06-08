import React from 'react'
import classes from './TopMenu.module.css'
import Ring from '../../../assets/Image/ring.png'
import Avatar from '../../../assets/Image/img.jpg'
import { Link } from 'react-router-dom';
const TopBar = () => {
  return (
    <div className={classes.TopBarMenu}>
      <div className={classes.Boximgleft}>
        <div className={classes.ImageRing}>
              <img src={Ring} ></img>
            </div>
          <div className={classes.ImageAvatar}>
            {/* dẫn tới trang infor */}
            <Link to='/Infor'> <img src={Avatar}></img></Link>
            <div className={classes.DetailEqui}>
                <div className={classes.DetailEqui2s}>
                  <h2  >Thông báo</h2>
                </div>
                <div className={classes.Header} >
                    <div className={classes.BoxHeader}>
                      <h2  >Người dùng: Nguyễn Thị Thùy Dung</h2>
                      
                    </div>
                    <div className={classes.BoxHeader2}>
                      <h3>Thời gian nhận số: 12h20 ngày 30/11/2021</h3>
                    </div>
                    <div className={classes.BoxHeader3}>
                      <h3>___________________________________</h3>
                    </div>
                  </div>
                  <div className={classes.Header2}>
                    <div className={classes.Box2}>
                      <h2>Người dùng: Nguyễn Thị Thùy Dung</h2>
                      
                    </div>
                    <div className={classes.Box3}>
                      <h3>Thời gian nhận số: 12h20 ngày 30/11/2021</h3>
                    </div>
                    <div className={classes.Box4}>
                      <h3>___________________________________</h3>
                    </div>
                  </div>


                </div>
          </div>
      </div>     
      <div className={classes.BoxContentsRight}>
            <label className={classes.Hello}> Xin Chào</label>
            
            <h3 className={classes.Name}>Ôn Việt hùng</h3>
      </div>
    </div>
  );
};
export default TopBar;