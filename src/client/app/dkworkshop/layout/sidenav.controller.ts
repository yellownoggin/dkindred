namespace dkworkshop.layout {
    'use strict';

    class SideNavWorkshop {

        static $inject = ['$mdMedia', '$mdSidenav'];
        sidenavOpenValue: boolean;
        sidenavLockedOpenValue: boolean;
        constructor(public $mdMedia: angular.material.IMedia, public $mdSidenav: angular.material.ISidenavService) {
            console.log($mdMedia('sm'));
            // this.unlockedSideNavigation();
            this.sidenavLockedOpenValue = $mdMedia('gt-sm');
            console.log(this.sidenavLockedOpenValue);
        }


        /**
         * toggleLeftMenu
         * Recipe for toggling locked open menu
         * fixes minor quirks when using md-is-open alone
         * 1 being: does not right justify or honor established layout   
         */

        toggleLeftMenu() {
            if (this.$mdMedia('gt-sm')) {
                this.sidenavOpenValue = false;
                this.sidenavLockedOpenValue = !this.sidenavLockedOpenValue;
                console.log(this.sidenavLockedOpenValue);
            } else {
                this.sidenavOpenValue = !this.sidenavOpenValue;
            }

        }

    }
    angular
        .module('dkworkshop.layout')
        .controller('SideNavWorkshopController', SideNavWorkshop)

}
