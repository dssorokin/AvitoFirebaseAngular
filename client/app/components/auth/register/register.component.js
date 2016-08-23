/**
 * Created by projs on 04.08.16.
 */
import template from './register.html';
import controller from '../auth.controller';

let registerComponent = {
  restrict: 'E',
  bindings: {
    formTitle: '@',
    submitAction: '&',
    errors: '='
  },
  template,
  controller
};

export default registerComponent;
