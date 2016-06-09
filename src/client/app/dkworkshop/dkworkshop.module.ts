    namespace dkworkshop {
        'use strict';


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
                static $inject = ['menu', '$timeout'];
                public autoFocusContent: boolean;
                public sections: any;
                // public section: Object;
                constructor(public menu: any, public $timeout: any) {

                    this.autoFocusContent = false;
                    this.sections = this.menu.sections;
                    // this.menu.getSections();
                    // $timeout(() => {
                    //     this.menu.getSections();
                    //     console.log('hello this is 1 second later');
                    //     console.log(this.sections);
                    //
                    // }, 6000);
                    // console.log(this.menu.sections);
                    // console.log(this.menu.getSections);
                    // console.log('hello');
                    // this.section = this.sections[0];
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

            }

            // export interface IHumanizeFilter         {
            //     humanizeDoc(doc: string): string
            // }
            //
            // class humanizeDocFilter implements IHumanizeFilter {
            //     constructor() { }
            //
            //     public humanizedDoc(doc: string): string {
            //         var linkTitle: string;
            //         linkTitle =  doc.label || doc.name;
            //         return linkTitle;
            //         }
            //
            // }
            // location resourceremember it as a doc parameter in order to decipher for thedirective: https://github.com/angular/material/blob/6515150446c4b8c9b2b987cb2f5ebfe2740a866f/docs/app/js/app.js#L761
            // function() {
            //   return function(doc) {
            //     if (!doc) return;
            //     if (doc.type === 'directive') {
            //       return doc.name.replace(/([A-Z])/g, function($1) {
            //         return '-'+$1.toLowerCase();
            //       });
            //     }
            //     return doc.label || doc.name;
            //   };
            // })

            function nospaceFilter() {
                return (value)  => (!value) ? '' : value.replace(/ /g, '');
                // return function (value) {
                //     return (!value) ? '' : value.replace(/ /g, 'fred');
                // }
            }

            angular
                .module('dkworkshop', ['ngMaterial', 'ui.router', 'dkworkshop.layout'])
                .directive('menuToggle', MenuToggleDirective)
                .directive('menuLink', MenuLinkDirective)
                .filter('nospace', nospaceFilter)
                .controller('DWKindredController', DWKindredController);
                // .filter('humanizeDoc', humanizeDocFilter)
}
