import React, { Fragment } from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function Navbar() {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TITLE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">BIOGRAFÍA</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">CURSOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">WORKSHOPS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">CONVERSATORIOS</a>
                                </li>
                                
                            </ul>
                                <form className="d-flex">
                                    <input className="inputt me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="Btn" type="submit">Search</button>
                                </form>
                        </div>
                </div>
            </nav>

                <CartWidget title="lala"
                price="25"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img=""
                /> 
                <CartWidget title="lele"
                price="35"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img=""
                /> 
                <CartWidget title="lolo"
                price="45"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img=""
                /> 

        </Fragment>
    )
}
export default Navbar;
