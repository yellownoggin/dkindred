var dhSimpleGD;
(function (dhSimpleGD) {
    'use strict';
    function dhSimpleGdDirective($state) {
        return {
            restrict: 'EA',
            templateUrl: 'app/dkworkshop/contents/dynamic-header-simple-gd/dh-simple/dh-simple.html',
            scope: {
                content: '='
            },
            link: linkFn,
            controller: dhSimpleGDController,
            controllerAs: 'dh'
        };
        function linkFn(scope, element, attrs, controller) {
        }
        function dhSimpleGDController($state, $scope, $timeout, $rootScope) {
            var vm = this;
            vm.titleVisibility = false;
            vm.titleLargeValue = 'Title Large';
            vm.titleIndex = 'a';
            vm.currentState = $state.current;
            vm.isArticle = false;
            $rootScope.$on('$stateChangeStart', function (event, toState) {
                var state = toState;
                if (state.name === 'dkworkshop-ws-components.link1') {
                    vm.titleVisibility = true;
                    vm.titleLargeValue = 'Sect 1';
                    vm.titleIndex = 'b';
                    vm.isArticle = false;
                }
                else if (state.name === 'dkworkshop-ws-components.link2') {
                    vm.titleVisibility = true;
                    vm.titleLargeValue = 'Sect 2';
                    vm.titleIndex = 'c';
                    vm.isArticle = false;
                }
                else if (state.name === 'dkworkshop-ws-components.link3') {
                    vm.titleVisibility = true;
                    vm.titleLargeValue = 'Sect 3';
                    vm.titleIndex = 'd';
                    vm.isArticle = false;
                }
                else if (state.name === 'dkworkshop-ws-components.article1') {
                    vm.titleVisibility = true;
                    vm.titleLargeValue = '';
                    vm.isArticle = true;
                }
                else {
                    vm.titleVisibility = false;
                    vm.titleLargeValue = 'Title Large';
                    vm.titleIndex = 'a';
                    vm.isArticle = false;
                }
            });
        }
    }
    angular
        .module('dhSimpleGD')
        .directive('dhSimpleGd', dhSimpleGdDirective);
})(dhSimpleGD || (dhSimpleGD = {}));
