var dkindred;
(function (dkindred) {
    var blogs;
    (function (blogs) {
        'use strict';
        var BlogsController = (function () {
            function BlogsController(blogsService, $timeout, $state, $rootScope, $stateParams, allBlogPosts, fullStackPosts, kindredPosts, filteredPosts, blogTitle, blogContent, blogCategory, blogImage, blogTags, blogDescription, allPostsTopActive, categoryId) {
                this.blogsService = blogsService;
                this.$timeout = $timeout;
                this.$state = $state;
                this.$rootScope = $rootScope;
                this.$stateParams = $stateParams;
                this.allBlogPosts = allBlogPosts;
                this.fullStackPosts = fullStackPosts;
                this.kindredPosts = kindredPosts;
                this.filteredPosts = filteredPosts;
                this.blogTitle = blogTitle;
                this.blogContent = blogContent;
                this.blogCategory = blogCategory;
                this.blogImage = blogImage;
                this.blogTags = blogTags;
                this.blogDescription = blogDescription;
                this.allPostsTopActive = allPostsTopActive;
                this.categoryId = categoryId;
                var vm = this;
                this.allPostsTopActive = true;
                this.bindBlogPosts();
                this.showHideAllPostsTop();
                this.bindCategoryPosts();
                this.bindCategoryPostsRouteChange();
            }
            BlogsController.prototype.bindBlogPosts = function () {
                var vm = this;
                this.blogsService.getBlogPosts().then(function (object) {
                    vm.allBlogPosts = object.data;
                    vm.fullStackPosts = vm.allBlogPosts.filter(function (element) {
                        if (element.category === 'full-stack') {
                            return element;
                        }
                    });
                    vm.kindredPosts = vm.allBlogPosts.filter(function (element) {
                        if (element.category === 'kindred') {
                            return element;
                        }
                    });
                });
            };
            BlogsController.prototype.bindCategoryPosts = function () {
                var vm = this;
                this.$timeout(function () {
                    var catId = vm.$stateParams.categoryId;
                    console.log(vm.$stateParams.categoryId, 'state programs');
                    vm.getCategoryPosts(catId);
                }, 10);
            };
            BlogsController.prototype.bindCategoryPostsRouteChange = function () {
                var vm = this;
                vm.$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                    var categoryId = toParams.categoryId;
                    vm.blogsService.getBlogPosts()
                        .then(function (response) {
                        if (categoryId === 'full-stack') {
                            console.log('full stack true');
                            vm.filteredPosts = response.data.filter(function (element) {
                                if (element.category === 'full-stack') {
                                    return element;
                                }
                            });
                        }
                        else if (categoryId === 'digi-kindred') {
                            console.log('kindred true');
                            vm.filteredPosts = response.data.filter(function (element) {
                                if (element.category === 'digi-kindred') {
                                    return element;
                                }
                            });
                        }
                        else {
                            console.log('all posts true');
                            vm.filteredPosts = response.data;
                        }
                    });
                });
            };
            BlogsController.prototype.getCategoryPosts = function (catId) {
                var vm = this;
                return this.blogsService.getBlogPosts()
                    .then(function (response) {
                    if (catId === 'full-stack') {
                        vm.filteredPosts = response.data.filter(function (element) {
                            if (element.category === 'full-stack') {
                                return element;
                            }
                        });
                    }
                    else if (catId === 'digi-kindred') {
                        vm.filteredPosts = response.data.filter(function (element) {
                            if (element.category === 'digi-kindred') {
                                return element;
                            }
                        });
                    }
                    else {
                        vm.filteredPosts = response.data;
                    }
                });
            };
            BlogsController.prototype.showHideAllPostsTop = function () {
                var vm = this;
                vm.$timeout(function () {
                    if (vm.$state.current.name === 'dkindred-blogs.category') {
                        vm.allPostsTopActive = false;
                    }
                }, 100);
                vm.$rootScope.$on('$stateChangeStart', function (event, toState) {
                    var state = toState;
                    if (state.name === 'dkindred-blogs.category') {
                        vm.allPostsTopActive = false;
                    }
                    else {
                        vm.allPostsTopActive = true;
                    }
                });
            };
            BlogsController.$inject = ['blogsService', '$timeout', '$state', '$rootScope', '$stateParams'];
            return BlogsController;
        }());
        angular
            .module('dkindred.blogs')
            .controller('BlogsController', BlogsController);
    })(blogs = dkindred.blogs || (dkindred.blogs = {}));
})(dkindred || (dkindred = {}));
