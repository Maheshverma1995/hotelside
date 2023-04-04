import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from 'react-router-dom';
import './Nabbar.css'


const Nabbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img className='navbar-dark-toggler-icon-bg:' src="" alt="noimage" width="100" height="50" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="contantus">ContantUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="registration">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="login">Login</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 form-control-lg " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nabbar
