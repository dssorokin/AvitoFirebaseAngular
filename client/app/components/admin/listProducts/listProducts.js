import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listProductsComponent from './listProducts.component';

let listProductsModule = angular.module('listProducts', [
  uiRouter
])

.component('listProducts', listProductsComponent)

.name;

export default listProductsModule;
