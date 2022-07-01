import React from "react";
import classes from "./posts.module.css";
import { BsFillCaretDownFill, BsFillPeopleFill } from "react-icons/bs";
import { GoLocation} from "react-icons/go"
import {MdModeEditOutline} from 'react-icons/md';
import {BiErrorCircle} from 'react-icons/bi'
import { IconContext } from "react-icons";
import POST_DATA from '../../data'
import SinglePost from "../SinglePost/SinglePost";

const Posts = () => {

    const POSTS = POST_DATA;
   

  return (
    <div className={classes["main-container"]}>
      <div className={classes["post-header-container"]}>
        <div className={classes["post-navigation"]}>
          <ul>
            <li>All Posts (32)</li>
            <li>Article</li>
            <li>Event</li>
            <li>Education</li>
            <li>Job</li>
          </ul>
        </div>

        <div className={classes["post-btns"]}>
          <div className={classes["post-btns-btn"]}>
            <button>Write a Post</button>

            <IconContext.Provider
              value={{ className: "post-buttons", size: 12 }}
            >
              <BsFillCaretDownFill />
            </IconContext.Provider>
          </div>
          <div className={classes["post-btns-btn"]}>
            <IconContext.Provider
              value={{ className: "post-buttons", size: 12 }}
            >
              <BsFillPeopleFill />
            </IconContext.Provider>
            <button>Join Group</button>{" "}
          </div>
        </div>
      </div>



      <div className={classes['post-section-container']}>
        <div className={classes['posts-container']}>

            {POSTS.map((post,index)=><SinglePost props={post} key={index}/>)}

        </div>
        <div className={classes['location-container']}>
            <div className={classes['location-detail']}>
            <p><GoLocation/> Noida,India</p>

            <IconContext.Provider
              value={{ className: "location-buttons", size: 24 }}
            >
                <MdModeEditOutline/>
            </IconContext.Provider>
          

            </div>

            <div className={classes['location-message']}>
            <p><BiErrorCircle/>Your location will help us serve better and extend a personalised experience.</p>
            </div>

           

        </div>
        
      </div>
    </div>
  );
};

export default Posts;
