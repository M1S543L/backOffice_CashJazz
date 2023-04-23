import React from 'react';
import  { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonAppBar from '../components/Navbar';
import { Button, Container, Grid, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Endpoint from '../services/Endpoint';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NuevoLavado() {

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


  const [id, setId] = useState('');
  const [empleado, setEmpleado] = useState(null);

  const handleSearch = () => {
    axios.get(`${Endpoint.apiEndpoint}/clientes/${id}`)
      .then(response => {
        setEmpleado(response.data);
        
      
        
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const handleActualizarEmpleado = () => {
    axios.patch(`${Endpoint.apiEndpoint}/clientes/${id}`, {
      genero: genero,
      primerNombre: primerNombre,
      segundoNombre: segundoNombre,
      primerApellido: primerApellido,
      segundoApellido: segundoApellido,
      dni: identidad,
      correo: correo,
      celular: telefono
    })
      .then(response => {
        console.log(response);
        setOpen(true);
        // Aquí puedes hacer algo después de actualizar el empleado
      })
      .catch(error => {
        console.log(error);
      });
  };

  
  const [value, setValue] = React.useState(0);
  const [genero, setGenero] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [primerNombre, setPrimerNombre] = React.useState("");
  const [segundoNombre, setSegundoNombre] = React.useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [identidad, setIdentidad] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleChangeId = (event) => {
    setId(event.target.value);
  };



  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  const setAllValues= (empleado) => {
  
    setPrimerNombre(empleado && empleado.primerNombre);
    setSegundoNombre(empleado &&  empleado.segundoNombre);
    setPrimerApellido(empleado && empleado.primerApellido);
    setSegundoApellido(empleado && empleado.segundoApellido);
    setIdentidad(empleado && empleado.dni);
    setGenero(empleado && empleado.genero);
    setCorreo(empleado && empleado.correo);
    setTelefono(empleado && empleado.celular);
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

  const handleChangeGenero = (event) => {
    setGenero(event.target.value);
  }

  

  

  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };

  

  

  
  
  return (
      <>
    <ButtonAppBar/>
     <Container sx={{mt:"3rem",mb:"3rem"}} maxWidth="md">
       
       <TextField
       sx={{mr:"1rem"}}
       variant="outlined"
       size="small"
       type="number"
       value={id}
       onChange={handleChangeId}
       /> 

       <Button color="secondary" onClick={()=>{handleSearch()}} variant="contained"><SearchIcon/></Button>
     </Container>
     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          El empleado se actualizo correctamente
        </Alert>
      </Snackbar>  

      <Container maxWidth="md">
          <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
                      <Tab label="Informacion Personal" {...a11yProps(0)} />
                      <Tab label="Vehiculos" {...a11yProps(1)} />
                      <Tab label="Agregar vehiculo" {...a11yProps(2)} />
                      <Tab label="Lavados" {...a11yProps(3)} />
                  </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    
                    <Button sx={{mb:"2rem"}}  onClick={()=>{setAllValues(empleado)}} variant="text"><VisibilityIcon/></Button>
                    </Grid>
                    <Grid item xs={6} textAlign={"end"}>
                    Editar    
                    <Switch
                    checked={checked}
                    onChange={handleChangeSwitch}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </Grid>
                </Grid>
                
                  <Grid container component={"form"} spacing={2}>
                 
                  <Grid item xs={3}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            id="primerNombre"
                            label="Primer Nombre"
                            onChange={handleChangePrimerNombre}
                            value={primerNombre}
                          
                        />
                      
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            id="primerNombre"
                            label="Segundo Nombre"
                            onChange={handleChangeSegundoNombre}
                            value={segundoNombre}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            id="segundoNombre"
                            label="Primer Apellido"
                            onChange={handleChangePrimerApellido}
                            value={primerApellido}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            label="Segundo Apellido"
                            onChange={handleChangeSegundoApellido}
                            value={segundoApellido}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            disabled={!checked?true:false}
                            required
                            id="dni"
                            label="Identidad"
                            type={"number"}
                            fullWidth
                            onChange={handleChangeIdentidad}
                            value={identidad}
                        />
                    </Grid>

                    <Grid item xs={6} >
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Genero</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={genero}
                                onChange={handleChangeGenero}
                                row
                            >
                                <FormControlLabel disabled={!checked?true:false} value="female" control={<Radio />} label="Female" />
                                <FormControlLabel disabled={!checked?true:false} value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    

                    

                   

                    <Grid item xs={3}>
                        <TextField
                        disabled={!checked?true:false}
                        type={"email"}
                        label="Correo"
                        onChange={handleChangeCorreo}
                        value={correo}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                        disabled={!checked?true:false}
                        type={"number"}
                        label="Telefono"
                        onChange={handleChangeTelefono}
                        value={telefono}
                        />
                    </Grid>
                   
                    <Grid item xs={6} sx={{mt:"0.8rem"}} textAlign={"end"}>
                        <Button disabled={!checked?true:false} onClick={()=>{setAllValues(empleado)}} variant="contained"  color="error" size="large" sx={{mr:"1rem"}}>Cancelar</Button>
                        <Button disabled={!checked?true:false} onClick={handleActualizarEmpleado} variant="contained" size="large">Guardar</Button>
                    </Grid>

                  </Grid>
                  
              </TabPanel>
				  <TabPanel value={value} index={1}>
					  <Grid container spacing={2}>
              <Grid item sx={12}>
                AQUI VA IR LA TABLA DE SUS VEHICULOS
              </Grid>
					  </Grid>
				  </TabPanel>
          <TabPanel value={value} index={2}>
					  <Grid container spacing={2}>
						  AQUI SE VAN A AGREGAR SUS VEHICULOS
					  </Grid>
				  </TabPanel>
          <TabPanel value={value} index={3}>
					  <Grid container spacing={2}>
						  AQUI VAN SUS REGISTROS DE LAVADO
					  </Grid>
				  </TabPanel>
          </Box>
        </Container>
      </>
  );
}