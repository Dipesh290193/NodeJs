angular
    .module('FactCtrl', [])
    .controller('FactController', function($scope, FactService) {

        $scope.getMathFact = () => {
            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {
                $scope.num = response.number
                $scope.fact = response
            })
        }

        $scope.getTriviaFact = () => {
            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) => {
                $scope.num = response.number
                $scope.fact = response
            })
        }

         $scope.getDateFact = () => {
            FactService.get({
                type: 'date',
                number: $scope.number,
            }, (response) => {
                $scope.num = $scope.number
                $scope.fact = response
            })
        }

        $scope.getRandomFact = () => {
             const type =Math.floor(Math.random() * 3)
             if(type === 0)
             {
                $scope.number =Math.floor(Math.random() * 100)
                $scope.getMathFact()
             }
             else if(type === 1)
             {
                $scope.number =Math.floor(Math.random() * 100)
                $scope.getTriviaFact()
             }
             else
             {
                const month =Math.floor(Math.random() * 11) + 1 
                const day =Math.floor(Math.random() * 30) + 1
                $scope.number = month+"/"+day
                $scope.getDateFact()
             }

        }
})