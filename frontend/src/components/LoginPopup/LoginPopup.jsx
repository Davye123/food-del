
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    
    const [currState,setcurrState]=useState("Login")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {currState==='Login'?<></>:<input type="text" placeholder='Name'  required />}
                <input type="text" placeholder='email' required />
                <input type="text" placeholder='password' required />
            </div>
            <button>{currState==='Signup'?'create account':'Login'}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p>Agree with the terms and conditions</p>
            </div>
            {currState==='Login'
            ?<p>create new account?<span onClick={()=>setcurrState('Signup')}>click here</span></p>
            :<p>Already have an account?<span onClick={()=>setcurrState('Login')}>Login here</span></p>
            }
  
        </form>
    </div>
  )
}

export default LoginPopup
