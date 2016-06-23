var dhSimpleGD;
(function (dhSimpleGD) {
    'use strict';
    angular
        .module('dhSimpleGD')
        .config(initRouter);
    function initRouter($stateProvider) {
        $stateProvider
            .state('dkworkshop-ws-components.link1', {})
            .state('dkworkshop-ws-components.link2', {})
            .state('dkworkshop-ws-components.link3', {})
            .state('dkworkshop-ws-components.article1', {});
    }
})(dhSimpleGD || (dhSimpleGD = {}));
