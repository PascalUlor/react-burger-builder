import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional/stateless component
  componentWillUpdate(){
    console.log('[OrderSummary] WillUpdate');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
        </li>);
      });
    return (
      <Aux>
      <h3>Your Order</h3>
      <p>A Delicious Burger</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {this.props.price}</strong></p>
      <p>Continue</p>
      <Button btnType="Danger" clicked={this.props.cancel}>Cancel</Button>
      <Button btnType="Success"  clicked={this.props.continue}>Continue?</Button>
    </Aux>
    );
  }
}

export default OrderSummary;
