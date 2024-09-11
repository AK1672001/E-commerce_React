import React, { useContext, useState } from "react";
import { BsCart } from "react-icons/bs";
// import { items } from './Data';
import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./App";
const Product = () => {
  //  console.log(data)
  // console.log("2",items)
   const { cart1, addToCart } = useCart();
  //  console.log('add',addToCart)
  const [items2, setItems] = useState([...items]);
  //    console.log("1",items2);
  function handleFiltterBycategory(category) {
    const filteredproduct = items.filter((item) => item.category == category);
    // console.log("3",filteredproduct);
    setItems(filteredproduct);
  }
  function handleFiltterByprice(price) {
    const itemprice = items.filter((item) => item.price >= price);
    setItems(itemprice);
  }

  //search item page---
  const navigate = useNavigate();
  const [searchitem, setSearchItem] = useState("");
  const handlesumbit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchitem}`);
    setSearchItem("");
  };

  //cart to add
  const handleAddtocart = (id, price, title, description, imgSrc) => {
    addToCart(id,price,title,description,imgSrc);
    if(cart1.length==10){
      toast.success("Cart has reached its maximum capacity", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // theme: "colored",
         theme: "dark",
  
      });
    }
   if(cart1.length<10){
    toast.success("Items added on cart", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      // theme: "colored",
       theme: "dark",

    });
   }
    
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="colored"
        theme="dark"
      />
      <div className="background sticky-top">
        <div className="navbaar">
          {/* <h1  id='E-cart'>E-cart</h1> */}
          <Link id="E-cart" to="/home">
            E-cart
          </Link>
          <form onSubmit={handlesumbit} id="input-box" className="search-bar">
            <input
              className="inputbox"
              value={searchitem}
              onChange={(e) => setSearchItem(e.target.value)}
              type="text"
              placeholder="search here.."
            />
          </form>
          {/* <h2 id='cart-img'><BsCart/></h2> */}
          <Link className="cart-img" id="cart-img" to={"/cart"}>
            <button type="button" className="btn btn-primary position-relative">
              cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart1.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            {/* <BsCart /> */}
          </Link>
        </div>
      </div>
      <div className="navbaar-2  ">
        <div className="filter-by">Filter by-</div>
        <div className="no-filter" onClick={() => setItems(items)}>
          No Filter
        </div>
        <div
          className="mobile"
          onClick={() => handleFiltterBycategory("mobiles")}
        >
          Mobile
        </div>
        <div
          className="laptop"
          onClick={() => handleFiltterBycategory("laptops")}
        >
          Laptops
        </div>
        <div
          className="tablet"
          onClick={() => handleFiltterBycategory("tablets")}
        >
          Tablets
        </div>
        <div
          className="greater-number"
          onClick={() => handleFiltterByprice(29999)}
        >
          &#x2265;= 29999
        </div>
        <div
          className="greater-number1"
          onClick={() => handleFiltterByprice(49999)}
        >
          &#x2265;= 49999
        </div>
        <div
          className="greater-number2"
          onClick={() => handleFiltterByprice(69999)}
        >
          &#x2265;= 69999
        </div>
        <div
          className="greater-number3"
          onClick={() => handleFiltterByprice(89999)}
        >
          &#x2265;= 89999
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {items2.map((product) => {
            return (
              <>
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 my-3 text-center"
                >
                  <div className="card" >
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={product.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
     
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button
                        onClick={() =>
                          handleAddtocart(
                            product.id,
                            product.price,
                            product.title,
                            product.description,
                            product.imgSrc
                          )
                        }
                        className="btn btn-warning"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
