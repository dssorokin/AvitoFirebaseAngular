/**
 * Created by projs on 05.08.16.
 */
import angular from 'angular';
import requestFactory from './request.factory';

let requestModule = angular.module('request', [])

  .factory('requestService', requestFactory)

  .name;

export default requestModule;
