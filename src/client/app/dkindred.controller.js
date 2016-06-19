var dkindred;
(function (dkindred) {
    'use strict';
    var DkindredController = (function () {
        function DkindredController(state, timeout, rootScope) {
            this.state = state;
            this.timeout = timeout;
            this.rootScope = rootScope;
            this.changeToProperShell();
        }
        DkindredController.prototype.getProperShell = function (state) {
            if (state.includes('dkworkshop-ws')) {
                console.log(this.usePageTemplatesShell, 'templates');
                console.log(this.useWorkshopShell, 'workshop');
                console.log(this.useDKindredShell, 'd kindred');
                this.useDKindredShell = false;
                this.usePageTemplatesShell = true;
                this.useWorkshopShell = true;
            }
            else if (state.includes('dkpagetemplates')) {
                console.log(this.usePageTemplatesShell, 'templates');
                console.log(this.useWorkshopShell, 'workshop');
                console.log(this.useDKindredShell, 'd kindred');
                this.useWorkshopShell = false;
                this.useDKindredShell = false;
                this.usePageTemplatesShell = true;
            }
            else {
                console.log(this.usePageTemplatesShell, 'templates');
                console.log(this.useWorkshopShell, 'workshop');
                console.log(this.useDKindredShell, 'd kindred');
                this.usePageTemplatesShell = false;
                this.useWorkshopShell = false;
                this.useDKindredShell = true;
            }
        };
        DkindredController.prototype.getProperShellDelay = function () {
            var _this = this;
            this.timeout(function () { return _this.getProperShell(_this.state); }, 500);
        };
        DkindredController.prototype.changeToProperShell = function () {
            var _this = this;
            this.rootScope.$on('$stateChangeStart', function (event, toState) {
                console.log(toState.name, 'state name');
                var n = toState.name.indexOf('-ws');
                var i = toState.name.indexOf('pagetemplates');
                var j = toState.name.indexOf('-blogs');
                if (n > 0) {
                    _this.useDKindredShell = false;
                    _this.usePageTemplatesShell = false;
                    _this.useBlogsShell = false;
                    _this.useWorkshopShell = true;
                }
                else if (i > 0) {
                    _this.useDKindredShell = false;
                    _this.useWorkshopShell = false;
                    _this.useBlogsShell = false;
                    _this.usePageTemplatesShell = true;
                }
                else if (j > 0) {
                    console.log('blogs shell');
                    _this.useDKindredShell = false;
                    _this.useWorkshopShell = false;
                    _this.usePageTemplatesShell = false;
                    _this.useBlogsShell = true;
                }
                else {
                    console.log('d kindred shell');
                    _this.useWorkshopShell = false;
                    _this.usePageTemplatesShell = false;
                    _this.useBlogsShell = false;
                    _this.useDKindredShell = true;
                }
            });
        };
        DkindredController.$inject = ['$state', '$timeout', '$rootScope'];
        return DkindredController;
    }());
    angular
        .module('dkindred')
        .controller('DkindredController', DkindredController);
})(dkindred || (dkindred = {}));
