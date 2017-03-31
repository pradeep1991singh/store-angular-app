app
  .controller('ProductController', function($scope, $routeParams, $http) {
    $scope.productId = $routeParams.id;
    $scope.product = {};

    Array.prototype.filter = function(predicateFunction) {
      var results = [];
      this.forEach(function(itemInArray) {
        if (predicateFunction(itemInArray)) {
          results.push(itemInArray);
        }
      });
      return results;
    };    

    $http.get('/app/scripts/services/products.json', { id: $scope.productId }).then(function(res) {
        var product = res.data.filter(function(x) { 
          return x.id == $scope.productId;
        });
        $scope.product = product[0];
      }, function(error) {
        console.log(error);
      });

    $scope.tab = 1;

    $scope.selectTab = function(setTab) {
      $scope.tab = setTab;
    };

    $scope.isSelected = function(checkTab) {
      return $scope.tab == checkTab;
    };

    $scope.review = {}

    $scope.starRatings = [
      {name: '1 Star', value: 1},
      {name: '2 Star', value: 2},
      {name: '3 Star', value: 3},
      {name: '4 Star', value: 4},
      {name: '5 Star', value: 5}
    ];
    $scope.starSelected = $scope.starRatings[3];

    $scope.addReview = function() {
      $scope.review.stars = $scope.starSelected.value;
      $scope.product.reviews.push($scope.review);
      $scope.review = {};
    };

  });