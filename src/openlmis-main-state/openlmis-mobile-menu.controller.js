
    'use strict';

    /**
     * @ngdoc controller
     * @name openlmis-header.controller:MobileMenuController
     *
     * @description
     * Controller that drives the mobile menu.
     */
    angular
        .module('openlmis-main-state')
        .controller('MobileMenuController', function ($scope) {
            $scope.isNavCollapsed = true;
            $scope.isCollapsed = false;
            $scope.isCollapsedHorizontal = false;

            document.addEventListener('click', collapseMenu, false);

            function collapseMenu(event) {
              if(event.target.matches('.nav.navbar-nav li a')) {
                  $scope.$apply(function() {
                    $scope.isNavCollapsed = true;
                  });
                }
            }

            $scope.$on("$destroy", function() {
              document.removeEventListener('click', collapseMenu, false);
            });
            
          
    });