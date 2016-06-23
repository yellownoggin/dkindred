namespace dhSimpleGD {
    'use strict';

    angular
        .module('dhSimpleGD')
        .config(initRouter);



    /**
     * @ngInject
     */


    function initRouter($stateProvider: angular.ui.IStateProvider): void {

        $stateProvider
            .state('dkworkshop-ws-components.link1', {})
            .state('dkworkshop-ws-components.link2', {})
            .state('dkworkshop-ws-components.link3', {})
            .state('dkworkshop-ws-components.article1', {});

    }
}
