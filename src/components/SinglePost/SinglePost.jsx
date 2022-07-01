import React from 'react'
import {RiPenNibLine} from 'react-icons/ri'
import { IconContext } from "react-icons";
import {BsThreeDots,BsShare} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'

import classes from './singlepost.module.css'


const SinglePost = (props) => {

 

  return (
    <div className={classes['main-post-container']}>
        <div className={classes['post-image-container']}>
      <img src={props.props.img} alt="" />

        </div>

        <div className={classes['post-info-container']}>
        <div className={classes['category-line']}>
        <IconContext.Provider value={{className:'post-items',size:25}}>
                  <RiPenNibLine />
            </IconContext.Provider>
            <p>{props.props.category}</p>
        </div>

        <div className={classes['title-line']}>
            <h2>{props.props.title}</h2>
            <IconContext.Provider value={{className:'post-items',size:25}}>
                  <BsThreeDots />
            </IconContext.Provider>
        </div>

        <div className={classes['description-line']}>
            <p>{props.props.desc}</p>
        </div>

        <div className={classes['profile-shareable-section']}>
            <div className={classes['author-section']}>
                <img src={props.props.pp} alt="" style={{height:'50px',width:'50px' ,borderRadius:'24px'}} />
                <p style={{marginLeft:'12px'}}>{props.props.author}</p>
            </div>

            <div className={classes['details-section']}>
            <IconContext.Provider value={{className:'post-items',size:18,color:'gray'}}>
                  <AiOutlineEye />
            </IconContext.Provider>
            <p style={{marginLeft:'12px',color:'gray'}}>1.4k views</p>
            <button style={{width:'30px',height:'30px',marginLeft:'40px',border:'none'}}>
            <IconContext.Provider value={{className:'post-items',size:15}}>
                  <BsShare />
            </IconContext.Provider>
            </button>
            </div>
        </div>

        </div>
    </div>
  )
}

export default SinglePost
