import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import productModule from '../../common/product/product';

let homeModule = angular.module('home', [
  uiRouter,
  productModule
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve: {products: resolveProducts}
    });
})
  


.component('home', homeComponent)

.name;

resolveProducts.$inject = ['productService'];

function resolveProducts(productService) {
  return productService.getAll()
    .then((products) => {
      return productService.changeUidOnUsername(products);
    });
}

export default homeModule;
