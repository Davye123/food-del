
import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download'id='app-download'>
        <p>Download Our App for Exclusive Offers</p>
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt='google-play' />
            <img src={assets.app_store} alt='app-store' />
        </div>
    </div>
  )
}

export default AppDownload
