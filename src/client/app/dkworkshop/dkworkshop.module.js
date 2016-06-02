var dkworkshop;
(function (dkworkshop) {
    'use strict';
    function MenuToggleDirective() {
        return {
            scope: {
                section: '='
            },
            templateUrl: '/app/dkworkshop/partials/menu-toggle.tmpl.html'
        };
    }
    function MenuLinkDirective() {
        return {
            scope: {
                section: '='
            },
            templateUrl: '/app/dkworkshop/partials/menu-link.tmpl.html'
        };
    }
    var DKindredController = (function () {
        function DKindredController(menu) {
            this.menu = menu;
            var sections = menu.getSections();
            console.log(sections);
            this.section = sections[0];
        }
        DKindredController.$inject = ['menu'];
        return DKindredController;
    }());
    var humanizeDocFilter = (function () {
        function humanizeDocFilter() {
        }
        humanizeDocFilter.prototype.humanizedDoc = function (doc) {
            var linkTitle;
            linkTitle = doc.label || doc.name;
            return linkTitle;
        };
        return humanizeDocFilter;
    }());
    angular
        .module('dkworkshop', ['ngMaterial', 'ui.router', 'dkworkshop.layout'])
        .directive('menuToggle', MenuToggleDirective)
        .directive('menuLink', MenuLinkDirective)
        .controller('DKindredController', DKindredController)
        .filter('humanizeDoc', humanizeDocFilter);
})(dkworkshop || (dkworkshop = {}));
