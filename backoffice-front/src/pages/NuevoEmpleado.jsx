import * as React from 'react';
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

import FormLabel from '@mui/material/FormLabel';

  

export default function NuevoEmpleado(){

    const [genero, setGenero] = React.useState('female');
    const [estado, setEstado] = React.useState('activo');

    const handleChangeEstado = (event) => {
      setEstado(event.target.value);
    }

  const handleChangeGenero = (event) => {
    setGenero(event.target.value);
  }
    return(
        <>
            <ButtonAppBar />
            <Container maxWidth="md">

                <Typography 
                    marginTop={5} 
                    variant="h5"
                     sx={{fontFamily:"Arial"}}
                    component="h2">
                        Nuevo Empleado
                </Typography>

                <Grid component={"form"} container spacing={2} marginTop={3} >
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="primerNombre"
                            label="Primer Nombre"
                          
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            required
                            id="primerNombre"
                            label="Segundo Nombre"
                          
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            required
                            id="primerNombre"
                            label="Primer Apellido"
                            
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            required
                            id="primerNombre"
                            label="Segundo Apellido"
                    
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            required
                            id="dni"
                            label="Identidad"
                            type={"number"}
                            fullWidth
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

                    <Grid item xs={3}>
                    <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Activo</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={estado}
                                onChange={handleChangeEstado}
                                row
                            >
                                <FormControlLabel  value="activo" control={<Radio />} label="Si" />
                                <FormControlLabel  value="inactivo" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                        
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                        type={"email"}
                        label="Correo"
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                        type={"number"}
                        label="Telefono"
                        />
                    </Grid>
                    
                    <Grid item xs={6} sx={{mt:"0.8rem"}} textAlign={"end"}>
                        <Button variant="contained"  color="error" size="large" sx={{mr:"1rem"}}>Cancelar</Button>
                        <Button variant="contained" size="large">Guardar</Button>
                    </Grid>
                 
                    
                    
                    
                </Grid>

                
            </Container>
        </>
    );
}