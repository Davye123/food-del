
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <div className='footer-socials-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>SUPPORT</h2>
                <ul>
                    <li>0700000000</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className='footer-copyright'>© 2024 All rights reserved. Designed by <span>Dave</span></p>
     
    </div>
  )
}

export default Footer
