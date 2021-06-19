import { Fragment } from 'react';
import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    {console.log('ads')}
   return <div className={classes.backdrop} onClick={props.onClose}/>;
 };

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Model = (props) =>{

return (
  <Fragment>
    {ReactDom.createPortal(<Backdrop onClick={props.onClose}  />, portalElement)}
    {ReactDom.createPortal(
      <ModalOverlay> {props.children} </ModalOverlay>,
      portalElement
    )}
  </Fragment>
);


}

export default Model;




// import { Fragment } from 'react';
// // import ReactDOM from 'react-dom';

// // import classes from './Modal.module.css';

// // const Backdrop = (props) => {
// //   return <div className={classes.backdrop} />;
// // };

// // const ModalOverlay = (props) => {
// //   return (
// //     <div className={classes.modal}>
// //       <div className={classes.content}>{props.children}</div>
// //     </div>
// //   );
// // };

// // const portalElement = document.getElementById('overlays');

// // const Modal = (props) => {
// //   return (
// //     <Fragment>
// //       {ReactDOM.createPortal(<Backdrop />, portalElement)}
// //       {ReactDOM.createPortal(
// //         <ModalOverlay>{props.children}</ModalOverlay>,
// //         portalElement
// //       )}
// //     </Fragment>
// //   );
// // };

// // export default Modal;
