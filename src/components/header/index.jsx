import React from 'react'
import logo from '../../assets/img/images/thumbnails/cs-logo.png'
import arrow_icn from '../../assets/img/images/icons/arrow_icn.png'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="cs-header" id="csHeader">
            <div className="container ">
                <div className="cs-header-content ">
                    <div className="cs-logo ">
                        <a href="home.html ">
                            <img src={logo} alt="Brand logo " />
                        </a>
                    </div>

                    <button className="mobile-toggler-btn x ">
                        <span className="icon-bar "></span>
                        <span className="icon-bar "></span>
                        <span className="icon-bar "></span>
                    </button>
                    <div className="cs-navbar-collapse ">
                        <ul className="nav cs-navbar-nav ">
                            <li className="nav-item acitve_link">
                                <a className="nav-link active" href="#discover-section">Discover</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#feature-section">Features</a>
                            </li>
                            <li className="nav-item cs-dropdown">
                                <a className="nav-link" id="services" href="#virtual-section">Use Cases</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#pricing-section">Pricing</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#contact-section">Contact</a>
                            </li>
                        </ul>

                        <div className="header_signin_btn d-flex d-md-none">
                            <Link to="/register" className="header_sign_btn">Sign In</Link>
                            <Link to="/register" className="theme-btn"> <span>Sign Up</span>
                                <span className="d-inline-block ms-2"><img src="assets/images/icons/arrow_icn.png"
                                    alt="arrow icon" /></span>
                            </Link>
                        </div>
                    </div>

                    <div className="header_signin_btn d-none d-md-inline-block">
                        <Link to="/register" className="header_sign_btn">Sign In</Link>
                        <Link to="/register" className="theme-btn"> <span>Sign Up</span>
                            <span className="d-inline-block ms-2"><img src={arrow_icn}
                                alt="arrow icon" /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header