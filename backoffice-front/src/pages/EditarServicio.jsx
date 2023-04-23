import React, { useState, useEffect } from "react";
import ButtonAppBar from "../components/Navbar";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Endpoint from "../services/Endpoint";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function EditarServicio(props) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [open, setOpen] = useState(false);
  const [servicioId, setServicioId] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    setServicioId(id);

    // hacer una solicitud GET para obtener el servicio actual
    axios.get(`${Endpoint.apiEndpoint}/tipo-servicio/${id}`)
      .then(response => {
        const servicio = response.data;
        setNombre(servicio.nombreServicio);
        setPrecio(servicio.precio);
        setDescripcion(servicio.descripcion);
      })
      .catch(error => {
        console.log(error);
        alert("Hubo un error al obtener el servicio, por favor intente nuevamente.");
      });
  }, [props.match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim() === "" || precio <= 0 || descripcion.trim() === "") {
      alert("Todos los campos son obligatorios y el precio debe ser mayor a cero.");
    } else {
      const servicioActualizado = {
        nombreServicio: nombre,
        precio: precio,
        descripcion: descripcion
      }
      axios.patch(`${Endpoint.apiEndpoint}/tipo-servicio/${servicioId}`, servicioActualizado)
        .then(response => {
          console.log(response);
          setOpen(true)
        })
        .catch(error => {
          console.log(error);
          alert("Hubo un error al actualizar el servicio, por favor intente nuevamente.");
        });
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="sm" sx={{ mt: "3rem" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            El servicio se actualizó correctamente
          </Alert>
        </Snackbar>
        <Typography>Edición de servicio</Typography>
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
                onChange={(e) => setPrecio(e.target.value)}
                inputProps={{
                min: 0
                }}
                />
                </Grid>
                <Grid item xs={12}>
          <TextField
            required
            label="Descripción"
            id="descripcion"
            fullWidth
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Actualizar servicio
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
</>
);
}