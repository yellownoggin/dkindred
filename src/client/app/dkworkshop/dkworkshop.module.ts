    namespace dkworkshop {
        'use strict';

        function demosContainerDirective(): angular.IDirective {
            return {
                scope: {
                    title: '=',
                    meta: '='
                },
                templateUrl: '/app/dkworkshop/demos-container/demos-container.tmpl.html',
                transclude: true
                // link: linkFn
            }

            // function linkFn($scope) {
            //
            // }
        }
            function MenuToggleDirective($timeout): angular.IDirective {
                return {
                    scope: {
                        section: '='
                    },
                    templateUrl: '/app/dkworkshop/partials/menu-toggle.tmpl.html',
                    link: linkFn
                }

                function linkFn($scope, $element) {
                    // get the contoller
                    var controller = $element.parent().controller();
                    console.log(controller);
                    $scope.isOpen = function() {
                        return controller.isOpen($scope.section);
                    }
                    $scope.toggle = function () {
                        controller.toggleOpen($scope.section);
                    }

                    //$mdUtil nextTick
                    $scope.$watch(
                        function () {
                            return controller.isOpen($scope.section);
                        },
                        function (open) {
                            var $ul = $element.find('ul');

                            var targetHeight = open ? getTargetHeight() : 0;
                            $timeout(function () {
                                $ul.css({height: targetHeight + 'px'});
                            })

                            function getTargetHeight() {
                                var targetHeight;
                                $ul.addClass('no-transition');
                                $ul.css('height', '');
                                targetHeight = $ul.prop('clientHeight');
                                $ul.css('height', 0); // huh?
                                $ul.removeClass('no-transition');
                                return targetHeight;

                            }
                        }

                    );
                }
            }

            function MenuLinkDirective(): angular.IDirective {
                return {
                    scope: {
                        section: '='
                    },
                    templateUrl: '/app/dkworkshop/partials/menu-link.tmpl.html'
                }
            }

            class DWKindredController {
                static $inject = ['$mdSidenav', 'menu', '$timeout'];
                public autoFocusContent: boolean;
                public sections: any;
                constructor(public $mdSidenav: angular.material.ISidenavService, public menu: any, public $timeout: any) {
                    this.autoFocusContent = false;
                    this.sections = this.menu.sections;
                }

                isOpen(section) {
                    return this.menu.isSectionSelected(section);
                }

                toggleOpen(section) {
                    this.menu.toggleSelectSection(section);
                }

                isSelected(page) {
                    return this.menu.isPageSelected(page);
                }

                toggleLeftMenu() {
                    this.$mdSidenav('left').toggle();
                }

            }

            function nospaceFilter() {
                return (value)  => (!value) ? '' : value.replace(/ /g, '');
            }

            angular
                .module('dkworkshop', ['ngMaterial', 'ui.router', 'dkworkshop.layout', 'dkworkshop.vcard'])
                .directive('demosContainer', demosContainerDirective)
                .directive('menuToggle', MenuToggleDirective)
                .directive('menuLink', MenuLinkDirective)
                .filter('nospace', nospaceFilter)
                .controller('DWKindredController', DWKindredController);
                // .filter('humanizeDoc', humanizeDocFilter)
                // TODO: include:
                //  exported interface IHumanizeFilter ? see scratch.md
                // humanizeDocFilter

}
