import Model from '../UI/Model';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = [{ id: '2', name: 'samose', amout: 5, price: 12.0 }].map(
    (item, index) => <li key={index}>{item.name}</li>
  );
  return (
    <Model onClose={props.onClose}>
  
        <ul className={classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
          <span> Total Amount </span>
          <span> 324.32 </span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      
    </Model>
  );
};

export default Cart;
