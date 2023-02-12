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
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">Welcome to Eggzuki!</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/lore">Lore</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/whitepaper">Whitepaper</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/mint">Mint Now</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/fusion">Fusion</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    )
}
export default Navbar
