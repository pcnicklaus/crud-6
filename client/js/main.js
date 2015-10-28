var app = angular.module('dogCtrl', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {

  $scope.formData = {};

  $http.get('/dogs')
    .success(function(data){
      $scope.dogData = data;
    })
    .error(function(err){
      console.log(err);
    });

  $scope.cancel = function(){
    $scope.formData = {};
    $scope.adding = $scope.editing = false;
  };

  $scope.addDog = function(){
    $http.post('/dogs', $scope.formData)
    .success(function(data){
      $scope.formData = {};
      $scope.dogData = data;
      $scope.adding = false;
    })
    .error(function(error){
      console.log(error);
    });
  };

  $scope.getDog = function(id){
    $http.get('/dog/' + id)
    .success(function(data){
      $scope.formData = data;
      $scope.adding = true;
      $scope.editing = true;
    })
    .error(function(error){
      console.log(error);
    });
  };

   $scope.removeDog = function(id){
    $http.delete('/dog/' + id)
    .success(function(data){
      $scope.dogData = data;
      $scope.formData = {};
      $scope.adding = false;
    })
    .error(function(error){
      console.log(error);
    });
  };




}]);
