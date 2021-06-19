import {useRef, useState} from "react";

import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountValid , setAmountValid]= useState(true);
const inputRef = useRef();
const submitHandler = event =>{
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
      setAmountValid(false);
      return;
    }

  props.onAddtoCart(enteredAmountNumber);



}

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: 'amount',
          name: 'amount',
          type: 'text',
          min: '1',
          max: '5',
          defaultValue: '1',
        }}
      />
      {!setAmountValid && <p>Please Enter Valid Amount </p>}
      <button>+ Add </button>
    </form>
  );
};

export default MealItemForm;
