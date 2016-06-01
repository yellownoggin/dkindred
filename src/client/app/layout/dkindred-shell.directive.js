var dkindred;
(function (dkindred) {
    var layout;
    (function (layout) {
        'use strict';
        function dkindredShellDirective() {
            return {
                restrict: 'EA',
                templateUrl: '/app/layout/dkindred-shell.html'
            };
        }
        angular
            .module('dkindred.layout')
            .directive('dkindredShell', dkindredShellDirective);
    })(layout = dkindred.layout || (dkindred.layout = {}));
})(dkindred || (dkindred = {}));
