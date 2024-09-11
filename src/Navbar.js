import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { Form, Link } from "react-router-dom";
import { items } from "./Data";
import { useCart } from "./App";
function Navbar() {
  const { cart1, addToCart } = useCart();
  return (
    <div className="background ">
      <div className="navbaar">
        {/* <h1  id='E-cart'>E-cart</h1> */}
        <Link id="E-cart" to="/home">
          E-cart
        </Link>
        <form id="input-box" className="seacrh-bar">
        <input  type="text" className="inputbox" placeholder="search here.." />
        </form>
       
        {/* <h2 id='cart-img'><BsCart/></h2> */}
        <Link className="cart-img" id="cart-img" to={"/cart"}>
        <button type="button"  className="btn btn-primary position-relative">
              cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart1.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
        </Link>
      </div>
      {/* <div className="navbaar-2  ">
        <div className="filter-by">Filter by-</div>
        <div className="no-filter">No Filter</div>
        <div className="mobile">Mobile</div>
        <div className="laptop">Laptops</div>
        <div className="tablet">Tablets</div>
        <div className="greater-number">&#x2265;= 29999</div>
        <div className="greater-number1">&#x2265;= 49999</div>
        <div className="greater-number2">&#x2265;= 69999</div>
        <div className="greater-number3">&#x2265;= 89999</div>
      </div> */}
    </div>
  );
}

export default Navbar;
