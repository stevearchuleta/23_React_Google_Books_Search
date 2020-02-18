import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

class Nav extends Component {
   state = {
      open: false,
      width: window.innerWidth
   };

   render() {
      return (
         <nav className='navbar navbar-expand-lg navbar-light bg-light mb-2'>
            <NavLink className='navbar-brand' to='/'>
               Google Books
            </NavLink>
            <button
               onClick={this.toggleNav}
               className="navbar-toggler"
               data-toggle="collapse"
               data-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon" />
            </button>
            <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
               <ul className='navbar-nav'>
                  <li className='nav-item'>
                     <NavLink
                        onClick={this.toggleNav}
                        className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                        to="/"
                        >
                        Search
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        onClick={this.toggleNav}
                        className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        to="/saved"
                     >
                        Saved
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}


export default Nav;
