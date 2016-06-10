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
                "content": {
                    templateUrl: function (params) {
                        var url = '/app/dkworkshop/contents/' + params.tmpl + '/' + params.tmpl + '-demo.html';
                        console.log(url);
                        return url;
                    }
                }
            }
        })
            .state('dkworkshop-ws-templates', {
            url: '/dkworkshop/templates/:tmpl',
            views: {
                "content": {
                    templateUrl: function (params) {
                        var url = '/app/dkworkshop/templates/' + params.tmpl + '/' + params.tmpl + '.tmpl.html';
                        console.log(url);
                        return url;
                    }
                }
            }
        });
    }
})(dkworkshop || (dkworkshop = {}));
