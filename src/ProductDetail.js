import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { items } from "./Data";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  //  console.log(id)
  const [product, setProduct] = useState({});
  const [relatedproducts, setRelatedProduct] = useState([]);

  useEffect(() => {
    // const item2=items;
    const filterProduct = items.filter((product) => {
      return product.id == id;
    });
    //  console.log("only filter product", filterProduct);
    setProduct(filterProduct[0]);

    //  console.log("id amit", filterProduct[0]);
    const relatedproducts = items.filter((p) => p.category == product.category);
    setRelatedProduct(relatedproducts);
    // console.log("releated product", relatedproducts);
  }, [id, product.category]);

  return (
    <>
      <Navbar />
      <div className="container con">
        <div className="productimg">
          <img id="productimg-1" src={product.imgSrc} alt="" />
        </div>
        <div id="text-center" className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
      <h1 className="rep">Related Product</h1>
      <div className="  container-2">
        <div className="container-3">
          {relatedproducts.map((item) => (
            <div
              className="itemfex"
              key={item.id}
              // style={{ flex: "0 0 calc(33.33% - 10px)", marginBottom: "20px" }}
            >
              <div
                style={{
                  border: "1px solid green",
                  width: "70%",
                  margin: "auto",
                }}
                className="card"
              >
                <Link
                  to={`/product/${item.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                </Link>

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="container-4">
                  <button id="buttom-4" className="btn btn-primary mx-3 ">
                    {item.price} ₹
                  </button>
                  <button className="btn btn-warning">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
