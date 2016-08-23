/**
 * Created by projs on 10.08.16.
 */
import firebase from 'firebase';

let requestFactory = (FirebaseDataService, User, $q, $firebaseArray, $firebaseObject, authService) => {
  "ngInject";
  var requests = FirebaseDataService.requests,
    users = FirebaseDataService.users;


  let service = {
    createRequest,
    getSendRequests,
    getMyRequests
  };
  return service;

  function _addRelationToUser(action, userId, reqId) {
    switch(action) {
      case 'sender':
            return User.createRelationOneToMany('sendRequests', userId, reqId);
            break;
      case 'dest':
            return User.createRelationOneToMany('getRequests', userId, reqId);
    }
  }

  function _addRequestToDatabase(senderId, destId, productId) {
    var list = $firebaseArray(requests),
      request = {
        senderId,
        destId,
        productId
      };
    return list.$add(request);
  }

  function createRequest(senderId, destId, productId) {
    var defer = $q.defer();
    _addRequestToDatabase(senderId, destId, productId)
      .then((ref) => {
        var reqId = ref.key;
        _addRelationToUser('sender', senderId, reqId);
        _addRelationToUser('dest', destId, reqId)
          .then(() => defer.resolve(true));
      });
    return defer.promise;
  }

  function getSendRequests() {
    var uid = authService.getCurrentUserId(),
    ref = users.child(uid).child('sendRequests');
    return $firebaseArray(ref).$loaded()
      .then((sended) => {
        var promises = [];
        sended.forEach((item) => {
          var path = requests.child(item.$id);
          promises.push($firebaseObject(path).$loaded());
        });
        return $q.all(promises);
      });
  }

  function getMyRequests() {
    var uid = authService.getCurrentUserId(),
      ref = users.child(uid).child('getRequests'),
      myRequests = [];
    return $firebaseArray(ref).$loaded()
      .then((got) => {
        var promises = [];
        got.forEach((item) => {
          var path = requests.child(item.$id);
          promises.push($firebaseObject(path).$loaded());
        });
        return $q.all(promises);
      })
      .then((reqs) => {
        var promises = [];
          myRequests = reqs;
        reqs.forEach((req) => {
          promises.push(User.getUserInfoById(req.senderId));
        });
        return $q.all(promises);
      })
      .then((users) => {
        return myRequests.map((req, index) => {
          req.senderEmail = users[index]['email'];
          req.senderUsername = users[index]['username'];
          return req;
        });
      });
  }

};

export default requestFactory;
