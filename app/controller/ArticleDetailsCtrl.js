'use strict';

angular.module('myApp.ArticleDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ArticleDetails/:param', {
    templateUrl: 'html/ArticleDetails.html',
    controller: 'ArticleDetailsCtrl'
  });
}])

.controller('ArticleDetailsCtrl', ['$scope','$http', '$routeParams', 
	function($scope, $http, $routeParams) 
	{
		$scope.Articleid = $routeParams.param;
		var artcilejson= "data/article"+$scope.Articleid+".json";
		$http.get(artcilejson).success(function(data) 
		{
	   		$scope.Article = data;
	   	})
   }

]);