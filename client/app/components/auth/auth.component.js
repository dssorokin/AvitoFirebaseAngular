import template from './auth.html';
import controller from './auth.controller';
import './auth.styl';

let authComponent = {
  restrict: 'E',
  bindings: {
    "formTitle": "@"
  },
  template,
  controller,
  transclude: true
};

export default authComponent;
