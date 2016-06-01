namespace dkworkshop {
    'use strict';

    angular
        .module('dkworkshop')
        .config(initRouter);


    /**
     * Initialize the router's default behaviors
     */
     // @ngInject
     function initRouter($stateProvider: angular.ui.IStateProvider): void {

         $stateProvider
            .state('dkworkshop-ws', {
                url: '/dkworkshop',
                templateUrl: '/app/dkworkshop/partials/dkworkshop-home.html'
            })
     }
}
