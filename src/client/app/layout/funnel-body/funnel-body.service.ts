namespace dkindred.layout {
    'use strict';

    class funnelService {

        static $inject = ['$http'];

        constructor(public $http: angular.IHttpService) {

        }

        getFunnelData() {
            return this.$http.get('/mock-data/funnel.json');
            // return  {
            //     "funnel": [{
            //             "title": "Test Title 1",
            //             "subtitle": "subtitle test 1",
            //             "funnelImage": "./images/620x620transparent.png",
            //             "category": "Test Category",
            //             "stateLocation": "home"
            //         }, {
            //             "title": "Test Title 2",
            //             "subtitle": "subtitle test 1",
            //             "funnelImage": "./images/620x620transparent.png",
            //             "category": "Test Category",
            //             "stateLocation": "link2"
            //         }, {
            //             "title": "Test Title 3",
            //             "subtitle": "subtitle test 1",
            //             "funnelImage": "./images/620x620transparent.png",
            //             "category": "Test Category",
            //             "stateLocation": "home"
            //         }, {
            //             "title": "Test Title 4",
            //             "subtitle": "subtitle test 1",
            //             "funnelImage": "./images/620x620transparent.png",
            //             "category": "Test Category",
            //             "stateLocation": "home"
            //         }
            //
            //     ]
            // };
        }
    }

    angular
        .module('dkindred.layout')
        .service('funnelService', funnelService)

}
