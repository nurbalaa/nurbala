var app = angular.module('nur',[
	'ui.router',
	'ngCookies'
]).config(routerConfig);

routerConfig.$inject = [
'$stateProvider', 
'$locationProvider',
'$urlRouterProvider'];

function routerConfig($stateProvider,$locationProvider,$urlRouterProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');


	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: '/views/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'vm'
		})
