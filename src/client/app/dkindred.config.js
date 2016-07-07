var dkindred;
(function (dkindred) {
    'use strict';
    angular
        .module('dkindred')
        .config(initRouter)
        .config(initTheme);
    function initRouter($locationProvider, $urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
            url: '/',
            views: {
                "mainSite": {
                    templateUrl: '/app/layout/funnel-body/funnel-body.html'
                }
            }
        })
            .state('link1', {
            url: '/link1',
            views: {
                "dkContentShell": {
                    templateUrl: '/app/general-content/partials/home.html'
                }
            }
        })
            .state('link2', {
            url: '/link2',
            views: {
                "dkContentShell": {
                    templateUrl: '/app/general-content/partials/home.html'
                }
            }
        });
    }
    function initTheme($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('red');
    }
})(dkindred || (dkindred = {}));
