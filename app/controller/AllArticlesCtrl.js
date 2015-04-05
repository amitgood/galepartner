'use strict';


angular.module('myApp.AllArticles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/AllArticles', {
    templateUrl: 'html/AllArticles.html',
    controller: 'AllArticlesCtrl'
  });
}])



.controller('AllArticlesCtrl', ['$scope','$http', 
function($scope,  $http) 
{
		$http.get('data/allarticles.json').success(function(data) 
		{
	   	$scope.Articles = data;
	   }
	   );
}


]);



