import React, { useState } from "react";
import ButtonAppBar from "../components/Navbar";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Endpoint from "../services/Endpoint";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function NuevoServicio(){

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState("");

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

    const handleSubmit = (event) => {
        event.preventDefault();
        if(nombre.trim() === "" || precio <= 0 || descripcion.trim() === ""){
            alert("Todos los campos son obligatorios y el precio debe ser mayor a cero.");
        }else{
            const nuevoServicio = {
                nombreServicio: nombre,
                precio: precio,
                descripcion: descripcion
            }
            axios.post(`${Endpoint.apiEndpoint}/tipo-servicio`, nuevoServicio)
            .then(response => {
                console.log(response);
                setOpen(true)
                setNombre("");
                setPrecio(0);
                setDescripcion("");
            })
            .catch(error => {
                console.log(error);
                alert("Hubo un error al crear el servicio, por favor intente nuevamente.");
            });
        }
    }

    return(
        <>
            <ButtonAppBar/>
            <Container maxWidth="sm" sx={{mt:"3rem"}}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        El servicio se creo correctamente
                    </Alert>
                </Snackbar>  
                <Typography>Creacion de servicio</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid marginTop={3} container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Nombre"
                                id="nombre"
                                fullWidth
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Precio"
                                id="precio"
                                type="number"
                                fullWidth
                                value={precio}
                                onChange={(e) => setPrecio(parseFloat(e.target.value))}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Descripcion"
                                id="descripcion"
                                fullWidth
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} textAlign={"center"}>
                            <Button variant="contained" type="submit">Guardar</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    )
}
