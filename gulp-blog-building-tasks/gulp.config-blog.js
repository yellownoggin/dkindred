module.exports = function() {
    'use strict';

    var client = './src/client/';
    var clientApp = client + 'app/';
    var blogStaging = clientApp + 'blogs/blog-staging/';
    var blogs = clientApp + 'blogs/';

    var config = {
        allPosts: blogStaging + 'all-posts/',
        builtBlog: blogs + 'built-blog',
        currentPost: blogStaging + 'current-post/'
    };

    return config;
};
