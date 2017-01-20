Restaurant.controller('RestaurantCtrl', ['$scope', function($scope){
  $scope.restaurants = [];
  $scope.name;
  $scope.typeOfFood;
  $scope.createRestaurant = function(valid) {
    if (!valid) { return };
    var restaurant = {};
    restaurant.name = $scope.name;
    restaurant.typeOfFood = $scope.typeOfFood;
    $scope.restaurants.push(restaurant);
    $scope.name = undefined;
    $scope.typeOfFood = undefined;
  };
}]);