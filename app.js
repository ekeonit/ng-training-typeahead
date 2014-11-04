app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});