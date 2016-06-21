var dkindred;
(function (dkindred) {
    var blogs;
    (function (blogs) {
        'use strict';
        var blogsService = (function () {
            function blogsService($http) {
                this.$http = $http;
            }
            blogsService.prototype.getBlogPosts = function () {
                return this.$http.get('/app/blogs/built-blog/all-posts.json');
            };
            blogsService.$inject = ['$http'];
            return blogsService;
        }());
        angular
            .module('dkindred.blogs')
            .service('blogsService', blogsService);
    })(blogs = dkindred.blogs || (dkindred.blogs = {}));
})(dkindred || (dkindred = {}));
