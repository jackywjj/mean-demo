var app = angular.module('backend', ['ngResource', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/template/backend/adminuser/list.html',
      controller: 'HomeCtrl'
    })
	.when('/add', {
      templateUrl: '/template/backend/adminuser/create.html',
      controller: 'AddCtrl'
    })
    .otherwise({
      templateUrl: '/template/backend/adminuser/list.html',
      controller: 'HomeCtrl'
    });
}]);

app.controller('HomeCtrl', ['$scope', '$resource',
  function($scope, $resource) {
    // var Videos = $resource('/api/videos');
    // Videos.query(function(videos) {
    //   $scope.videos = videos;
    // });
  }
]);

app.controller('AddCtrl', ['$scope', '$resource', '$location',
  function($scope, $resource, $location) {
    $scope.save = function() {

    };
  }
]);
