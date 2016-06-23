namespace dkindred {
    'use strict';

    // TODO:  OVERKILL? commenting out interface because it seems to be over the need(not really using it a lot)
    // also questioning how to inject service or factory into controller to use its intellisense and error checking

    class MenuFactory {

        public openedSection: any;
        public currentPage: Object;
        public currentSection: Object;
        sections: Array<Object>;
        constructor() {
            this.sections = [];
            this.getSections();

        }

        selectSection(section) {
            this.openedSection = section;
        }
        toggleSelectSection(section) {
            this.openedSection = (this.openedSection === section ? null : section)
        }
        isSectionSelected(section): boolean {
            return this.openedSection === section;
        }
        selectPage(section, page): void {
            this.currentPage = page;
            this.currentSection = section;
        }
        isPageSelected(page) {
            return this.currentPage === page;
        }
        getSections(): void {

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
                },
                {
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
                    },
                {
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
                    }
            );
                // {
                //     name: 'WS Components',
                //     type: 'link',
                //     pages: [
                //         {
                //             name: 'main toolbars',
                //             id: 'main-toolbars',
                //             url: '#/dkworkshop/angular-material-main-toolbar'
                //         }
                //     ]
                // }
        }

    }
    angular.module('dkindred')
        .service('menu', MenuFactory);
}
