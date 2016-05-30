namespace dkindred.layout {
    'use strict';

    /**
     *  TODO: needs description
     * nginject
     */
     function dkNavToolbarDirective(): angular.IDirective {
         return {
             restrict: 'EA',
            templateUrl: '/app/layout/dk-nav-toolbar.html'
            // template: 'hello'
         }
     }

    angular
        .module('dkindred.layout')
        .directive('dkNavToolbar', dkNavToolbarDirective);
}
