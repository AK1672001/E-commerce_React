import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";

const Searchitem = () => {
  // console.log("terms",useParams())
  const { term } = useParams();
  const [filterdata, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase()));
        console.log("terms",data)
        setFilterData(data)
    };
    filteredData();
  }, [term]);

  return (
    <>
      <Navbar />

      {/* <div>Searchitem {term}</div>  */}
       



       
        <div className="d-flex flex-wrap justify-content-between search2">
        {filterdata.map((item) => (
          <div
            key={item.id}
            style={{ flex: "0 0 calc(33.33% - 10px)", marginBottom: "20px",marginTop:"5%" }}
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

              <div className="card-body cardborder">
                <h5 className="card-title titlebaar">{item.title}</h5>
                <p className="card-text description">{item.description}</p>
                <button className="btn btn-primary mx-3">{item.price} ₹</button>
                <button className="btn btn-warning">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div> 
      {/* <div>Searchitem {term}</div>  */}

    </>
  );
};

export default Searchitem;
