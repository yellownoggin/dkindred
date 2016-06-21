namespace dkindred.blogs {
    'use strict';

    // TODO: : notes describing what this is here?
    function blogsShellDirective(): angular.IDirective {
        return {
            restrict: 'EA',
            // template: 'fred'
            templateUrl: '/app/blogs/blogs-shell.html'
        }
    }

    angular
        .module('dkindred.blogs')
        .directive('blogsShell', blogsShellDirective);

}
