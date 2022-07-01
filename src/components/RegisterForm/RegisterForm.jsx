import React from 'react'
import { Form } from 'react-bootstrap'
import Modal from '../UI/Modal'
import classes from './registerform.module.css'
import {BsFacebook,BsGoogle} from 'react-icons/bs'


const RegisterForm = (props) => {
  return (
   <Modal onClose = {props.onClose}>
       <div className={classes['main-register-div']}>

        <div className={classes['top-message-div']}>
            <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        </div>

        <div className={classes['register-fill-div']}>
            <div>
               <p style={{fontSize:'24px',fontWeight:'700'}}> Create Account </p>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
           <p style={{fontWeight:'600',fontSize:'13px'}}>Already have an account? <span style={{color:'#2F6CE5'}}>Sign In</span> </p> 
                
            </div>
            <div className={classes['register-options']} >
            <Form >
                <div className={classes['form-inputs']}>
                   <div className={classes['form-input-name']}>
                    <div><input type="text" placeholder='First Name' /></div>
                    <div><input type="text" placeholder='Last Name' /></div>
                   </div>

                   <div><input type="email" placeholder='Email' /></div>
                   <div><input type="password" placeholder='Password' /></div>
                   <div><input type="password" placeholder='Confirm Password' /></div>
                   
                    <div><button type='submit' style={{width:'105%',marginTop:'20px',marginBottom:'20px',height:'40px',backgroundColor:'#2F6CE5',borderRadius:'20px',border:'none',color:'white'}}> Create Account</button></div>
                </div>
            </Form>

            <div style={{width:'95%'}}>  <button style={{width:'100%',height:'38px',marginTop:'5px',backgroundColor:'transparent',border:'0.6px solid #D9D9DB'}}><BsFacebook/> Sign up with Facebook</button> </div>
            <div style={{width:'95%'}}>  <button  style={{width:'100%',height:'38px',marginTop:'5px',backgroundColor:'transparent',border:'0.6px solid #D9D9DB'}}><BsGoogle/> Sign up with Google</button> </div>


            </div>
            <div style={{display:'grid',gridTemplateRows:'6fr 1fr'}}>
               <div style={{width:'100%'}}><img src="https://i.ibb.co/5krRKyP/vector1.png" alt="" style={{width:'100%'}}/></div>
               <div><p style={{fontWeight:'400',fontSize:'12px'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p></div>
            </div>
        </div>

       </div>
   </Modal>
  )
}

export default RegisterForm
