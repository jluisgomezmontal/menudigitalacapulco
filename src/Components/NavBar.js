import React from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


export const NavBar = () => {
    return (
            <div className="navbar d-flex justify-content-around p-1 border-top border-info">
                <div className="text-center ">
        <NavLink exact activeClassName="active" to="/"><i className="fas fa-home"></i><p >Home</p></NavLink>
                </div>
                <div className="text-center">
        <NavLink exact activeClassName="active" to="/explore"><i className="far fa-compass"></i><p>Explorar</p></NavLink>
                    
                </div>
                <div className="text-center" >
        <NavLink exact activeClassName="active"  to="/pinchesburguers"><i className="fas fa-utensils "></i><p>Restaurant</p></NavLink>

                </div>
            </div>
    )
}
