import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('/dataList.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching the data",error);
      }
    }
    fetchData();
  },[]);

  return (
    <section className="product-section">
      <div className="w-full ">
        <h1>Choose From Our Balloon Decoration</h1>
      </div>
      <div className="product w-full flex items-center justify-center gap-10 p-5 flex-wrap">
        {products.map((item, index) => (
          <div key={index} className="card">
            <img
              src={item.mainImage}
              alt="card"
            />
            <div className="overlay">
              <span>
                <h1>{item.id}</h1>
              </span>
              <h2>{item.Name}</h2>
              <div className="Contact_btn">
                <Link to={`SingleProduct/${item.id}`}>
                  Click Me<i className="ri-arrow-right-line"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
