import React from 'react'
import "./single.css"
import Sidebar from "../../components/sideBar/Sidebar"
import Navbar from "../../components/navBar/Navbar"
import Charts from "../../components/charts/Charts"
import Tablee from "../../components/table/Table"

const single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg" alt="avatar" className='itemImg' />
              <div className="details">
              <h2 className="itemName">Jane Doe</h2>
                <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">janedoe@gmail.com</span>
                </div>
        <div className="detailItem">

                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                Elton St. 234 Garden Yd. NewYork
                </span>
                </div>
                <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">USA</span>
        </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspect={3/1} title="User spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottomT">
        <h1 className="titleB">Last Transaction</h1>
          <Tablee/>
        </div>
      </div>
    </div>
  )
}

export default single