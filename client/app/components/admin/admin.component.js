import template from './admin.html';
import controller from './admin.controller';
import './admin.styl';

let adminComponent = {
  restrict: 'E',
  bindings: {
    user: "<"
  },
  template,
  controller
};

export default adminComponent;
