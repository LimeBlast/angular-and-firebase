'use strict';

angular.module('myApp.register', [
  'ngRoute'
])

  // Declared route
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'RegisterCtrl'
    });
  }])

  // Register controller
  .controller('RegisterCtrl', ['$scope', function ($scope) {

    $scope.SignUp = function () {
      if (!$scope.regForm.$invalid) {
        console.log('Valid form submission')
      }
    };

  }]);
