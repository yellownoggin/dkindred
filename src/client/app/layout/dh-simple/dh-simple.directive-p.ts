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

        function dhSimpleGDController($state: angular.ui.IStateService, $scope: angular.IScope, $timeout: angular.ITimeoutService, $rootScope: angular.IRootScopeService, $stateParams: angular.ui.IStateParamsService) {
            var vm = this;
            vm.titleVisibility = false;
            vm.titleLargeValue = 'Digi &middot; Kindred';
            vm.titleIndex = 'a';
            vm.currentState = $state.current;
            vm.isArticle = false;
            vm.stateParams = $stateParams;
            vm.timeout = $timeout;
            // $timeout(function() {
            //     console.log(vm.stateParams.categoryId, 'state parameters are working stored in vm');
            // }, 1000);


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
                } else if (state.name === 'dkindred-blogs.category') {
                    vm.titleVisibility = true;
                    vm.timeout(function() {
                        vm.titleLargeValue = vm.stateParams.categoryId;
                    }, 10);
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
