import React from "react";
import Img from "gatsby-image";

const Products = ({ products, SHOP_ADDRESS, mandalaImages }) => (
  <div className="shop-products">
    {
      products.map(({ id, name, category, price, description}) => (
        <div className="product">
          <h2>{name}</h2>
          <Img style={{ maxWidth: "8rem" }} fluid={mandalaImages[name].childImageSharp.fluid} />
          <button
            key={id}
            className="snipcart-add-item button"
            data-item-id={id}
            data-item-name={name}
            data-item-price={price}
            data-item-url={SHOP_ADDRESS}
            data-item-categories={category}
            data-item-description={description}>
            Buy Now
            <span>Buy Now</span>
          </button>
        </div>
      ))
    }
  </div>
);

export default Products;
