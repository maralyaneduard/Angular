var app = angular.module('testApp', ['ngRoute', 'mainController','testService']);

app.config(function ($routeProvider) {
	$routeProvider
	.when("/tests", {
		templateUrl: "views/tests.html",
		controller: "testController"
	}).when("/addTest", {
		templateUrl: "views/addTest.html",
		controller: "testController"
	}).when("/tests/edit/:id", {
		templateUrl: "views/editTest.html",
		controller: "testController",
		reloadOnSearch: false
	}).otherwise({
		redirectTo: "/tests",
		controller: "main"
	});
});