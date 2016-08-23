/**
 * Created by projs on 23.08.16.
 */
import angular from 'angular';
import commentFactory from './comment.factory';
import core from '../core/core';
import $firebase from 'angularfire';

let commentModule = angular.module('comment', [
  core,
  $firebase
])
  .factory('commentService', commentFactory)

  .name;
export default commentModule;


