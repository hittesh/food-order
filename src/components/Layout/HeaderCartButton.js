import {useContext} from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props =>{
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((currNumer , item) => {
    return currNumer + item.amount; 
  } ,0 );
return (
  <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItem}</span>
  </button>
);
}


export default HeaderCartButton;;