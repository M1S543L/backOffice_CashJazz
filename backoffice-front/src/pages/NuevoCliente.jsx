import React from 'react';
import  { useState } from 'react'
import ButtonAppBar from '../components/Navbar';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DataGrid} from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import FormLabel from '@mui/material/FormLabel';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Endpoint from '../services/Endpoint';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
  

export default function NuevoCliente(){

    const [genero, setGenero] = React.useState('female');
    const [estado, setEstado] = React.useState('activo');
    const [primerNombre, setPrimerNombre] = useState("");
    const [segundoNombre, setSegundoNombre] = useState("");
    const [primerApellido, setPrimerApellido] = useState("");
    const [segundoApellido, setSegundoApellido] = useState("");
    const [identidad, setIdentidad] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const handleChangePrimerNombre = (event) => {
        setPrimerNombre(event.target.value);
      };
      
      const handleChangeSegundoNombre = (event) => {
        setSegundoNombre(event.target.value);
      };
      
      const handleChangePrimerApellido = (event) => {
        setPrimerApellido(event.target.value);
      };
      
      const handleChangeSegundoApellido = (event) => {
        setSegundoApellido(event.target.value);
      };
      
      const handleChangeIdentidad = (event) => {
        setIdentidad(event.target.value);
      };
      
      const handleChangeCorreo = (event) => {
        setCorreo(event.target.value);
      };
      
      const handleChangeTelefono = (event) => {
        setTelefono(event.target.value);
      };

    const handleChangeEstado = (event) => {
      setEstado(event.target.value);
    }

  const handleChangeGenero = (event) => {
    setGenero(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      genero: genero,
      estado: estado,
      primerNombre: primerNombre,
      segundoNombre: segundoNombre,
      primerApellido: primerApellido,
      segundoApellido: segundoApellido,
      dni: identidad,
      correo: correo,
      celular: telefono
    };

    axios.post(`${Endpoint.apiEndpoint}/clientes`, data)
      .then(response => {
        console.log(response);
        setOpen(true)
      })
      .catch(error => {
        console.log(error);
      });
  }

  return(
    <>
        <ButtonAppBar />
        <Container maxWidth="md">

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        El cliente   se creo correctamente
       </Alert>
       </Snackbar>  


            <Typography 
                marginTop={5} 
                variant="h5"
                 sx={{fontFamily:"Arial"}}
                component="h2">
                    Nuevo Empleado
            </Typography>

            <Grid container spacing={2} marginTop={3} >
                <Grid item xs={3}>
                    <TextField
                        required
                        id="primerNombre"
                        label="Primer Nombre"
                        onChange={handleChangePrimerNombre}
                      
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        required
                        id="segundoNombre"
                        label="Segundo Nombre"
                        onChange={handleChangeSegundoNombre}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        required
                        id="primerApellido"
                        label="Primer Apellido"
                        onChange={handleChangePrimerApellido}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        required
                        id="primerNombre"
                        label="Segundo Apellido"
                        onChange={handleChangeSegundoApellido}
                
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        required
                        id="dni"
                        label="Identidad"
                        type={"number"}
                        fullWidth
                        onChange={handleChangeIdentidad}
                    />
                </Grid>
                 <Grid item xs={3}>
                        <TextField
                        type={"number"}
                        label="Telefono"
                        onChange={handleChangeTelefono}
                        />
                    </Grid>
                
                <Grid item xs={3}>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Genero</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={genero}
                            onChange={handleChangeGenero}
                            row
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                    type={"email"}
                    label="Correo"
                    onChange={handleChangeCorreo}
                    fullWidth
                    />
                </Grid>

                
                
                <Grid item xs={6} sx={{mt:"0.8rem"}} textAlign={"end"}>
                    <Button variant="contained"  color="error" size="large" sx={{mr:"1rem"}}>Cancelar</Button>
                    <Button variant="contained" size="large" onClick={handleSubmit}>Guardar</Button>
                </Grid>
             
                
                
                
            </Grid>

            
        </Container>
    </>
);
}