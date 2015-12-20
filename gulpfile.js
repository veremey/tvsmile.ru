'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    spritesmith  = require('gulp.spritesmith'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade'),
    uncss = require('gulp-uncss'),
    concat = require('gulp-concat'),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        jade: 'build/jade/',
        js: 'build/js/',
        jsLibs: 'build/js/partials',
        css: 'build/css',
        img: 'build/img/',
        svg: 'build/img/svg',
        icons: 'build/img/icons',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        jade: 'src/**/*.jade',
        js: 'src/js/**/*.js',
        css: 'src/css/*.*',
        sass: 'src/sass/screen.sass',
        img: 'src/img/**/*.*',
        svg: 'src/svg/*.svg',
        icons: 'src/img/icons/*.png',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        jade: 'src/jade/**/*.jade',
        js: 'src/js/**/*.js',
        css: 'src/css/*.*',
        sass: 'src/sass/**/*.*',
        img: 'src/img/**/*.*',
        svg: 'src/svg/*.svg',
        icons: 'src/img/icons/*.png',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};


//** dest paths **
// var dest = {
//     root : 'build',
//     html : 'build',
//     css  : 'build/css',
//     js   : 'build/js',
//     img  : 'build/img'
// };



var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 4070,
    logPrefix: "Veremey"
};

gulp.task('copycss', function() {
    gulp.src(path.src.css)
    .pipe(cssmin())
    .pipe(gulp.dest(path.build.css + 'css'));
})


gulp.task('webserver', function () {
    browserSync(config);
});

//webserver
// gulp.task('webserver', function() {
//     browserSync({
//         server: {
//             baseDir: dest.root,
//             // directory: true,
//             // index: 'index.html'
//         },
//         files: [dest.html + '/*.html', dest.css + '/*.css', dest.js + '/*.js'],
//         port: 3080,
//         notify: false,
//         ghostMode: false,
//         online: false,
//         tunnel: true,
//         open: true
//     });
// });


gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});


// gulp.task('css:build', function () {
//     gulp.src(path.src.css)
//         .pipe(plumber())
//         .pipe(rigger())
//         .pipe(cssmin())
//         .pipe(concat('commin.css'))
//         .pipe(gulp.dest(path.build.css))
//         .pipe(reload({stream: true}));
// });


//uncss

// gulp.task('uncss', function() {
//     return gulp.src(['src/css/style.css', 'src/css/baxazar.css', 'src/css/common.css'])
//         .pipe(uncss({
//             html: ['src/includes/header.html', 'src/includes/footer.html']
//         }))
//         .pipe(concat('all.css'))
//         .pipe(gulp.dest('build/cdc'));
// });

gulp.task('jade:build', function () {
    gulp.src(path.src.jade)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
            }))
      .pipe(gulp.dest(path.build.html))
      .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('sass:build', function () {
    gulp.src(path.src.sass)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['src/sass/'],
            outputStyle: 'compressed',
            sourceMap: true,
            errLogToConsole: true,
            indentedSyntax: true
        }))
        .pipe(prefixer({
            browsers: ['> 1%', 'last 3 versions', 'Opera 12.1', 'IE 9', 'IE 10'],
            cascade: false
        }))
        .pipe(cssmin({
            //https://www.npmjs.com/package/clean-css#how-to-set-compatibility-mode
            compatibility: 'ie7,' +
            '-units.ch,' +
            '-units.in,' +
            '-units.pc,' +
            '-units.pt,' +
            '-units.rem,' +
            '-units.vh,' +
            '-units.vm,' +
            '-units.vmax,' +
            '-units.vmin'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('sprite:build', function() {
    var spriteData =
        gulp.src(path.src.icons)
            .pipe(plumber())
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.sass',
                imgPath: '../img/sprite.png',//add
                cssFormat: 'sass',
                // algorithm: 'binary-tree', old
                cssTemplate: 'sass.template.mustache',
                cssVarMap: function(sprite) {
                    sprite.name = sprite.name
                }
            }));

    spriteData.img.pipe(gulp.dest('build/img/'));
    spriteData.css.pipe(gulp.dest('./src/sass/lib/'));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(plumber())
        // .pipe(imagemin({
        //     progressive: true,
        //     svgoPlugins: [{removeViewBox: false}],
        //     optimizationLevel: 7,
        //     use: [pngquant()],
        //     interlaced: true
        // }))
        .pipe(gulp.dest(path.build.img));
        // .pipe(reload({stream: true}));
});
gulp.task('svg:build', function () {
    gulp.src(path.src.svg)
        .pipe(plumber())
        .pipe(gulp.dest(path.build.svg));
        // .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(plumber())
        .pipe(gulp.dest(path.build.fonts))
});

// gulp.task('build', [
//     'html:build',
//     'jade:build',
//     // 'css:build',
//     'js:build',
//     'sass:build',
//     'sprite:build',
//     'fonts:build',
//     'image:build',
//     'svg:build'
// ]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
       gulp.start('html:build');
    });
    // watch([path.watch.css], function(event, cb) {
    //    gulp.start('css:build');
    // });
    watch([path.watch.jade], function(event, cb) {
       gulp.start('jade:build');
    });
    watch([path.watch.sass], function(event, cb) {
        gulp.start('sass:build');
    });
    watch([path.watch.icons], function(event, cb) {
        gulp.start('sprite:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.svg], function(event, cb) {
        gulp.start('svg:build');
    });

    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('default', ['build', 'webserver', 'watch', 'copycss'], function() {});

gulp.task('build', [
    'html:build',
    'jade:build',
    // 'css:build',
    'js:build',
    'sass:build',
    'sprite:build',
    'fonts:build',
    'image:build',
    'svg:build'
], function() {});