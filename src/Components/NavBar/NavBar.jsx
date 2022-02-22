import React, { Fragment } from "react";
// import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import {Link} from 'react-router-dom';


function Navbar() {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* <a className="title" href="#">EMMANUEL MADOERY </a> */}
                        <Link className="title" to="/">EMMANUEL MADOERY</Link>
                        <button className="navbar-toggler btn-tog" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon btn-tog"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <a className="nav-link active navi" aria-current="page" href="#">INICIO</a> */}
                                    <Link className="nav-link active navi" to="/home">INICIO</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link active navi" href="#">BIOGRAFÍA</a> */}
                                    <Link className="nav-link active navi" to="/biografia">BIOGRAFÍA</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link active navi" href="#"> EDUCACIÓN BURSATIL GRATUITA</a> */}
                                    <Link className="nav-link active navi" to="/educbursatilgratuita">EDUCACIÓN BURSATIL GRATUITA</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    {/* <a className="nav-link dropdown-toggle navi" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> SERVICIOS DE ASESORAMIENTO </a> */}
                                    <Link className="nav-link dropdown-toggle navi" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/servdeasesoramiento">SERVICIOS DE ASESORAMIENTO</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {/* <li><a className="dropdown-item" href="#"> Bursatil</a></li> */}
                                        <Link className="dropdown-item" to="/bursatil">Bursatil</Link>
                                        {/* <li><a className="dropdown-item" href="#"> Administración de ahorros</a></li> */}
                                        <Link className="dropdown-item" to="/admindeahorros"> Administración de ahorros</Link>
                                        {/* <li><a className="dropdown-item" href="#"> Armado de carteras de inversión</a></li> */}
                                        <Link className="dropdown-item" to="/armadocarterasinversion"> Armado de carteras de inversión</Link>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>

            {/* <CartWidget title1="Profesional 1"
                        title2="Profesional 2"
                        title3="Profesional 3"
                        image="../perfil.jpeg"
            /> */}


        </Fragment>
    )
}
export default Navbar;
