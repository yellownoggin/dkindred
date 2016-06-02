// TODO:
// better naming convention more suitable or relevant to the task and maybe in a core module(suitable module)
// check the timeout approach using stack overflow first[code check]
// need a group to work with code checks code reviews

namespace dkindred {
    'use strict';

    class DkindredController {
        static $inject: Array<string> = ['$state', '$timeout', '$rootScope'];

        stateCategory: boolean;

        constructor(public state: angular.ui.IStateService, public timeout: angular.ITimeoutService, private rootScope: angular.IRootScopeService) {

            this.getProperShellDelay();
            this.changeToProperShell();
        }


        public getProperShell(state: angular.ui.IStateService) {
            if (state.includes('dkworkshop-ws')) {
                console.log(this.stateCategory, 'get proper show');
                this.stateCategory = false;

            } else {
                this.stateCategory = true;
            }
        }

        private getProperShellDelay() {
            this.timeout(() => this.getProperShell(this.state), 500);
        }

        private changeToProperShell() {
            this.rootScope.$on('$stateChangeStart',
                (event: any, toState: any) => {
                    console.log(toState.name.indexOf('-ws'));
                    var n: number = toState.name.indexOf('-ws');
                    if (n > 0) {
                        console.log(this.stateCategory, 'get proper show');
                        this.stateCategory = false;

                    } else {
                        this.stateCategory = true;
                    }
                })
        }
    }

    angular
        .module('dkindred')
        .controller('DkindredController', DkindredController);

}
