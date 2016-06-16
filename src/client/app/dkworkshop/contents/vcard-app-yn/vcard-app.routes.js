var dkworkshop;
(function (dkworkshop) {
    var vcard;
    (function (vcard) {
        'use strict';
        angular
            .module('dkworkshop.vcard')
            .config(initRouter);
        function initRouter($stateProvider) {
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
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-home-top.tmpl.html'
                    },
                    "cardMiddle": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-middle.tmpl.html'
                    }
                }
            })
                .state('dkworkshop-ws-vcard.portfolio', {
                url: '/portfolio',
                views: {
                    "cardBottom": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-bottom-portfolio.tmpl.html'
                    },
                    "cardMiddle": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-middle.tmpl.html'
                    }
                }
            })
                .state('dkworkshop-ws-vcard.resume', {
                url: '/resume',
                views: {
                    "cardBottom": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-bottom-resume.tmpl.html'
                    },
                    "cardMiddle": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-middle.tmpl.html'
                    }
                }
            })
                .state('dkworkshop-ws-vcard.blog', {
                url: '/blog',
                views: {
                    "cardBottom": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-bottom-blog.tmpl.html'
                    },
                    "cardMiddle": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-middle.tmpl.html'
                    }
                }
            })
                .state('dkworkshop-ws-vcard.contact', {
                url: '/contact',
                views: {
                    "cardBottom": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-bottom-contact.tmpl.html'
                    },
                    "cardMiddle": {
                        templateUrl: '/app/dkworkshop/contents/vcard-app/partials/vcard-middle.tmpl.html'
                    }
                }
            });
        }
    })(vcard = dkworkshop.vcard || (dkworkshop.vcard = {}));
})(dkworkshop || (dkworkshop = {}));
