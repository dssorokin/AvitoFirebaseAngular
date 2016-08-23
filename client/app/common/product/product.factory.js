/**
 * Created by projs on 05.08.16.
 */
import angular from 'angular';
import firebase from 'firebase';

let productFactory = ($firebaseArray , $firebaseObject, FirebaseDataService, authService, $q, User) => {
  "ngInject";
  var users = FirebaseDataService.users,
    products = FirebaseDataService.products,
    storageRef = firebase.storage().ref();

  let service = {
    createProduct,
    getProductsByUser,
    getAll,
    getProductById,
    changeUidOnUsername,
    getProductsId
  };

  return service;

  function createProduct (product) {
    var list = $firebaseArray(products),
      deferred = $q.defer(),
      uploadTask = uploadFile(product.photo),
      userId = authService.getCurrentUserId();
    uploadTask.on('state_changed', () => {}, (err) => {
      deferred($q.reject(err));
    }, () => {
      product.photo = uploadTask.snapshot.downloadURL;
      product.user = userId;
      list.$add(product)
        .then((ref) => addProductToUser(ref))
        .then(() => {
          deferred.resolve(true);
        });
    });

    return deferred.promise;

  }

  function getAll() {
    var list = $firebaseArray(products).$loaded();
    return list;
  }

  function addProductToUser(ref) {
    var productId = ref.key,
      userId = authService.getCurrentUserId(),
      obj = {here: true},
      userProductsRef = users.child(userId).child('products').child(productId);

    userProductsRef.set(obj);

  }

  function uploadFile(file) {
    var fileId = file.name,
      userId = authService.getCurrentUserId();
    return storageRef.child('images/' + userId + '/' + fileId).put(file);
  }

  function getProductsByUser(uid) {
    var allProductsId = $firebaseArray(users.child(uid).child('products')),
      promises = [];
    allProductsId.forEach((product) => {
      var product = $firebaseObject(products.child(product.$id)).$loaded();
      promises.push(product);
    });
    return $q.all(promises);
  }

  function getProductsId(uid) {
    return $firebaseArray(users.child(uid).child('products')).$loaded();
  }

  function changeUidOnUsername(product) {
    if(angular.isArray(product)) {
      var promises = [],
        products = product;
      products.forEach((product) => {
        var promise = User.getUserInfoById(product.user);
        promises.push(promise);
      });
      return $q.all(promises)
        .then((users) => {
          return products.map((item, index) => {
            item.user = users[index]['username'];
            return item;
          });
        });
    } else {
      return User.getUserInfoById(product.user)
        .then((user) => {
          product.user = user.username;
          return product;
        });
    }
  }

  function getProductById(id) {
    var ref = products.child(id);
    return $firebaseObject(ref).$loaded();
  }
}

export default productFactory;
