import { Link, Outlet } from "react-router-dom";

const Layout = () =>{
    return<div>
        
        <nav>
            <ul>
                <li>
                    <Link to="*">Inicio Sesion</Link>
                </li>
                <li>
                    <Link to="/galeriaimagenes">Galeria Imagenes</Link>
                </li>
                <li>
                    <Link to="/lugarespopulares">Lugares Populares</Link>
                </li>
                <li>
                    <Link to="/lugaresTrans">Lugares TransCurridos</Link>
                </li>
                <li>
                    <Link to="/lugarestranscurridos">LugaresTransCurridos</Link>
                    <li>
                    <Link to="/">Layout</Link>
                </li>
                </li>
            </ul>
        </nav>
        <hr/>
        <Outlet/>

    </div>;
}
export default Layout