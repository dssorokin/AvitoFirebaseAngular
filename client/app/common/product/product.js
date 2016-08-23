/**
 * Created by projs on 05.08.16.
 */
import angular from 'angular';
import productFactory from './product.factory';
import $firebase from 'angularfire';
import core from '../core/core';
import authModule from '../../components/auth/auth';

let productModule = angular.module('product', [
  $firebase,
  core,
  authModule
])

  .factory('productService', productFactory)

  .name;

export default productModule;
