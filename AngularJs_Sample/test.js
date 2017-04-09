angular.module("myapp",[])

.controller("HelloController",function($scope){
	$scope.student ={firstName:'Dipesh',
					lastName: 'Patel',
					rollNo: 100651017001,
					marks:[80,90,100,95]};
	$scope.quntity= 1;
	$scope.cost =30;
	$scope.total =$scope.student.marks.reduce(( acc, cur ) => acc + cur,0);
});