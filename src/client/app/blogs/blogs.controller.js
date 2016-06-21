var dkindred;
(function (dkindred) {
    var blogs;
    (function (blogs) {
        'use strict';
        var BlogsController = (function () {
            function BlogsController(blogsService, $timeout, allBlogPosts, blogTitle, blogContent, blogCategory, blogImage, blogTags, blogDescription) {
                this.blogsService = blogsService;
                this.$timeout = $timeout;
                this.allBlogPosts = allBlogPosts;
                this.blogTitle = blogTitle;
                this.blogContent = blogContent;
                this.blogCategory = blogCategory;
                this.blogImage = blogImage;
                this.blogTags = blogTags;
                this.blogDescription = blogDescription;
                this.bindBlogPosts();
            }
            BlogsController.prototype.bindBlogPosts = function () {
                var vm = this;
                this.blogsService.getBlogPosts().then(function (object) {
                    console.log(object.data);
                    vm.allBlogPosts = object.data;
                });
            };
            BlogsController.$inject = ['blogsService', '$timeout'];
            return BlogsController;
        }());
        angular
            .module('dkindred.blogs')
            .controller('BlogsController', BlogsController);
    })(blogs = dkindred.blogs || (dkindred.blogs = {}));
})(dkindred || (dkindred = {}));
