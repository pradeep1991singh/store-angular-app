var app = angular
  .module('store', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
			.when('/', {
				templateUrl: 'views/products.html',
				controller: 'ProductsController'
			})
			.when('/product/:id', {
				templateUrl: 'views/product.html',
				controller: 'ProductController'
			})      
			.otherwise({
				redirectTo: '/'
			})
  });