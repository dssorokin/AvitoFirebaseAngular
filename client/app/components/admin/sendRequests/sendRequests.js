import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sendRequestsComponent from './sendRequests.component';

let sendRequestsModule = angular.module('sendRequests', [
  uiRouter
])

.component('sendRequests', sendRequestsComponent)

  .config(($stateProvider) => {
    "ngInject";
    
    $stateProvider
      .state('admin.sendRequests', {
        url: '/sendRequests',
        component: 'sendRequests',
        resolve: {
          sendRequests: resolveSendRequests,
        }
      })
  })
.name;

resolveSendRequests.$inject = ['requestService'];

function resolveSendRequests(requestService) {
  return requestService.getSendRequests();
}

export default sendRequestsModule;
