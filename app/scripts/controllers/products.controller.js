app
	.controller('ProductsController', function($scope, $http, $location) {
		$scope.welcomeMessage = 'Welcome to Angular Store application';
    $scope.products = [];

    $http.get('/app/scripts/services/products.json').then(function(res) {
        $scope.products = res.data;
      }, function(error) {
        console.log(error);
      })
	});