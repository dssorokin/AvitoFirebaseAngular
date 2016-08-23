import firebase from 'firebase';

let UserFactory = function ($firebaseArray ,$firebaseObject ,FirebaseDataService) {
  "ngInject";
  var users = FirebaseDataService.users;

  let getUsers = function() {
    var list = $firebaseArray(users);
    return list;
  }

  let getUserInfoById = function(uid) {
    var ref = users.child(uid);
    return $firebaseObject(ref).$loaded()
      .then((user) => user.info);
  }


  let createRelationOneToMany = function(tableName, userId, id) {
    var obj = {
      here: true
    };
    return users.child(userId).child(tableName).child(id).set(obj);
  }


  let addUserToDatabase = function(user) {
    var userRef = users.child(user.uid).child('info').set({
      "username": user.username,
      "email": user.email
    });
  }

  // let changeUidOnUsername()

  return {
    getUsers,
    addUserToDatabase,
    getUserInfoById,
    createRelationOneToMany
  };
};

export default UserFactory;
