var dkindred;
(function (dkindred) {
    'use strict';
    var DkindredController = (function () {
        function DkindredController(state, timeout, rootScope) {
            this.state = state;
            this.timeout = timeout;
            this.rootScope = rootScope;
            this.getProperShellDelay();
            this.changeToProperShell();
        }
        DkindredController.prototype.getProperShell = function (state) {
            if (state.includes('dkworkshop-ws')) {
                console.log(this.stateCategory, 'get proper show');
                this.stateCategory = false;
            }
            else {
                this.stateCategory = true;
            }
        };
        DkindredController.prototype.getProperShellDelay = function () {
            var _this = this;
            this.timeout(function () { return _this.getProperShell(_this.state); }, 500);
        };
        DkindredController.prototype.changeToProperShell = function () {
            var _this = this;
            this.rootScope.$on('$stateChangeStart', function (event, toState) {
                console.log(toState.name.indexOf('-ws'));
                var n = toState.name.indexOf('-ws');
                if (n > 0) {
                    console.log(_this.stateCategory, 'get proper show  shange state');
                    _this.stateCategory = false;
                }
                else {
                    _this.stateCategory = true;
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
