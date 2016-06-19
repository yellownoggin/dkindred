// TODO:
// better naming convention more suitable or relevant to the task and maybe in a core module(suitable module)
// check the timeout approach using stack overflow first[code check]
// need a group to work with code checks code reviews

namespace dkindred {
    'use strict';

    class DkindredController {
        static $inject: Array<string> = ['$state', '$timeout', '$rootScope'];

        useDKindredShell: boolean;
        usePageTemplatesShell: boolean;
        useWorkshopShell: boolean;
        useBlogsShell: boolean;

        constructor(public state: angular.ui.IStateService, public timeout: angular.ITimeoutService, private rootScope: angular.IRootScopeService) {


            // TODO: t this alpine notebehavior this would not read the url arguments go back to the beginning. Why did I originally put this in I thought that if you put the link in the browser it would not alter the proper shell directive
            // this.getProperShellDelay();
            this.changeToProperShell();
        }


        public getProperShell(state: angular.ui.IStateService) {
            if (state.includes('dkworkshop-ws')) {
                // console.log(this.stateCategory, 'get proper show');
                console.log(this.usePageTemplatesShell, 'templates');
                console.log(this.useWorkshopShell, 'workshop');
                console.log(this.useDKindredShell, 'd kindred');

                this.useDKindredShell = false;
                this.usePageTemplatesShell = true;
                this.useWorkshopShell = true;

            } else if (state.includes('dkpagetemplates')) {
                console.log(this.usePageTemplatesShell, 'templates');
                console.log(this.useWorkshopShell, 'workshop');
                console.log(this.useDKindredShell, 'd kindred');
                this.useWorkshopShell = false;
                this.useDKindredShell = false;
                this.usePageTemplatesShell = true;

            } else {
                console.log(this.usePageTemplatesShell, 'templates');
                console.log(this.useWorkshopShell, 'workshop');
                console.log(this.useDKindredShell, 'd kindred');

                this.usePageTemplatesShell = false;
                this.useWorkshopShell = false;
                this.useDKindredShell = true;
            }
        }
        // TODO: Refreshing not working
        //  this may be the source or area to look at for the issue of refreshing going back to original state issue =>
        // Reason: there is a slight delay before going back to the original state(home page)
        // Conclusion: not reading state from the url
        // may also just be a you are router/method I can add
        private getProperShellDelay() {
            this.timeout(() => this.getProperShell(this.state), 500);
        }

        private changeToProperShell() {
            this.rootScope.$on('$stateChangeStart',
                (event: any, toState: any) => {
                    console.log(toState.name, 'state name');
                    var n: number = toState.name.indexOf('-ws');
                    var i: number = toState.name.indexOf('pagetemplates');
                    var j: number = toState.name.indexOf('-blogs');

                    if (n > 0) {
                        // console.log(this.stateCategory, 'get proper show  shange state');
                        this.useDKindredShell = false;
                        this.usePageTemplatesShell = false;
                        this.useBlogsShell = false;
                        this.useWorkshopShell = true;

                    } else if (i > 0) {
                        this.useDKindredShell = false;
                        this.useWorkshopShell = false;
                        this.useBlogsShell = false;
                        this.usePageTemplatesShell = true;

                    } else if (j > 0) {
                        console.log('blogs shell');
                        this.useDKindredShell = false;
                        this.useWorkshopShell = false;
                        this.usePageTemplatesShell = false;
                        this.useBlogsShell = true;

                    } else {
                        console.log('d kindred shell');
                        this.useWorkshopShell = false;
                        this.usePageTemplatesShell = false;
                        this.useBlogsShell = false;
                        this.useDKindredShell = true;
                    }
                })
        }
    }

    angular
        .module('dkindred')
        .controller('DkindredController', DkindredController);

}
