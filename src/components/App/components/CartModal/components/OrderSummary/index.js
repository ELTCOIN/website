import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './components/CartItem';

class OrderSummary extends Component {
  totalPrice() {
    return (this.props.cartItems
      .map(item => item.product.usdPrice * item.amount)
      .reduce((a, b) => a + b, 0) + 9.99
    ).toFixed(2);
  }

  render() {
    const { cartItems } = this.props;

    if (!cartItems || cartItems.length === 0) {
      return (
        <div className="has-text-centered">
          <strong>Your bag is empty</strong>
        </div>
      );
    }

    return (
      <div className="has-text-centered">
        {cartItems.map(item => (
          <CartItem key={item.productVariant.id} item={item} />
        ))}
        <hr />
        <ul style={{ textAlign: 'left' }}>
          <li>
            <span style={{ float: 'left', fontWeight: 'bold', width: '5rem' }}>
              Shipping
            </span>{' '}
            $ 9.99
          </li>
          <li>
            <span style={{ float: 'left', fontWeight: 'bold', width: '5rem' }}>
              Total
            </span>
            $ {this.totalPrice()}
          </li>
        </ul>
        <button
          className="button is-dark"
          style={{ textAlign: 'right' }}
          onClick={() => {
            this.props.loadNextPage();
          }}
        >
          Order
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(OrderSummary);