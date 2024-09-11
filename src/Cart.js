import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { useCart } from "./App";
import { Link } from "react-router-dom";

const Cart = () => {
  const {removeItem2,cart1,addToCart,clearAll} = useCart();
  console.log('remove',removeItem2)
  // console.log("inside cart component");
    // const [cart2, setCart2] = useState([]);
  
 function handleRemove(id){
   removeItem2(id);
 }
  const clearAllItem=()=>{
    clearAll();
  }
  return (
    <>
      <Navbar />
      <div className="container my-5" style={{ width: "54%" }}>
        {
        cart1.length == 0 ? (
          <>
            <div id="dangercart" className="text-center">
              <h1>Your Cart is Empty</h1>
              <Link to={"/"} className="btn btn-warning">
                Continue Shopping...
              </Link>
            </div>
          </>
        ) : (
          cart1.map((product) => {
            return (
              <>
                <div
                id="cartimg"
                  className="card mb-3 my-5"
                  // style={{ width: "700px", marginTop: "25px" }}
                >
                  <div className="row g-0">
                    <div id="column-1" className="col-md-4">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary mx-3">
                          {product.price} ₹
                        </button>
                        <button onClick={()=>handleRemove(product.id)} className="btn btn-warning">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      {cart1.length != 0 && (
        <div
          id="cop"
          className="container text-center my-5  "
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          <button className="btn btn-warning mx-5 ">CheckOut</button>
          <button onClick={clearAllItem} className="btn btn-danger">Clear Cart</button>
        </div>
      )}
    </>
  );
};

export default Cart;
