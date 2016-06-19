var gulp = require('gulp');
var configb = require('./gulp.config-blog')();
var $ = require('gulp-load-plugins')({
    lazy: true
});
var fs = require('fs');
var moment = require('moment');

gulp.task('build-blog', ['build-post'], function() {
    return gulp
        .src(configb.allPosts + '*.json')
        .pipe($.concat('all-posts.json'))
        .pipe($.insert.wrap('[', ']'))
        // .pipe($.replace('},]', '}]'))
        .pipe($.replace(/},(|\n)]/, '}]'))
        .pipe(gulp.dest(configb.builtBlog));
});


gulp.task('build-post', function() {
    var fileContent = fs.readFileSync(configb.currentPost + 'blog-metadata.txt', 'utf8');
    var date = moment();
    var today = date.format('YYYY-MM-DD-HH-mm-ss');
    log(date.format('YYYY-MM-DD-HH-mm-ss'));
    //expressed according to ISO 8601(International Organization For Standardization)
    log(configb.allPosts);
    return gulp
        .src(configb.currentPost + 'blog.html')
        .pipe($.rename(today + '.json'))
        .pipe($.cleanhtml())
        .pipe($.replace('"', '\\"'))
        .pipe($.insert.prepend('"content": "'))
        .pipe($.insert.prepend('"timestamp": "' + today + '",\n'))
        .pipe($.insert.append('"'))
        .pipe($.insert.append('\n')) //at a line break for next prepend task
        .pipe($.insert.prepend(fileContent))
        .pipe($.insert.wrap('{\n', '},'))
        .pipe(gulp.dest(configb.allPosts));
});

/**
 * Logs things to gulp processing
 */

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
