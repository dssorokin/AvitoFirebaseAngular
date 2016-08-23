import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createProductComponent from './createProduct.component';
import angularFileUpload from 'ng-file-upload';
import currencyDirective from './file.directive';
import angularMessages from 'angular-messages';
import modal from 'angular-ui-bootstrap/src/modal'

let createProductModule = angular.module('createProduct', [
  uiRouter,
  angularFileUpload,
  angularMessages,
  modal
])
  .component('createProduct', createProductComponent)
  .directive('currencyDirective', currencyDirective)

  .name;

export default createProductModule;
