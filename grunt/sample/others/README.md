Setup Environment
=======

1. Install grunt-cli globally `npm install -g grunt-cli`
2. Clone project from [dev-env](https://github.com/br-core/dev-env.git)
3. Change to the project's root directory. `/grunt`
3. Install project dependencies with `npm install`
4. Run Grunt with `grunt`

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
