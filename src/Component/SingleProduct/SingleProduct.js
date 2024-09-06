import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleProduct = () => {
  const [itemData, setItemData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dataList.json');
        const data = await response.json();
        const product = data.find(item => item.id === parseInt(id));
        setItemData(product);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!itemData) return <div>Loading...</div>;

  return (
    <section className="product-section">
      <div className="w-full">
        <h1>{itemData.Name}</h1>
      </div>
      <div className="product w-full flex items-center justify-center gap-10 p-5 flex-wrap">
        <div className="additional-images w-full flex items-center justify-center gap-10 flex-wrap">
          {itemData.allImage.map((image, index) => (
            <div key={index} className="card">
              <img
                src={`${process.env.PUBLIC_URL}${image}`}
                alt={`${itemData.Name} ${index + 1}`}
                onError={(e) => e.target.src = "/default-image.jpg"} 
              />
              <div className="overlay">
                <span>
                  <h1>{index + 1}</h1> 
                </span>
                <h2>{itemData.Name}</h2>
                <div className="Contact_btn">
                  <a href='tel:+798989090'>
                    Contact<i className="ri-arrow-right-line"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default SingleProduct;
