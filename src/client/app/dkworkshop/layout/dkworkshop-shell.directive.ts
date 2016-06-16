// TODO: nginject & other notes or inclusions
namespace dkworkshop {
    'use strict';

        function dkworkshopShellDirective() {

            return {
                restrict: 'EA',
                templateUrl: '/app/dkworkshop/layout/dkworkshop-shell.html'
            }
        }

    angular
        .module('dkworkshop')
        .directive('dkworkshopShell', dkworkshopShellDirective);

}
