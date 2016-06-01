namespace dkindred.layout {
    'use strict';

    /**
     * The page show for main site
     */
    function dkindredShellDirective(): angular.IDirective {

        return {
            restrict: 'EA',
            templateUrl: '/app/layout/dkindred-shell.html'
            // controller: 'DkindredController',
            // controllerAs: 'vm'

        }

    }

    // class DkindredController {
    //     static $inject: Array<string> = ['$state'];
    //
    //     constructor(public state: angular.ui.IStateService) {
    //
    //     }
    //
    //     public getProperShell() {
    //         if (this.state.includes('ws')) {
    //             console.log('false');
    //             return false;
    //
    //         } else {
    //             console.log('true');
    //             return true;
    //
    //         }
    //     }
    // }


    //  function DkindredController($state: angular.ui.IState) {
    //
    //      vm.state = $state;
    //
    //
    //
    //      // TODO: write proper docs
    //     function getProperShell(state) {
    //         if (state.includes('ws')) {
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     }
    //  }

    angular
        .module('dkindred.layout')
        .directive('dkindredShell', dkindredShellDirective);
}
