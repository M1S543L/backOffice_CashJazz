import React from 'react';
import ButtonAppBar from '../components/Navbar';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Endpoint from '../services/Endpoint';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
     { field: 'dni', headerName: 'DNI', width: 120 },
    { field: 'primerNombre', headerName: 'Primer Nombre', width: 120 },
    { field: 'segundoNombre', headerName: 'Segundo Nombre', width: 120 },
    { field: 'primerApellido', headerName: 'Primer Apellido', width: 120 },
    { field: 'segundoApellido', headerName: 'Segundo Apellido', width: 120 },
    { field: 'genero', headerName: 'Género', width: 100 },
    { field: 'correo', headerName: 'Correo Electrónico', width: 150 },
    { field: 'celular', headerName: 'Celular', width: 120 },
    { field: 'estado', headerName: 'Estado', width: 150 },
  ];
  
  export default function RegistrosLavados() {
    const [rows, setRows] = React.useState([]);
  
    React.useEffect(() => {
      axios.get(`${Endpoint.apiEndpoint}/empleados`)
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
            Registros de Empleados
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