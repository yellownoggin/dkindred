namespace dkindred.blogs {
    'use strict';

    angular
        .module('dkindred.blogs')
        .config(initRouter);

    /**
     * Initialize the router's default behaviors
     */
     // @ngInject
     function initRouter($stateProvider: angular.ui.IStateProvider): void {
         $stateProvider
            .state('dkindred-blogs', {
                abstract: true,
                url: '/dkindred/blogs',
                views: {
                    'mainSite': {
                         templateUrl: '/app/general-content/partials/blogs-home.html'
                    }
                }
            })
            .state('dkindred-blogs.all', {
                url: '/all-posts',
                views: {
                    'mainSite':{
                        template: 'testing'
                        // templateUrl: '/app/general-content/partials/blogs-home.html'
                    }
                }
            })
            .state('dkindred-blogs.dkindred', {
                url: '/digital-kindred',
                views: {
                    'content': {
                        template: 'this is the digital kindred blogs posts page'
                    }
                }
            })
            .state('dkindred-blogs.fullstack', {
                url: '/full-stack',
                views: {
                    'content': {
                        template: 'this is the full stack blogs posts page'
                    }
                }
            });
     }

}
