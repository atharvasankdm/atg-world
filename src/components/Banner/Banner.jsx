import React from 'react'
import classes from './banner.module.css'

const Banner = () => {
  return (
   
        <div className={classes['main-container']}>
          <div className={classes['opacity-wrapper']}></div>
        <div className={classes['text-container']}>
        <h1>Computer Engineering</h1>
        <h2>142,765 Computer Engineers follow this</h2>
      </div>
        </div>
        
      
    
  )
}

export default Banner
