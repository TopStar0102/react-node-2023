import React from "react";
import { Link } from "react-scroll";
import logo from '../images/logo.png'

const duration = 500;

export default function Navigation() {
  return (
    <div className="navbar">
        <div className="logo_section">
            <img src={logo} alt="Log Image" />
        </div>
        <div className="navigations">
            <Link className="nav-item extra-light-font" activeClass="active" to="section-1" spy smooth duration={duration}>
                Home
                <div className="border-item"></div>
            </Link>
            <Link className="nav-item extra-light-font" activeClass="active" to="section-2" spy smooth duration={duration}>
                About
                <div className="border-item"></div>
            </Link>
            <Link className="nav-item extra-light-font" activeClass="active" to="section-3" spy smooth duration={duration}>
                Careers
                <div className="border-item"></div>
            </Link>
            <Link className="nav-item extra-light-font" activeClass="active" to="section-4" spy smooth duration={duration}>
                Contact
                <div className="border-item"></div>
            </Link>
        </div>
    </div>
  );
}
