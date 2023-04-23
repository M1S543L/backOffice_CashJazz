import React from 'react';
import ButtonAppBar from '../components/Navbar';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Endpoint from '../services/Endpoint';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
     { field: 'nombreServicio', headerName: 'Nombre', width: 120 },
    { field: 'precio', headerName: 'Precio', width: 120 },
    { field: 'descripcion', headerName: 'Descripcion', width: 300 },
    
  ];
  
  export default function RegistrosServicios() {
    const [rows, setRows] = React.useState([]);
  
    React.useEffect(() => {
      axios.get(`${Endpoint.apiEndpoint}/tipo-servicio`)
        .then(response => {
          setRows(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }, []);
  
    return (
      <>
        <ButtonAppBar />
        <Container maxWidth={"lg"}>
          <Typography
            marginTop={5}
            marginBottom={3}
            variant='h5'>
            Registros de Servicios
          </Typography>
          <div style={{ height: 500, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10, 25, 100]}
              disableRowSelectionOnClick
              disableSelectionOnClick
            />
          </div>
        </Container>
      </>
    );
  }