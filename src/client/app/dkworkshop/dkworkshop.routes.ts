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
                templateUrl: '/app/dkworkshop/partials/dkworkshop-home.html'
            })
            .state('dkworkshop-ws-components', {
                url: '/dkworkshop/:tmpl',
                templateUrl: function (params: angular.ui.IStateParamsService): string {
                    var url: string = '/app/dkworkshop/partials/workshop-component-' + params.tmpl + '.html';
                    console.log(url);100
                    return url;
                }

            });
        }


}
