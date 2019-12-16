import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

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

export default class ProductCard extends React.Component {
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
      const { id, title, category, price, description, image, SHOP_ADDRESS } = this.props;
      const { quantity } = this.state;
  
      return (
        <div className="product-card">
          <h2 className='product-card--title'>{title}</h2>
          <Img fluid={image.childImageSharp.fluid} />
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