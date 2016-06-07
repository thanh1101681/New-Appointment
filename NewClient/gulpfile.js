var gulp = require('gulp');
var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');

gulp.task('desktop-default-grid', function(){
    gulp.src('themes/default/desktop/grid.styl')
        .pipe(stylus({
            use: [typographic(), nib()]
        }))
        .pipe(gulp.dest('./themes/default/desktop'));
});

gulp.task('desktop-default-button', function(){
    gulp.src('themes/default/desktop/button.styl')
        .pipe(stylus({
            use: [typographic(), nib()]
        }))
        .pipe(gulp.dest('./themes/default/desktop'));
});


gulp.task('watch:desktop-default', function(){
    gulp.watch('themes/default/desktop/*.styl', ['desktop-default-grid','desktop-default-button']);
});