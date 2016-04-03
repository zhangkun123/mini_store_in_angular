var orderApp = angular.module('orderApp', ['ngRoute']);

orderApp.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'partials/customers_view.html'
		})
		.when('/orders',
		{
			templateUrl: 'partials/orders_view.html'
		})
});