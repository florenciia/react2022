import React, { Fragment } from "react";
import './NavBar.css';
import {Link} from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";


function Navbar() {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
          
                        <Link className="title" to="/">EMMANUEL MADOERY</Link>

                        <button className="navbar-toggler btn-tog" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon btn-tog"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active navi" to="/">INICIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active navi" to="category/curso">CURSOS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active navi" to="category/producto">PRODUCTOS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active navi" to="category/asesoramiento">SERVICIO DE ASESORAMIENTO</Link>
                                </li>
                                <li>
                                    <CartWidget />
                                </li>
                            </ul>
                            
                            
                        </div>
                </div>
            </nav>

        </Fragment>
    )
}
export default Navbar;
