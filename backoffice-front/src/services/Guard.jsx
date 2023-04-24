
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

 export function isTokenValid() {
    const accessToken = Cookies.get('accessToken');
    if (!accessToken) {
      return "No autenticado"; // el token no existe
    }
  
    try {
      const decodedToken = jwt_decode(accessToken);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        Cookies.remove('accessToken');
        return false; // el token ha caducado
      }
      console.log(accessToken)
      return "autenticado"; // el token es válido y no ha caducado
    } catch (error) {
      return "No autenticado"; // el token es inválido
    }
}

