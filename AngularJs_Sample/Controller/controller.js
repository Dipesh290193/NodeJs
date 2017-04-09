angular.module("SampleController",[])

.controller("studentController",function($scope){
	$scope.student = {
		firstName: 'Dipesh',
		lastName: 'Patel',
		name: function ()
		{
			let  studentObj  = $scope.student
			return studentObj.firstName + " " + studentObj.lastName
		}
	}
})