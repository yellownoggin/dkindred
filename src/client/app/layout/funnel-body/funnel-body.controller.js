var dkindred;
(function (dkindred) {
    var layout;
    (function (layout) {
        'use strict';
        var FunnelController = (function () {
            function FunnelController(funnelService) {
                this.funnelService = funnelService;
                this.bindFunnelData();
            }
            FunnelController.prototype.bindFunnelData = function () {
                var vm = this;
                this.funnelService.getFunnelData().then(function (object) {
                    vm.funnelData = object.data.funnel;
                });
            };
            FunnelController.$inject = ['funnelService'];
            return FunnelController;
        }());
        angular
            .module('dkindred.layout')
            .controller('FunnelController', FunnelController);
    })(layout = dkindred.layout || (dkindred.layout = {}));
})(dkindred || (dkindred = {}));
