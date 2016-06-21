namespace dkindred.blogs {
    'use strict';

    class blogsService {

        static $inject = ['$http'];
        // blogPosts: Array<Object>;
        constructor(public $http: angular.IHttpService) {
            // this.blogPosts = [];

        }

        getBlogPosts() {
            return this.$http.get('/app/blogs/built-blog/all-posts.json');
        }
    }

    angular
        .module('dkindred.blogs')
        .service('blogsService', blogsService);
}
