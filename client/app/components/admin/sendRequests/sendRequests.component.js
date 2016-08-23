import template from './sendRequests.html';
import controller from './sendRequests.controller';
import './sendRequests.styl';

let sendRequestsComponent = {
  restrict: 'E',
  replace: true,
  bindings: {
    sendRequests: '<'
  },
  template,
  controller
};

export default sendRequestsComponent;
