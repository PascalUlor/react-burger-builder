import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let addIngredients = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map(
      (_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);
    if ( addIngredients.length === 0) {
      addIngredients = <p>Pleases Add ingredients to your burger</p>
    }
    return(
      <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {addIngredients}
      <BurgerIngredient type="bread-bottom" />
      </div>
    );
};

export default burger;
