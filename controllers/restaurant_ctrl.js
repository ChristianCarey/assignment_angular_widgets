
Restaurant.controller('RestaurantCtrl', ['$scope', function($scope){

  $scope.restaurants = [];
  $scope.image;
  $scope.name;
  $scope.typeOfFood;

  $scope.createRestaurant = function(valid) {
    if (!valid) { return };

    var restaurant = {};

    restaurant.image = $scope.image;
    restaurant.name = $scope.name;
    restaurant.typeOfFood = $scope.typeOfFood;

    $scope.restaurants.push(restaurant);

    $scope.image = undefined;
    $scope.name = undefined;
    $scope.typeOfFood = undefined;
    $scope.reverse = false;
  };

  $scope.deleteRestaurant = function(index) {
    $scope.restaurants.splice(index, 1);
  };

  $scope.setSortCriterion = function(criterion) {
    if ($scope.criterion === criterion) {
      $scope.reverse = !$scope.reverse;
    } else {
      $scope.reverse = false;
    }
    $scope.criterion = criterion;
  };

  $scope.arrow = function(attr) {
    if ($scope.criterion === attr) {
      return $scope.reverse ? "↑" : "↓";
    }
  };

}]);
