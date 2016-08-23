/**
 * Created by projs on 03.08.16.
 */
import firebase from "firebase";

let firebaseDataService = () => {


  var config = {
    apiKey: "AIzaSyAsqkJ0APF8Z6_Vw0q3nTfL3Om2v2WLUz4",
    authDomain: "example-d1616.firebaseapp.com",
    databaseURL: "https://example-d1616.firebaseio.com",
    storageBucket: "example-d1616.appspot.com",
  };
  var FBApp = firebase.initializeApp(config);

  var root = FBApp.database().ref();

  var service = {
    root: root,
    users: root.child('users'),
    products: root.child('products'),
    requests: root.child('requests'),
    comments: root.child('comments')
  };

  return service;
};

export default firebaseDataService;
