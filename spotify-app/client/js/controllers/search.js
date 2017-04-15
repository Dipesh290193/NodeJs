angular
    .module('SpotifyCtrl', [])
    .controller('SpotifyController', function($scope, SpotifyService) {
        $scope.searchArtist = () => {
        	$scope.albums =""
            SpotifyService.search.get({
                artist: $scope.artistname
            }, (response) => {
            	console.log(response)
                $scope.results = response
            })
        }

        $scope.showDetails = (id,name,images) =>{
        	SpotifyService.detail.get({
        		artistId: id
        	},(response) =>{
        		console.log(response)
        		$scope.name = name
        		$scope.images = images
        		$scope.results = ""
        		$scope.albums = response
        	})
        }

})