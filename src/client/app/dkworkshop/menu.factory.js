var dkindred;
(function (dkindred) {
    'use strict';
    var MenuFactory = (function () {
        function MenuFactory() {
            this.sections = [];
            this.getSections();
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
                    },
                    {
                        name: 'DH Simple GD',
                        type: 'link',
                        id: 'functional design',
                        url: '#/dkworkshop/dynamic-header-simple-gd'
                    }
                ]
            }, {
                name: 'Workshop Templates',
                type: 'heading',
                children: [
                    {
                        name: 'vCard Tripwire Mag ',
                        type: 'link',
                        id: 'site-templates',
                        url: '#/dkworkshop/templates/vcard-tripwiremag'
                    }
                ]
            }, {
                name: 'Workshop Apps',
                type: 'heading',
                children: [
                    {
                        name: 'vCard App',
                        type: 'link',
                        id: 'site-templates',
                        url: '#/dkworkshop/apps/vcard/home'
                    }
                ]
            });
        };
        return MenuFactory;
    }());
    angular.module('dkindred')
        .service('menu', MenuFactory);
})(dkindred || (dkindred = {}));
