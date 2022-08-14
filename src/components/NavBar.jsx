import React from 'react'
import {BsFillCartCheckFill} from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
    return (
        <div className='navBar'>
      <Link to="/">Moja korpa</Link>
      <Link to="/cart" className="cart-items">
        <BsFillCartCheckFill />
        <p className="cart-num">{cartNum}</p>
      </Link>
    </div>
  );
}

export default NavBar;