namespace dkindred {
    'use strict';

    export interface IMenuFactory {
        // sections: Array<Object>
        getSections(): Array<Object>
    }

    class MenuFactory implements IMenuFactory {

        // sections: Array<Object>;
        constructor() {}
        public getSections (): Array<Object> {
        var sections: Array<Object> = [];

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
    }

}
angular.module('dkindred')
    .service('menu', MenuFactory);
}
