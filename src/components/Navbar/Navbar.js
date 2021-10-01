import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle={
    fontWeight: "bold",
    color: "red"
  };
const Navbar = () => {
    return (

                <nav className="bg-dark p-3">
                    <NavLink activeStyle={activeStyle} className="text-white fs-4 text-decoration-none pe-3" to="/home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} className="text-white fs-4 text-decoration-none" to="/meals">Meals</NavLink>
                </nav>
    );
};

export default Navbar;