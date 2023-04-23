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
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import Endpoint from '../services/Endpoint';



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
      alert("Bienvenido")
      navigate("/")
      // redireccionar a la página de dashboard después del inicio de sesión
    } catch (error) {
      alert('Credenciales inválidas');
      
    }
     
  }
  

  return (
    <>
      <TextField label="Nombre de usuario" value={username} onChange={e => setUsername(e.target.value)} />
      <TextField label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleLogin}>Iniciar sesión</Button>
      {accessToken && <p>Tu token JWT es: {accessToken}  </p>}
    </>
  );
}