/**
 * Created by projs on 04.08.16.
 */
import firebase from 'firebase';

let authService = function($firebaseAuth, FirebaseDataService, $firebaseArray, User) {
  "ngInject";
  var firebaseAuthObject = $firebaseAuth();

  var service = {
    firebaseAuthObject,
    register,
    login,
    isLoggedIn,
    getCurrentUserId,
    getCurrentUserProfile,
    logout
  };
  return service;

  function register(user) {
     return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password)
       .then((res) => {
         var userObj = {
           uid: res.uid,
           username: user.username,
           email: user.email
         };
         User.addUserToDatabase(userObj);
         return res;
       });
  }

  function login(user) {
    return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        console.log($firebaseArray(FirebaseDataService.users));
      });
  }

  function isLoggedIn() {
    return firebaseAuthObject.$getAuth();
  }

  function getCurrentUserId() {
    return firebaseAuthObject.$getAuth().uid;
  }

  function getCurrentUserProfile() {
    return firebase.auth().currentUser;
  }

  function logout() {
    firebaseAuthObject.$signOut();
  }

};

export default authService;
