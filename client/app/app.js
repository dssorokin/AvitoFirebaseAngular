import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import firebase from 'firebase';
import ngFirebase from 'angularfire';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngFirebase
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .run(function ($transitions, $state) {
    "ngInject";

    var forbiddenStates = [
      "admin"
    ];

    forbiddenStates.forEach((state) => {
      $transitions.onError({to: 'admin.*'}, (a, b) => {
        $state.go('register');
      })
    });


  })

  .component('app', AppComponent)
  .name;
