
import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes,
  
 } from "react-router-dom";

import {Navigate } from 'react-router-dom';
import Login from "../pages/Login"
import Error from '../pages/Error'
import NuevoEmpleado from '../pages/NuevoEmpleado'
import NuevoCliente from '../pages/NuevoCliente';
import RegistrosLavados from '../pages/RegistrosLavado';
import EditarCliente from '../pages/EditarCliente';
import EditarEmpleado from '../pages/EditarEmpleado';
import NuevoVehiculo from '../pages/NuevoVehiculo';
import NuevoServicio from '../pages/NuevoServicio';
import NuevoLavado from '../pages/NuevoLavado';
import MenuPrincipal from '../pages/MenuPrincipal';
import { isTokenValid } from '../services/Guard';
import RegistrosClientes from '../pages/RegistroClientes';
import RegistroEmpleados from '../pages/RegistroEmpleados';
import RegistroServicios from '../pages/RegistroServicios';
import EditarServicio from '../pages/EditarServicio';




function Rutas() {
  return (
    <Router>
    <Routes> 
        <Route path="/login" element={<Login/>}/>  
        <Route path="*" element={<Error/>}/>
        
        <Route path='/empleado/crear' element={isTokenValid() === 'autenticado'?<NuevoEmpleado/>:<Navigate to={"/login"}/>} />
        <Route path='/' element={isTokenValid() === 'autenticado'?<MenuPrincipal />:<Navigate to={"/login"}/>} />
        <Route path="/cliente/crear" element={isTokenValid() === 'autenticado'?<NuevoCliente/>:<Navigate to={"/login"}/>}/>
        <Route path="/lavado/registros" element={isTokenValid() === 'autenticado'?<RegistrosLavados/>:<Navigate to={"/login"}/>}/>
        <Route path="/cliente/editar" element={isTokenValid() === 'autenticado'?<EditarCliente/>:<Navigate to={"/login"}/>}/>
        <Route path="/empleado/editar" element={isTokenValid() === 'autenticado'?<EditarEmpleado/>:<Navigate to={"/login"}/>}/>
        <Route path="/cliente/vehiculos" element={isTokenValid() === 'autenticado'?<NuevoVehiculo/>:<Navigate to={"/login"}/>}/>
        <Route path="/servicio/crear" element={isTokenValid() === 'autenticado'?<NuevoServicio/>:<Navigate to={"/login"}/>}/>
        <Route path="/lavado/crear" element={isTokenValid() === 'autenticado'?<NuevoLavado/>:<Navigate to={"/login"}/>}/>
        <Route path="/cliente/registros" element={isTokenValid() === 'autenticado'?<RegistrosClientes/>:<Navigate to={"/login"}/>}/>
        <Route path="/empleado/registros" element={isTokenValid() === 'autenticado'?<RegistroEmpleados/>:<Navigate to={"/login"}/>}/>
        <Route path="/servicio/registros" element={isTokenValid() === 'autenticado'?<RegistroServicios/>:<Navigate to={"/login"}/>}/>
        <Route path="/servicio/editar" element={isTokenValid() === 'autenticado'?<EditarServicio/>:<Navigate to={"/login"}/>}/>
      

    </Routes>
</Router>
  );
}

export default Rutas;