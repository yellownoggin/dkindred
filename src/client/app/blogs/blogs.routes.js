var dkindred;
(function (dkindred) {
    var blogs;
    (function (blogs) {
        'use strict';
        angular
            .module('dkindred.blogs')
            .config(initRouter);
        function initRouter($stateProvider) {
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
                    'blog': {
                        templateUrl: '/app/blogs/blogs-all-posts.html'
                    }
                }
            })
                .state('dkindred-blogs.category', {
                url: '/:categoryId',
                views: {
                    'blog': {
                        templateUrl: '/app/blogs/blogs-all-posts.html'
                    }
                }
            })
                .state('dkindred-blogs.posts', {
                url: '/:categoryId/:postId',
                views: {
                    'blog': {
                        templateUrl: '/app/blogs/blog-post.partial.html'
                    }
                }
            });
        }
    })(blogs = dkindred.blogs || (dkindred.blogs = {}));
})(dkindred || (dkindred = {}));
