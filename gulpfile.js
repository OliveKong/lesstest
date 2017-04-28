var gulp = require('gulp');

//获取gulp-less模块
var less = require('gulp-less');

//编译less
//在命令行输入 gulp less 启动此任务
gulp.task('less', function() {
	//1. 找到less文件
	gulp.src('style/less/styles.less') //这里要是写*.less则分别编译单个文件
		//2. 编译为 css
		.pipe(less())
		//3. 另存文件
		.pipe(gulp.dest("style/css"));
});

//在命令行使用gulp auto启动此任务
gulp.task('auto', function() {
	//监听文件修改，当文件被修改则执行less任务
	gulp.watch('style/less/**.less', ['less']);
});

//使用gulp.task('default')定义默认任务
//在命令行使用gulp启动less任务和auto任务
gulp.task('default', ['less', 'auto']);