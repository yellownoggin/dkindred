var dkindred;
(function (dkindred) {
    'use strict';
    var MenuFactory = (function () {
        function MenuFactory() {
        }
        MenuFactory.prototype.getSections = function () {
            var sections = [];
            sections = [
                {
                    name: 'WS Components',
                    type: 'toggle',
                    pages: [
                        {
                            name: 'WS Component 1',
                            id: 'wsc1',
                            url: '#/dkworkshop/1'
                        },
                        {
                            name: 'WS Component 2',
                            id: 'wsc2',
                            url: '#/dkworkshop/2'
                        },
                        {
                            name: 'WS Component 3',
                            id: 'wsc3',
                            url: '#/dkworkshop/3'
                        }
                    ]
                }
            ];
            return sections;
        };
        return MenuFactory;
    }());
    angular.module('dkindred')
        .service('menu', MenuFactory);
})(dkindred || (dkindred = {}));
