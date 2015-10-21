angular.module('VoteCtrl', []).controller('VoteController', function($scope, $rootScope, $location, $http) {

	$scope.user = $rootScope.user;

	$http.get("/api/restaurants").success(function(data) {
		$scope.restaurantes = data.body;
	});

	$scope.logout = function() {
			$location.path("/home");
	};

	$scope.vote = function(item) {
			var vote = {
				user : $scope.user,
				restaurant: item
			};
			//Must Call Vote.
			$http.post("/api/restaurants/vote", vote).success(function(data) {
				$location.path("/resume");
			});
	};
});
