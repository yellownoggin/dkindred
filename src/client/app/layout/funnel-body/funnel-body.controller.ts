namespace dkindred.layout {
    'use strict';


    class FunnelController {
        static $inject: Array<string> = ['funnelService'];
        //
        funnelData: Array<Object>;

        constructor(public funnelService: any) {
            this.bindFunnelData();

        }

        bindFunnelData() {
            var vm = this;
            this.funnelService.getFunnelData().then(function (object) {
                vm.funnelData = object.data.funnel;
            })
        }
    }

    angular
        .module('dkindred.layout')
        .controller('FunnelController', FunnelController);
}
