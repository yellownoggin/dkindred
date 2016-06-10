var dkindred;
(function (dkindred) {
    'use strict';
    var MenuFactory = (function () {
        function MenuFactory() {
            this.sections = [];
            this.getSections();
            console.log(this.sections);
        }
        MenuFactory.prototype.selectSection = function (section) {
            this.openedSection = section;
        };
        MenuFactory.prototype.toggleSelectSection = function (section) {
            this.openedSection = (this.openedSection === section ? null : section);
        };
        MenuFactory.prototype.isSectionSelected = function (section) {
            return this.openedSection === section;
        };
        MenuFactory.prototype.selectPage = function (section, page) {
            this.currentPage = page;
            this.currentSection = section;
        };
        MenuFactory.prototype.isPageSelected = function (page) {
            return this.currentPage === page;
        };
        MenuFactory.prototype.getSections = function () {
            this.sections.push({
                name: 'Workshop Components',
                type: 'heading',
                children: [
                    {
                        name: 'Main Toolbars',
                        type: 'link',
                        id: 'main-toolbars',
                        url: '#/dkworkshop/angular-material-main-toolbar'
                    }
                ]
            });
        };
        return MenuFactory;
    }());
    angular.module('dkindred')
        .service('menu', MenuFactory);
})(dkindred || (dkindred = {}));