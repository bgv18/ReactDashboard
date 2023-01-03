import React, { useEffect, useState, useMemo } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

function Orders() {

  const columns = [
    { field: 'id', headerName: 'OrderID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'total',
      headerName: 'Total Amount',
      width: 160,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
    },
  ];
  
   
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', total: 'R$35.00', status:'Pending' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', total: 'R$65.00', status:'Complete' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', total: 'R$15.00', status:'Canceled' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', total: 'R$12.00', status:'Pending' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', total: 'R$98.00', status:'Complete' },
    { id: 6, lastName: 'Melisandre', firstName: null, total: 'R$48.00', status:'Complete' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', total: 'R$150.00', status:'Canceled' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', total: 'R$300.00', status:'Pending' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', total: 'R$18.00', status:'Complete' },
  ];


  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Pedidos" />
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid 
        columns={columns}
        rows={rows}
      />
      </Box>
    </div>
  )
}

export default Orders