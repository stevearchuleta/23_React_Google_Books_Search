import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

class Nav extends Component {
   state = {
      open: false
   }

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
         </nav>
      )
   }
}



