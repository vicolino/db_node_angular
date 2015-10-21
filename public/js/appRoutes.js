angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'LoginController'
		})
		// votation
		.when('/vote', {
			templateUrl: 'views/vote.html',
			controller: 'VoteController'
		})
		// resume
		.when('/resume', {
			templateUrl: 'views/resume.html',
			controller: 'ResumeController'
		})

	$locationProvider.html5Mode(true);

}]);
