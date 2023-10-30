import React from "react";
import {NavLink} from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="sec aboutus">
                    <h2>About Us</h2>
                    <p>Find out about our future events and news on our social media networks</p>
                    <ul className="sci">
                        <li><NavLink to="#"><FaFacebook /></NavLink></li>
                        <li><NavLink to="#"><FaInstagram /></NavLink></li>
                        <li><NavLink to="#"><FaYoutube /></NavLink></li>
                    </ul>
                </div>
                <div className="sec quicklinks">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><NavLink to="#">Головна</NavLink></li>
                        <li><NavLink to="#">Освітній Процес</NavLink></li>
                        <li><NavLink to="#">Методична Робота</NavLink></li>
                        <li><NavLink to="#">Студенту</NavLink></li>
                        <li><NavLink to="#">Абітурієнту</NavLink></li>
                    </ul>
                </div>
                <div className="sec contactBx">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><i className='bx bxs-map'></i></span>
                            <span>Бориспільська 5 <br /> Київ 02099 <br /> UA</span>
                        </li>
                        <li>
                            <span><i className='bx bx-envelope'></i></span>
                            <p><a href="mailto:krmknau@gmail.com">krmknau@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>


    );
}

export default Footer;
