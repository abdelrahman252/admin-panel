import React from 'react'
import Datatable from '../../components/dataTable/Datatable'
import Navbar from '../../components/navBar/Navbar'
import Sidebar from '../../components/sideBar/Sidebar'
import "./list.css"

const list = () => {
  return (
    <div className='List'>
      <Sidebar/>
      <div className="ListContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default list