var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var clean = require('gulp-clean')
var uglify = require('gulp-uglify')
var usemin = require('gulp-usemin')
var cssmin = require('gulp-cssmin')
var browserSync = require('browser-sync')
var autoprefixer = require('gulp-autoprefixer')
var jshint = require('gulp-jshint')
var jshintStylish = require('jshint-stylish')
var csslint = require('gulp-csslint')
var sass = require('gulp-sass')
var babel  =require('gulp-babel')

var autoprefixerOptions = {
    browsers: ['last 2 versions'],
    cascade: false
};

gulp.task('default', ['copy'], function () {
    //todas vão ser execultadas ao mesmo tempo, já que não tem dependencia entre elas
    gulp.start('build-img', 'usemin')
})


//tarefa para copiar arquivos de src para dist
gulp.task('copy', ['clean'], function () {//[] a dependencia da tarefa
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'))
})

//para remover a pasta dist
gulp.task('clean', function () {
    //como todas as tarefas são executadas ao mesmo tempo, para sinalizar que essa tarefa finalizou tenho que retornar 
    //ai sim minha task com dependencia pode executar
    return gulp.src('dist')
        .pipe(clean())//clean() vai apagar a pasta dist
})

//criando uma tarefa
gulp.task('build-img', function () {
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})


gulp.task('usemin', function () {
    gulp.src('dist/**/*.html')
        .pipe(usemin({
            js: [uglify],
            css: [autoprefixer, cssmin]
        }))
        .pipe(gulp.dest('dist'))
})

//ele cria um pequeno servidor
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/**/*').on('change', browserSync.reload);

    gulp.watch('src/js/*.js').on('change',function (event) {
        gulp.src('src/js/app.js')
            .pipe(babel({presets:['es2015']}))
            .pipe(gulp.dest('src/js/dist'))
    });

    gulp.watch('src/css/**/*.css').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.reporter());
    });  

    gulp.watch('src/sass/main.scss').on('change', function (event) {
        gulp.src(event.path)
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(gulp.dest('src/css'));
    });
});