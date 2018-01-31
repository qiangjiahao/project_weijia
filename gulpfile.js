//引入gulp
var gulp = require("gulp");
//引入sass
var sass = require("gulp-sass");

//添加copy-html任务,保存到指定目录
gulp.task("copy-html",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\project_weijia"));
});
//添加copy-imgs任务,保存到指定目录
gulp.task("copy-imgs",function(){
	gulp.src("imgs/*.{jpg,png}").pipe(gulp.dest("D:\\phpStudy\\WWW\\project_weijia\\imgs"));
});
//添加cpoy-css任务,保存到指定目录
gulp.task("copy-css",function(){
	gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\project_weijia\\css"));
});
//将转换成的js文件放到指定目录下
gulp.task("copy-js",function(){
	gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\project_weijia\\js"));
});
//将转换成的php文件放到指定目录下
gulp.task("copy-php",function(){
	gulp.src("php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\project_weijia\\php"));
});

//添加sass转换到css任务
gulp.task("copy-sass",function(){
	gulp.src("css/*.scss").pipe(sass()).pipe(gulp.dest("css"));
});

gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("imgs/*.{jpg,png}",["copy-imgs"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("css/*.scss",["copy-sass"]);
	gulp.watch("php/*.php",["copy-php"]);
});