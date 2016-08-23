import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commentBoxComponent from './commentBox.component';


let commentBoxModule = angular.module('commentBox', [
  uiRouter
])

  .component('commentBox', commentBoxComponent)

  .name;

export default commentBoxModule;
