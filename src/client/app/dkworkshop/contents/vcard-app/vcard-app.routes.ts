namespace dkworkshop.vcard {
    'use strict';

    angular
        .module('dkworkshop.vcard')
        .config(initRouter);



    /**
     * Initialize the router's default behaviors
     */
    // @ngInject
    function initRouter($stateProvider: angular.ui.IStateProvider): void {
        // https://github.com/angular-ui/ui-router/issues/163
        $stateProvider
            .state('dkworkshop-ws-vcard', {
                abstract: true,
                url: '/dkworkshop/apps/vcard',
                views: {
                    "content": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard.tmpl.html'
                    }
                }

            })
            .state('dkworkshop-ws-vcard.home', {
                url: '/home',
                views: {
                    "cardTop": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-top-home.tmpl.html'
                    }
                }

            })
            .state('dkworkshop-ws-vcard.portfolio', {
                url: '/portfolio',
                views: {
                    "cardBottom": {
                        // template: 'testing testing 123'
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-bottom-portfolio.tmpl.html'
                    }
                    // "cardMiddle": {
                    //     // template: 'testing testing 123 middle'
                    //     templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-middle.tmpl.html'
                    // }                    // "cardBottom": {
                    //     template: 'testing testing 123 card bottom'
                    //     // templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-home.tmpl.html'
                    // }
                }

            })
            .state('dkworkshop-ws-vcard.resume', {
                url: '/resume',
                views: {
                    "cardBottom": {
                        // template: 'testing testing 123'
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-bottom-resume.tmpl.html'
                    }
                    // "cardMiddle": {
                    //     // template: 'testing testing 123 middle'
                    //     templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-middle.tmpl.html'
                    // }                    // "cardBottom": {
                    //     template: 'testing testing 123 card bottom'
                    //     // templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-home.tmpl.html'
                    // }
                }

            })
            .state('dkworkshop-ws-vcard.blog', {
                url: '/blog',
                views: {
                    "cardBottom": {
                        // template: 'testing testing 123'
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-bottom-blog.tmpl.html'
                    }
                    // "cardMiddle": {
                    //     // template: 'testing testing 123 middle'
                    //     templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-middle.tmpl.html'
                    // }                    // "cardBottom": {
                    //     template: 'testing testing 123 card bottom'
                    //     // templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-home.tmpl.html'
                    // }
                }

            })
            .state('dkworkshop-ws-vcard.contact', {
                url: '/contact',
                views: {
                    "cardBottom": {
                        // template: 'testing testing 123'
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-bottom-contact.tmpl.html'
                    }
                    // "cardMiddle": {
                    //     // template: 'testing testing 123 middle'
                    //     templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-middle.tmpl.html'
                    // }                    // "cardBottom": {
                    //     template: 'testing testing 123 card bottom'
                    //     // templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-home.tmpl.html'
                    // }
                }

            });


    }


}
