var dkpagetemplates;
(function (dkpagetemplates) {
    var layout;
    (function (layout) {
        'use strict';
        function dkpagetemplatesShellDirective() {
            return {
                restrict: 'EA',
                templateUrl: '/app/dkpagetemplates/dkpagetemplates-layout/dkpagetemplates-shell.html'
            };
        }
        angular.module('dkpagetemplates.layout')
            .directive('dkpagetemplatesShell', dkpagetemplatesShellDirective);
    })(layout = dkpagetemplates.layout || (dkpagetemplates.layout = {}));
})(dkpagetemplates || (dkpagetemplates = {}));
