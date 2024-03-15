import React from "react";
import { useContext } from "react";
import logo from "../assets/images/ZuppaLogo.png";

import cartContext from "../context/cartContext";

import { Link } from "react-router-dom";

function Header() {
  const { cartItems, toggleCart } = useContext(cartContext);

  const cartQuantity = cartItems.length;

  return (
    <div className=" p-3 mb-2 ms-8 d-flex justify-content-between align-items-center ">
      <div>
        <img style={{ width: "40px" }} src={logo} alt="" />
      </div>
      <ul className="nav justify-content-center  ">
        <li className="nav-item">
          <a
            className="nav-link active  text-dark"
            aria-current="page"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active  text-dark"
            aria-current="page"
            href="/About"
          >
            About
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link active  text-dark"
            aria-current="page"
            href="/Technology"
          >
            Technology
          </a>
        </li>
     
        <li className="nav-item">
          <a
            className="nav-link active  text-dark"
            aria-current="page"
            href="/NewsAndEvents"
          >
            News and Events
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active  text-dark"
            aria-current="page"
            href="/Career"
          >
            Careers
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active  text-dark"
            aria-current="page"
            href="/ShopNow"
          >
            Shop now
          </a>
        </li>
        <li>
          <div
            title="Cart"
            className="cart_icon"
            onClick={() => toggleCart(true)}
          >
            <img
              style={{ width: 30, height: 30 }}
              src="/images/Shoppingcart.png"
              alt="bag-icon"
            />
            {cartQuantity >= 1 && <span className="badge">{cartQuantity}</span>}
          </div>
        </li>
      </ul>

      <div className="me-5 ">
        <Link to="/Login">
          <i style={{ fontSize: "20px" }} className="fas fa-user-alt"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
