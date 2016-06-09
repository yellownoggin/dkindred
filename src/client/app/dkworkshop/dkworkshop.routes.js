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
            views: {
                "contentShell": {
                    templateUrl: '/app/dkworkshop/partials/dkworkshop-content-shell.html'
                },
                "content": {
                    templateUrl: '/app/dkworkshop/partials/dkworkshop-home.html'
                }
            }
        })
            .state('dkworkshop-ws-components', {
            url: '/dkworkshop/:tmpl',
            views: {
                "contentShell": {
                    templateUrl: '/app/dkworkshop/partials/dkworkshop-content-shell.html'
                },
                "content": {
                    templateUrl: '/app/dkworkshop/contents/angular-material-main-toolbar/angular-material-main-toolbar-demo.html'
                }
            }
        });
    }
    ;
})(dkworkshop || (dkworkshop = {}));
