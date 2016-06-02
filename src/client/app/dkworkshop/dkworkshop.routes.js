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
        })
            .state('dkworkshop-ws-components', {
            url: '/dkworkshop/:tmpl',
            templateUrl: function (params) {
                var url = '/app/dkworkshop/partials/workshop-component-' + params.tmpl + '.html';
                console.log(url);
                100;
                return url;
            }
        });
    }
})(dkworkshop || (dkworkshop = {}));
