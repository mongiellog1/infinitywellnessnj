import React from "react";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const titleize = (str) => str.replace(/_/g, " ").replace(/\w+/g, (wrd) => wrd[0].toUpperCase() + wrd.slice(1).toLowerCase());
const isInt = (value) => (
  !isNaN(value) &&
  parseInt(Number(value)) === value &&
  !isNaN(parseInt(value, 10))
);

const NumberInput = ({ increment, decrement, quantity, onChange }) => (
  <div className="number-input">
    <FontAwesomeIcon icon={["fas", "minus"]}  onClick={decrement} />
    <input type="text" value={quantity} onChange={onChange} />
    <FontAwesomeIcon icon={["fas", "plus"]} onClick={increment} />
  </div>
);

class ProductCard extends React.Component {
  state = {
    quantity: 1
  };

  increment = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  }
  decrement = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  }
  onChange = (e) => {
    const value = e.target.value;
    if (isInt(value) && Number(value) <= 100) {
      this.setState({ quantity: Number(value) });
    } else if (value === "") {
      this.setState({ quantity: value });
    }
  }

  render() {
    const { id, name, category, price, description, mandalaImages, SHOP_ADDRESS} = this.props;

    return (
      <div className="product-card">
        <h2 style={{ margin: "1rem 0 0.5rem 0" }}>{titleize(name)}</h2>
        <Img fluid={mandalaImages[name].childImageSharp.fluid} />
        <div className="product-card__footer">
            <NumberInput
              increment={this.increment}
              decrement={this.decrement}
              onChange={this.onChange}
              quantity={this.state.quantity}
            />
          <button
            key={id}
            className="snipcart-add-item button"
            data-item-id={id}
            data-item-name={titleize(name)}
            data-item-price={price}
            data-item-url={SHOP_ADDRESS}
            data-item-categories={category}
            data-item-description={description}
            data-item-quantity={this.state.quantity}
          >
            Add To Cart
            <span>Add To Cart</span>
          </button>
          <h2 style={{ float: "right"}}>${price}</h2>
        </div>
      </div>
    )
  }
}

const Products = ({ products, SHOP_ADDRESS, mandalaImages }) => (
  <div className="container container--pad-top">
    <h1>Shop</h1>
    <p style={{color: "#777", marginBottom: "2rem" }}>NOTE: Minimum purchase of $20 is required!!</p>
    <h2>Mandala Cards</h2>
    <div className="shop-products">
      {
        products.map((product, idx) => (
          <ProductCard
            key={idx}
            {...product}
            SHOP_ADDRESS={SHOP_ADDRESS}
            mandalaImages={mandalaImages}
          />
        ))
      }
    </div>
  </div>
);

export default Products;
