import React from "react";

// CHILD ----HOW THE PRODUCT IS SHOWN
const Product = (props) => {
  return (
    <div className="product">
   
        <img height="480px" src={props.product.image} alt={`${props.product.title} book`} />
    
      <h1 className="title">{props.product.title}</h1>

      <p className="price">${props.product.price}</p>

      <button onClick={() => props.addItem(props.product)}>Add to cart</button>
    </div>
  );
};

export default Product;
