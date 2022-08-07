import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import React, { useContext } from 'react'
import "./side.css"
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../pages/context/darkModeContext';

const Sidebar = () => {
  const {dispatch}= useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">lambada</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icon"/><span>dashbord</span></li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li><PersonOutlineOutlinedIcon className="icon"/><span>Users</span></li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li><StoreMallDirectoryIcon className="icon"/><span>Products</span></li>
                </Link>
                <li><CreditCardIcon className="icon"/><span>Orders</span></li>
                <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
                <p className="title">USEFUL</p>
                <li><InsertChartIcon className="icon"/><span>Stats</span></li>
                <li><NotificationsNoneOutlinedIcon className="icon"/><span>Notifactions</span></li>
                <p className="title">SERVICES</p>
                <li><SettingsSystemDaydreamOutlinedIcon className="icon"/><span>System Health</span></li>
                <li><PsychologyOutlinedIcon className="icon"/><span>Logs</span></li>
                <li><SettingsApplicationsIcon className="icon"/><span>Settings</span></li>
                <p className="title">USER</p>
                <li><AccountCircleOutlinedIcon className="icon"/><span>Profile</span></li>
                <li><ExitToAppOutlinedIcon className="icon"/><span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() =>{dispatch({type:"LIGHT"})}} ></div>
            <div className="colorOption" onClick={() =>{dispatch({type:"DARK"})}}></div>
        </div>
    </div>
  )
}

export default Sidebar