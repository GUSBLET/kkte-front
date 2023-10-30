import React from "react";
import {NavLink} from "react-router-dom";
import style from './../styles/main-page.css'

function Header(){
    return (

        <header className="header" data-header>
            <div className="container">

                <NavLink to="/" className="logo">
                    <img src="/images/logo.png" width="120" height="80" alt="logo" />
                </NavLink>

                <nav className="navbar" data-navbar>

                    <button className="close-btn" aria-label="close news" data-nav-toggler>
                        <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <NavLink to="/" className="logo">
                        <img src="/images/logo.png" width="120" height="80" alt="college-logo" />
                    </NavLink>

                    <ul className="navbar-list">

                        <li className="navbar-item">
                            <NavLink to="/" className="navbar-link anim-effect active">
                                <div className="separator"></div>
                                <span className="span">Головна</span>
                            </NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink to="/news/home" className="navbar-link anim-effect">
                                <div className="separator"></div>
                                <span className="span">Освітній процес</span>
                            </NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink to="" className="navbar-link anim-effect">
                                <div className="separator"></div>
                                <span className="span">Методична робота</span>
                            </NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink to="/schedule-replacement/schedule-replacement-page" className="navbar-link anim-effect">
                                <div className="separator"></div>
                                <span className="span">Студенту</span>
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="#" className="navbar-link anim-effect">
                                <div className="separator"></div>
                                <span className="span">Абітурієнту</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="nav-open-btn" aria-label="open news" data-nav-toggler>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>
                <div className="overlay" data-nav-toggler data-overlay></div>
            </div>
        </header>
    );
}

export default Header;