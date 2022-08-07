import React, { useState } from 'react'
import "./datatable.css"
import { DataGrid } from '@mui/x-data-grid';
import { userColums, userRows} from '../../dataTableScource';
import { Link } from 'react-router-dom';

const Datatable = () => {

  const [data,setData]=useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id ))
   }

    const dataAction=[
        {
            field:"action",
            headerName:"Action",
            width:200,
            renderCell:(params) => {
                return (
                    <div className="cellAction">
                       <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className="viewbutton">view</div>
                        </Link>
                        <div className="deletebutton" 
                        onClick={()=>handleDelete(params.row.id)}>
                          delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className='datatable'>
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" style={{textDecoration:"none"}} className="dataLink">
        Add New 
        </Link>
      </div>

          <DataGrid 
          className='datagrid'
        rows={data}
        columns={userColums.concat(dataAction)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable