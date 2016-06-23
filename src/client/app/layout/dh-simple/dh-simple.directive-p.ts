namespace dhSimpleGD {
    'use strict';

    // TODO: make the template url more programmatic
    // @ngInject
    function dhSimpleGdDirective($state: angular.ui.IStateService) {
        return {
            restrict: 'EA',
            templateUrl: 'app/layout/dh-simple/dh-simple.html',
            scope: {
                content: '='
            },
            controller: dhSimpleGDController,
            controllerAs: 'dh'
        };

        function dhSimpleGDController($state: angular.ui.IStateService, $scope: angular.IScope, $timeout: angular.ITimeoutService, $rootScope: angular.IRootScopeService) {
            var vm = this;
            vm.titleVisibility = false;
            vm.titleLargeValue = 'Digi &middot; Kindred';
            vm.titleIndex = 'a';
            vm.currentState = $state.current;
            vm.isArticle = false;

            $rootScope.$on('$stateChangeStart', function(event, toState) {
                var state = toState;

                if (state.name === 'dkindred-blogs.all') {
                    vm.titleVisibility = true;
                    vm.titleLargeValue = 'Blogs';
                    vm.titleIndex = 'b';
                    vm.isArticle = false;
                } else if (state.name === 'dkworkshop-ws') {
                    vm.titleVisibility = true;
                    vm.titleLargeValue = 'Workshop';
                    vm.titleIndex = 'c';
                    vm.isArticle = false;
                } else if (state.name === 'link1') {
                    vm.titleVisibility = true;
                    vm.titleLargeValue = 'Link1';
                    vm.titleIndex = 'c';
                    vm.isArticle = false;
                } else if (state.name === 'link2') {
                    vm.titleVisibility = true;
                    vm.titleLargeValue = '';
                    vm.isArticle = true;
                } else {
                    vm.titleVisibility = false;
                    // vm.titleLargeValue = 'fred';
                    vm.titleLargeValue = 'Digi &middot; Kindred';
                    vm.titleIndex = 'a';
                    vm.isArticle = false;
                }
            });

        }

    }

    angular
        .module('dhSimpleGD')
        .directive('dhSimpleGdP', dhSimpleGdDirective);
}
