/**
 * Created by projs on 23.08.16.
 */
let commentFactory = (FirebaseDataService, $firebaseArray, $firebaseObject, $q, User) => {
  "ngInject";
  var comments = FirebaseDataService.comments,
    products = FirebaseDataService.products,
    tableName = 'comments';

  let service = {
    createComment,
    getCommentsByProduct
  };

  return service;


  function createComment(senderId, productId, text) {
    var comment = {
      senderId,
      productId,
      text
    };

    return addCommentToDatabase(comment)
      .then((ref) => addRelationToProduct(ref.key, productId));
  }

  function addCommentToDatabase(comment) {
    var list = $firebaseArray(comments);

    return list.$add(comment);
  }

  function addRelationToProduct(commentId, productId) {
    var obj = { here: true };
    return products
      .child(productId)
      .child(tableName)
      .child(commentId)
      .set(obj);
  }

  function getCommentsByProduct(productId) {
    var ref = products.child(productId).child(tableName),
      list = $firebaseArray(ref),
      allComments = [];

    return list.$loaded((commentsId) => {
      var promises = [];
      commentsId.forEach((commentId) => {
        var ref = comments.child(commentId.$id),
          promise = $firebaseObject(ref).$loaded();
        promises.push(promise);
      })
      return $q.all(promises);
    })
      .then((resComments) => {
        var promises = [];
        allComments = resComments;
        resComments.forEach((resComment) => {
          var promise = User.getUserInfoById(resComment.senderId);
          promises.push(promise);
        })
        return $q.all(promises);
      })
      .then((users) => {
        return allComments.map((comment, index) => {
          comment.userInfo = users[index];
          return comment;
        });
      })
  }

}

export default commentFactory;
