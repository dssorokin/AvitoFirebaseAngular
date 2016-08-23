import angular from 'angular';
import Home from './home/home';
import Auth from './auth/auth';
import Admin from './admin/admin';
import singleProduct from './singleProduct/singleProduct';

let componentModule = angular.module('app.components', [
  Home,
  Auth,
  Admin,
  singleProduct
])

.name;

export default componentModule;
