import template from './commentBox.html';
import controller from './commentBox.controller';
import './commentBox.styl';

let commentBoxComponent = {
  restrict: 'E',
  bindings: {
    productId: '<',
    isLoggedIn: '&',
    redirectToRegister: '&',
    comments: '<'
  },
  template,
  controller
};

export default commentBoxComponent;
