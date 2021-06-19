import { Fragment } from 'react';
import mealsimage from "../assets/meals.jpeg";
import HeaderCartButton from "../Layout/HeaderCartButton";
import classes  from "../Layout/Header.module.css";


const Header = props => {
return (
  <Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton onClick={props.onCartShown} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsimage} alt='demo project by @its_hishu' />
    </div>
  </Fragment>
);
};

export default Header;