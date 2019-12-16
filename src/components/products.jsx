import React from "react";
import ProductCard from './product_card';

const Products = ({ products, SHOP_ADDRESS, mandalaImages }) => (
  <div className="container container--pad-top">
    <h1 style={{ marginBottom: "1rem"}}>Mandala Cards</h1>
    <p className="light-green" style={{ marginBottom: "2.5rem" }}>All the mandala images are created by hand.</p>
    <p className="light-green" style={{
      marginBottom: "2rem",
      textDecoration: "underline",
      fontSize: "1.1em",
      textAlign: "center"
    }}>
      <b>
        A minimum purchase of $20 is required. All packages have a $5 shipping and handling fee.
      </b>
  </p>
    <div className="shop-products">
      {
        products.map((product, idx) => (
          <ProductCard
            key={idx}
            {...product}
            SHOP_ADDRESS={SHOP_ADDRESS}
            image={mandalaImages[product.name]}
          />
        ))
      }
    </div>
    <p className="light-green" style={{ marginTop: "2rem" }}>All mandala cards are 4 ½ by 6 inches when folded, or 9 x 6 inches when open. Mandala art is on the front side of the card, and the mandala title and a message is on the back of the card. The insides are left blank for you to write in, as you like. </p>
    <p className="light-green">All cards are printed on 30% recycled paper, envelopes are 30% recycled. Mail order packaging is made from recycled material as well. </p>
  </div>
);

export default Products;
