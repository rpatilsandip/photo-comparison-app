
var app = angular.module("photoCompareApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "/home/home.html",
        controller : 'homeController'
    })
    .otherwise({
			redirectTo : '/home'
		});
});
app.controller('photoCompareAppCtrl', function($rootScope,$scope) {

});