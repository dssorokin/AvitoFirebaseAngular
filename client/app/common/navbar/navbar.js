import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
  uiRouter
])

  .component('navbar', navbarComponent)

  .run()
  .name;
// function runFunction($location, authService) {
//   "ngInject";
//   authService.firebaseAuthObject.$onAuthStateChanged(function (authData) {
//     console.log(authData);
//   });
// }

export default navbarModule;
