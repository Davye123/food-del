
import './sidebar.css'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <span>Add item</span>
        </NavLink>
        <NavLink to="/list" className="sidebar-option"> 
          <img src={assets.order_icon} alt="" />
          <span>List item</span>
        </NavLink>
        <NavLink to="/order" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <span>Orders</span>
        </NavLink>
      </div>
    </div>
  )
}

export default sidebar
