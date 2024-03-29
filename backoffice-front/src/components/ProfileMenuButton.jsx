import * as React from 'react';
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export default function ProfileMenuButton(){
    const navigate = useNavigate();
    function handleLogout() {
        Cookies.remove('accessToken');
        navigate("/login") // Eliminar el accessToken de las cookies
         // Redireccionar al usuario a la página de inicio de sesión
      }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <AccountCircleIcon fontSize='large' sx={{ color: "white" }} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <MenuItem sx={{ color: "black" }} onClick={handleLogout}>Cerrar sesion</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}