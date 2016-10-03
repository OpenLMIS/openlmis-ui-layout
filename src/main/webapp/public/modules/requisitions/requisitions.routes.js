(function() {

	'use strict';
	
	angular.module('openlmis.requisitions').config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {

		$stateProvider.state('app.requisitions', {
			abstract: true,
			url: '/requisitions',
			templateUrl: 'modules/requisitions/requisitions.html'
		});

	}

})();