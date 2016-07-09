namespace dkindred.blogs {
    'use strict';
// TODO:  documentation
    class BlogsController {
        static $inject: Array<string> = ['blogsService', '$timeout', '$state', '$rootScope', '$stateParams'];


        constructor(public blogsService: any,
            public $timeout: angular.ITimeoutService,
            public $state: angular.ui.IStateService,
            public $rootScope: angular.IRootScopeService,
            public $stateParams: angular.ui.IStateParamsService,
            public allBlogPosts: Array<Object>,
            public fullStackPosts: Array<Object>,
            public kindredPosts: Array<Object>,
            public filteredPosts: Array<Object>,
            public blogTitle: string,
            public blogContent: string,
            public blogCategory: string,
            public blogImage: string,
            public blogTags: Array<string>,
            public blogDescription: string,
            public allPostsTopActive: boolean,
            public categoryId: string
        ) {
            var vm = this;
            this.allPostsTopActive = true;
            this.bindBlogPosts();
            this.showHideAllPostsTop();
            this.bindCategoryPosts();
            this.bindCategoryPostsRouteChange();



        }

        bindBlogPosts() {
            var vm = this;
            this.blogsService.getBlogPosts().then(function(object) {
                // get & store all posts
                vm.allBlogPosts = object.data;
                // get & store full stack posts
                vm.fullStackPosts = vm.allBlogPosts.filter(function(element) {

                    if (element.category === 'full-stack') {
                        return element;
                    }
                })

                // get & store kindred posts
                vm.kindredPosts = vm.allBlogPosts.filter(function(element) {

                    if (element.category === 'kindred') {
                        return element;
                    }
                })

            })
        }

        bindCategoryPosts() {
            var vm = this;
            this.$timeout(function() {
                var catId = vm.$stateParams.categoryId;
                console.log(vm.$stateParams.categoryId, 'state programs');
                // console.log(catId, 'this is where the category ideas');
                vm.getCategoryPosts(catId);
            }, 10);
        }

        bindCategoryPostsRouteChange() {
            var vm = this;

            vm.$rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
                var categoryId = toParams.categoryId;

                vm.blogsService.getBlogPosts()
                    .then(function(response) {

                        if (categoryId === 'full-stack') {
                            console.log('full stack true')
                            vm.filteredPosts = response.data.filter(function(element) {
                                if (element.category === 'full-stack') {
                                    return element;
                                }
                            });
                        } else if (categoryId === 'digi-kindred') {
                            console.log('kindred true');
                            vm.filteredPosts = response.data.filter(function(element) {
                                if (element.category === 'digi-kindred') {
                                    return element;
                                }
                            });
                        } else {
                            console.log('all posts true');
                            vm.filteredPosts = response.data;
                        }

                    });

            });

        }


        getCategoryPosts(catId) {
            var vm = this;
            return this.blogsService.getBlogPosts()
                .then(function(response) {

                    if (catId === 'full-stack') {
                        vm.filteredPosts = response.data.filter(function(element) {
                            if (element.category === 'full-stack') {
                                return element;
                            }
                        });
                    } else if (catId === 'digi-kindred') {
                        vm.filteredPosts = response.data.filter(function(element) {
                            if (element.category === 'digi-kindred') {
                                return element;
                            }
                        });
                    } else {
                        vm.filteredPosts = response.data;
                    }
                });

        }

        // TODO: : what is a the current error 4 working with console.log
        showHideAllPostsTop() {
            var vm = this;
            vm.$timeout(function() {
                if (vm.$state.current.name === 'dkindred-blogs.category') {
                    vm.allPostsTopActive = false;
                }
            }, 100);


            vm.$rootScope.$on('$stateChangeStart', function(event, toState) {
                var state = toState;
                if (state.name === 'dkindred-blogs.category') {
                    vm.allPostsTopActive = false;
                } else {
                    vm.allPostsTopActive = true;
                }
            });

        }
    }


    angular
        .module('dkindred.blogs')
        .controller('BlogsController', BlogsController)
}
