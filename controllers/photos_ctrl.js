
Photos.controller('PhotosCtrl',
  ['$scope',
    'instagramResponse',
    function($scope, instagramResponse) {

      $scope.images = instagramResponse.data;
      $scope.instagramFilter;
      $scope.instagramFilters = ['Normal', 'Reyes', 'Lark',
                                 'Valencia', 'Inkwell', 'Ludwig'];
      $scope.allHashtags = ["None"];
      $scope.selectedHashtags = ["None"];
      $scope.offset = 0;

      $scope.toggleSelection = function(hashtag){
        var index = $scope.selectedHashtags.indexOf(hashtag);
        if (index > -1){
          $scope.selectedHashtags.splice(index, 1);
        } else {
          $scope.selectedHashtags.push(hashtag);
        }
      };

      $scope.hashtagFilter = function(image){
        if (image.tags.length === 0 && $scope.selectedHashtags.indexOf("None") > -1) {
          return true;
        }
        var selectedLength = $scope.selectedHashtags.length;
        var imageTagLength = image.tags.length;
        for (var i = 0; i < imageTagLength; i++){
          for (var j = 0; j < selectedLength; j++){
            if (image.tags[i] === $scope.selectedHashtags[j]){
              return true;
            }
          }
        }
        return false;
      };

      $scope.prevPage = function() {
        if ($scope.offset >= 12) {
          $scope.offset -= 12;
        }
      }

      $scope.nextPage = function() {
        if (!($scope.offset + 12 > $scope.filter.length - 1)) {
          $scope.offset += 12;
        }
      }

      (function(){
        $scope.images.forEach(function(image){
          image.tags.forEach(function(tag){
            $scope.allHashtags.push(tag);
            $scope.selectedHashtags.push(tag);
          });
        });
      }());

}]);

