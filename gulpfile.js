const gulp = require('gulp');
const stream = require('event-stream');
const fs = require('fs');

gulp.task('extract', () => {
  return gulp.src(['files/sample1.html', 'files/sample2.html'])
    .pipe(stream.map((file) => {
      fs.readFile(file.path, 'utf-8', (err, data) => {
        if(err) throw err;
        const result = data.match(/<h1>(.+)<\/h1>/);
        if(result) {
          console.log(`${file.path}: [match] -> ${result[1]}`);
        } else {
          console.log(`${file.path}: [do not match]`);
        }
      });
    }));
});
