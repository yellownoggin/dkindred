namespace dkindred {
    'use strict';

    angular
        .module('dkindred')
        .config(initRouter)
        .config(initTheme);

        /**
         *  Initialize the router's default behaviors
         */
        // @ngInject
        function initRouter($locationProvider: angular.ILocationProvider,
                            $urlRouterProvider: angular.ui.IUrlRouterProvider,
                            $stateProvider: angular.ui.IStateProvider): void {

            // TODO:
            // angular.js:13550 Error: [$location:nobase] $location in HTML5 mode requires a <base> tag to be present!
            // $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        "dkContentShell": {
                            templateUrl: '/app/general-content/partials/home.html'
                            // controller: 'HomeController',
                            // controllerAs: 'vm'
                        }
                    }
                });
                // TODO:   add admin state
        }

        function initTheme($mdThemingProvider: angular.material.IThemingProvider) {

            $mdThemingProvider
                .theme('default')
                .primaryPalette('blue-grey')
                .accentPalette('red');
        }
}
