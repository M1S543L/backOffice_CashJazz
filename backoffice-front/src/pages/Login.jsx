import React from 'react';
import  { useState,useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Login.css'
import logo from '../images/Admin.png'
import car from '../images/car1.jpg'
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import Endpoint from '../services/Endpoint';
import { Box, Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import cleanjazz from "../images/CleanJazz.png"
import { isTokenValid } from '../services/Guard';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {' Clean Jazz'}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${Endpoint.apiEndpoint}/administrativo/login`, { username, password });
      setAccessToken(response.data.accessToken);
      Cookies.set('accessToken', response.data.accessToken);
      //alert("Bienvenido")
      navigate("/") 
      // redireccionar a la página de dashboard después del inicio de sesión
    } catch (error) {
      alert('Credenciales inválidas');
      
    }
	handleRefreshClick()
    
	 
  }

  const handleRefreshClick = () => {
    window.location.reload();
  };


  return (
    <div >
      
      <Container maxWidth="xs" sx={{ pt: "7rem", borderColor: "grey" }}>
        <Box border={1} borderColor="grey" padding={4} borderRadius={5} backgroundColor={"white"}>
          <Grid container spacing={3}>
            <Grid item xs={12} justifyContent="center" display={"flex"}>
              <Avatar sx={{ width: "200px", height: "200px" }} src={cleanjazz} />


            </Grid>
            <Grid item hidden={!(isTokenValid()==='No autenticado')?true:false} xs={12} textAlign={"center"}>
              <TextField fullWidth label="Nombre de usuario" value={username} onChange={e => setUsername(e.target.value)} />
            </Grid>
            <Grid item hidden={!(isTokenValid()==='No autenticado')?true:false} xs={12} textAlign={"center"}>
              <TextField fullWidth label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </Grid>
            <Grid item hidden={!(isTokenValid()==='No autenticado')?true:false} xs={12} textAlign={"center"} marginBottom={2}>
              <Button variant="contained" color="primary" onClick={handleLogin}>Iniciar sesión</Button>
            </Grid>
          </Grid>

		  <Grid container spacing={3} >
           
            <Grid item hidden={(isTokenValid()==='No autenticado')?true:false} xs={12} textAlign={"center"}>
			<Link to="/">	
              <Button variant="contained" color="primary" >Entrar</Button>
			</Link>
            </Grid>
			
          </Grid>



        </Box>
      </Container>
      
    </div>
  );
}