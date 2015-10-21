'use strict';

angular.module('LoginCtrl', []).controller('LoginController', function($scope, $rootScope, $location, $http) {
	$scope.login = function(user) {
		$scope.errorMessage = "";
		if(user.user == "" || user.user === "User"){
        $scope.errorMessage = "Please, fill user field.";
        return;
    }
		if(user.pass == "" || user.pass === "User"){
        $scope.errorMessage = "Please, fill user field.";
        return;
    }
		var login = {
			user: user.user,
			pass: user.pass
		};
		$http.post("/api/user", login).success(function(data) {
				$rootScope.user = data.body;
				$location.path("/vote");
			}).error(function (data) {
				$scope.errorMessage = "User not found. Please check your user and password."
			});
	}
});
