import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';
import authService from './auth.service';
import registerComponent from './register/register.component';
import UserModule from '../../common/user/user';

let authModule = angular.module('auth', [
  uiRouter,
  UserModule
])
  .factory('authService', authService)

  .component('auth', authComponent)
  .component('register', registerComponent)

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('register', {
        url: '/register',
        template: `<auth form-title="Register">
                       <div class="form-group">
                          <label for="username">Username</label>
                          <input class="form-control"
                                 id="username"
                                 type="text"
                                 ng-model="$parent.$ctrl.user.username"
                                 name="username" 
                                 placeholder="Username"
                                 required>
                          <div class="help-block" ng-messages="createProductForm.username.$error"
                               ng-if="createProductForm.username.$touched">
                            <p ng-message="required" class="text-danger">Title of product is required.</p>
                          </div>
                        </div>
                    </auth>`
      })
      .state('login', {
        url: '/login',
        template: `<auth form-title="Login"></auth>`
      })
  })

  .name;

export default authModule;
