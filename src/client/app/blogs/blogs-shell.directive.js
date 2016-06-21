var dkindred;
(function (dkindred) {
    var blogs;
    (function (blogs) {
        'use strict';
        function blogsShellDirective() {
            return {
                restrict: 'EA',
                templateUrl: '/app/blogs/blogs-shell.html'
            };
        }
        angular
            .module('dkindred.blogs')
            .directive('blogsShell', blogsShellDirective);
    })(blogs = dkindred.blogs || (dkindred.blogs = {}));
})(dkindred || (dkindred = {}));
