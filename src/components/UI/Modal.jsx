import React from 'react'
import classes from './modal.module.css'
import reactDom from 'react-dom'

const Backdrop = (props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const Modaloverlay = (props) =>{
    return <div className={classes.modal}>
        <div className={classes.content} > {props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')


const Modal = (props) => {



  return (
   <>
   {reactDom.createPortal(<Backdrop onClose ={props.onClose} />,portalElement)}
   {reactDom.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,portalElement)}

   
   </>
  )
}

export default Modal
