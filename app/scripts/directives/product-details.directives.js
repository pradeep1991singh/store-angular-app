app
  .directive('productDetails', function() {
    return {
      restrict: "E",
      templateUrl: 'scripts/directives/product-details.html',
      controller: function($scope, $location) {
        $scope.buy = function(productID) {
          $location.path("/product/" + productID);
        };
      }
    }
  });