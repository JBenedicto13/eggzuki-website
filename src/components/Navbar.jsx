import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import logo from '../assets/logo.png';

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
    <>
      <nav className='navbar sticky-top'>
        <span onClick={() => navigate('/home')} className="logo-title">Welcome to Eggzuki</span>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/home' onClick={() => {setOnHome(true); setDoucmentTitle("Eggzuki");}}>
            <li>Home</li>
          </Link>
          <Link to='/lore' onClick={() => {setOnHome(true); setDoucmentTitle("Lore");}}>
            <li>Lore</li>
          </Link>
          <Link to='/whitepaper' onClick={() => {setOnHome(true); setDoucmentTitle("Whitepaper");}}>
            <li>Whitepaper</li>
          </Link>
          <Link to='/mint' onClick={() => {setOnHome(false); setDoucmentTitle("Mint");}}>
            <li>Mint</li>
          </Link>
          <Link to='/fusion' onClick={() => {setOnHome(true); setDoucmentTitle("Fusion");}}>
            <li>Fusion</li>
          </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
