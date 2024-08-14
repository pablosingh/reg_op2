import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';


export default function Head () {
    return (
    <div>
        <Link to="/" className="">Tenencias</Link>
        <Link to="/addop" className="">Crear Operacion</Link>
        <Link to="/user" className="">Usuario</Link>
        <LogoutButton/>
    </div>
    );
};