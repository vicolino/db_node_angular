angular.module('ResumeCtrl', []).controller('ResumeController', function($scope, $rootScope, $routeParams, $http) {
  $scope.user = $rootScope.user;
  $scope.errorMessage = $routeParams.msg;

  $http.get("/api/restaurants/top").success(function(data) {
      $scope.restaurant = data.body;
      console.log(data.body);
  });
});
