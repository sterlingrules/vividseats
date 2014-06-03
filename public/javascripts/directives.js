(function() {
	var app = angular.module('EventDirectives', []);

	app.directive('tabs', function() {
		return {
			restrict: 'E',
			templateUrl: 'javascripts/templates/tabs.html',
			controller: function($scope, $location) {				
				$scope.isActive = function(viewLocation) {
					return viewLocation === $location.path();
				};
			},
			controllerAs: 'tabCtrl'
		}
	});

	app.directive('actions', function() {
		return {
			restrict: 'E',
			templateUrl: 'javascripts/templates/actions.html',
			controller: function($scope) {
				$scope.editEvent = function(id) {
					console.log(id);
				}

				$scope.removeEvent = function(id) {
					console.log(id);
				}
			}
		}
	})
})();