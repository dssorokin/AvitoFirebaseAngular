/**
 * Created by projs on 03.08.16.
 */
import angular from "angular";
import firebaseDataService from "./firebaseData.service";
import showDuringResolve from './loader.directive';

export default angular.module('app.core', [])
  .directive('showDuringResolve', showDuringResolve)
  .factory('FirebaseDataService', firebaseDataService)
  .name;
