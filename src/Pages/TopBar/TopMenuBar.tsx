import React from 'react'
import classes from '../../Pages/TopBar/TopMenuBar.module.css'
import Ring from '../../assets/Image/ring.png'
import Avatar from '../../assets/Image/img.jpg'
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