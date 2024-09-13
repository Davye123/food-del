
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = () => {
    
    const [currState,setcurrState]=useState("signup")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-tittle'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                <input type="text" placeholder='Name'  required />
                <input type="text" placeholder='email' required />
                <input type="text" placeholder='password' required />
            </div>
            <button>{currState==='signup'?'create account':'login'}</button>
        </form>
    </div>
  )
}

export default LoginPopup
