import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { IoCartOutline } from "react-icons/io5";


function Header() {


    return (
        <div className="header" style={{ margin: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <div className="logo">
                <h5>logo</h5>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search packages" />
                <button>Search</button>
            </div>
            <div className="nav-links">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/movie">Movie</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
            <div className="auth-buttons" style={{ display: 'flex', alignItems: 'center' }}>
                <button className="btn-outline-secondary">Sign Up</button>
                <button className="btn-dark">Sign In</button>
               
               <div>
                    <button className="cart-icon" >
                        <IoCartOutline />
                    </button>
               </div>
            </div>

        </div>
    );
}

export default Header;

