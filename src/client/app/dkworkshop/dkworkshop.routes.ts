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
        // https://github.com/angular-ui/ui-router/issues/163
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
                        templateUrl: function(params: angular.ui.IStateParamsService): string {
                            var url: string = '/app/dkworkshop/contents/' + params.tmpl + '/' + params.tmpl + '-demo.html';
                            console.log(url);
                            return url;
                        }
                    }
                }

            });

    }


}
