import template from './myRequests.html';
import controller from './myRequests.controller';
import './myRequests.styl';

let myRequestsComponent = {
  restrict: 'E',
  bindings: {
    myRequests: '<'
  },
  template,
  controller
};

export default myRequestsComponent;
