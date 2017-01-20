
Photos.controller('PhotosCtrl',
  ['$scope',
    'instagramResponse',
    function($scope, instagramResponse) {

      $scope.images = instagramResponse.data;
      $scope.instagramFilter;
      $scope.instagramFilters = ['Normal', 'Reyes', 'Lark',
                                 'Valencia', 'Inkwell', 'Ludwig'];
      $scope.selectedHashtags = {
        selected: []
      };
      
      $scope.allHashtags;

      (function(){
        $scope.allHashtags = [];
        $scope.images.forEach(function(image){
          image.tags.forEach(function(tag){
            $scope.allHashtags.push(tag);
          });
        });
      }());

}]);

