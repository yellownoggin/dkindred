var dkpagetemplates;
(function (dkpagetemplates) {
    'use strict';
    angular
        .module('dkpagetemplates')
        .config(initRouter);
    function initRouter($stateProvider) {
        $stateProvider
            .state('dkpagetemplates', {
            url: '/dkpagetemplates',
            views: {
                "content": {
                    templateUrl: '/app/dkpagetemplates/partials/dkpagetemplates-home.html'
                }
            }
        })
            .state('dkpagetemplates-pagetemplates', {
            url: '/dkpagetemplates/:tmpl',
            views: {
                "content": {
                    templateUrl: function (params) {
                        var url = '/app/dkpagetemplates/kindred-templates/' + params.tmpl + '.tmpl.html';
                        console.log(url);
                        return url;
                    }
                }
            }
        });
    }
})(dkpagetemplates || (dkpagetemplates = {}));
