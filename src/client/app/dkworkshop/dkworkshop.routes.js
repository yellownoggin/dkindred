var dkworkshop;
(function (dkworkshop) {
    'use strict';
    angular
        .module('dkworkshop')
        .config(initRouter);
    function initRouter($stateProvider) {
        $stateProvider
            .state('dkworkshop-ws', {
            url: '/dkworkshop',
            templateUrl: '/app/dkworkshop/partials/dkworkshop-home.html'
        });
    }
})(dkworkshop || (dkworkshop = {}));
