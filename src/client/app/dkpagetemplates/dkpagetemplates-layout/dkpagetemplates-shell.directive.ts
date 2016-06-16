namespace dkpagetemplates.layout {
    'use strict';

    function dkpagetemplatesShellDirective() {

        return {
            restrict: 'EA',
            templateUrl: '/app/dkpagetemplates/dkpagetemplates-layout/dkpagetemplates-shell.html'
        }

    }

    angular.module('dkpagetemplates.layout')
        .directive('dkpagetemplatesShell', dkpagetemplatesShellDirective);
}
