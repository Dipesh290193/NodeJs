
// Initialize Firebase

var config = {
    apiKey: "AIzaSyDMPAB0594jz3Ju2uY2q-6EJ0lUDAgKaPI",
    authDomain: "cs4220-example-666d4.firebaseapp.com",
    databaseURL: "https://cs4220-example-666d4.firebaseio.com",
    projectId: "cs4220-example-666d4",
    storageBucket: "cs4220-example-666d4.appspot.com",
    messagingSenderId: "62916517939"
  };
  firebase.initializeApp(config);

angular.module('fbApp', ['firebase'])    
	.controller('SyncController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {

	        let ref = firebase.database().ref().child("greeting")        

	        $scope.data = $firebaseObject(ref)   

	        // download the data into a local object       
	         let syncObject = $firebaseObject(ref);        

	         // synchronize the object with a three-way data binding        
	         syncObject.$bindTo($scope, "threeWayData")    
	     }])