(function() {
	var app = angular.module('EventServices', []);

	app.service('EventServices', function($scope) {
		this.all = function() {
			var self = this;
			self.onSuccess = function(reply) { console.log('reply ', reply); return reply; };
			self.onError = function(reply) { return reply; };

			return VividSeats.eventService.all(self.onSuccess, self.onError);
		};
	});
})();