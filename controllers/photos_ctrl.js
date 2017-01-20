
Photos.controller('PhotosCtrl',
  ['$scope',
    'instagramResponse',
    function($scope, instagramResponse) {

      $scope.images = instagramResponse.data;

    }]);

