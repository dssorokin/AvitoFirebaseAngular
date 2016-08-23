import angular from 'angular';
import uiRouter from 'angular-ui-router';
import singleProductComponent from './singleProduct.component';
import modal from 'angular-ui-bootstrap/src/modal'
import commentBox from './commentBox/commentBox';
import auth from '../auth/auth';
import comment from '../../common/comment/comment';

let singleProductModule = angular.module('singleProduct', [
  uiRouter,
  modal,
  auth,
  commentBox,
  comment
])
  .component('singleProduct', singleProductComponent)

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider.state('singleProduct', {
      url: '/products/:id',
      component: 'singleProduct',
      resolve: {
        product: resolveProduct,
        comments: resolveComments
      }
    });
  })
  .name;

resolveProduct.$inject = ['productService', '$stateParams'];

function resolveProduct(productService, $stateParams) {
  var id = $stateParams.id;
  return productService.getProductById(id)
    .then((product) => {
      return productService.changeUidOnUsername(product);
    });
}

resolveComments.$inject = ['commentService', '$stateParams'];

function resolveComments(commentService,$stateParams) {
  var productId = $stateParams.id;
  return commentService.getCommentsByProduct(productId);
}


export default singleProductModule;
