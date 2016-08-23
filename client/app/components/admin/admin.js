import angular from 'angular';
import uiRouter from 'angular-ui-router';
import adminComponent from './admin.component';
import createProduct from './createProduct/createProduct';
import sendRequests from './sendRequests/sendRequests';
import myRequests from './myRequests/myRequests';

let adminModule = angular.module('admin', [
  uiRouter,
  createProduct,
  sendRequests,
  myRequests
])

  .component('admin', adminComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('admin', {
        abstract: true,
        url: '/admin',
        component:'admin',
        resolve: {
          user: resolveUser
        }
      })
      .state('admin.main', {
        url: '/main',
        component: 'createProduct',
      })
  })

  .name;

resolveUser.$inject = ['authService'];

function resolveUser(authService) {
  return authService.firebaseAuthObject.$requireSignIn();
}






export default adminModule;
