var common;
(function (common) {
    'use strict';
    function animateOnChangeDirective($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                scope.$watch(attr.animateOnChange, function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        element.addClass('changed');
                        $timeout(function () {
                            element.removeClass('changed');
                        }, 1000);
                    }
                });
            }
        };
    }
    angular
        .module('common')
        .directive('animateOnChange', animateOnChangeDirective);
})(common || (common = {}));
