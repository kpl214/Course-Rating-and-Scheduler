import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            <Link to="/" className="title">Rate My Courses</Link>
            <div className="menu" onClick={() => {setMenuOpen(!menuOpen);}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/coursesList">Rate Course</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/report">Report</NavLink></li>
                <li>
                    <a href="https://40459826599.propelauthtest.com/account/settings">
                        Profile
                    </a>
                </li>
            </ul>
        </nav>
    );
};