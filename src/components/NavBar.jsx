//previva frce
import React from 'react'
import {BsFillCartCheckFill} from "react-icons/bs";

function NavBar({ cartNum }) {
    //const cartNum = 0;
    return (
        <div className='navBar'>
        <a>Moja korpa</a>
        <div className='cart-items'>
            <BsFillCartCheckFill/>
            <p className="cart-num">{cartNum}</p>
        </div>
        </div>
    );
}

export default NavBar