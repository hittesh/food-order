import { useReducer} from 'react';

import CartContext from "./cart-context.js";

 const defaultState = {
   items: [],
   totalAmount: 0,

 };

const cartReducer = (state, action) => {

if (action.type === 'ADD_CART_ITEM') {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return { ...state, items: updatedItems, totalAmount: newTotalAmount };
}

return defaultState;
}



const  CartProvider = props => {
const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);



    const addItemToCartHandler = item => {
     // console.log(item, 'item');
        dispatchCartAction({ type: 'ADD_CART_ITEM', item: item });
    }

        const removeItemToCartHandler = id => {};


    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemToCartHandler,
    };

return <CartContext.Provider value={cartContext}>{props.children} </CartContext.Provider>;

}

export default CartProvider;