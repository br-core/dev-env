Setup Environment
=======

1. Clone project from [Grunt](https://github.com/jwhu1024/Grunt_demo.git)
2. Install related package by typing `npm install`
3. Issue `grunt` in command prompt then it will starting to monitor your project.

Default behavior
--------------

1. For html file, browser will reload page automaticaaly if file have been changed.
2. For js file, jshint will check the syntax if file have been changed.
3. For css file, cssmin will minify your code automatically if file have been changed.

Default, reload page will listen on port 1111.
For example if you are modify index.html in this project,
You can instantly observe the status changes by connect to
`https://localhost:1111/index.html`.

However, you can also modify `gruntfile.js` to fit your requirement.
