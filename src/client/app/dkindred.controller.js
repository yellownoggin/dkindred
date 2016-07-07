var dkindred;
(function (dkindred) {
    'use strict';
    var DkindredController = (function () {
        function DkindredController(state, scope, timeout, rootScope) {
            this.state = state;
            this.scope = scope;
            this.timeout = timeout;
            this.rootScope = rootScope;
            this.makeDynamic();
        }
        DkindredController.prototype.makeDynamic = function () {
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
                    _this.backgroundColor = { 'background-color': 'rgb(69, 90, 100);' };
                    _this.headerTextColor = { 'color': '#FFFF8d' };
                }
                else if (i > 0) {
                    _this.useDKindredShell = false;
                    _this.useWorkshopShell = false;
                    _this.useBlogsShell = false;
                    _this.usePageTemplatesShell = true;
                    _this.backgroundColor = { 'background-color': 'rgb(69, 90, 100);' };
                    _this.headerTextColor = { 'color': '#FFFF8d' };
                }
                else if (j > 0) {
                    console.log('blogs shell');
                    _this.useDKindredShell = true;
                    _this.useWorkshopShell = false;
                    _this.usePageTemplatesShell = false;
                    _this.useBlogsShell = false;
                    _this.backgroundColor = { 'background-color': 'rgb(69, 90, 100)' };
                    _this.headerTextColor = { color: '#ffffff' };
                }
                else {
                    console.log('d kindred shell');
                    _this.useWorkshopShell = false;
                    _this.usePageTemplatesShell = false;
                    _this.useBlogsShell = false;
                    _this.useDKindredShell = true;
                    _this.backgroundColor = { 'background-color': '#0D47A1;' };
                    _this.headerTextColor = { 'color': '#FFFF8d' };
                }
            });
        };
        DkindredController.$inject = ['$state', '$scope', '$timeout', '$rootScope'];
        return DkindredController;
    }());
    angular
        .module('dkindred')
        .controller('DkindredController', DkindredController);
})(dkindred || (dkindred = {}));
