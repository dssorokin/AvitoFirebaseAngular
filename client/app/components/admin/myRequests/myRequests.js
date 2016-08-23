import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myRequestsComponent from './myRequests.component';

let myRequestsModule = angular.module('myRequests', [
  uiRouter
])

  .component('myRequests', myRequestsComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider.state('admin.myRequests', {
      url: '/myRequests',
      component: 'myRequests',
      resolve: {
        myRequests: resolveMyRequests
      }
    })
  })

  .name;


resolveMyRequests.$inject = ['requestService']

function resolveMyRequests(requestService) {
  return requestService.getMyRequests();
}

export default myRequestsModule;
