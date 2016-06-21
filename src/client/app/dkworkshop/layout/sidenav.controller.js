var dkworkshop;
(function (dkworkshop) {
    var layout;
    (function (layout) {
        'use strict';
        var SideNavWorkshop = (function () {
            function SideNavWorkshop($mdMedia, $mdSidenav) {
                this.$mdMedia = $mdMedia;
                this.$mdSidenav = $mdSidenav;
                this.sidenavLockedOpenValue = $mdMedia('gt-sm');
            }
            SideNavWorkshop.prototype.toggleLeftMenu = function () {
                if (this.$mdMedia('gt-sm')) {
                    this.sidenavOpenValue = false;
                    this.sidenavLockedOpenValue = !this.sidenavLockedOpenValue;
                    console.log(this.sidenavLockedOpenValue);
                }
                else {
                    this.sidenavOpenValue = !this.sidenavOpenValue;
                }
            };
            SideNavWorkshop.$inject = ['$mdMedia', '$mdSidenav'];
            return SideNavWorkshop;
        }());
        angular
            .module('dkworkshop.layout')
            .controller('SideNavWorkshopController', SideNavWorkshop);
    })(layout = dkworkshop.layout || (dkworkshop.layout = {}));
})(dkworkshop || (dkworkshop = {}));
