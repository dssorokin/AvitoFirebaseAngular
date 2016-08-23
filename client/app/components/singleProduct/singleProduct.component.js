import template from './singleProduct.html';
import controller from './singleProduct.controller';
import './singleProduct.styl';

let singleProductComponent = {
  restrict: 'E',
  bindings: {
    product: '<',
    comments: '<'
  },
  template,
  controller
};

export default singleProductComponent;
