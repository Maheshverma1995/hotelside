import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from 'react-router-dom';
import './Nabbar.css';


const Nabbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bd-navbar bg-info  fixed-top">
                <div className="container-fluid" >
                    <Link className="navbar-brand"  to="#">
                    <img src="./image/icon.jpg" className="img-fluid" id='icon' alt="no"/>
                    
                    </Link>
                    <button className="navbar-toggler mr-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto   mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link outline-primary link-light text-uppercase" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link outline-primary link-light text-uppercase " to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link outline-primary link-light text-uppercase " aria-current="page" to="contantus">ContantUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link outline-primary link-light text-uppercase " aria-current="page" to="product"> Recent Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link outline-primary link-light text-uppercase " aria-current="page" to="registration">Our Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link outline-primary link-light text-uppercase " aria-current="page" to="login">Portfolio</Link>
                            </li>
                        </ul>

                            <button className="btn btn-outline-light  link-danger rounded w-auto text-uppercase "  type="submit" >Get Free Quote</button>
    
                    </div>
                </div>
            </nav>
        
    )
}

export default Nabbar
