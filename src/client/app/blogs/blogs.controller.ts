namespace dkindred.blogs {
    'use strict';

    class BlogsController {
        static $inject: Array<string> = ['blogsService', '$timeout'];


        constructor(public blogsService: any,
                    public $timeout: angular.ITimeoutService,
                    public allBlogPosts: Array<Object>,
                    public blogTitle: string,
                    public blogContent: string,
                    public blogCategory: string,
                    public blogImage: string,
                    public blogTags: Array<string>,
                    public blogDescription: string) {

            this.bindBlogPosts();

        }

        bindBlogPosts() {
            var vm = this;
            this.blogsService.getBlogPosts().then(function(object) {
                // console.log(object.data);
            vm.allBlogPosts = object.data;
            // angular.forEach(vm.allBlogPosts, function (blogObject, i) {
            //
            //
            // })
            // this.allBlogPosts = data;
            })
        }
    }

    angular
        .module('dkindred.blogs')
        .controller('BlogsController', BlogsController)
}
