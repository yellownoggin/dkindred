var dkindred;
(function (dkindred) {
    var layout;
    (function (layout) {
        'use strict';
        var funnelService = (function () {
            function funnelService($http) {
                this.$http = $http;
            }
            funnelService.prototype.getFunnelData = function () {
                return this.$http.get('/mock-data/funnel.json');
            };
            funnelService.$inject = ['$http'];
            return funnelService;
        }());
        angular
            .module('dkindred.layout')
            .service('funnelService', funnelService);
    })(layout = dkindred.layout || (dkindred.layout = {}));
})(dkindred || (dkindred = {}));
