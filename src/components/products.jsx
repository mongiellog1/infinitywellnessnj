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
    const { id, name, title, category, price, description, mandala, SHOP_ADDRESS} = this.props;
    const { quantity } = this.state;

    return (
      <div className="product-card">
        <h2 style={{ margin: "1rem 0 0.5rem 0" }}>{title}</h2>
        <Img fluid={mandala.childImageSharp.fluid} />
        <div className="product-card__footer">
            <NumberInput
              increment={this.increment}
              decrement={this.decrement}
              onChange={this.onChange}
              quantity={quantity}
            />
          <button
            key={id}
            className="snipcart-add-item button"
            data-item-id={id}
            data-item-name={title}
            data-item-price={price}
            data-item-url={SHOP_ADDRESS}
            data-item-categories={category}
            data-item-description={description}
            data-item-quantity={quantity}
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
            mandala={mandalaImages[product.name]}
          />
        ))
      }
    </div>
    <p className="light-green" style={{marginTop: "2rem" }}>All mandala cards are 4 ½ by 6 inches when folded, or 9 x 6 inches when open. Mandala art is on the front side of the card, and the mandala title and a message is on the back of the card. The insides are left blank for you to write in, as you like. </p>
    <p className="light-green">All cards are printed on 30% recycled paper, envelopes are 30% recycled. Mail order packaging is made from recycled material as well. </p>
  </div>
);

export default Products;
