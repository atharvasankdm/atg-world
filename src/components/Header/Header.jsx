import React from 'react'
import LogoImage from '../../images/LogoImage';
import {BsSearch,BsFillCaretDownFill} from 'react-icons/bs'
import { IconContext } from "react-icons";
import classes from './header.module.css'


const Header = (props) => {
  return (
    <nav className={classes['main-nav']}>
        <div className={classes['nav-logo']}>
            <div className={classes['nav-logo']+classes['img']}>
            <LogoImage/>
            </div>
       
        </div>

        <div className={classes['nav-search']}>
            <div className={classes['search']}>
               <BsSearch/>
               <input type="text" placeholder='Search for your favorite groups in ATG' />
             </div>
        </div>

        <div className={classes['nav-register']}>
            <p onClick={props.onShowForm}>Create account.<span>It's free!</span>
            <IconContext.Provider
            value={{className:'header-items',size:12}}
            >

             <BsFillCaretDownFill />
            </IconContext.Provider>

             </p>
        </div>

    </nav>
  )
}

export default Header
