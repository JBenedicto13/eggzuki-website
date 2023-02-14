import React, { useState, useEffect } from "react";
import '../styles/navbar.css';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

//Routing
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [Mobile, setMobile] = useState(false);
    const navigate = useNavigate();
    const [document_title, setDoucmentTitle] = useState("Eggzuki");
    
    useEffect(() => {
        document.title = document_title; 
    },[document_title]);

    return (
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">Welcome to Eggzuki!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/lore">Lore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/whitepaper">Whitepaper</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mint">Mint Now</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fusion">Fusion</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    )
}
export default Navbar
