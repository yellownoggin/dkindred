var dkindred;
(function (dkindred) {
    var layout;
    (function (layout) {
        'use strict';
        function dkNavToolbarDirective() {
            return {
                restrict: 'EA',
                templateUrl: '/app/layout/dk-nav-toolbar.html'
            };
        }
        angular
            .module('dkindred.layout')
            .directive('dkNavToolbar', dkNavToolbarDirective);
    })(layout = dkindred.layout || (dkindred.layout = {}));
})(dkindred || (dkindred = {}));
