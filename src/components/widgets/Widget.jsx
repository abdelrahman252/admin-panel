import React from 'react'
import "./widget.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const Widget = ({type}) => {

    let amount = 100;
    let diff = 20;

    let data;


    switch (type) {
        case 'user':{
            data={
                title: 'USERS',
                ismoney: false,
                link: 'see all users',
                icon:<PersonOutlineIcon className='icon' style={{backgroundColor:"rgba(255,0,0,.2)",color:"crimson"}}/>
            }
        }
        break;
        case 'order':{
            data={
                title: 'ORDERS',
                ismoney: false,
                link: 'view all orders',
                icon:<LocalGroceryStoreOutlinedIcon className='icon' style={{backgroundColor:"rgba(218,165,32,.2",color:"goldenrod"}}/>
            }
        }
        break;
        case 'earning':{
            data={
                title: 'EARNING',
                ismoney: true,
                link: 'see all users',
                icon:<MonetizationOnOutlinedIcon className='icon' style={{backgroundColor:"rgba(0,128,0,.2",color:"green"}}/>
            }
        }
        break;
        case 'balance':{
            data={
                title: 'BALANCE',
                ismoney: true,
                link: 'see details',
                icon:<AccountBalanceWalletOutlinedIcon className='icon' style={{backgroundColor:"rgba(128,0,128,.2",color:"purple"}}/>
            }
        }
        break;
     }

  return (
    <div className='widget'>
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.ismoney && "$"}{amount}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="presentage postive">
                <KeyboardArrowUpIcon/>
                {diff} %</div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget