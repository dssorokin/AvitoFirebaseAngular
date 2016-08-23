import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import Core from './core/core';
import Product from './product/product';
import Request from './request/request';

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  Core,
  Product,
  Request
])

.name;

export default commonModule;
