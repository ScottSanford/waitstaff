angular.module("myApp",[
		'ngMessages', 
		'ngRoute', 
		'ngAnimate'
	])

	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl : 'views/home.html', 
				controller : 'HomeCtrl'
			})
			.when('/new_meal', {
				templateUrl : 'views/new_meal.html', 
				controller : 'NewMealCtrl'
			})
			.when('/my_earnings', {
				templateUrl: 'views/my_earnings.html', 
				controller: 'MyEarningsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})
	})

	.controller('HomeCtrl', function($scope){
		$scope.viewClass = 'home';
	})

	.controller("NewMealCtrl", function($scope, newMealService, myEarningsService){

		$scope.viewClass = 'new-meal';

		$scope.charges = newMealService;

		$scope.cancelForm = function() {
			$scope.baseMealPrice = ''; 
			$scope.taxRate = '';
			$scope.tipPercentage = '';
		}

		$scope.addMeal = function() {
			if ($scope.formDetails.$valid) {
				newMealService.computeTotals($scope.baseMealPrice, $scope.taxRate, $scope.tipPercentage);
				myEarningsService.add(newMealService.tip);
			}
		}
       
	})

    .controller("MyEarningsCtrl", function($scope, newMealService, myEarningsService) {

    	$scope.viewClass = 'my-earnings';

    	$scope.myearnings = myEarningsService;	

    	$scope.resetAll = function() {
    		myEarningsService.resetEarnings();
    		newMealService.resetCharges();
    	}


    })	








