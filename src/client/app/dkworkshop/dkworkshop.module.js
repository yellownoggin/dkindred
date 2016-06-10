var dkworkshop;
(function (dkworkshop) {
    'use strict';
    function demosContainerDirective() {
        return {
            scope: {
                title: '=',
                meta: '='
            },
            templateUrl: '/app/dkworkshop/demos-container/demos-container.tmpl.html',
            transclude: true
        };
    }
    function MenuToggleDirective($timeout) {
        return {
            scope: {
                section: '='
            },
            templateUrl: '/app/dkworkshop/partials/menu-toggle.tmpl.html',
            link: linkFn
        };
        function linkFn($scope, $element) {
            var controller = $element.parent().controller();
            console.log(controller);
            $scope.isOpen = function () {
                return controller.isOpen($scope.section);
            };
            $scope.toggle = function () {
                controller.toggleOpen($scope.section);
            };
            $scope.$watch(function () {
                return controller.isOpen($scope.section);
            }, function (open) {
                var $ul = $element.find('ul');
                var targetHeight = open ? getTargetHeight() : 0;
                $timeout(function () {
                    $ul.css({ height: targetHeight + 'px' });
                });
                function getTargetHeight() {
                    var targetHeight;
                    $ul.addClass('no-transition');
                    $ul.css('height', '');
                    targetHeight = $ul.prop('clientHeight');
                    $ul.css('height', 0);
                    $ul.removeClass('no-transition');
                    return targetHeight;
                }
            });
        }
    }
    function MenuLinkDirective() {
        return {
            scope: {
                section: '='
            },
            templateUrl: '/app/dkworkshop/partials/menu-link.tmpl.html'
        };
    }
    var DWKindredController = (function () {
        function DWKindredController(menu, $timeout) {
            this.menu = menu;
            this.$timeout = $timeout;
            this.autoFocusContent = false;
            this.sections = this.menu.sections;
        }
        DWKindredController.prototype.isOpen = function (section) {
            return this.menu.isSectionSelected(section);
        };
        DWKindredController.prototype.toggleOpen = function (section) {
            this.menu.toggleSelectSection(section);
        };
        DWKindredController.prototype.isSelected = function (page) {
            return this.menu.isPageSelected(page);
        };
        DWKindredController.$inject = ['menu', '$timeout'];
        return DWKindredController;
    }());
    function nospaceFilter() {
        return function (value) { return (!value) ? '' : value.replace(/ /g, ''); };
    }
    angular
        .module('dkworkshop', ['ngMaterial', 'ui.router', 'dkworkshop.layout'])
        .directive('demosContainer', demosContainerDirective)
        .directive('menuToggle', MenuToggleDirective)
        .directive('menuLink', MenuLinkDirective)
        .filter('nospace', nospaceFilter)
        .controller('DWKindredController', DWKindredController);
})(dkworkshop || (dkworkshop = {}));
