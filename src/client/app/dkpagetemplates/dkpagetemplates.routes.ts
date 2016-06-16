namespace dkpagetemplates {
    'use strict';

    angular
        .module('dkpagetemplates')
        .config(initRouter)

    function initRouter($stateProvider: angular.ui.IStateProvider): void {
        $stateProvider
            .state('dkpagetemplates', {
                url: '/dkpagetemplates',
                views: {
                    "content": {
                        templateUrl: '/app/dkpagetemplates/partials/dkpagetemplates-home.html'
                        // template: '<p>testing testing page template page<triangle'
                    }
                }
            })
            .state('dkpagetemplates-pagetemplates', {
                url: '/dkpagetemplates/:tmpl',
                views: {
                    "content": {
                        templateUrl: function (params: any): string {
                            var url: string = '/app/dkpagetemplates/kindred-templates/' + params.tmpl + '.tmpl.html';
                            console.log(url);
                            return url;
                        }
                        // templateUrl: '/app/dkpagetemplates/partials/dkpagetemplates-home.html'
                        // template: '<p>testing testing page template page<triangle'
                    }
                }
            });
    }

}
